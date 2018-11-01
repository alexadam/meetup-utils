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
            <div className='mtu-input'>
                <label className='mtu-input-label'><input type="checkbox"/>{this.props.label}</label>
                <input className='mtu-input-component' type="text" placeholder={this.props.placeHolder} value={this.state.value} onChange={this.onNewText}/>
            </div>
        )
    }
}

class GenericInput extends React.Component {
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
            <div className='mtu-input'>
                <input type="check"/>
                <label className='mtu-input-label'>{this.props.label}</label>
                <input className='mtu-input-component' type="text" placeholder={this.props.placeHolder} value={this.state.value} onChange={this.onNewText}/>
            </div>
        )
    }
}

class DateInput extends React.Component {
    state = {
        value: this.props.defaultValue
    }
    onNewText = (e) => {
        let newValue = e.target.value
        this.setState({
            value: newValue
        })
    }
    render = () => {
        return (
            <div className='mtu-input'>
                <label className='mtu-input-label'>{this.props.label}</label>
                <input className='mtu-input-component' type="date" value={this.state.value} onChange={this.onNewText}/>
            </div>
        )
    }
}

class TimeInput extends React.Component {
    state = {
        value: this.props.defaultValue
    }
    onNewText = (e) => {
        let newValue = e.target.value
        this.setState({
            value: newValue
        })
    }
    render = () => {
        return (
            <div className='mtu-input'>
                <label className='mtu-input-label'>{this.props.label}</label>
                <input className='mtu-input-component' type="time" value={this.state.value} onChange={this.onNewText}/>
            </div>
        )
    }
}

export default class Inputs extends React.Component {

    getCurrentDate = () => {
        var local = new Date();
        local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
        return local.toJSON().slice(0,10)
    }


    render = () => {

        return (
            <div className="mtu-input-container">
                <TextInput placeHolder="Meetup Name" label="Meetup Name" />
                <TextInput placeHolder="Event Name" label="Event Name" />
                <TextInput placeHolder="www.meetup.com" label="Link (URL)" />
                <DateInput label="Date" defaultValue={this.getCurrentDate()} />
                <TimeInput label="Start time" defaultValue={new Date()} />
                <TextInput placeHolder="A nice place" label="Location Name" />
                <TextInput placeHolder="www.location.com" label="Location Link (URL)" />
                <TextInput placeHolder="street nr" label="Location Address" />
                <TextInput placeHolder="maps.google.com" label="Location Map Link (URL)" />
            </div>
        )
    }
}
