const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const { log } = require('console');
const gameRoute = require('./routes/games');
// const userRoute = require('./routes/user.js')
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");  

require('dotenv/config');

const app = express();

//Used with React!
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(gameRoute)

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'finalAssessmentTermThree' //Collection Name
}).then(() => {
    console.log("Connected to the DB");
})
.catch((err) => {
    console.log("No Connection. Error:" + err);
})

// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log('Server started on port', PORT)})