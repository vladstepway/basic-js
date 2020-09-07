module.exports = function countCats(backYard) {
    const result = backYard.flat().filter((x) => x === '^^');
    return !!result ? result.length : 0;
};
