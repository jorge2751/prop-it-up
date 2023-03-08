import React, { Component } from 'react'

export class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        const incAge = () => this.setState({age: this.state.age+1})
        return (
            <div>
                <h2>{firstName}, {lastName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={incAge}>Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard