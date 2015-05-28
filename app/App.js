var React = require('react');
var AddTomatow = require('./AddTomatow');
var Tomatows = require('./Tomatows');
var Timer = require('./Timer');
var TaskList = require('./TaskList');
var Task = require('./Task');

var App = React.createClass({
	render() {
		return (
			<div>
				Hello World
				<Tomatows />
				<Timer />
				<Timer />
				<TaskList />

			</div>
		)
	}
});

React.render(
	<App />,
	document.getElementById('app')
	)