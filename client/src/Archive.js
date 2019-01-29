import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitNewTodo} from "./actions/Submit_NewTodo";
import {submitDeleteTodo} from "./actions/Submit_DeleteTodo";
import TodoList from "./ItemsList";
import axios from 'axios';
import {submitArchiveTodo} from "./actions/Submit_ArchiveTodo";


/*
*
* Modal of archived items page
*
* */




class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ( prevProps.deleteTodo !== this.props.deleteTodo || prevProps.archiveTodo !== this.props.archiveTodo) {
            axios.get(`/sql/getArchive`)
                .then(res => {
                    this.setState({list: res.data});
                })
            if(this.props.deleteTodo.id!== -1) {
                this.props.submitDeleteTodo(-1);
            }
            if(this.props.archiveTodo !== 0) {
                this.props.submitArchiveTodo(0);
            }
        }
    }
    componentDidMount()
    {
        axios.get(`/sql/getArchive`)
            .then(res => {
                this.setState({list: res.data});
            })
    }

    render() {
        return  (
            <div>
                <h1>ARCHIVE</h1>
                <TodoList type={'archive'} data={this.state.list}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        newTodo: state.newTodo,
        deleteTodo: state.deleteTodo,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({submitNewTodo: submitNewTodo, submitDeleteTodo: submitDeleteTodo, submitArchiveTodo: submitArchiveTodo}, dispatch);
}


export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Archive));
