export const submitNewTodo = (var1, var2) => {
    return {
        type: 'SUBMIT_NEW_TODO',
        payload: {
            name: var1,
            description: var2
        }
    }
};
