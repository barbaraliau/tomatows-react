var React = require('react');

var Timer = React.createClass({
	getInitialState(){
		return {
			secondsLeft: this.props.startTime
		};
	},

	tick(){
		this.setState({
			secondsLeft: this.state.secondsLeft - 1
		});
	},

	componentDidMount(){
			this.interval = setInterval(this.tick, 1000);
	},

	componentWillUnMount(){
			clearInterval(this.interval);
	},

	render(){
		return (
			<div>
				<h3>I AM TIMER {this.state.secondsLeft}</h3>
			</div>
		)
	}
});

module.exports = Timer;