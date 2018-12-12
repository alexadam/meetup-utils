import React from 'react'

export default class MeetupAPI extends React.Component {

    state = {
        secretKey: '',
        eventUrl: '',
        eventName: '',
        eventId: '',
        dataExtracted: false,
    }

    onNewSecretKey = (e) => {
        let newValue = e.target.value
        this.setState({
            secretKey: newValue
        })
    }

    onNewUrl = (e) => {
        let newValue = e.target.value
        let result = this.extractEventNameAndID(newValue)
        this.setState({
            eventUrl: newValue,
            eventName: result.eventName,
            eventId: result.eventId,
        })
    }

    extractEventNameAndID = (url) => {
        let parts = url.split('/events/')
        let myRegexp = /([^\/]+)\/events\/([^\/]+)/i;
        let match = myRegexp.exec(url);
        if (!match) {
            return {
                eventName: '',
                eventId: ''
            }
        }
        let name = match[1]
        let eventId = match[2]
        return {
            eventName: name,
            eventId: eventId
        }
    }

    jsonp = (url, callback) => {
       let callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
       window[callbackName] = (data) => {
           delete window[callbackName];
           document.body.removeChild(script);
           callback(data);
       };

       let script = document.createElement('script');
       script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
       document.body.appendChild(script);
   }

   getAttendees = () => {
       return new Promise((resolve, reject)=>{
           let murl = this.state.eventName + '/events/' + this.state.eventId
           this.jsonp('https://api.meetup.com/'+murl+'/rsvps?&sign=true&key='+this.state.secretKey, (data) => {

               let err = data.data.errors
               if (err && err.length > 0) {
                   resolve({type: 'error', message: 'Error: ' + err[0].code + ' ' + err[0].message})
                   return
               }

               let guests = []
               for (let gData of data.data) {
                   guests.push(gData.member.name)
               }

              resolve(guests)
           });
       })
   }

   getMeetupInfo = () => {
       return new Promise((resolve, reject)=>{
           let murl = this.state.eventName + '/events/' + this.state.eventId
           this.jsonp('https://api.meetup.com/'+murl+'?&sign=true&key='+this.state.secretKey, (data) => {

               let err = data.data.errors
               if (err && err.length > 0) {
                   resolve({type: 'error', message: 'Error: ' + err[0].code + ' ' + err[0].message})
                   return
               }

               let eventData = {
                   meetupName: data.data.group['name'],
                   eventName: data.data.name,
                   eventDate: data.data['local_date'],
                   eventTime: data.data['local_time'],
                   eventUrl: this.state.eventUrl,
                   venueName: data.data.venue['name'],
                   venueAddress: data.data.venue['address_1'],
                   venueCity: data.data.venue['city'],
                   venueCountry: data.data.venue['country'],
                   venueLat: data.data.venue['lat'],
                   venueLng: data.data.venue['lon']
               }
              resolve(eventData)
           });


          })
    }

    getData = () => {

        let tKey = this.state.secretKey.trim()
        if (tKey.length === 0) {
            let elem = document.getElementById('meetupAPIKey')
            tKey = elem.value.trim()
        }
        let tURL = this.state.eventUrl.trim()
        if (tURL.length === 0) {
            let elem = document.getElementById('meetupURL')
            tURL = elem.value.trim()
        }

        if (tKey.length === 0) {
            alert('Please insert the API Key')
            return
        }
        if (tURL.length === 0) {
            alert('Please insert the Event\'s URL')
            return
        }

        let result = this.extractEventNameAndID(tURL)

        this.setState({
            secretKey: tKey,
            eventUrl: tURL,
            eventName: result.eventName,
            eventId: result.eventId,
        }, () => {

                    let allPromises = []
                    allPromises.push(this.getMeetupInfo())
                    allPromises.push(this.getAttendees())

                    Promise.all(allPromises).then((result) => {
                        if (result[0].type === 'error') {
                            alert(result[0].message)
                            return
                        }
                        if (result[1].type === 'error') {
                            alert(result[1].message)
                            return
                        }
                        let tmpData = {
                            meetupData: result[0],
                            attendees: result[1]
                        }
                        this.props.onAPIData(tmpData)
                        this.setState({
                            dataExtracted: true
                        })
                    })
        })


    }

    render = () => {

        if (this.state.dataExtracted === true) {
            return (
                <div className='mtu-api-container'>
                    <div className="mtu-header">
                        <div className="mtu-text">Data extracted successfully!</div>
                    </div>
                    <div className="menu">
                        <button className="SpecialButton" onClick={this.seeData}>See data...</button>
                        <button className="SpecialButton" onClick={()=>this.setState({dataExtracted:false})}>Get new data...</button>
                    </div>
                </div>
            )
        }

        return (
            <div className='mtu-api-container'>
                <div className="mtu-header">
                    <div className="mtu-text">Get data from meetup.com</div>
                </div>
                <div className='mtu-input'>
                    <label className='mtu-input-label'>meetup.com <a href="https://secure.meetup.com/meetup_api/key/">API Key</a></label>
                    <input id='meetupAPIKey' className='mtu-input-component' type="password" value={this.state.secretKey} onChange={this.onNewSecretKey}/>
                </div>
                <div className='mtu-input'>
                    <label className='mtu-input-label'>meetup.com event URL</label>
                    <input id='meetupURL' className='mtu-input-component' type="text" placeholder='Example: https://www.meetup.com/group-name/events/1234567/' value={this.state.eventUrl} onChange={this.onNewUrl}/>
                </div>
                <div className="menu">
                    <button className="SpecialButton" onClick={this.getData}>Get data</button>
                </div>
            </div>
        )
    }
}
