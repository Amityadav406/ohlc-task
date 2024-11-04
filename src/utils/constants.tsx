import { ApexOptions } from "apexcharts";

export const chartData: ApexOptions = {
    chart: {
        width: "100%",
        height: 350,
        background: "#172d3e",
        toolbar: {
            show: false,
        },

    },
    tooltip: {
        enabled: true,
        custom: function ({ seriesIndex, dataPointIndex, w }) {
            const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]
            const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]
            const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]
            const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]
            return (
                '<div class="apexcharts-tooltip-candlestick">' +
                '<div>O: <span class="value">' +
                o +
                '</span></div>' +
                '<div>H: <span class="value">' +
                h +
                '</span></div>' +
                '<div>L: <span class="value">' +
                l +
                '</span></div>' +
                '<div>C: <span class="value">' +
                c +
                '</span></div>' +
                '</div>'
            )

        },
        fillSeriesColor: true,
        fixed: {
            enabled: true,
            position: 'topLeft',
            offsetX: 70,
            offsetY: 0,
        },
    },

    xaxis: {
        type: "datetime",
    },
    yaxis: {
        opposite: true,
        tooltip: {
            enabled: true,
        },
    },
    grid: {
        show: true,
        borderColor: "#223747",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: "#01a781",
                downward: "#e44b44",
            },
            wick: {
                useFillColor: true,
            },
        },
    },

};


export const timeRange = [
    '3y', '1y', '3m', '1m', '7d', '3d', '1d', '6h', '1h',
]

export const timeRangeMapper: Record<string, string> = {
    '3y': '1W',
    '1y': '1D',
    '3m': '12h',
    '1m': '6h',
    '7d': '1h',
    '3d': '30m',
    '1d': '15m',
    '6h': '5m',
    '1h': '1m',
};