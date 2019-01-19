import {combineReducers} from 'redux';
import NewTodo from './Reducer_NewTodo';
import ShowDialog from './Reducer_ShowDialog';
import DeleteTodo from './Reducer_DeleteTodo';
const allReducers = combineReducers({
    newTodo: NewTodo,
    showDialog: ShowDialog,
    deleteTodo: DeleteTodo
});

export default allReducers
