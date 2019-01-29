export default function (state = 0, action) {
    switch (action.type) {
        case 'SUBMIT_ARCHIVE_TODO':
            return action.payload;
        default: return state;
    }
}
