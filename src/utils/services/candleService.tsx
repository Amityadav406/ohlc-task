import axios from "axios";
import { candleAPi } from "./api"
import { timeRangeMapper } from '../constants'

interface candleServiceProps {
    timeRange: string
}

export const candleService = async (timeRange: candleServiceProps) => {
    const apiUrl = candleAPi(timeRange);
    let data;
    let error;

    try {
        axios.get(apiUrl).then((res: any) => {
            if (res.data) {
                data = res.data;
            }
        }).catch((e: any) => {
            error = e;
        });
    } catch (err) {
        error = err

    }
    return {
        data, error
    }
}