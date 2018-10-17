import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import * as jsPDF from 'jspdf'
import * as Logos from './logos'
import canvg from 'canvg'
import QRious from 'qrious'

import Inputs from './inputs'

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

const  getTextWidth = (text, font) => {
    // TODO re-use canvas object for better performance
    let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    let context = canvas.getContext("2d");
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width;
}

const genPdf = () => {
    let doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [297, 210]
    })

    let meetupName = dataModel.meetupData.meetupName
    let splitMeetupName = doc.splitTextToSize(meetupName, 200);
    let smnSize = getTextWidth(meetupName, 'normal 40px helvetica')
    console.log('splitMeetupName', splitMeetupName, smnSize);
    // doc.addFont('Arial', 'normal');
    doc.setFont('helvetica');
    doc.setFontSize(40);

    // center
    var textWidth = doc.getStringUnitWidth(splitMeetupName[0]) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    console.log('text width', textWidth);
    var textOffset = (297 - smnSize) / 2;

    doc.text(splitMeetupName, textOffset, 75);


    let text = dataModel.meetupData.eventName
    let splitTitle = doc.splitTextToSize(text, 200);
    let smnSize2 = getTextWidth(text, 'normal 20px helvetica')
    console.log('splitTitle', splitTitle, smnSize2);
    // doc.addFont('Arial', 'normal');
    doc.setFont('helvetica');
    doc.setFontSize(20);
    doc.text(splitTitle, 50, 90);

    // logo
    // var canvas = document.createElement('canvas');
    // canvg(canvas, Logos.MeetupSVGLogo);
    // var imgData = canvas.toDataURL('image/png');
    // doc.addImage(imgData, 'PNG', 1.5, 0.25, 1.3, 0.5);
    doc.addImage(Logos.MeetupPNGBase64Logo, 'PNG', 100, 25, 100, 35);

    // QR code
    let qr = new QRious({
      value: dataModel.meetupData.eventLink
    });
    let qrImage = qr.toDataURL();
    doc.addImage(qrImage, 'PNG', 100, 120, 30, 30);


    doc.save('meetup.pdf')
}

const App = (props) => (
    <div>
        <h1>Meetup Utils</h1>
        <Inputs />
        <button onClick={genPdf}>Generate PDF...</button>
    </div>
);

ReactDOM.render((
    <App/>
), document.getElementById('app'));
