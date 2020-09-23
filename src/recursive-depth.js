module.exports = class DepthCalculator {

    depthLevel = 1;

    calculateDepth(arr) {
        if (arr.some(x => Array.isArray(x))) {
            let newArr = arr.reduce((accVal, curVal) => accVal.concat(curVal), [])
            return this.depthLevel + this.calculateDepth(newArr)
        }
        return this.depthLevel;
    }
}