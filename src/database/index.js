const Sequelize = require('sequelize')
const databaseConfig = require('../config/database')
const user = require('../models/user')

const models = [user]

const connections = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connections))
