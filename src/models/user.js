const { Sequelize, Model } = require('sequelize')
const bcrypt = require('bcryptjs')

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: {
            msg: 'Email already exists',
          },
          //Validating email trough sequelize validator
          validate: {
            notEmpty: true,
            isEmail: true,
          },
        },
        password: {
          type: Sequelize.VIRTUAL,
          allowNull: false,
          //Validating password trough sequelize validator
          validate: {
            len: {
              args: [8, 20],
            },
          },
        },
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

  //Bcrypt method to check password through password hash
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash)
  }
}
module.exports = Users
