import React from 'react'

const templates = {
    categories: [
        {
            name: 'general',
            templates: [

            ]
        }
    ]
}


const generalInfo = {
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
            value: 'Meetup Name',
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
                fontStyle: 'normal',
                centerText: true
            }
        },
        {
            label: 'QR Code',
            type: 'text',
            value: 'https://www.meetup.com',
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

const generalInfo2 = {
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
            value: 'Meetup Name',
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
                fontStyle: 'normal',
                centerText: true
            }
        },
        {
            label: 'Event Name',
            type: 'text',
            value: 'Event Name',
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
                fontStyle: 'normal',
                centerText: true
            }
        },
        {
            label: 'QR Code',
            type: 'text',
            value: 'https://www.meetup.com',
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

const directionsLeft = {
    meetupData: [
        {
            label: 'Meetup Logo',
            type: 'image',
            value: '/client/assets/meetup-logo-300.png',
            id: 'meetupLogo',
            include: true,
            graphic: {
                type: 'image',
                x: 50,
                y: 50,
                width: 75,
                height: 25,
                centerHorizontal: false,
                centerVertical: false,
            }
        },
        {
            label: 'Meetup Name',
            type: 'text',
            value: 'Meetup Name',
            id: 'meetupName',
            include: true,
            graphic: {
                type: 'text',
                x: 20,
                y: 120,
                width: 130,
                height: 35,
                wrapText: true,
                fontSize: 40,
                fontFamily: 'helvetica',
                fontStyle: 'bold',
                centerText: true
            }
        },
        {
            label: 'QR Code',
            type: 'text',
            value: 'https://www.meetup.com',
            id: 'meetupQR',
            include: true,
            graphic: {
                type: 'qr',
                x: 75,
                y: 160,
                width: 30,
                height: 30,
            }
        },
        {
            type: 'svg',
            value: '<svg width="500px" height="500px" viewBox="0 0 100 100"><polyline fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="5,30 70,30 70,10 95,50 70,90 70,70 5,70 5,30 "/></svg>',
            id: 'svgArrow',
            include: true,
            graphic: {
                type: 'svg',
                x: 160,
                y: 50,
                width: 100,
                height: 100,
            }
        },
        {
            label: 'Arrow Text',
            type: 'text',
            value: '',
            id: 'arrowText',
            include: false,
            graphic: {
                type: 'text',
                x: 120,
                y: 160,
                width: 130,
                height: 35,
                wrapText: true,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontStyle: 'normal',
                centerText: true
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

class TemplatePreview extends React.Component {

    onClick = () => {
        this.props.onTemplateSelected(this.props.templateData)
    }

    render = () => {
        return (
            <div className="TemplatePreview" onClick={this.onClick}>
                <div className="TemplateThumb landscape effect2"></div>
            </div>
        )
    }
}

export default class TemplateGallery extends React.Component {

    onTemplateSelected = (templateData) => {
        this.props.onTemplateSelected(templateData)
    }

    render = () => {

        return (
            <div className="TemplateGallery">
                <div className="TemplateGalleryRow">
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={generalInfo} />
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={generalInfo2} />
                </div>
                <div className="TemplateGalleryRow">
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={directionsLeft} />
                </div>
                <div className="TemplateGalleryRow">
                    <div className="TemplateThumb landscape"></div>
                    <div className="TemplateThumb landscape"></div>
                    <div className="TemplateThumb portrait"></div>
                    <div className="TemplateThumb portrait"></div>
                </div>
            </div>
        )
    }
}
