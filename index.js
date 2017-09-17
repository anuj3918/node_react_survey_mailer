const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", () => {
	res.send({ Hi: "There" });
});

app.listen(PORT, () => {
	console.log("server running on port : " + PORT);
});
