import React, {Component} from "react";



export default class ListItem extends Component {
    render() {
        return          <li className ="ListItem" onClick={() => 
            this.props.handleListItemClick(this.props)}>
            {this.props.name}
        </li>;
    }}