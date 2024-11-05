
export const handleRefectoreApiData = (inputArray: any[][]): any[][] => {
    return inputArray.map(arr => ([arr[0], arr[1], arr[3], arr[4], arr[2]]))
}