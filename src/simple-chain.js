const chainMaker = {
    chainArray: [],
    getLength() {
        return this.chainArray.length;
    },
    addLink(value) {
        value === undefined
            ? this.chainArray.push(`( )`)
            : this.chainArray.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (isNaN(position)) {
            this.chainArray = [];
            throw new Error();
        } else {
            this.chainArray.splice(position - 1, 1);
        }

        return this;
    },
    reverseChain() {
        this.chainArray.reverse();
        return this;
    },
    finishChain() {
        const copyChainArray = [...this.chainArray];
        this.chainArray = [];
        return copyChainArray.join('~~');
    },
};

module.exports = chainMaker;
