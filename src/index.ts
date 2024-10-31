import express from "express";
import dotenv from "dotenv";
import router from "./router/app.router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// connect to redis client 
// connectToRedis();


//Middlewares
app.use(express.json());

//Routes
app.use("/api/v1", router);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

export default app;