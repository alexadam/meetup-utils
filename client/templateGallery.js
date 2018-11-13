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

const directionsRight = {
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
            value: '<svg width="500px" height="500px" viewBox="0 0 100 100"><polyline fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="5,35 60,35 60,10 95,50 60,90 60,65 5,65 5,35 "/></svg>',
            id: 'svgArrow',
            include: true,
            graphic: {
                type: 'svg',
                x: 170,
                y: 65,
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
                y: 170,
                width: 150,
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
                x: 160,
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
                x: 130,
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
                x: 185,
                y: 160,
                width: 30,
                height: 30,
            }
        },
        {
            type: 'svg',
            value: '<svg width="500px" height="500px" viewBox="0 0 100 100"><polyline transform="rotate(-180 50 50)" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="5,35 60,35 60,10 95,50 60,90 60,65 5,65 5,35 "/></svg>',
            id: 'svgArrow',
            include: true,
            graphic: {
                type: 'svg',
                x: 20,
                y: 65,
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
                x: 20,
                y: 180,
                width: 150,
                height: 35,
                wrapText: true,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontStyle: 'normal',
                centerText: false
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

const directionsTop = {
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
            value: '<svg width="500px" height="500px" viewBox="0 0 100 100"><polyline transform="rotate(-90 50 50)" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="5,35 60,35 60,10 95,50 60,90 60,65 5,65 5,35 "/></svg>',
            id: 'svgArrow',
            include: true,
            graphic: {
                type: 'svg',
                x: 170,
                y: 45,
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
                y: 170,
                width: 150,
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

const directionsDown = {
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
            value: '<svg width="500px" height="500px" viewBox="0 0 100 100"><polyline transform="rotate(90 50 50)" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="5,35 60,35 60,10 95,50 60,90 60,65 5,65 5,35 "/></svg>',
            id: 'svgArrow',
            include: true,
            graphic: {
                type: 'svg',
                x: 170,
                y: 45,
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
                y: 170,
                width: 150,
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


const miscInfoWiFi = {
    meetupData: [
        {
            label: 'Meetup Logo',
            type: 'image',
            value: '/client/assets/meetup-logo-300.png',
            id: 'meetupLogo',
            include: true,
            graphic: {
                type: 'image',
                x: 30,
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
                x: 5,
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
                x: 55,
                y: 160,
                width: 30,
                height: 30,
            }
        },
        {
            label: 'Label',
            type: 'text',
            value: 'Wi-Fi Network Name',
            id: 'label1',
            include: true,
            graphic: {
                type: 'text',
                x: 140,
                y: 65,
                width: 250,
                height: 35,
                wrapText: true,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontStyle: 'bold',
                centerText: false
            }
        },
        {
            label: 'Value',
            type: 'text',
            value: '',
            id: 'value1',
            include: false,
            graphic: {
                type: 'text',
                x: 160,
                y: 80,
                width: 200,
                height: 35,
                wrapText: true,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontStyle: 'normal',
                centerText: false
            }
        },
        {
            label: 'Label',
            type: 'text',
            value: 'Wi-Fi Network Password',
            id: 'label2',
            include: true,
            graphic: {
                type: 'text',
                x: 140,
                y: 130,
                width: 250,
                height: 35,
                wrapText: true,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontStyle: 'bold',
                centerText: false
            }
        },
        {
            label: 'Value',
            type: 'text',
            value: '',
            id: 'value2',
            include: true,
            graphic: {
                type: 'text',
                x: 160,
                y: 145,
                width: 200,
                height: 35,
                wrapText: true,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontStyle: 'normal',
                centerText: false
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

const miscInfoWiFiLarge = {
    meetupData: [
        {
            label: 'Meetup Logo',
            type: 'image',
            value: '/client/assets/meetup-logo-300.png',
            id: 'meetupLogo',
            include: true,
            graphic: {
                type: 'image',
                x: 30,
                y: 20,
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
                x: 150,
                y: 35,
                width: 130,
                height: 35,
                wrapText: false,
                fontSize: 40,
                fontFamily: 'helvetica',
                fontStyle: 'bold',
                centerText: false
            }
        },
        {
            label: 'Label',
            type: 'text',
            value: 'Wi-Fi Network Name',
            id: 'label1',
            include: true,
            graphic: {
                type: 'text',
                x: 20,
                y: 70,
                width: 500,
                height: 35,
                wrapText: true,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontStyle: 'bold',
                centerText: false
            }
        },
        {
            label: 'Value',
            type: 'text',
            value: '',
            id: 'value1',
            include: true,
            graphic: {
                type: 'text',
                x: 30,
                y: 90,
                width: 500,
                height: 35,
                wrapText: true,
                fontSize: 45,
                fontFamily: 'helvetica',
                fontStyle: 'normal',
                centerText: false
            }
        },
        {
            label: 'Label',
            type: 'text',
            value: 'Wi-Fi Network Password',
            id: 'label2',
            include: true,
            graphic: {
                type: 'text',
                x: 20,
                y: 120,
                width: 500,
                height: 35,
                wrapText: false,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontStyle: 'bold',
                centerText: false
            }
        },
        {
            label: 'Value',
            type: 'text',
            value: '',
            id: 'value2',
            include: true,
            graphic: {
                type: 'text',
                x: 30,
                y: 140,
                width: 500,
                height: 35,
                wrapText: true,
                fontSize: 45,
                fontFamily: 'helvetica',
                fontStyle: 'normal',
                centerText: false
            }
        },
        {
            label: 'Label',
            type: 'text',
            value: 'Other',
            id: 'label3',
            include: true,
            graphic: {
                type: 'text',
                x: 20,
                y: 170,
                width: 500,
                height: 35,
                wrapText: false,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontStyle: 'bold',
                centerText: false
            }
        },
        {
            label: 'Value',
            type: 'text',
            value: '',
            id: 'value3',
            include: true,
            graphic: {
                type: 'text',
                x: 30,
                y: 190,
                width: 500,
                height: 35,
                wrapText: true,
                fontSize: 45,
                fontFamily: 'helvetica',
                fontStyle: 'normal',
                centerText: false
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
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={directionsRight} />
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={directionsTop} />
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={directionsDown} />
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={directionsLeft} />
                </div>
                <div className="TemplateGalleryRow">
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={miscInfoWiFi} />
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={miscInfoWiFiLarge} />
                </div>
            </div>
        )
    }
}
