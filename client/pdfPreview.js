import React from 'react'

export default class PDFPreview extends React.Component {

    render = () => {

        if (!this.props.data) {
            return null
        }

        let el = document.getElementById('appContainer')
        let bbox = el.getBoundingClientRect()

        if (bbox.width <= 1100 && !this.props.inPopUp) {
            return null
        }

        return (
            <div id="PDFPreview">
                <div className='mtu-preview-label'>Preview:</div>
                <object className="pdf-preview-obj" data={this.props.data} type="application/pdf">
                    <embed className="pdf-preview-embed" src={this.props.data} type="application/pdf" />
                </object>

            </div>
        )
    }
}
