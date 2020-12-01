import { db } from '../../database';
const { DataTypes } = require('sequelize');

const User = db.define('user', {
	password: DataTypes.STRING,
	username: DataTypes.STRING,
	googleId: DataTypes.STRING,
});

export default User;