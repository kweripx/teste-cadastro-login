const Sequelize = require('sequelize')
const { Model } = require('sequelize')
const bcrypt = require('bcryptjs')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          //Validate email using sequelize validator
          validate: {
            isEmail: {
              message: 'invalid email',
            },
          },
        },
        password_hash: Sequelize.STRING,
        //Password validation using validator to
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [10, 20],
              message: 'password must have 10 or 20 characters',
            },
          },
        },
      },
      {
        sequelize,
      }
    )
    //Using Bcrypt to transform password to a password hash
    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcrypt.hash(user.password, 10)
    })
  }
}
module.exports = User
