import React from 'react'

export default class MeetupAPI extends React.Component {

    state = {
        secretKey: '',
        eventUrl: '',
    }

    onNewSecretKey = (e) => {
        let newValue = e.target.value
        this.setState({
            secretKey: newValue
        })
    }

    onNewEventText = (e) => {
        let newValue = e.target.value
        this.setState({
            eventUrl: newValue
        })
    }

    render = () => {

        return (
            <div className='mtu-api-container'>
                <div className="mtu-step-label">
                    Step2. Extract data from meetup.com
                </div>
                <div className='mtu-input'>
                    <label className='mtu-input-label'>meetup.com API Key</label>
                    <input className='mtu-input-component' type="password" value={this.state.secretKey} onChange={this.onNewSecretKey}/>
                </div>
                <div className='mtu-input'>
                    <label className='mtu-input-label'>meetup.com event URL</label>
                    <input className='mtu-input-component' type="text" placeholder='' value={this.state.eventUrl} onChange={this.onNewEventText}/>
                </div>
                <div>
                    <button>Extract Data...</button>
                </div>
                <div>
                    Or insert it manually:
                </div>
            </div>
        )
    }
}
