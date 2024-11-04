import axios from "axios";
import { candleAPi } from "./api"
import { timeRangeMapper } from '../constants'

export const candleService = async (timeRange: string): Promise<any> => {
    const apiUrl = candleAPi(timeRangeMapper[timeRange]);

    try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Unexpected status code: ${response.status}`);
    } catch (error) {
        return error;
    }
};