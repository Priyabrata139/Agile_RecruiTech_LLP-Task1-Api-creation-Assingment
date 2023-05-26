'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    type: {
      type:DataTypes.STRING,
      
    },
    uid: {
      type:DataTypes.INTEGER,
      allowNull:false,
      unique:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    tagline: DataTypes.STRING,
    schedual: {
      type:DataTypes.DATE,
      allowNull:false
    },
    description: DataTypes.STRING,
    files: DataTypes.STRING,
    moderator: DataTypes.INTEGER,
    category: {
      type:DataTypes.ENUM,
      values:['Wedding','Festuval']
    },
    sub_catagory: DataTypes.STRING,
    rigor_rank: DataTypes.INTEGER,
    attendees: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};