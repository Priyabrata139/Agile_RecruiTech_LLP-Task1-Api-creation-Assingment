'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      uid: {
        type: Sequelize.INTEGER,
        unique:true,
        allowNull:false
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      tagline: {
        type: Sequelize.STRING
      },
      schedual: {
        type: Sequelize.DATE,
        allowNull:false
      },
      description: {
        type: Sequelize.STRING
      },
      files: {
        type: Sequelize.STRING
      },
      moderator: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.ENUM,
        values:['Wedding','Festival']
      },
      sub_catagory: {
        type: Sequelize.STRING
      },
      rigor_rank: {
        type: Sequelize.INTEGER
      },
      attendees: {
        type: Sequelize.STRING
      },
      createdAt:{
        type:Sequelize.DATE
      },
      updatedAt:{
      type:Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};