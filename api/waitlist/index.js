module.exports = async function (context, req) {
  const email = req.body?.email;
  if (!email || !email.includes('@')) {
    context.res = {
      status: 400,
      body: { message: "Email invalide." }
    };
    return;
  }

  context.res = {
    status: 200,
    body: { message: "Email reçu. Vérification envoyée." }
  };
};