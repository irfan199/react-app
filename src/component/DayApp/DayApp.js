import React, { Component } from 'react'
import "./DayApp.css"
export default class DayApp extends Component {
    state={
        input:"",
        items: []
    };
    handleChange=event=>{
        this.setState({
            input:event.target.value
        });
        console.log(this.state.input);
    };
    storeItem=event=>{
        event.preventDefault();
        const{input}=this.state;
        //const allItems=this.state.items
       // allItems.push(input);
        this.setState({
            items:[...this.state.items,input],
            input:""
        });
    };
    deleteItem=key=>{
        const allItems=this.state.items;
        allItems.splice(key,1);
        this.setState({
            items:this.state.items.filter((data,index) =>index!==key)
        });
    };
    
    render() {
        const {input,items}=this.state;
        

        return (
            <div className="day-container">
                
                <form className="input-section" onSubmit={this.storeItem}>
                <h1>Day App</h1>
                    <input type="text" value={input} onChange={this.handleChange} placeholder="Enter the items"></input>
                </form>
                <ul>
                    {items.map((data,index)=>(
                        <li key={index}>{data}<i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></li>
                    )
                    )}
                   
                    
                </ul>
            </div>
        )
    }
}
