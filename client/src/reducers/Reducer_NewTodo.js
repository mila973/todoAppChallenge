export default function (state = {name: null, description: null}, action) {
    switch (action.type) {
        case 'SUBMIT_NEW_TODO':
            return action.payload;
            break;
        default: return state;
    }
    return state;
}
