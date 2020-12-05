const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const PORT = 5000;


// app.get("/api", (req, res) => {
//     console.log("This route has been hit");
//     res.json({
//         msg: "success", 
//         status: 200, 
//         data: { user: "Alfredo", title: "Student"}
//     });
// });

// app.get("/api/todos", (req, res) => {
//     console.log("hiiii");
//     res.json({
//         todos: ["thing", "another thing"] 
//     });
// });


// This is doing the same thing as app.use(apiRoutes) with apiRoutes.js
// app.get("/", (req, res) => {
//     console.log("we have been hit");
//     res.json({
//         msg: "success"
//     });
// });


// routes as middleware
// app.use(apiRoutes);

// set up to receive json and string data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// api routes as middleware
app.use("/api", apiRoutes);

// server listening
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));

