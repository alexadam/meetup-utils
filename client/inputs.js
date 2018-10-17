import React from 'react'

class TextInput extends React.Component {
    state = {
        value: ""
    }
    onNewText = (e) => {
        let newValue = e.target.value
        this.setState({
            value: newValue
        })
    }
    render = () => {
        return (
            <div>
                <label htmlFor="">{this.props.label}</label>
                <input type="text" placeholder={this.props.placeHolder} value={this.state.value} onChange={this.onNewText}/>
            </div>
        )
    }
}

export default class Inputs extends React.Component {


    render = () => {

        return (
            <div className="input-form">
                <TextInput placeHolder="Meetup Name" label="Meetup Name" />
            </div>
        )
    }
}
