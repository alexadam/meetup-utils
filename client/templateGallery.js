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
            type: 'multiline-text',
            value: 'Meetup Name',
            id: 'meetupName',
            include: true,
            graphic: {
                type: 'text',
                x: 10,
                y: 110,
                width: 270,
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
                y: 150,
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
    	subject: 'meetup info',
    	author: 'meetup-utils',
    	keywords: 'kw1, kw2',
    	creator: 'meetup-utils'
    },
    previewUrl: '/client/assets/previews/1.jpeg'
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
            type: 'multiline-text',
            value: 'Meetup Name',
            id: 'meetupName',
            include: true,
            graphic: {
                type: 'text',
                x: 10,
                y: 100,
                width: 270,
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
            type: 'multiline-text',
            value: 'Event Name',
            id: 'eventName',
            include: true,
            graphic: {
                type: 'text',
                x: 10,
                y: 135,
                width: 270,
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
                y: 155,
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
    	subject: 'meetup and event info',
    	author: 'meetup-utils',
    	keywords: 'kw1, kw2',
    	creator: 'meetup-utils'
    },
    previewUrl: '/client/assets/previews/2.jpeg'
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
            type: 'multiline-text',
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
            type: 'multiline-text',
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
    	subject: 'directions right',
    	author: 'meetup-utils',
    	keywords: 'kw1, kw2',
    	creator: 'meetup-utils'
    },
    previewUrl: '/client/assets/previews/d1.jpeg'
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
            type: 'multiline-text',
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
            type: 'multiline-text',
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
    	subject: 'directions left',
    	author: 'meetup-utils',
    	keywords: 'kw1, kw2',
    	creator: 'meetup-utils'
    },
    previewUrl: '/client/assets/previews/d4.jpeg'
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
            type: 'multiline-text',
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
            type: 'multiline-text',
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
    	subject: 'directions top',
    	author: 'meetup-utils',
    	keywords: 'kw1, kw2',
    	creator: 'meetup-utils'
    },
    previewUrl: '/client/assets/previews/d2.jpeg'
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
            type: 'multiline-text',
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
            type: 'multiline-text',
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
    	subject: 'directions down',
    	author: 'meetup-utils',
    	keywords: 'kw1, kw2',
    	creator: 'meetup-utils'
    },
    previewUrl: '/client/assets/previews/d3.jpeg'
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
            type: 'multiline-text',
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
            include: true,
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
    	subject: 'info wifi',
    	author: 'meetup-utils',
    	keywords: 'kw1, kw2',
    	creator: 'meetup-utils'
    },
    previewUrl: '/client/assets/previews/w1.jpeg'
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
            type: 'multiline-text',
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
            type: 'multiline-text',
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
    	subject: 'info wifi large',
    	author: 'meetup-utils',
    	keywords: 'kw1, kw2',
    	creator: 'meetup-utils'
    },
    previewUrl: '/client/assets/previews/w2.jpeg'
}

const addressInfo = {
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
            type: 'multiline-text',
            value: 'Meetup Name',
            id: 'meetupName',
            include: true,
            graphic: {
                type: 'text',
                x: 150,
                y: 35,
                width: 150,
                height: 35,
                wrapText: true,
                fontSize: 40,
                fontFamily: 'helvetica',
                fontStyle: 'bold',
                centerText: true
            }
        },
        {
            label: 'Event Name',
            type: 'multiline-text',
            value: 'Event Name',
            id: 'eventName',
            include: true,
            graphic: {
                type: 'text',
                x: 10,
                y: 80,
                width: 125,
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
                x: 55,
                y: 160,
                width: 30,
                height: 30,
            }
        },
        {
            label: 'Event Location',
            type: 'multiline-text',
            value: 'Address',
            id: 'eventLocation',
            include: true,
            graphic: {
                type: 'text',
                x: 150,
                y: 80,
                width: 125,
                height: 35,
                wrapText: true,
                fontSize: 30,
                fontFamily: 'helvetica',
                fontStyle: 'normal',
                centerText: true
            }
        },
        {
            label: 'Map QR Code',
            type: 'text',
            value: 'https://www.openstreetmap.org',
            id: 'meetupMapQR',
            include: true,
            graphic: {
                type: 'qr',
                x: 210,
                y: 160,
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
    	subject: 'meetup address',
    	author: 'meetup-utils',
    	keywords: 'kw1, kw2',
    	creator: 'meetup-utils'
    },
    previewUrl: '/client/assets/previews/3.jpeg'
}

const nameCards = {
    meetupData: [
        {
            label: 'Meetup Logo',
            type: 'image',
            value: '/client/assets/meetup-logo-300.png',
            id: 'meetupLogo',
            include: true,
            graphic: {
                type: 'image',
                x: 10,
                y: 10,
                width: 35,
                height: 12,
                centerHorizontal: false,
                centerVertical: false,
            }
        },
        {
            label: 'Participant Name',
            type: 'text',
            value: 'Participant Name',
            id: 'participantName',
            include: true,
            graphic: {
                type: 'text',
                x: 10,
                y: 35,
                width: 70,
                height: 35,
                wrapText: true,
                fontSize: 20,
                fontFamily: 'helvetica',
                fontStyle: 'bold',
                centerText: false
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
                y: 50,
                width: 70,
                height: 35,
                wrapText: true,
                fontSize: 20,
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
        repeat: [3, 3]
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
                <div className="TemplateThumb landscape effect">
                    <img src={this.props.templateData.previewUrl} alt=""/>
                </div>
            </div>
        )
    }
}

import MeetupAPI from './meetupApi'


export default class TemplateGallery extends React.Component {

    state = {
        templateSelected: null
    }

    onTemplateSelected = (templateData) => {
        templateData.id = Math.floor(Math.random() * 1000000)
        this.setState({
            templateSelected: templateData
        }, () => {
            this.props.onTemplateSelected(templateData)
        })

    }

    selectOtherTemplate = () => {
        this.setState({
            templateSelected: null
        }, () => {
            this.props.onTemplateSelected(null)
        })
    }


    render = () => {

        if (this.state.templateSelected) {
            /*
            <div className="TemplateGalleryRow">
                <MeetupAPI />
            </div>
            */
            return (
                <div className="TemplateGallery">
                    <div className="TemplateGalleryRow TemplateGalleryRow-BackButton">
                        <button className="SpecialButton" onClick={this.selectOtherTemplate}>&larr; Select a different template</button>
                    </div>
                </div>
            )
        }

        // <div className="TemplateGalleryRow">
        //     <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={nameCards} />
        // </div>
        return (
            <div className="TemplateGallery">
                <div className="mtu-header">
                    <div className="mtu-text">Select a template:</div>
                </div>
                <div className="TemplateGalleryRow">
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={generalInfo} />
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={generalInfo2} />
                    <TemplatePreview onTemplateSelected={this.onTemplateSelected} templateData={addressInfo} />
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
