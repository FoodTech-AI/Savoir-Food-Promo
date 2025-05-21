const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../waitlist/emails.db');
const db = new sqlite3.Database(dbPath);

module.exports = async function (context, req) {
  const { email, token } = req.query;

  if (!email || !token) {
    context.res = { status: 400, body: "Paramètres manquants." };
    return;
  }

  db.get("SELECT * FROM waitlist WHERE email = ? AND token = ?", [email, token], (err, row) => {
    if (err || !row) {
      context.res = { status: 400, body: "Lien invalide ou expiré." };
    } else {
      db.run("UPDATE waitlist SET verified = 1 WHERE email = ?", [email]);
      context.res = { status: 200, body: "Email vérifié avec succès." };
    }
  });
};