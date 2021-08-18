const Sequelize = require('sequelize');
const sequelizeConfig = require('../config/sqlConfig');
 module.exports = (Sequelize,DataTypes) => {
  var  Model = Sequelize.define('Users', {
      Id: {
      type: DataTypes.INTEGER,
            allowNull: false,
            unique:true,
            primaryKey: true,
            autoIncrement: true
      },
      Name: {
            type: DataTypes.STRING,
      },
      Email	: {
            type: DataTypes.STRING,
            },
      Phone_no: {
              type: DataTypes.STRING,
              }, 
      Address: {
              type: DataTypes.STRING,
              }, 
      Profile_photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },   
    },{
      freezeTableName: true,
      timestamps: false,
      tableName: 'users'
    });
  return Model;  
 } 
 