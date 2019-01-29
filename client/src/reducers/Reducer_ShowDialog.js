export default function (state = {open: false}, action) {
    switch (action.type) {
        case 'SUBMIT_SHOW_DIALOG':
            return action.payload;
        default: return state;
    }
}
