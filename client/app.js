import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import * as jsPDF from 'jspdf'
import * as Logos from './logos'
import canvg from 'canvg'
import QRious from 'qrious'

import Inputs from './inputs'
import TemplateGallery from './templateGallery'
import PDFPreview from './pdfPreview'
import MeetupAPI from './meetupApi'

import {getPdfUrl, savePdf} from './buildPDF'

class PopUp extends React.Component {

    render = () => {
        if (!this.props.isVisible) {
            return null
        }
        return (
            <div className="popup">
                <div className="popup-inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class App extends React.Component {

    state = {
        pdf: null,
        dataModel: null,
        popupVisible: false,
        globalData: {
            meetupName: 'Meetup Name global',
            meetupUrl: '',
            eventName: 'Event Name',
            eventDate: '',
            eventTime: '',
            eventUrl: 'https://www.meetup.com',
            venueName: '',
            venueAddress: 'Address',
            venueCity: '',
            venueCountry: '',
            venueMapUrl: 'https://www.openstreetmap.org',
            venueLat: '',
            venueLng: '',
            wifiName: '',
            wifiPassword: '',
            wifiMiscLabel: '',
            wifiMiscValue: '',
            attendees: [
                {
                    name: ''
                }
            ],
            arrowText: ''
        }
    }

    extractGlobalDataFromTemplate = (templateData) => {
        let newGlobalData = JSON.parse(JSON.stringify(this.state.globalData))
        for (let mData of templateData.meetupData) {
            if (mData.linkTo) {
                newGlobalData[mData.linkTo] = mData.value
            }
        }
        return newGlobalData
    }

    prepareTemplateWithGlobalData = (templateData) => {
        for (let mData of templateData.meetupData) {
            if (mData.linkTo) {
                mData.value = this.state.globalData[mData.linkTo]
            }
        }
        return templateData
    }

    onNewData = (newData) => {
        getPdfUrl(newData, (newPdf) => {
            let newGlobalData = this.extractGlobalDataFromTemplate(newData)
            this.setState({
                dataModel: newData,
                pdf: newPdf,
                globalData: newGlobalData
            })
        })
    }

    onAPIData = (newData) => {
        let keys = Object.keys(newData.meetupData)
        let newGlobalData = JSON.parse(JSON.stringify(this.state.globalData))
        for (let key of keys) {
            console.log(key, newData.meetupData[key]);
            newGlobalData[key] = newData.meetupData[key]
        }
        newGlobalData.attendees = newData.attendees

        this.setState({
            globalData: newGlobalData
        })
    }

    onTemplateSelected = (selectedTemplate) => {
        console.log('gl data', this.state.globalData);
        if (!selectedTemplate) {
            this.setState({
                dataModel: null,
                pdf: null
            })
        } else {
            selectedTemplate = this.prepareTemplateWithGlobalData(selectedTemplate)
            getPdfUrl(selectedTemplate, (newPdf) => {
                this.setState({
                    dataModel: selectedTemplate,
                    pdf: newPdf
                })
            })
        }
    }

    togglePreviewPdf = () => {
        this.setState({
            popupVisible: !this.state.popupVisible
        })
    }

    render = () => {

        let pdfSettings = null;
        if (this.state.dataModel) {
            pdfSettings = (
                <div className="app-container-row PosterSettings">
                    <div className="left-menu">
                        <Inputs data={this.state.dataModel} onNewData={this.onNewData} />
                        <div className="menu-buttons">
                            <button id="pdfPreviewButton" className="SpecialButton" onClick={this.togglePreviewPdf}>Preview PDF...</button>
                            <button className="SpecialButton" onClick={() => savePdf(this.state.dataModel)}>Save PDF...</button>
                        </div>
                    </div>
                    <PDFPreview data={this.state.pdf}/>
                    <PopUp onClose={this.togglePreviewPdf} isVisible={this.state.popupVisible}>
                        <button onClick={this.togglePreviewPdf}>X Close</button>
                        <PDFPreview data={this.state.pdf} inPopUp={true}/>
                    </PopUp>
                </div>
            )
        }

        return (
            <div id="appContainer">
                <div className="mtu-header">
                    <div className="mtu-title">Meetup Utils</div>
                    <div className="mtu-sub-title">Create ready to print posters and indicators for meetups</div>
                </div>
                <div className="app-container-row">
                    <TemplateGallery onTemplateSelected={this.onTemplateSelected} />
                </div>
                <div className="app-container-row center-content">
                    <MeetupAPI onAPIData={this.onAPIData}/>
                </div>
                {pdfSettings}
            </div>);
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('app'));
