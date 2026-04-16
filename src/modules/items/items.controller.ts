import { Request, Response } from "express";
import { getExchangeRates } from "./items.service";

export const getExchanceRates = async (req: Request, res: Response) => {
  try {
    const rates = await getExchangeRates();

    res.json(rates);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Se ha producido un error al obtener los datos" });
  }
};
