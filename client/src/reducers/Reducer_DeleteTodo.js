export default function (state = {id: -1}, action) {
    switch (action.type) {
        case 'SUBMIT_DELETE_TODO':
            return action.payload;
        default: return state;
    }
}
