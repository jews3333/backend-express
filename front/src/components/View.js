import React, { Component } from 'react';
import styled from 'styled-components';

export default class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            content: null
        }
    }

    componentDidMount(){
        const idx = this.props.match.params.idx;
        fetch(`/board/${idx}`)
        .then(res => res.json())
        .then(data => this.setState({ content: data }))
    }

    render(){
        const { content } = this.state;
        return (
            content ? 
            <BoardView className="boardView">
                <div className="boardHead">
                    <dl>
                        <dt>제목</dt>
                        <dd>{content[0].title}</dd>
                    </dl>
                    <dl>
                        <dt>이름</dt>
                        <dd>{content[0].name}</dd>
                    </dl>
                    <dl>
                        <dt>날짜</dt>
                        <dd>{content[0].regdate}</dd>
                    </dl>
                </div>
                <div className="boardBody">
                    <dl>
                        <dt>내용</dt>
                        <dd>{content[0].content}</dd>
                    </dl>
                </div>
            </BoardView>
            : null
        )
    }
}

const BoardView = styled.div`
    max-width:1000px;
    margin:0 auto;
    border-top:3px solid #333;
`