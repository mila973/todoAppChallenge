import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";
import Divider from "@material-ui/core/Divider/Divider";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions/ExpansionPanelActions";
import {ExpandMore, Delete, AllInbox} from '@material-ui/icons';
import Fab from "@material-ui/core/Fab/Fab";
import {submitDeleteTodo} from "./actions/Submit_DeleteTodo";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
        this.onDeleteTodo=this.onDeleteTodo.bind(this);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data !== this.props.data) {

            this.setState({data: this.props.data})
        }
    }
    onDeleteTodo= (idx) => () =>{
        this.props.submitDeleteTodo(idx);
    }
    componentDidMount(){
    }

    render() {
        return  (
            <div>
                {this.state.data.map((e, idx)=> (
                    <div key={idx}>
                        <ExpansionPanel >
                            <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                                <Typography>{e.name}</Typography>

                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <b>Description:</b><br/>
                                    {e.description}
                                </Typography>
                            </ExpansionPanelDetails>
                            <Divider />
                            <ExpansionPanelActions>
                                <Fab variant="extended" onClick={this.onDeleteTodo(idx).bind(this)} aria-label="Delete" style={{backgroundColor: '#ff1744'}} >
                                    <Delete/>
                                    Delete
                                </Fab>
                                <Fab variant="extended" aria-label="Archive" style={{backgroundColor: '#00e676'}}>
                                    <AllInbox />
                                    Archive
                                </Fab>
                            </ExpansionPanelActions>
                        </ExpansionPanel>
                        <br/>
                    </div>
                    ))
                }
            <br/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({submitDeleteTodo: submitDeleteTodo}, dispatch);
}

export default withRouter(connect( mapStateToProps,matchDispatchToProps)(TodoList));
