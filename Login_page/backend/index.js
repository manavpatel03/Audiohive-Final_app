import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // without this line, process.env on line 22 will be undefined, thus you won't be able to read the .env file
const app = express();
app.use(express.json());
app.use(cors());

app.get("/hey", (req, res) => {
	return res.status(200).send("hi");
});

app.get("/getData", (req, res) => {
	const data = [
		{ city: "Mumbai", temperature: 30 },
		{ city: "Delhi", temperature: 25 },
	];
	return res.status(200).json(data);
});

const port = process.env.PORT || 5001;
// in the .env file, we used PORT = 5000, but in case that variable is undefined in the .env file, use port 5001

app.listen(port, () => console.log(`SERVER: ${port}`));
// just a formality, print SERVER: port when server starts