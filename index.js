const express  = require("express")
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const emailRoute = require('./routes/routes');
app.use("api/v1", emailRoute);

app.use(express.json());

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT, () => {
    console.log(`App is listing at ${PORT}`);
});


app.get("/", (req, res) => {
    res.send(`<h1>This is a Home Page baby</h1>`); 
});