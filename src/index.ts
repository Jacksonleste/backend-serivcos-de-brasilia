import express, { Request, Response } from "express";
import app from "./app";
import { myDataSource } from "../app-data-source";

myDataSource
	.initialize()
	.then(() => {
		console.log("Database connection successful");
	})
	.catch((error) => console.log(error));

app.use(express.json()); // Para interpretar JSON

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
