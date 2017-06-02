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
        this.filterCompleted = this.filterCompleted.bind(this);
    }

    addTodo(event){
        if (event.key === 'Enter'){
            var value = event.target.value;
            todos.push({title: value, isDone: false});
        }

        this.setState(function (){
            return {
                todo: todos
            }
        });
    }

    deleteTodo(elem){
        var value = elem.target.parentNode.querySelector('span').innerText;
        todos.splice(todos.indexOf(value), 1);

        this.setState(function () {
            return {
                todo: todos
            }
        })
    }

    doneTodo(){
        console.log(this.textSpan.innerText);
        this.textSpan.innerText.style.textDecoration = 'linethrough';
    }

    filterCompleted(){
        todos.filter(function () {
            return (todos.isDone === false).length;
        })
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
              <footer>
                  <span><i>{this.filterCompleted}</i></span>
              </footer>
          </section>
        );
    }
}

export default App;