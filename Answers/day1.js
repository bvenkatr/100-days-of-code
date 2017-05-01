/**
 * 2) Convert givne string to titleCase
 *
 */
function titleCase(str) {
    var strArray = str.split(" ");
    return strArray.map(function(item){
        var firstEle = item[0];
        return item.split("").map(function(eachCharacter, i){
            if (i === 0) {
                return eachCharacter.toUpperCase();
            } else {
                return eachCharacter.toLowerCase();
            }
        }).join("");
    }).join(" ");
}

titleCase("I'm a little tea pot");
