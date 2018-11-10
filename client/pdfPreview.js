import React from 'react'
import { Document, Page } from 'react-pdf';


export default class PDFPreview extends React.Component {

    onDocumentLoadSuccess = () => {}

    render = () => {

        if (!this.props.data) {
            return null
        }
        return (
            <div className="PDFPreview">
                <Document
                  file={this.props.data}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page pageNumber={1} />
                </Document>
              </div>
        )
    }
}
