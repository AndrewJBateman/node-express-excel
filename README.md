# :zap: Node Express Excel

* Node.js + Express with ejs frontend connects to a Google excel sheet 'backend'
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/node-express-excel?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/node-express-excel?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/node-express-excel?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/node-express-excel?style=plastic)

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* ejs partials used to create user interface with responsive navigation and task input form.
* Task entered by user in ejs frontend is sent via Node.js-Express to Google Docs Sheet.

## :camera: Screenshots

![Image of tasks](./imgs/image.png)

## :signal_strength: Technologies

* [Node.js v14](https://nodejs.org/) Javascript runtime using the [Chrome V8 engine](https://v8.dev/)
* [Express v4](https://www.npmjs.com/package/express) web framework for node
* [Google APIs Node.js Client npm module v88](https://www.npmjs.com/package/googleapis) client library for using Google APIs.
* [Google API Console](https://console.cloud.google.com)
* [ejs v3](https://ejs.co/) embedded javascript templates
* [nodemon v2](https://www.npmjs.com/package/nodemon) to automatically restart the node app.
* [Boootstrap v5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) CDN for styling components etc.

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Create `secrets.json` / add GCP project credentials as per `secrets.example.json`. This is a JSON file that is downloaded from the Google project
* Create `.env` in root directory & add Google spreadsheet Id as per `.env.example.js`
* `npm run dev` runs app in the development mode with auto-restart. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## :wrench: Testing

* N/A

## :computer: Code Examples

* tba

```javascript

```

## :cool: Features - Frontend

* Connecting to a GCP Docs Excel sheet using Node.js-Express and a simple HTML template

## :clipboard: Status, Testing & To-Do List

* Status: Working but incomplete
* To-Do: Add partials: nav, table, add task page. Display excel task list on home page.

## :clap: Inspiration

* [ejs documentation](https://ejs.co/#docs)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com