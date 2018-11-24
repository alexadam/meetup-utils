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

class PopUp extends React.Component {

    render = () => {
        if (!this.props.isVisible) {
            return null
        }
        return (
            <div id="mtu-PopUp">
                <div className="modal">
                    <button onClick={()=>this.props.onClose()}>X Close</button>
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
        popupVisible: false
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
                        <PDFPreview data={this.state.pdf} inPopUp={true}/>
                    </PopUp>
                </div>
            )
        }

        return (
            <div id="appContainer">
                <div className="mtu-header">
                    <div className="mtu-title">Meetup Utils</div>
                    <div className="mtu-text">Create ready to print posters and indicators for meetups</div>
                </div>
                <div className="app-container-row">
                    <TemplateGallery onTemplateSelected={this.onTemplateSelected} />
                </div>
                {pdfSettings}
            </div>);
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('app'));
