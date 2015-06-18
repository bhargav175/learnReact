"use strict";

var TodoModel = function(){
	 
	this.todos = [];
	
};

TodoModel.prototype.addItem = function(name,checked){
	 		this.todos.push({name:name,checked:checked});
	 	};

TodoModel.prototype.removeItem = function(todo){
	 		this.todos = this.todos.filter(function(todoItem){
	 			return todoItem!==todo;
	 		});

	 	};

TodoModel.prototype.toggleItem = function(index){
	 		this.todos[index].checked=!this.todos[index].checked;

	 	};
TodoModel.prototype.getAllCompletedTodos = function(){
	 		return this.todos.filter(function(item){
	 			return item.checked;
	 		});

	 	};
TodoModel.prototype.getAllActiveTodos = function(){
	 		return this.todos.filter(function(item){
	 			return !item.checked;
	 		});

	 	};
TodoModel.prototype.completeAll = function(){
	 		this.todos = this.todos.map(function(item){
	 			 item.checked = true;
	 			 return item;
	 		});

 	};
TodoModel.prototype.activeAll = function(){
	 		this.todos = this.todos.map(function(item){
	 			 item.checked = false;
	 			 return item;
	 		});

 	};

TodoModel.prototype.getAllTodos = function(type){
		return this.todos;

 	};

module.exports = TodoModel;