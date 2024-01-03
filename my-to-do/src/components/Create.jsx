import React, { Component } from 'react'

class Create extends Component {
    constructor(){
        super()
        this.state={
            value : " ",
            items : []
        }
        // this.textInput=this.textInput.bind(this)
    }
    textInput=(e)=>{
        this.setState({
            value: e.target.value
        })
    }
    addItem=()=>{
        this.setState(state =>{
            let items = this.state.items.concat(this.state.value)
            // console.log(items)
            return{
                items,value: " "
            }
        })

    }
    deleteItem=(index)=>{
        this.setState(state=>{
            const items = state.items.filter((itemf,Index)=> Index != index)
            return{
              items
        }})
    }
  render() {
    // console.log(this.state.value)
    // console.log(this.state.items)
    return (
      <div>
        <input type="text" onChange={this.textInput}/>
        <button onClick={this.addItem}>Add item</button>
        <p>{this.state.value}</p>
        <div>{
            this.state.items.map((items,index)=>{
                return(
                    <div key={index}>
                        <input type="text" defaultValue = {items}/>
                        <button onClick={()=>this.deleteItem(index)}>Delete</button>
                    </div>
                )
            })
            

            }
        {/* <input type="text" value={this.state.items} /> */}
        {/* <textarea name="" id="" cols="17" rows="1">{this.addItem}</textarea> */}
        </div>
      </div>
    )
  }
}

export default Create
