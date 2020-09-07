const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const RADIOACTIVE_DECAY = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
    return (typeof sampleActivity !== 'string'
        || /[a-zA-Z]/.test(sampleActivity)
        || sampleActivity > MODERN_ACTIVITY
        || sampleActivity <= 0)
        ? false
        : Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / RADIOACTIVE_DECAY);
};

