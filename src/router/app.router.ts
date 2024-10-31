import express from "express";
import balanceRouter from "./balance.router";
import orderbookRouter from "./orderbook.router";
import ordersRouter from "./orders.router";

const router = express.Router();

// Create user
router.post("/user/create/:userId", (req, res) => {
    // forward request to queue
    // await forwardRequest();
});

// Create Symbol
router.post("/user/create/:stockSymbol", async (req, res) => {
    // forward request to queue
});

// Onramp Money
router.post("/onramp/inr", async (req, res) => {
    // forward request to queue
});

// Mint tokens
router.post("/trade/mint", async (req, res) => {
    // forward request to queue
});

// Reset database
router.post("/reset", async (req, res) => {
    // forward request to queue
});

// Balances
router.use("/balances/", balanceRouter);

// Orderbook
router.use("/user/create/:userId", orderbookRouter);

// Orders
router.use("/user/create/:userId", ordersRouter);

export default router;