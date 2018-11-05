import React from 'react'

class TextInput extends React.Component {
    state = {
        data: this.props.data
    }
    onNewText = (e) => {
        let newValue = e.target.value
        let tmpData = {...this.state.data, value: newValue}
        this.setState({
            data: tmpData
        }, () => {
            this.props.onDataChange(tmpData)
        })
    }
    onChecked = (e) => {
        // TODO disable input if not included
        let newValue = !this.state.data.include
        let tmpData = {...this.state.data, include: newValue}
        this.setState({
            data: tmpData
        }, () => {
            this.props.onDataChange(tmpData)
        })
    }
    render = () => {
        return (
            <div className='mtu-input'>
                <label className='mtu-input-label'><input type="checkbox" checked={this.state.data.include} onChange={this.onChecked}/>{this.props.data.label}</label>
                <input className='mtu-input-component' type="text" placeholder={this.props.data.value} value={this.state.data.value} onChange={this.onNewText}/>
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

    state = {
        data: this.props.data
    }

    onDataChange = (newData) => {
        let tmpData = JSON.parse(JSON.stringify(this.state.data))
        let elems = tmpData.meetupData
        let index = -1;

        for (let i = 0; i < elems.length; i++) {
            if (elems[i].id === newData.id) {
                index = i;
                break
            }
        }

        if (index > -1) {
            tmpData.meetupData[index] = newData
            this.setState({
                data: tmpData
            }, () => {
                this.props.onNewData(tmpData)
            })
        }
    }


    render = () => {

        let inputComponents = this.state.data.meetupData.map((dataElem)=>{
            if (dataElem.type === 'text') {
                return <TextInput data={dataElem} onDataChange={this.onDataChange} key={dataElem.id}/>
            }
        })

        return (
            <div className="mtu-input-container">
                {inputComponents}
            </div>
        )
    }
    // <TextInput placeHolder="Meetup Name" label="Meetup Name" />
    // <TextInput placeHolder="Event Name" label="Event Name" />
    // <TextInput placeHolder="www.meetup.com" label="Link (URL)" />
    // <DateInput label="Date" defaultValue={this.getCurrentDate()} />
    // <TimeInput label="Start time" defaultValue={new Date()} />
    // <TextInput placeHolder="A nice place" label="Location Name" />
    // <TextInput placeHolder="www.location.com" label="Location Link (URL)" />
    // <TextInput placeHolder="street nr" label="Location Address" />
    // <TextInput placeHolder="maps.google.com" label="Location Map Link (URL)" />
}
