export default function (state = 0, action) {
    switch (action.type) {
        case 'SUBMIT_NEW_TODO':
            return action.payload;
        default: return state;
    }
}
