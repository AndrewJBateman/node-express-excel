const express = require("express");
const { google } = require("googleapis");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("index");
});

app.post("/", async (req, res) => {
	const { request, name } = req.body;

	const auth = new google.auth.GoogleAuth({
		keyFile: "secrets.json",
		scopes: "https://www.googleapis.com/auth/spreadsheets",
	});

	// Create client auth instance
	const client = await auth.getClient();

	//Google Sheets API instance
	const googleSheets = google.sheets({ version: "v4", auth: client });

	const spreadsheetId = "1l3Pla3OBN86JKnYlJtgYDVQrPZ0nDaBxxfJOmlWHAhE";

	// Get spreadsheet meta data
	const metaData = await googleSheets.spreadsheets.get({
		auth,
		spreadsheetId,
	});
  console.log('meta data: ', metaData);

	// Read rows from spreadsheet
	const getRows = await googleSheets.spreadsheets.values.get({
		auth,
		spreadsheetId,
		range: "TaskSheet!A:A",
	});
  console.log('rows: ', getRows);

	// Write row(s) to spreadsheet
	await googleSheets.spreadsheets.values.append({
		auth,
		spreadsheetId,
		range: "TaskSheet!A:B",
		valueInputOption: "USER_ENTERED",
		resource: {
			values: [[request, name]],
		},
	});

	res.send("Data received");
});

const port = 5000;
app.listen(port, (req, res) => console.log("connected on port ", port));
