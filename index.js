// DAY 1 CLASS

// console.log("Abdul Rahman")

// import http from "node:http";
// import product from "./product.js";

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "content-Type": "application/json",
//     });
//     res.end(
//         JSON.stringify({
//             data:
//                 "Henry set",
//             product,
//             // data: [
            
//             // ],
//             // res,
//         })
//     );
// });

// server.listen(5000, () => {
//     console.log("first");
// });









// DAY 2 & 3 CLASS

import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import product from "./product.js";


const app = express();


app.use(express.json(urlencoded, { limit: "30mb" }));

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(cookieParser());

app.get(
    "/",
    (req, res) => {
        res.send().json({
            product: "data",
        });
    },
    () => {}
);

app.post("/register", (req, res, next) => {
    // console.log(req);
    const { images, name, category, discription, price, percent } = req.body;

    if (images == "" || name == "" || category == "" || discription == "" || price == "" || percent == "") {
        res.send("invalid infomation");
    }

    // res.send({
    //     // list: product
    // })

    next();
},
    
    (req, res) => {
        const { images, name, category, discription, price, percent } = req.body;
        res.send({ images, name, category, discription, price, percent });
    }
);

app.listen(5000, () => {
    console.log("worked perfectly well")
});












// DAY 4 CLASS

// import express, { urlencoded } from "express";
// import data from "./data.js";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

// const app = express();

// app.use(express.json(urlencoded, { limit: "30mb" }));
// // app.use(bodyParser({ urlencoded: true }));

// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.get(
//   "/",
//   (req, res) => {
//     res.send().json({
//       hotls: "data",
//     });
//   },
//   () => {}
// );
// app.post("/register", (req, res) => {
//   const { fname, lname, email, phone, password } = req.body;
//   res.send({ fname, lname, email, phone, password });
// });

// app.listen(5000, () => {
//   console.log("worked");
// });






// JOSEPH EXAMPLE

// import express from "express"
// import product from "product.js"

// const app = express();


// app.get("/", (req, res) => {
//     res.send({
//         data:product
//     })
// })

// app.listen(5000, () => {
//     console.log("working perfect now")
// })

