const express = require('express');
const mongoose= require('mongoose');
const router = require("./routes/book-routes");
const app = express();

//Middleware

app.use(express.json());
app.use("/books", router);


mongoose
 .connect("mongodb+srv://Admin:eGQCYlFNMfsk6Nl5@cluster0.kiyjvel.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>console.log("Connected To Database"))
.then(() => {
    app.listen(5000);
}).catch((err) => console.log(err));


app.delete('/')
//eGQCYlFNMfsk6Nl5