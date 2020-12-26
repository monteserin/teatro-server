import { db } from '../../application/database';
const { DataTypes } = require('sequelize');

const Play = db.define('play', {
	name: DataTypes.STRING,
	userId: DataTypes.INTEGER
});

export default Play;