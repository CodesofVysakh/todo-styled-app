import React, { Component } from 'react';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';
import { ReactComponent as RevertIcon } from '../assets/revert.svg';
import { ReactComponent as TickIcon } from '../assets/tick-green.svg';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';

import styled from 'styled-components';

class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            input: "",
            finished: [],
        };
    }
    renderItems = () => {
        return this.state.items.map((item) => {
            console.log(this.state.items);
            <Li key={item.id}>
                <FlexDiv >
                    <Span></Span>
                    <p>{item.title}</p>
                </FlexDiv> 
                <DeleteSvg />
            </Li>
        })
    };
    updateItems = () => {
        let new_item = {
            id: this.state.items.length,
            title: this.state.input,
        };
        if(this.state.input){
            this.setState({
                items: [...this.state.items, new_item],
                input: "",
            })
        }
    }


    render() {
        return (
            <>
                <Content>
                    <Heading>Todo List</Heading>
                    <div className="top">
                        <Heading3>Things to be done</Heading3>
                        <ul>
                            <Li>
                                <FlexDiv >
                                    <Span></Span>
                                    <p>Buy 1Kg Tomato</p>
                                </FlexDiv> 
                                <DeleteSvg />
                            </Li>
                            <Li>
                                <FlexDiv >
                                    <Span></Span>
                                    <p>Buy 2Kg Onion</p>
                                </FlexDiv> 
                                <DeleteSvg />
                            </Li>
                            <Li>
                                <FlexDiv >
                                    <Span></Span>
                                    <p>Visit Friend</p>
                                </FlexDiv> 
                                <DeleteSvg />
                            </Li>
                            <Li>
                                <FlexDiv >
                                    <Span></Span>
                                    <p>Clean House</p>
                                </FlexDiv> 
                                <DeleteSvg />
                            </Li>
                            {this.renderItems()}
                        </ul>
                    </div>
                    <FlexDiv>
                        <PLusSvg />
                        <Input placeholder="Type new task..." value={this.state.input} onChange={(e) => {this.setState({input: e.target.value})}} />
                        <Button onClick={this.updateItems}>Add New</Button>    
                    </FlexDiv>    
                    <div className="bottom">
                        <Heading3>Completed</Heading3>
                        <ul>
                            <Li style={{color: "#0cc694"}}>
                                <FlexDiv>
                                    <Span style={{border: "1px solid #0cc694"}}>
                                        <TickSvg />
                                    </Span>
                                    <p> Buy 1Kg Tomato </p>
                                </FlexDiv>
                                <small>
                                    <RevertSvg />
                                    <DeleteSvg style={{marginLeft:"30px"}} />
                                </small>
                            </Li>
                            <Li style={{color: "#0cc694"}}>
                                <FlexDiv>
                                    <Span style={{border: "1px solid #0cc694"}}>
                                        <TickSvg />
                                    </Span>
                                    <p> Buy 2Kg Onion </p>
                                </FlexDiv>
                                <small>
                                    <RevertSvg />
                                    <DeleteSvg style={{marginLeft:"30px"}} />
                                </small>
                            </Li>
                            <Li style={{color: "#0cc694"}}>
                                <FlexDiv>
                                    <Span style={{border: "1px solid #0cc694"}}>
                                        <TickSvg />
                                    </Span>
                                    <p> Visit Friend </p>
                                </FlexDiv>
                                <small>
                                    <RevertSvg />
                                    <DeleteSvg style={{marginLeft:"30px"}} />
                                </small>
                            </Li>
                            <Li style={{color: "#0cc694"}}>
                                <FlexDiv>
                                    <Span style={{border: "1px solid #0cc694"}}>
                                        <TickSvg />
                                    </Span>
                                    <p> Clean House </p>
                                </FlexDiv>
                                <small>
                                    <RevertSvg />
                                    <DeleteSvg style={{marginLeft:"30px"}} />
                                </small>
                            </Li>
                        </ul>
                    </div>
                </Content>
            </>
        )
    }
}

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    border-left: 1px solid #f6f6f6;
    border-right: 1px solid #f6f6f6;
    padding: 0 200px;
`
const Heading = styled.h1`
    text-align: center;
    font-size: 40px;
    padding: 40px 0 0;
    margin: 0;
`
const Heading3 = styled.h3`
    font-size: 32px;
    color: #040241;
`
const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Span = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 50%;
    padding: 1px;
    margin-right: 5px;
    cursor: pointer;
`
const TickSvg = styled(TickIcon)`
    width: 15px;
`
const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
`
const Input = styled.input`
    padding: 12px 28px;
    width: 80%;
    margin-left: 40px;
    font-size: 16px;
    border: 1px solid #d2c2c2;
    border-right: none;

`
const PLusSvg = styled(PlusIcon)`
    width: 12px;
    position: absolute;
    top: 17px;
    left: 50px;
`
const Button = styled.button`
    background-color: #040241;
    padding: 12px 16px;
    color: #fff;
    width: 20%;
    border: none;
    border-radius: 0 6px 6px 0;
    font-size: 16px;
    cursor: pointer;
`
const  DeleteSvg = styled(DeleteIcon)`
    cursor: pointer;
`
const  RevertSvg = styled(RevertIcon)`
    cursor: pointer;
`

export default ToDo;