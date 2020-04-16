import React, { Component } from 'react';

export default class Data extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount(){
        fetch("/data")
        .then(res => res.json())
        .then(data => this.setState({ data: data }), () => {
          console.log(this.state.data);
        })
    }

    render(){
        const { data } = this.state;

        return (
            <div>
                {data ? data.title : null}
            </div>
        )
    }
}