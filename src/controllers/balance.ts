import { Request, Response } from "express";

export const getInrBalances = (req: Request, res: Response) => {
    res.status(200).send({ message: "Get inr balance" });
  };
 
  export const getInrBalanceByUserId = (req: Request, res: Response) => {
    res.status(200).send({ message: "Get inr balance by id" });
  };

  export const getStockBalances = (req: Request, res: Response) => {
    res.send({ message: "get stock balances" });
  };

  export const getStockBalancebyUserId = (req: Request, res: Response) => {
    res.send({ message: "get stock balances by id" });
  };

  export const onRamp = (req: Request, res: Response) => {
    res.status(200).send({ message: `Onramped INR` });
  };