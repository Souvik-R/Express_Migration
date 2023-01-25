const dotenv = require("dotenv");
dotenv.config({ path: `.env` });
require("./connection/database_connection");
const express = require('express');
const mainRouter = require("./router/main.router");
const app = express();
const port = process.env.PORT || 4000;


app.use("/api/v1", mainRouter);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})