import { baseURL } from "../env";

export const candleAPi = (timeRange: string) => `${baseURL}/candles/trade:${timeRange}:tBTCUSD/hist`
