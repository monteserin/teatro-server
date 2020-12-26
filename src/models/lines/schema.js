import { db } from '../../application/database';
const { DataTypes } = require('sequelize');

export default db.define('line', {
	txt: DataTypes.STRING,
	playId: DataTypes.INTEGER
});
