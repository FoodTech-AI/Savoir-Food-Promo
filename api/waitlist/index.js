const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const crypto = require('crypto');

const dbPath = path.resolve(__dirname, 'emails.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS waitlist (
    email TEXT UNIQUE,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    token TEXT,
    verified INTEGER DEFAULT 0
  )`);
});

module.exports = async function (context, req) {
  const email = req.body?.email;
  if (!email || !email.includes('@')) {
    context.res = {
      status: 400,
      body: { message: "Email invalide." }
    };
    return;
  }

  const token = crypto.randomBytes(16).toString('hex');

  db.run("INSERT INTO waitlist (email, token) VALUES (?, ?)", [email, token], function(err) {
    if (err && err.message.includes('UNIQUE')) {
      context.res = {
        status: 409,
        body: { message: "Email déjà inscrit." }
      };
      return;
    }

    if (err) {
      context.log(err.message);
      context.res = {
        status: 500,
        body: { message: "Erreur serveur." }
      };
    } else {
      context.res = {
        status: 200,
        body: {
          message: "Email reçu. Vérification envoyée.",
          token: token
        }
      };
    }
  });
};