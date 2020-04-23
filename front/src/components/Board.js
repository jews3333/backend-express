import React from 'react';

const Board = ({list}) => {

    return (
        list ? 
        <div>
            {list.map((item) => {
                return <p key={item.idx}>{item.title}</p>
            })}
        </div>
        : null
    )
}

export default Board;