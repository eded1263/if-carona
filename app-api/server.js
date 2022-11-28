const app = require("./app.js");
const db = require("./src/database/models/index.js");
require("dotenv").config();

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
try {
	db.sequelize.sync();
} catch (e) {
	console.log(e.message);
}
