const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require("./routes/user-routes");
const imageRoutes = require("./routes/image-upload");

//express middleware used to be a bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//app.use(require('./routes));
app.use("/api/", userRoutes);
app.use("/api/", imageRoutes); // route for image upload

//start the API server
app.listen(PORT, () =>
  console.log(`🌎 ==> API server now listending on PORT ${PORT}!`)
);
