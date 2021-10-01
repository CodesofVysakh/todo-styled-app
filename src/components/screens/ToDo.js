import React from 'react';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';
import { ReactComponent as RevertIcon } from '../assets/revert.svg';
import { ReactComponent as TickIcon } from '../assets/tick-green.svg';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';

import styled from 'styled-components';

class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: "Buy 1Kg Tomato",
                },
                {
                    id: 2,
                    title: "Buy 2Kg Onion",
                },
                {
                    id: 3,
                    title: "Visit Friend",
                },
                {
                    id: 4,
                    title: "Clean House",
                },                
            ],
            input: "",
            finished: [
                {
                    id: 5,
                    title: "Washing Clothes",
                },
                {
                    id: 6,
                    title: "Play Cricket",
                },
                {
                    id: 7,
                    title: "1Km Walking",
                },
                {
                    id: 8,
                    title: "Do Homework",
                },
            ],
            idcount: 8,
        };
    }
    renderItems = () => {
        return this.state.items.map((item) => (
            <Li key={item.id}>
                <FlexDiv >
                    <Span onClick={() => {
                            this.completedItems(item.id, item.title);
                            this.removeItems(item.id);
                        }
                        }>
                    </Span>
                    <p>{item.id}, {item.title}</p>
                </FlexDiv> 
                <DeleteSvg onClick={() => this.removeItems(item.id) }/>
            </Li>
        ))
    };

    completedItems = (id, title) => {
        let completeditemlist = {
            id: id,
            title: title,
        }
        this.setState({
            finished: [...this.state.finished, completeditemlist],
        });
    }
    revertItem = (id, title) => {
        let reverteditemlist = {
            id: id,
            title: title,
        }
        this.setState({
            items: [...this.state.items, reverteditemlist],
        });
    }

    finishedItems = () => {
        return this.state.finished.map((item) => (
            <Li style={{color: "#0cc694"}} key={item.id}>
                <FlexDiv>
                    <Span style={{border: "1px solid #0cc694"}}>
                        <TickSvg />
                    </Span>
                    <p>{item.id}, {item.title} </p>
                </FlexDiv>
                <small>
                    <RevertSvg onClick={() => {
                            this.revertItem(item.id, item.title);
                            this.removeFinishedItems(item.id)
                    }} />
                    <DeleteSvg style={{marginLeft:"30px"}} onClick={() => this.removeFinishedItems(item.id)} />
                </small>
            </Li>
        ))
    }
    
    updateItems = () => {
        let new_item = {
            id: this.state.idcount + 1,
            title: this.state.input,
        };
        if(this.state.input){
            this.setState({
                items: [...this.state.items, new_item],
                input: "",
                idcount: this.state.idcount + 1,
            })
        }
    };
    removeItems = (id) => {
        let removeditemlist =  this.state.items.filter((item) => item.id !== id);
        this.setState({
            items: removeditemlist,
        });
    }
    removeFinishedItems = (id) => {
        let removeditemlist = this.state.finished.filter((item) => item.id !== id);
        this.setState({
            finished: removeditemlist,
        });
    }
    

    render() {
        return (
            <>
                <Content>
                    <Heading>Todo List</Heading>
                    <div className="top">
                        <Heading3>Things to be done</Heading3>
                        <ul>
                            {this.renderItems()}
                        </ul>
                    </div>
                    <FlexDiv>
                        <PLusSvg />
                        <Input placeholder="Type new task..." value={this.state.input} onChange={(e) => {this.setState({input: e.target.value})}} onKeyPress={(e) => e.key === 'Enter' && this.updateItems()} />
                        <Button onClick={this.updateItems}>Add New</Button>    
                    </FlexDiv>    
                    <div className="bottom">
                        <Heading3>Completed</Heading3>
                        <ul>
                            {this.finishedItems()}
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
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    padding: 0 200px;
    background: #f6f6f6;
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