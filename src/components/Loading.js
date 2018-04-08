import React, { Component } from 'react';
import { string, number } from 'prop-types';

class Loading extends Component {
    state = {};

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.text === prevState.text) {
            return null;
        }
        return {
            text: nextProps.text,
        };
    }

    componentDidMount() {
        const stopper = `${this.props.text}...`;

        this.interval = setInterval(() => {
            if (this.state.text !== stopper) {
                this.setState(prevState => ({
                    text: `${prevState.text}.`,
                }));
            } else {
                this.setState({
                    text: this.props.text,
                });
            }
        }, this.props.speed);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <p style={{ textAlign: 'center', fontSize: 35 }}>{this.state.text}</p>;
    }
}

Loading.propTypes = {
    text: string.isRequired,
    speed: number.isRequired,
};

Loading.defaultProps = {
    text: 'Loading',
    speed: 300,
};

export default Loading;
