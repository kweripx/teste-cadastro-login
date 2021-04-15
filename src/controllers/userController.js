const User = require('../models/user')

class UserController {
  //POST
  async create(req, res) {
    //Pegando erros que o código pode gerar
    const checkUser = await User.findOne({ where: { email: req.body.email } })
    if (checkUser) {
      return res.status(400).json({ error: 'email already exists' })
    }
    const email = await User.create(req.body)
    return res.json(email)
  }

  //GET
  async index(req, res) {
    const checkUsers = await User.findAll()
    return res.json(checkUsers)
  }
  //GET A SINGLE USER
  async show(req, res) {
    const id = req.params.id
    const checkUsers = await User.findByPk(id)
    return res.json(checkUsers)
  }
  //PUT/ EDIT A USER
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: 'missing id' })
      }
      const user = await User.findByPk(req.params.id)

      if (!user) {
        return res.status(400).json({ errors: 'missing user' })
      }
      const updatedUser = await User.update(req.body, { where: { id: user.id } })
      return res.json(updatedUser)
    } catch (e) {
      return res.json(null)
    }
  }

  //DELETE USER
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: 'missing id' })
      }
      const user = await User.findByPk(req.params.id)

      if (!user) {
        return res.status(400).json({ errors: 'missing user' })
      }
      await User.destroy({ where: { id: user.id } })
      return res.json(user)
    } catch (e) {
      return res.json(null)
    }
  }
}
module.exports = new UserController()
