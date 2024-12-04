const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models");

//Routers
const postRouter = require("./routes/Posts")
//middleware: which uses a url and triggers the req to the routes
app.use("/posts", postRouter); 


db.sequelize.sync().then(() => {
    app.listen(3000, ()=>{
        console.log("Application is running on PORT: 3000");
})
});