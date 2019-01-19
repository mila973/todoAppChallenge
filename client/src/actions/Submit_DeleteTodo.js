export const submitDeleteTodo = (var1) => {
    return {
        type: 'SUBMIT_DELETE_TODO',
        payload: {
            id: var1
        }
    }
};
