var React = require('react');
var Task = require('./Task');

var TaskList = React.createClass({
	render(){
		var styles = {
			width: '200px',
			height: '200px',
			border: '1px solid black'
		};

		return (
			<div style={styles}>
				<h2>I am a BIG TASKLIST</h2>
				<Task />
				<Task />
			</div>
		)
	}
});

module.exports = TaskList;