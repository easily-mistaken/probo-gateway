import { Request, Response } from "express";

export const getOrderBook = (req: Request, res: Response) => {
    res.send({ message: "Order book" });
  };

export const buyOrder = (req: Request, res: Response) => {
    res.status(200).send({
        message: `Buy order placed and trade executed`,
    });
};

export const sellOrder = (req: Request, res: Response) => {
    res.status(200).send({ message: "Sell order placed" });
};

export const viewOrders = (req: Request, res: Response) => {
    res.send({ message: "view orders" });
};