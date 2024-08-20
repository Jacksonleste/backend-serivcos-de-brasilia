import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "",
	database: "dflink",
	entities: ["src/entities/*.ts"],
	synchronize: true,
	logging: true,
});
