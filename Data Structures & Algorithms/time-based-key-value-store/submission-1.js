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
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, new Map());
        }

        this.keyStore.get(key).set(timestamp, value);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const keyMap = this.keyStore.get(key);
        if (!keyMap) {
            return "";
        }

        const timestamps = [...keyMap.keys()];
        let l = 0;
        let r = timestamps.length - 1;
        let result = "";
        while (l <= r) {
            const h = Math.floor(((l+r) / 2));
            
            if (timestamps[h] < timestamp) {
                result = keyMap.get(timestamps[h]);
                l = h + 1;
            } else if (timestamps[h] > timestamp) {
                r = h - 1;
            } else {
                return keyMap.get(timestamps[h]);
            }
        }
        return result;
    }
}
