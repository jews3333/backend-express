import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrap>
            <Logo>React Social Application</Logo>
        </Wrap>
    )
}

const Wrap = styled.div`
    position:fixed;
    width:100%;
    height:80px;
    overflow:hidden;
    top:0;
    left:0;

`

const Logo = styled.h1`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    font-size:1.8em;
    text-align: center;
    background: linear-gradient(to right, #fbcac9, #8ca6ce);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export default Header;