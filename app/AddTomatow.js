var React = require('react');

var AddTomatow = React.createClass({
	getInitialState(){
		return {
			newTask: ''
		};
	},

	handlechange(e){
		this.setState({
			newItem: e.target.value
		});
	},

	handleSubmit(e){
		if(e.keyCode === 13){
			this.props.add(this.state.newItem);
			this.setState({
				newTask: ''
			});
		}
	},

	render(){
		return (
			<div>
				<input type="text"
					className="form-control"
					value={this.state.newTask}
					placeholder="New Task"
					onKeyDown={this.handleSubmit}
					onChange={this.handleChange} />
			</div>
		)
	}
})

module.exports = AddTomatow;