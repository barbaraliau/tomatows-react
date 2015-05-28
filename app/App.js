var React = require('react');
var AddTomatow = require('./AddTomatow');
var Tomatows = require('./Tomatows');
var Timer = require('./Timer');
var TaskList = require('./TaskList');
var Task = require('./Task');

var App = React.createClass({
	render() {
		var styles = {
		padding: '20px'
		};

		return (
			<div style={styles} className="container-fluid">
					<Timer startTime="10"/>
				<TaskList />
			</div>
		)
	}
});

React.render(
	<App />,
	document.getElementById('app')
	)