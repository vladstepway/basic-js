module.exports = function repeater(str, options) {
    const {
        repeatTimes = 1,
        addition = '',
        additionSeparator = '|',
        additionRepeatTimes = 1,
        separator = '+',
    } = options;
    let s = '';
    for (let i = 0; i < repeatTimes; i++) {
        s += str;
        for (let j = 0; j < additionRepeatTimes; j++) {
            s += addition;
            if (j === additionRepeatTimes - 1) {
                break;
            }
            s += additionSeparator;
        }
        if (i === repeatTimes - 1) {
            break;
        }
        s += separator;
    }
    return s;
}
  