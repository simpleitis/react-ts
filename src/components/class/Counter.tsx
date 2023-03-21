import React, { Component } from 'react';

type CounterProps = {
    message: string;
};

type CounterState = {
    count: number;
};

// if we don't require a type for props or state then we have to give {} as a placeholder
export default class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0,
    };

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        );
    }
}
