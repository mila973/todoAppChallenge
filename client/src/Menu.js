import React,{Component} from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {AllInbox, Assignment} from '@material-ui/icons';
import {Link} from 'react-router-dom';


const styles = theme => ({
    menuItem: {
        '&:focus': {
            backgroundColor: '#039be5',
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
});

class ListItemComposition extends Component{
    constructor(props){
        super(props)

    }
    render() {


        return (
                <MenuList style={{paddingTop: '20%'}}>
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                    <MenuItem className={this.props.classes.menuItem}>
                        <ListItemIcon className={this.props.classes.icon}>
                            <Assignment/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.props.classes.primary}} inset primary="Todo List"/>
                    </MenuItem>
                    </Link>
                    <hr width="80%"/>
                    <Link to={'/archive'} style={{textDecoration: 'none'}}>
                    <MenuItem className={this.props.classes.menuItem}>
                        <ListItemIcon className={this.props.classes.icon}>
                            <AllInbox/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.props.classes.primary}} inset primary="Archive"/>
                    </MenuItem>
                    </Link>
                </MenuList>
        );
    }}

ListItemComposition.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);
