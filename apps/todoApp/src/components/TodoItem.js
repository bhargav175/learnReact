'use strict';

var React = require("react/addons");

var TodoItem = React.createClass({
	getInitialState : function(){
		console.log("getInitialState todoitem"+this.props.todos[this.props.index].name);
		return {text:this.props.todos[this.props.index].name};
	},
	onChange : function(e){
		this.props.handleToggle(this.props.index);
	},
	componentWillReceiveProps:function(nextProps){
		console.log("recieved props"+nextProps.name);
		this.setState({text:nextProps.name});
		console.log("setting state from "+ this.props.name +" to "+nextProps.name);
		this.forceUpdate();
	},	
	render:function(){
		console.log("rendering item" +this.state.text + this.props.name);
		if(this.props.todos[this.props.index].checked){
		return (	
				<div className="todoItem">
					<input type="checkbox" checked data-state-name={this.state.text} data-name={this.props.name} data-index={this.props.index} onChange = {this.onChange} />
					<p>{this.state.text}</p>

				</div>
				);	
		}
		else{
			return (	
				<div className="todoItem">
					<input type="checkbox" data-state-name={this.state.text} data-name={this.props.name} data-index={this.props.index} onChange = {this.onChange} />
					<p>{this.state.text}</p>

				</div>
				);
		}
		
	}
});

module.exports = TodoItem;
