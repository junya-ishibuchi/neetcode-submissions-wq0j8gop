class Solution {
    strLengthArray = [];
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (const str of strs) {
            this.strLengthArray.push(str.length);
            result += str;
        }
        return result;
    }
// neetcodeloveyou
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let prevPos = 0;
        for (const length of this.strLengthArray) {
            result.push(str.slice(prevPos, prevPos + length));
            prevPos += length;
        }

        return result;
    }
}
