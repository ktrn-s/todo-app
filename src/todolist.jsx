import { Component } from "react";
import check from './assets/check.png'

export class ToDo extends Component {
    constructor (){
        super();
        this.state = {
            UserInput: "",
            ToDoList: []
        }
    }
    onChangeEvent(e){
        this.setState({UserInput: e});
    }
    addItem(input) {
        if (input === "") {
            alert("Please enter a task!")
        } 
        else {
            let ListArray = this.state.ToDoList;
            ListArray.push(input);
            this.setState({ToDoList: ListArray, UserInput: ''});
        }
    }
    deleteTask() {
        let ListArray = this.state.ToDoList;
        ListArray = [];
        this.setState({ToDoList: ListArray})
    }
    crossThruWord(event) {
        const li = event.target;
        li.classList.toggle('Crossed');
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="wrapper">
                    <input type="text" placeholder="What is on your to do list?" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.UserInput}/>
                </div>
                <div className="wrapper">
                    <button onClick={() => this.addItem(this.state.UserInput)}
                        className="btn add"> Add </button>
                </div>
                <ul>
                    {this.state.ToDoList.map((item, index) => (
                        <li onClick={this.crossThruWord}
                        key={index }
                        >
                            <img src={check} alt="check" width="25px" />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="wrapper">
                    <button onClick={() => this.deleteTask()}
                        className="btn delete"> Delete </button>
                </div>
                </form>
            </div>
        )
    }
}