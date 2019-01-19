export default function (state = {open: false}, action) {
    switch (action.type) {
        case 'SUBMIT_SHOW_DIALOG':
            return action.payload;
            break;
        default: return state;
    }
    return state;
}
