let User = require('../model/user');

// Récupérer tous les assignments (GET)
function Login(req, res){
    const { username, password } = req.body;
    User.findOne({ username, password }, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!user) {
        res.status(404).send('Utilisateur non trouvé');
      } else {
        res.send(User);
      }
    });
}

module.exports = { Login };
