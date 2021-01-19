import React from 'react';

class Lifeycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor()');

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount()');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }
}