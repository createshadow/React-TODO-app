import React, { Component } from 'react';
var todos = [
    {
        title: 'Add first todo',
        isDone: false
    }
];

var span = document.getElementsByTagName('span');

class App extends Component {
    constructor(){
        super();
        this.state = {
            todo: todos
        };

        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.doneTodo = this.doneTodo.bind(this);
    }

    addTodo(event){
        if (event.key === 'Enter'){
            let value = event.target.value;
            let input = event.target;
            input.value = '';
            todos.push({title: value, isDone: false});

            console.log(todos);
        }

        this.setState(function (){
            return {
                todo: todos
            }
        });


    }

    deleteTodo(elem){
        let value = elem.target.parentNode.querySelector('span').innerText;
        for(let i = 0; i < todos.length; i++){
            if (todos[i].title === value){
                todos.splice(i, 1);
            }
        }
        // todos.splice(todos.indexOf(value), 1);

        this.setState(function () {
            return {
                todo: todos
            }
        });

        console.log(todos);
    }

    doneTodo(elem){
        let element = elem.target.parentNode.querySelector('span'),
            value = elem.target.parentNode.querySelector('span').innerText;

        for(let i = 0; i < todos.length; i++){
            if (todos[i].title === value){
                todos[i].isDone = !todos[i].isDone;
                if(todos[i].isDone === true){
                    element.style.textDecoration = "line-through";
                }else {
                    element.style.textDecoration = "none";
                }
            }
        }

        this.setState(function () {
            return {
                todo: todos
            }
        });
    }

    render(){
        return(
          <section className="todoApp">
              <h1>Make tour todos</h1>
              <input
                  type="text"
                  onKeyPress={this.addTodo}
              />
              <ul>
                  {this.state.todo.map(function (todo, i) {
                      return (
                          <li key={i}>
                              <input
                                  type="checkbox"
                                  onChange={this.doneTodo}
                              />
                            <span>{todo.title}</span>
                            <i
                                className="fa fa-trash-o"
                                onClick={this.deleteTodo}
                            >

                            </i>
                          </li>
                      )
                  }.bind(this))}
              </ul>
              {/*<footer>*/}
                  {/*<span><i>{this.state.todo.filter(function (todo) {*/}
                      {/*return todo.isDone !== true;*/}
                  {/*}).map(function (i) {*/}
                      {/*return (<i key={i}>todo</i>)*/}
                  {/*})}</i></span>*/}
              {/*</footer>*/}
          </section>
        );
    }
}

export default App;