export default function (state = 0, action) {
    switch (action.type) {
        case 'SUBMIT_NEW_TODO':
            return action.payload;
            break;
        default: return state;
    }
    return state;
}
