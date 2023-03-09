const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      if (users.find((o) => o.username === username)) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].username === username && bcrypt.compareSync(password, users[i].hash)) {
            let userReturn = {...users[i]}
            delete userReturn.hash;
            console.log(userReturn)
            return res.status(200).send(userReturn)
          } 
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)

        let { username, password, firstName, lastName, email } = req.body
        const salt = bcrypt.genSaltSync(5)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = {
          username,
          firstName, 
          lastName,
          email,
          hash
        }

        console.log(newUser);

        users.push(newUser);
        res.status(200).send(req.body)
    }
}