import * as jsPDF from 'jspdf'
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

    // pdf.textAlign("text", {align: "center"}, x, y);
    let offsetX = textData.graphic.x
    if (textData.graphic.centerHorizontal || textData.graphic.centerText) {
        let textWidth = doc.getStringUnitWidth(splitText[0]) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        offsetX = centerHorizontal(posterData, textWidth)
    }

    doc.text(splitText, offsetX, textData.graphic.y);
}

const getImageDataURL = (imgSrc, callback) => {
    let image = new Image();

    image.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        canvas.getContext('2d').drawImage(image, 0, 0);
        callback(canvas.toDataURL('image/png'));
    };

    image.src = imgSrc;
}

const addImage = (doc, imageData, posterData) => {
    return new Promise((resolve, reject)=>{
        getImageDataURL(imageData.value, (imgData) => {
                let offsetX = centerHorizontal(posterData, imageData)
                let offsetY = centerVertical(posterData, imageData)

                doc.addImage(imgData, 'PNG',
                    offsetX,
                    offsetY,
                    imageData.graphic.width,
                    imageData.graphic.height);

                    console.log('resolve');

                resolve()
        } )
    })
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

function prepareDoc(pdfData, onDocReady) {
    let posterData = pdfData.posterData
    let doc = createPDFDoc(posterData.orientation, posterData.format, posterData.width, posterData.height)

    doc.setProperties(pdfData.documentProperties);

    let allPromises = []

    // first add the images & remote data
    for (let item of pdfData.meetupData) {
        if (!item.include) {
            continue
        }
        if (item.graphic.type === 'image') {
            allPromises.push(addImage(doc, item, pdfData.posterData))
        }
    }

    Promise.all(allPromises).then(() => {
        for (let item of pdfData.meetupData) {
            if (!item.include) {
                continue
            }
            if (item.graphic.type === 'text') {
                addText(doc, item, pdfData.posterData)
            } else if (item.graphic.type === 'qr') {
                addQRCode(doc, item, pdfData.posterData)
            }
        }
        onDocReady(doc)
    })
}

function getPdfUrl(pdfData, onDocReady) {
    prepareDoc(pdfData, (doc) => onDocReady(doc.output('datauristring')))
}

function savePdf(pdfData) {
    prepareDoc(pdfData, (doc) => doc.save('meetup.pdf'))
}

export {getPdfUrl, savePdf}
