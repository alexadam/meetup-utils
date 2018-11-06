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

import {getPdfUrl, savePdf} from './buildPDF'

const dataModel = {
    meetupData: {
        meetupName: 'Research in Cluj',
        eventName: 'Hacktoberfest @ Research in Cluj',
        eventLink: 'https://www.meetup.com/research-in-cluj/events/255360569/',
        date: '16 oct 2018',
        startHour: '18:30',
        endHour: '20:30',
        locationName: 'Evozon',
        locationAddress: 'Calea Motilor 62',
    },
    posterData: {
        orientation: 'landscape'
    }

}

const dataModel2 = {
    meetupData: [
        {
            label: 'Meetup Logo',
            type: 'image',
            value: '/client/assets/meetup-logo-300.png',
            id: 'meetupLogo',
            include: true,
            graphic: {
                type: 'image',
                x: 100,
                y: 24,
                width: 100,
                height: 35,
                centerHorizontal: true,
                centerVertical: false,
            }
        },
        {
            label: 'Meetup Name',
            type: 'text',
            value: 'Research in Cluj',
            id: 'meetupName',
            include: true,
            graphic: {
                type: 'text',
                x: 10,
                y: 90,
                width: 100,
                height: 35,
                wrapText: true,
                fontSize: 70,
                fontFamily: 'helvetica',
                fontWeight: 'normal',
                centerText: true
            }
        },
        {
            label: 'Event Name',
            type: 'text',
            value: 'Super Event',
            id: 'eventName',
            include: true,
            graphic: {
                type: 'text',
                x: 10,
                y: 110,
                width: 200,
                height: 35,
                wrapText: true,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontWeight: 'normal',
                centerText: true
            }
        },
        {
            label: 'QR Code',
            type: 'text',
            value: 'https://www.meetup.com/research-in-cluj/events/255360569/',
            id: 'meetupQR',
            include: true,
            graphic: {
                type: 'qr',
                x: 135,
                y: 140,
                width: 30,
                height: 30,
            }
        },
    ],
    posterData: {
        orientation: 'landscape',
        format: 'a4',
        width: 297,
        height: 210,
        units: 'mm',
    },
    documentProperties: {
    	title: 'Title',
    	subject: 'Subject',
    	author: 'meetup-utils',
    	keywords: 'kw1, kw2',
    	creator: 'meetup-utils'
    }
}

class App extends React.Component {

    state = {
        pdf: null,
        dataModel: dataModel2
    }

    onNewData = (newData) => {
        getPdfUrl(newData, (newPdf) => {
            this.setState({
                dataModel: newData,
                pdf: newPdf
            })
        })
    }

    render = () => (
        <div id="appContainer">
            <h1>Meetup Utils</h1>
            <div className="app-container-row">
                <TemplateGallery />
            </div>
            <div className="app-container-row">
                <Inputs data={this.state.dataModel} onNewData={this.onNewData} />
                <PDFPreview data={this.state.pdf}/>
            </div>
            <button onClick={() => savePdf(this.state.dataModel)}>Save PDF...</button>
        </div>
    );
}

ReactDOM.render((
    <App/>
), document.getElementById('app'));
