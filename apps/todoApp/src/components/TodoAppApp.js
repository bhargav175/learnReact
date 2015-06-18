'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');
var $ = require('jquery');

var TodoItem = require('./TodoItem');


var TodoModel = require('./TodoModel');

var todoModel = new TodoModel();
console.log(todoModel);

var imageURL = require('../images/yeoman.png');



var TodoList = React.createClass({
	getInitialState :function(){
		return {some:""};
	},

	
	render : function(){

		console.log("listrender");
		var self = this;
    console.log(this.props.parent.state.data);
		var getTodoItem = function(index){
      console.log("setting props as "+self.props.parent.state.data[index].name);
			return <TodoItem index={index} name={self.props.parent.state.data[index].name} handleToggle={self.props.parent.handleToggle} todos = {self.props.parent.state.data} />;
		};

		var shownTodos = self.props.parent.state.data.map(function(todoItem,index){
			return getTodoItem(index);
			
		});


		return (
				<div className="todolist">
					{shownTodos}
				</div>

			);
	}
});

var data = [];

var TodoAppApp = React.createClass({
  getInitialState : function(){
     return {data:todoModel.getAllTodos(),itemName:"",editing:null};
  },
  onSubmit:function(e){
    e.preventDefault();
    if(this.state.itemName!==""){
    this.props.model.addItem(this.state.itemName,false);
    this.setState({editing:null,itemName:""});  
    }
  	
  },
  handleToggle:function(todoItem){
  	console.log("handling toggle");
	this.props.model.toggleItem(todoItem);  	
	this.setState({editing:null});
  },
  onChange:function(e){
  	  this.setState({itemName:e.target.value});
  },	
  showTodos : function(num){
  	console.log($(arguments[1].target));
  	var todos;
  	  switch(num){
  	  	case 1:
  	  		todos = todoModel.getAllActiveTodos();
  	  		break;
  	  	case 2:
  	  		todos = todoModel.getAllCompletedTodos();
  	  		break;
  	  	default:
  	  		todos = todoModel.getAllTodos();
  	  		break;

  	  	 }
  	
  	  this.setState({data:todos});
  	   $(".todo-footer button").removeClass("active");
  	  $(arguments[1].target).addClass("active");
  	  
  },
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <div className = 'todo-header'>
          		<form onSubmit={this.onSubmit}>
          		<input type="text" onChange = {this.onChange} value={this.state.itemName} />
          		<button>Go</button>
          		</form>
          </div>
          <div className = 'todo-body'>
          		<TodoList parent={this}/>
          </div>
			<div className = 'todo-footer'>
				<button className="active" onClick={this.showTodos.bind(this,0)}> All  </button><button onClick={this.showTodos.bind(this,1)}>Active </button><button onClick={this.showTodos.bind(this,2)}>Completed</button>
          </div>


        </ReactTransitionGroup>
      </div>
    );
  }
});


React.render(<TodoAppApp model={todoModel}  />, document.getElementById('content')); // jshint ignore:line

module.exports = TodoAppApp;
