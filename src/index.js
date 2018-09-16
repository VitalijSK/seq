module.exports = function longestConsecutiveLength(array) {
    const n = array.length;
    if(n < 1) return 0
    if (n == 1) return 1
    array.sort( (a,b) => a - b );
    let count = 1;
    let countMax = 1;
    let prev = array[0];
    for (let i = 1; i < n; i++) {
        if (array[i] === prev) {
            continue
        }
        if (array[i] === prev + 1 ) {
            count++;
            prev++;
        } else {
            if (count > countMax) {
                countMax = count;
            }
            count = 1;
            prev = array[i];
        }
       
    }

    if (count > countMax) {
        countMax = count;
    }
    return countMax;
}
