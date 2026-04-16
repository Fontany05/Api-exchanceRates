import axios from "axios";
import { ExchangeRateResponse } from "../../interface/exchange.interface"

export const getExchangeRates = async () => {
  try {
    const response = await axios.get<ExchangeRateResponse>(
    "https://open.er-api.com/v6/latest/USD",
    );

    const { base_code, rates } = response.data;

    const result = Object.entries(rates).map(([currency, rate]) => ({
    base: base_code,
    currency,
    rate,
    }));

    return result;

  } catch (error) {
    throw new Error("No se pudo realiza la consulta a la API externa");
  }
};
