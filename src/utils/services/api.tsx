import { baseURL } from "../env";

export const candleAPi = ( timeRange : { timeRange: string }) => `${baseURL}/candles/trade:${timeRange}:tBTCUSD/hist`