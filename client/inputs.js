import React from 'react'

// TODO add multiline text

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

class MultiLIneTextInput extends React.Component {
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
                <textarea className='mtu-input-component' cols="30" rows="3" placeholder={this.props.data.value} value={this.state.data.value} onChange={this.onNewText}></textarea>
            </div>
        )
    }
}

class ArrayInput extends MultiLIneTextInput {
    constructor(props) {
        super(props)
    }

    onNewText = (e) => {
        let newValue = e.target.value
        let parts = newValue.trim().split('\n')
        let tmpData = {...this.state.data, value: parts}
        this.setState({
            data: tmpData
        }, () => {
            this.props.onDataChange(tmpData)
        })
    }

    render = () => {
        let value = this.state.data.value.join('\n')

        return (
            <div className='mtu-input'>
                <label className='mtu-input-label'><input type="checkbox" checked={this.state.data.include} onChange={this.onChecked}/>{this.props.data.label}</label>
                <textarea className='mtu-input-component' cols="30" rows="3" placeholder={this.props.data.value} value={value} onChange={this.onNewText}></textarea>
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
        let local = new Date();
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

    static getDerivedStateFromProps = (props, state) => {
          return {
            data: props.data
          }
    }


    render = () => {

        let inputComponents = this.state.data.meetupData.map((dataElem)=>{
            if (dataElem.virtual) {
                // FIXME for name cards NxN
                return null
            }
            if (dataElem.type === 'text') {
                return <TextInput data={dataElem} onDataChange={this.onDataChange} key={dataElem.id + this.state.data.id}/>
            }
            if (dataElem.type === 'multiline-text') {
                return <MultiLIneTextInput data={dataElem} onDataChange={this.onDataChange} key={dataElem.id + this.state.data.id}/>
            }
            if (dataElem.type === 'text-array') {
                return <ArrayInput data={dataElem} onDataChange={this.onDataChange} key={dataElem.id + this.state.data.id}/>
            }
        })

        return (
            <div className="mtu-input-container">
                {inputComponents}
            </div>
        )
    }
}
