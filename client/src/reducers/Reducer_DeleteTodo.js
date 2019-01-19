export default function (state = {id: null}, action) {
    switch (action.type) {
        case 'SUBMIT_DELETE_TODO':
            return action.payload;
            break;
        default: return state;
    }
    return state;
}
