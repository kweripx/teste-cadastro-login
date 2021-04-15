const User = require('../models/user')

class loginController {
  //POST
  async create(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    //Check if user infos are correct
    if (!user) {
      return res.status(401).json({ error: 'user not found' })
    }
    //Using bcrypt method check if the password is correct
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'wrong password' })
    }
    return res.json({
      user: {
        email,
        password,
      },
    })
  }
}
module.exports = new loginController()
