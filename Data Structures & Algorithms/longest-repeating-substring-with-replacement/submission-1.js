class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const cnt = new Array(26).fill(0);
    let l = 0;
    let maxFreq = 0;
    let res = 0;

    for (let r = 0; r < s.length; r++) {
      const idxR = s.charCodeAt(r) - 65; // 'A' = 65
      cnt[idxR]++;
      if (cnt[idxR] > maxFreq) maxFreq = cnt[idxR];

      // 置換がkを超えたら左を縮める
      while (r - l + 1 - maxFreq > k) {
        const idxL = s.charCodeAt(l) - 65;
        cnt[idxL]--;
        l++;
      }
      res = Math.max(res, r - l + 1);
    }
    return res;
  }
}