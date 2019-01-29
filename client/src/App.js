import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Switch from 'react-router-dom/Switch';
import Grid from '@material-ui/core/Grid';
import Menu from './Menu.js'
import Todos from './Todos';
import Archive from './Archive';


class ModalSwitch extends React.Component {

    previousLocation = this.props.location;
    componentWillUpdate(nextProps) {
        const { location } = this.props;
        // set previousLocation if props.location is not modal
        if (nextProps.history.action !== "POP" &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location;
        }
        //console.log(this.props.location.pathname)
    }
    render() {
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        ); // not initial render
        return (
            <div >
                <Grid container spacing={30} padding={16}>
                    <Grid item xs={2} spacing={16}>
                        <Menu/>
                    </Grid>
                    <hr width="1" size="50%" style={{paddingLeft: '0', marginLeft: '0', marginRight: '10%'}}/>
                    <Grid item xs={8}>
                        <br/>
                            <Switch location={isModal ? this.previousLocation : location} ref={this.switch} >
                                <Route path="/" exact component={Todos} />
                                <Route path="/archive" component={Archive} />
                            </Switch>
                    </Grid>
                </Grid>
            </div>
        );
    }
}




class App extends Component {
    constructor() {
        super();
        this.state = {
            route: true,
        }
    }

    render() {
        return  (
            <Router>
                <div>
                    <Route  component={ModalSwitch}/>
                </div>
            </Router>
        )
    }
}

export default App;
