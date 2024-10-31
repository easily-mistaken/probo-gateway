import express from "express";

const router = express.Router();

// Orderbook
router.get("/", async (req, res) => {
    // forwardRequest();
});
router.get("/:stockSymbol", async (req, res) => {
    // forwardRequest();
});

export default router;