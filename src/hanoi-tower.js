module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = Math.pow(2, disksNumber) - 1
    return {turns, seconds: Math.floor(turns / (turnsSpeed / 3600))}
};
