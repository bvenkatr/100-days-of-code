/**
 * Find the longest word in a string
 * @param str
 * @returns {number}
 */
function findLongestWord(str) {
    var tempArray = str.split(" ");
    var tempVar = 0;
    tempArray.forEach(function(item){
        if(tempVar < item.length) {
            tempVar = item.length;
        }
    });
    return tempVar;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
