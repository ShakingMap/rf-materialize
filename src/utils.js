const utils = {
    getValidationColor(state) {
        if (state === 'error') return '#f44336'; // red
        else if (state === 'warning') return '#ffeb3b'; // yellow
        else if (state === 'success') return '#4caf50'; // green
    },

    getInputValidationStyle(state) {
        if (!state) return null;
        else {
            const color = utils.getValidationColor(state);
            return {
                borderBottomColor: color,
                boxShadow: '0 1px 0 0 ' + color
            }
        }
    }
};

export default utils;