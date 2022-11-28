const app = require("./app.js");
const db = require("./src/database/models/index.js");
require("dotenv").config();

const port = process.env.SERVER_PORT || 3001;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
