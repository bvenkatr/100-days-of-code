/**
 * https://www.freecodecamp.com/challenges/confirm-the-ending
 *
 * @param str
 * @param target
 * @returns {boolean}
 */
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    if (str.substring(str.length - target.length) === target) {
        return true;
    } else {
        return false;
    }
}

confirmEnding("Bastian", "n");


/**
 * You can see remaining challenges in born2code reporsitory in ny github repo
 */