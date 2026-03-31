class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const tsStore = this.keyStore.get(key) ?? []

        if (tsStore.length > 0 && tsStore[tsStore.length - 1][0] === timestamp) {
            tsStore[tsStore.length - 1][1] = value
        } else {
            tsStore.push([timestamp, value])
        }

        this.keyStore.set(key, tsStore)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const tsStore = this.keyStore.get(key) ?? []

        let l = 0
        let r = tsStore.length - 1
        let lastValid = ""

        while(l <= r) {            
            const mid = l + Math.floor((r - l) / 2)
            const tsVal = tsStore[mid]
            
            if (timestamp >= tsVal[0]) {
                lastValid = tsVal[1]
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return lastValid
    }
}
