import express from "express";
import cors from "cors";
import helmet from "helmet";

const zomato = express();

//APplication Middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false}));
zomato.use(helmat());
zomato.use(cors());
zomato.get("/", (req, res) => res.json({ message: "Setup susses"}));

zomato.listen (4000, () => console.log("Sever is running🚀"));