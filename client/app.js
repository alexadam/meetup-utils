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

class App extends React.Component {

    state = {
        pdf: null,
        dataModel: null
    }

    onNewData = (newData) => {
        getPdfUrl(newData, (newPdf) => {
            this.setState({
                dataModel: newData,
                pdf: newPdf
            })
        })
    }

    onTemplateSelected = (selectedTemplate) => {
        if (!selectedTemplate) {
            this.setState({
                dataModel: null,
                pdf: null
            })
        } else {
            getPdfUrl(selectedTemplate, (newPdf) => {
                this.setState({
                    dataModel: selectedTemplate,
                    pdf: newPdf
                })
            })
        }
    }

    render = () => {

        let pdfSettings = null;
        if (this.state.dataModel) {
            pdfSettings = (
                <div className="app-container-row PosterSettings">
                    <Inputs data={this.state.dataModel} onNewData={this.onNewData} />
                    <PDFPreview data={this.state.pdf}/>
                </div>
            )
        }

        return (
            <div id="appContainer">
                <h1>Meetup Utils</h1>
                <div className="app-container-row">
                    <TemplateGallery onTemplateSelected={this.onTemplateSelected} />
                </div>
                {pdfSettings}
                <button onClick={() => savePdf(this.state.dataModel)}>Save PDF...</button>
            </div>);
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('app'));
