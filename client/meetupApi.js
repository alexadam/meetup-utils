import React from 'react'

export default class MeetupAPI extends React.Component {

    state = {
        secretKey: '',
        eventUrl: 'https://www.meetup.com/research-in-cluj/events/256694729/',
        eventName: '',
        eventId: ''
    }

    onNewSecretKey = (e) => {
        let newValue = e.target.value
        this.setState({
            secretKey: newValue
        })
    }

    onNewUrl = (e) => {
        let newValue = e.target.value
        this.setState({
            eventUrl: newValue,
        })
        this.extractEventNameAndID(newValue)
    }

    extractEventNameAndID = (url) => {
        let parts = url.split('/events/')
        let myRegexp = /([^\/]+)\/events\/([^\/]+)/i;
        let match = myRegexp.exec(newValue);
        let name = match[1]
        let eventId = match[2]

        this.setState({
            eventName: name,
            eventId: eventId
        })
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
               let guests = []

               for (let gData of data.data) {
                   guests.push({
                       name: gData.member.name
                   })
               }

              console.log(guests);

              resolve(guests)
           });
       })
   }

   getMeetupInfo = () => {

       if (this.state.secretKey.trim().length === 0) {
           ERROR
       } // TODO -> if empty

       return new Promise((resolve, reject)=>{
           let murl = this.state.eventName + '/events/' + this.state.eventId
           this.jsonp('https://api.meetup.com/'+murl+'?&sign=true&key='+this.state.secretKey, (data) => {

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
              console.log(eventData);
              resolve(eventData)
           });


          })
    }

    getData = () => {
        let allPromises = []
        allPromises.push(this.getMeetupInfo())
        allPromises.push(this.getAttendees())

        Promise.all(allPromises).then((result) => {
            let tmpData = {
                meetupData: result[0],
                attendees: result[1]
            }
            this.props.onAPIData(tmpData)
        })

    }

    render = () => {

        return (
            <div className='mtu-api-container'>
                <div className="mtu-header">
                    <div className="mtu-text">Extract data from meetup.com</div>
                </div>
                <div className='mtu-input'>
                    <label className='mtu-input-label'>meetup.com API Key</label>
                    <input className='mtu-input-component' type="password" value={this.state.secretKey} onChange={this.onNewSecretKey}/>
                </div>
                <div className='mtu-input'>
                    <label className='mtu-input-label'>meetup.com event URL</label>
                    <input className='mtu-input-component' type="text" placeholder='' value={this.state.eventUrl} onChange={this.onNewUrl}/>
                </div>
                <div>
                    <button className="SpecialButton" onClick={this.getData}>Extract Data...</button>
                </div>
                <div className="mtu-header">
                    <div className="mtu-text">Or add/change data manually:</div>
                </div>
            </div>
        )
    }
}
