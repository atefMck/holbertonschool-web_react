import React, { Component } from 'react';

class WithLogging extends Component {

    componentDidMount() {
        console.log(`Component ${this.props.children.type.name || "Component"} is mounted`)
    }

    componentWillUnmount() {
        console.log(`Component ${this.props.children.type.name || "Component"} is going to unmount`);
    }

    render() {
		return (this.props.children);
	};
}

WithLogging.displayName = `WithLogging(${WithLogging.props.children.type.name || "Component"})`

export default WithLogging;
