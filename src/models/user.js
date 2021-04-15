const Sequelize = require('sequelize')
const { Model } = require('sequelize')
const bcrypt = require('bcryptjs')

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
    // Using Bcrypt to transform password to a password hash before saving user on bd
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10)
      }
    })
    return this
  }
}
module.exports = Users
