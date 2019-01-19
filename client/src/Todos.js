import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Fab from "@material-ui/core/Fab/Fab";
import {Add} from "@material-ui/icons";
import NewTodo from "./New_Todo.js";
import Dialog from "@material-ui/core/Dialog/Dialog";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitShowDialog} from "./actions/Submit_ShowDialog";
import TodoList from "./TodoList";




class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.showDialog.open,
            list: [],
        }
        this.handleDialogOpen=this.handleDialogOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }
    handleDialogOpen() {
        this.props.submitShowDialog(true);
    }
    handleClose(){
        this.setState({open: false});
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.showDialog.open !== this.props.showDialog.open) {
            this.setState({open: this.props.showDialog.open})
        }
        if (prevProps.newTodo !== this.props.newTodo) {
            if(this.props.newTodo.name!== null){
                this.setState({ list: this.state.list.concat([{name: this.props.newTodo.name, description: this.props.newTodo.description}]) });
            }
        }
        if (prevProps.deleteTodo !== this.props.deleteTodo) {
            if(this.props.deleteTodo.id!== null){
                this.setState({ list: this.state.list.filter((s, sidx) => this.props.deleteTodo.id !== sidx) });
                }
        }


    }

    render() {
        return  (
            <div>
                <h1>TODO</h1>
                <TodoList data={this.state.list}/>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose.bind(this)}
                    aria-labelledby="form-dialog-title"
                    fullWidth
                    maxWidth={'sm'}
                >
                <NewTodo />
                </Dialog>
                <Tooltip title="New Todo" aria-label="New Todo">
                    <Fab onClick={this.handleDialogOpen.bind(this)} style={{position: 'absolute', backgroundColor: '#039be5'}}>
                        <Add style={{color: '#E0F7FA'}}/>
                    </Fab>
                </Tooltip>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showDialog: state.showDialog,
        newTodo: state.newTodo,
        deleteTodo: state.deleteTodo,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({submitShowDialog: submitShowDialog}, dispatch);
}


export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Todos));
