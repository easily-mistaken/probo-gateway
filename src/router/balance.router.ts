import express from "express";

const router = express.Router();

// Balances
router.get("/inr", async (req, res) => {
    // forwardRequest();
  });
  router.get("/inr/:userId", async (req, res) => {
    // forwardRequest();
  });
  router.get("/stock", async (req, res) => {
    // forwardRequest();
  });
  router.get("/stock/:stockSymbol", async (req, res) => {
    // forwardRequest();
  });

export default router;