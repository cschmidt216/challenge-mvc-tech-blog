const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');

class Comments extends Model {}

Comments.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'post',
      key: 'id'
    }
  },
  comment_text: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  }
}, {
  sequelize,
  modelName: 'comments',
  tableName: 'comments',
  underscored: true
});

module.exports = Comments;