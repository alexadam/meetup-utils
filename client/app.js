import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import * as jsPDF from 'jspdf'
import * as Logos from './logos'
import canvg from 'canvg'
import QRious from 'qrious'

const genPdf = () => {
    let doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [4, 2]
    })

    let text = 'Hacktoberfest @ Research in Cluj'

    let splitTitle = doc.splitTextToSize(text, 2);
    doc.text(splitTitle, 1,1);

    // logo
    // var canvas = document.createElement('canvas');
    // canvg(canvas, Logos.MeetupSVGLogo);
    // var imgData = canvas.toDataURL('image/png');
    // doc.addImage(imgData, 'PNG', 1.5, 0.25, 1.3, 0.5);
    doc.addImage(Logos.MeetupPNGBase64Logo, 'PNG', 1.5, 0.25, 1.3, 0.5);

    // QR code
    let qr = new QRious({
      value: 'https://www.meetup.com/research-in-cluj/events/255360569/'
    });
    let qrImage = qr.toDataURL();
    doc.addImage(qrImage, 'PNG', 3, 0.5, 0.75, 0.75);


    doc.save('meetup.pdf')
}

const App = (props) => (
    <div>
        <h1>Meetup Utils</h1>
        <button onClick={genPdf}>Generate PDF...</button>
    </div>
);

ReactDOM.render((
    <App/>
), document.getElementById('app'));
