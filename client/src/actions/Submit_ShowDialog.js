export const submitShowDialog = (var1) => {
    return {
        type: 'SUBMIT_SHOW_DIALOG',
        payload: {
            open: var1,
        }
    }
};
