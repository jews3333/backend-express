import React, { Component } from 'react';

export default class Board extends Component {

    componentDidMount(){
        fetch("/board")
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render(){
        return (
            <div>
                board
            </div>
        )
    }
}