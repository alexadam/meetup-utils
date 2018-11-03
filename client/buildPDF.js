import * as jsPDF from 'jspdf'
import * as Logos from './logos'
import canvg from 'canvg'
import QRious from 'qrious'

const  getTextWidth = (text, font) => {
    // TODO re-use canvas object for better performance
    let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    let context = canvas.getContext("2d");
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width;
}

const createPDFDoc = (orientation, format, width, height) => {
    return new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [297, 210]
    })
}

const center = (parentDimension, childDimension) => {
    if (childDimension >= parentDimension) {
        return 0
    }
    return (parentDimension - childDimension)/2
}

const centerHorizontal = (posterData, childData) => {
    if (typeof childData === 'number') {
        return center(posterData.width, childData)
    }
    if (childData.graphic.centerHorizontal) {
        return center(posterData.width, childData.graphic.width)
    }
    return childData.graphic.x
}

const centerVertical = (posterData, childData) => {
    if (typeof childData === 'number') {
        return center(posterData.height, childData)
    }
    if (childData.graphic.centerVertical) {
        return center(posterData.height, childData.graphic.height)
    }
    return childData.graphic.y
}

const addText = (doc, textData, posterData) => {
    let tmpText = textData.value
    let splitText = doc.splitTextToSize(tmpText, textData.graphic.width);
    // FIXME
    // let tmpFont = textData.graphic.fontWeight + ' ' +  textData.graphic.fontSize + 'px ' + textData.graphic.fontFamily
    // let smnSize = getTextWidth(splitText[0], tmpFont)

    doc.setFont(textData.graphic.fontFamily);
    doc.setFontSize(textData.graphic.fontSize);

    let offsetX = textData.graphic.x
    if (textData.graphic.centerHorizontal || textData.graphic.centerText) {
        let textWidth = doc.getStringUnitWidth(splitText[0]) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        offsetX = centerHorizontal(posterData, textWidth)
    }

    doc.text(splitText, offsetX, textData.graphic.y);
}

const addImage = (doc, imageData, posterData) => {
    let imgSrc = imageData.value
    if (imgSrc === 'meetup-logo') {
        imgSrc = Logos.MeetupPNGBase64Logo
    }
    let offsetX = centerHorizontal(posterData, imageData)
    let offsetY = centerVertical(posterData, imageData)

    doc.addImage(Logos.MeetupPNGBase64Logo, 'PNG',
        offsetX,
        offsetY,
        imageData.graphic.width,
        imageData.graphic.height);
}

const addQRCode = (doc, qrData, posterData) => {
    let qr = new QRious({
      value: qrData.value
    });
    let qrImage = qr.toDataURL();
    let offsetX = centerHorizontal(posterData, qrData)
    let offsetY = centerVertical(posterData, qrData)

    doc.addImage(qrImage, 'PNG',
        offsetX,
        offsetY,
        qrData.graphic.width,
        qrData.graphic.height);
}

export default (pdfData) => {

    let posterData = pdfData.posterData
    let doc = createPDFDoc(posterData.orientation, posterData.format, posterData.width, posterData.height)

    for (let item of pdfData.meetupData) {
        if (item.graphic.type === 'text') {
            addText(doc, item, pdfData.posterData)
        } else if (item.graphic.type === 'image') {
            addImage(doc, item, pdfData.posterData)
        } else if (item.graphic.type === 'qr') {
            addQRCode(doc, item, pdfData.posterData)
        }
    }

    doc.save('meetup.pdf')
}
