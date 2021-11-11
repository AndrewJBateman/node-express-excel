require("dotenv").config();

const express = require("express");
const { google } = require("googleapis");
const router = express.Router();

const spreadsheetId = process.env.SPREADSHEET_ID;

router.get("/", (req, res, next) => {
	res.render("index", { title: "Tasks" });
});

router.post("/", async (req, res, next) => {
	const { task, name } = req.body;

	const auth = new google.auth.GoogleAuth({
		keyFile: "secrets.json",
		scopes: "https://www.googleapis.com/auth/spreadsheets",
	});

	// Create instance of authenticated client
	const client = await auth.getClient();

	//Google Sheets API instance,
	const googleSheets = google.sheets({ version: "v4", auth: client });

	// Get spreadsheet meta data
	const metaData = await googleSheets.spreadsheets.get({
		auth,
		spreadsheetId,
	});
	console.log("meta data: ", metaData);

	// Read existing rows from spreadsheet
	const getRows = await googleSheets.spreadsheets.values.get({
		auth,
		spreadsheetId,
		range: "TaskSheet!A:A",
	});

	// Write row data values to spreadsheet
	await googleSheets.spreadsheets.values.append({
		auth,
		spreadsheetId,
		range: "TaskSheet!A:B",
		valueInputOption: "USER_ENTERED",
		resource: {
			values: [[task, name]],
		},
	});

	// Add timer here then redirect to home
	res.send("Data received").redirect("/");
});

module.exports = router;
