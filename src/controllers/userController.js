const User = require('../models/user')

class UserController {
  async create(req, res) {
    const createUser = await User.create({
      email: 'debiwo7656@gmail.com',
      password: '12318212312',
    })
    res.json(createUser)
  }
}
module.exports = new UserController()
