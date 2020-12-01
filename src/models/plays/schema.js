import { db } from '../../database';
const { DataTypes } = require('sequelize');

const Play = db.define('play', {
	name: DataTypes.STRING,
	userId: DataTypes.INTEGER
});

export default Play;