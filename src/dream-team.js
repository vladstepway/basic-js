module.exports = function createDreamTeam(members) {
    return Array.isArray(members)
        ? members
            .filter(x => typeof x === "string")
            .map(x => x.trim()[0].toUpperCase())
            .sort()
            .join("")
        : false;
};
