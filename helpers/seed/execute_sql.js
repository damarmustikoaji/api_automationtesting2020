const { createConnection } = require('mysql');
require('dotenv').config();

const connectionParams = {
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE
};
const execQueryReport = (sql) => {
	const conn = createConnection(connectionParams);
	conn.connect();
	new Promise((resolve, reject) => {
		conn.query(sql, (error, result) => {
			if (error) reject(error);
			conn.end();
			resolve(result);
		});
	});
};

const connectDb = () => {
	const conn = createConnection(connectionParams);

	return new Promise((resolve, reject) => {
		conn.connect((err) => {
			if (err) reject(err);

			resolve(conn);
		});
	});
};

const executeSql = (conn, sql) =>
	new Promise((resolve, reject) => {
		conn.query(sql, (error, result) => {
			if (error) reject(error);

			resolve(result);
		});
	});

const closeDb = (conn) => conn.end();

module.exports = {
	connectDb,
	executeSql,
	closeDb,
	execQueryReport
};