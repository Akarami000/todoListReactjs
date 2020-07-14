import React,{Component} from 'react';
import './App.css';
import Header from './component/layout/Header'
import Todo from './component/Todo'
import AddTodo from './component/AddTodo'
import About from './component/pages/About';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  state={
    todos:[
  ]
  }

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(res=> this.setState({todos:res.data}) )
}

  //Toggle complete 
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo
    })})
}
//Delete Todo
delTodo=(id)=>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res=>this.setState({todos:[...this.state.todos.filter
  (todo=> todo.id !== id)
  ]}))
  
  
}

// addTodo
addTodo= (title)=>{
 axios.post('https://jsonplaceholder.typicode.com/todos',{
   title,
   completed:false
 })

   .then(res=>this.setState(
   this.setState({todos:[...this.state.todos,res.data]})
   ))} 
 render()
  { 
     return (
     <Router>
    <div className="App">
      <div className='container'>
      <Header/>
      <Route exact path='/' render={props =>(
        <React.Fragment>
 <AddTodo addTodo={this.addTodo}/>
    <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </React.Fragment>
      )}/>
      <Route exact path='/about' Component={About}/>
     </div>
    </div>
    </Router>
  );
}}

export default App;
