let express = require("express");

// const fs = require("fs");

let app = express();

let PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

// Listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});