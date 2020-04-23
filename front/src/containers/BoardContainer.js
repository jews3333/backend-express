import React, { Component } from 'react';
import Board from '../components/Board';

class BoardContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            boardlist: null
        }
    }

    componentDidMount(){
        fetch("/board")
        .then(res => res.json())
        .then(data => this.setState({
            boardList: data
        }))
    }

    render(){
        return (
            <Board list={this.state.boardList}/>
        )
    }
}

export default BoardContainer;