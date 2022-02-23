import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    width: 20rem;
    background-color: white;
    border-radius: 1rem;
    text-align: center;
`
const Footer = styled.div`
    padding: 10px;
`   
const Header = styled.div`
    padding: 10px;
`   
const Title = styled.h3`
    margin: 0;
    color: #5e6e11;
`
const Body = styled.div`
    padding: 10px;
    border-top: 1px solid #888;
    border-bottom: 1px solid #888;
    color: #5e6e11;
`
const Button = styled.button`
    border: none;
    padding: 0 1rem;
`
const Modal = props => {
    if(!props.show) {
        return null
    }
    return (
        <Container onClick={props.onClose}>
            <Content onClick={e => e.stopPropagation()}>
                <Header>
                    <Title>New employee added</Title>
                </Header>
                <Body>
                    {props.children}
                </Body>
                <Footer>
                    <Button onClick={props.onClose}>Close</Button>
                </Footer>
            </Content>
        </Container>
    )
}
export default Modal