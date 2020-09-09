module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    const copyArray = [...arr];
    copyArray.map((cur, index, array) => {
        if (cur === '--double-next') {
            index !== array.length ? (array[index] = array[index + 1]) : false;
        } else if (cur === '--double-prev') {
            index - 1 > 0 ? (array[index] = array[index - 1]) : false;
        } else if (cur === '--discard-next') {
            index !== array.length ? (array[index + 1] = undefined) : false;
        } else if (cur === '--discard-prev') {
            index - 1 ? (array[index - 1] = undefined) : false;
        }
    });

    return copyArray.filter(
        (x) =>
            x !== undefined &&
            [
                '--discard-next',
                '--discard-prev',
                '--double-prev',
                '--double-prev',
            ].indexOf(x) === -1
    );
}