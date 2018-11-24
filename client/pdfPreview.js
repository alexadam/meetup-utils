import React from 'react'
import { Document, Page } from 'react-pdf';


export default class PDFPreview extends React.Component {

    state = {
        pageWidth: 780
    }

    onDocumentLoadSuccess = () => {}
    onRender = () => {
        let el = document.getElementById('PDFPreview')
        if (this.props.inPopUp) {
            el = document.getElementById('mtu-PopUp')
        }
        let bbp = el.getBoundingClientRect()
        
        this.setState({
            pageWidth: bbp.width - bbp.width/20
        })
    }

    render = () => {

        if (!this.props.data) {
            return null
        }

        let el = document.getElementById('appContainer')
        let bbox = el.getBoundingClientRect()

        if (bbox.width < 600 && !this.props.inPopUp) {
            return null
        }

        return (
            <div id="PDFPreview">
                <Document
                  file={this.props.data}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page pageNumber={1} width={this.state.pageWidth} onRenderSuccess={this.onRender}/>
                </Document>
            </div>
        )
    }
}
