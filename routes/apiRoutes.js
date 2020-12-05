const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("we have been hit");
    res.json({
        msg: "success"
    });
});

router.get("/isActive", (req, res) => {
    console.log("This route has been hit");
    res.json({
        msg: "success", 
        status: 200, 
        data: { user: "Alfredo", title: "Student"}
    });
});

router.put("/putexample", (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    res.json({
        msg: "success",
        status: 200,
        data: { id: id },
    });
});

// router.post("/queryString", (req, res) => {
//     console.log(req.query);
//     res.json(req.query);
// });

router.post("/queryString", (req, res) => {
    console.log(req.params);
    res.json(req.query);
});

router.patch("/parameter/:hash/:name", (req, res) => {
    console.log(req.params);
    res.json({
        msg: "success,"
    });
});

router.patch("/parameter/:hash/:name", (req, res) => {
    console.log(req.params);
    res.json({
        msg: "success,"
    });
});


// using a function in 
router.put("/panget", (req, res) => {
    console.log(req.body);
    const lat = req.body.lat;
    const lon = req.body.lon;
    const number = req.body.num;
    const value = req.body.value;
    const numInput = () => {
        array.forEach(element => {
            parseInt(number.length)
        })};
    res.json({
        msg: "success",
        status: 200,
        coordinates: {lon, lat},
        number: numInput,
        value: value,
        truth: false,
    });
});

// router.get("/api/isActive", (req, res) => {
//     console.log("This route has been hit");
//     res.json({
//         msg: "success", 
//         status: 200, 
//         data: { user: "Alfredo", title: "Student"}
//     });
// });

module.exports = router;