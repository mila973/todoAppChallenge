import React, { Component } from 'react';
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import {withRouter} from "react-router-dom";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitNewTodo} from './actions/Submit_NewTodo';
import {submitShowDialog} from "./actions/Submit_ShowDialog";
import axios from "axios";

/*

    Dialog of new Todo creation and sending data to the database

 */


class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
        this.handleClose=this.handleClose.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleClose(){
        this.props.submitShowDialog(false);
    }
    handleSubmit(){
        if(this.state.name!=="" && this.state.description!=="" && this.state.description.length<4000000000 && this.state.name.length<64000 )
        {
            axios.get(`/sql/create`,{
                params:{
                    name: this.state.name,
                    description: this.state.description
                }
            });
            this.props.submitNewTodo(1);
            this.props.submitShowDialog(false);
        }
    }
    validateNameFieldError(){
        if(this.state.name===""){
                return true;
        }
        else{
            if(this.state.name.length>=64000) return true;
            else return false;
        }
    }
    validateDescriptionFieldError(){
        if(this.state.description===""){
            return true;
        }
        else{
            if(this.state.description.length>=4000000000) return true;
            else return false;
        }
    }
    validateNameFieldHelp(){
        if(this.state.name===""){
            return "Empty Field!";
        }
        else{
            if(this.state.name.length>=64000) return "Too Long!";
            else return '';
        }
    }
    validateDescriptionFieldHelp(){
        if(this.state.description===""){
            return "Empty Field!";
        }
        else{
            if(this.state.description.length>=4000000000) return "Too Long!";
            else return false;
        }
    }

    render() {
        return  (
            <div>
                    <DialogTitle id="form-dialog-title">New Todo</DialogTitle>
                    <DialogContent style={{color: '#039be5'}}>
                        <TextField
                            error={this.validateNameFieldError()}
                            helperText={this.validateNameFieldHelp()}
                            id="standard-name"
                            label="Name Your Todo"
                            value={this.state.name}
                            onChange={e=>{this.setState({name: e.target.value})}}
                            margin="normal"
                            fullWidth
                            style={{color: 'white'}}
                        />
                        <TextField
                            error={this.validateDescriptionFieldError()}
                            helperText={this.validateDescriptionFieldHelp()}
                            id="standard-multiline-flexible"
                            label="Describe Your Todo"
                            multiline
                            fullWidth
                            rowsMax="4"
                            value={this.state.description}
                            onChange={e=>this.setState({description: e.target.value})}
                            margin="normal"
                            style={{color: '#039be5'}}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose.bind(this)} style={{color: '#039be5'}}>
                            <b>Cancel</b>
                        </Button>
                        <Button onClick={this.handleSubmit.bind(this)} style={{color: '#039be5'}}>
                            <b>Submit</b>
                        </Button>
                    </DialogActions>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({submitNewTodo: submitNewTodo, submitShowDialog: submitShowDialog}, dispatch);
}

export default withRouter(connect( mapStateToProps,matchDispatchToProps)(NewTodo));
