const express = require("express");
const connectDb = require("./config/db");

const app = express();

//connect database
connectDb();

//Initial Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Api Running"));

//Define routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/user"));
app.use("/api/routes", require("./routes/api/routes"));
app.use("/api/stations", require("./routes/api/stations"));
app.use("/api/bus", require("./routes/api/bus"));
app.use("/api/drivers", require("./routes/api/driver"));

const PORT = process.env.PORT || 50031;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
