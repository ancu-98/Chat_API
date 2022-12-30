const { DataTypes } = require('sequelize');

const db = require('../utils/database');
const Users = require('./users.models');

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 30]
        }
    },
    image_url: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users,
            Key: 'id'
        }
    }
});

module.exports = Conversations;