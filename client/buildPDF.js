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

const createPDFDoc = (orientation, format, width, height, unit) => {
    return new jsPDF({
      orientation: orientation,
      unit: unit,
      format: format
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
    // let splitText = doc.splitTextToSize(tmpText, textData.graphic.width / textData.graphic.fontSize * 20); // FIXME
    let splitText = doc.splitTextToSize(tmpText, textData.graphic.width); // FIXME

    let maxVal = 0
    let maxIndex = 0
    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i].length > maxVal) {
            maxVal = splitText[i].length
            maxIndex = i
        }
    }
    // FIXME
    // let tmpFont = textData.graphic.fontWeight + ' ' +  textData.graphic.fontSize + 'px ' + textData.graphic.fontFamily
    // let smnSize = getTextWidth(splitText[0], tmpFont)

    doc.setFont(textData.graphic.fontFamily);
    doc.setFontSize(textData.graphic.fontSize);
    doc.setFontStyle(textData.graphic.fontStyle);

    // pdf.textAlign("text", {align: "center"}, x, y);
    let offsetX = textData.graphic.x
    if (textData.graphic.centerHorizontal || textData.graphic.centerText) {
        let textWidth = doc.getStringUnitWidth(splitText[maxIndex]) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        console.log(textWidth, textData.graphic.width, 'yuyuyuyu');
        if (textWidth <= textData.graphic.width) {
            offsetX = offsetX + (textData.graphic.width - textWidth )/ 2
        }
        // offsetX += center(textData.graphic.width, textWidth)
        // offsetX += centerHorizontal(posterData, textWidth)
    }

    doc.text(splitText, offsetX, textData.graphic.y, center);
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

const addSVG = (doc, svgData, posterData) => {
    let canvasElem = document.createElement('canvas')
    canvg(canvasElem, svgData.value);
    let imgData = canvasElem.toDataURL("image/png");

    let offsetX = centerHorizontal(posterData, svgData)
    let offsetY = centerVertical(posterData, svgData)

    doc.addImage(imgData, 'PNG',
        offsetX,
        offsetY,
        svgData.graphic.width,
        svgData.graphic.height);
}

function prepareDoc(pdfData, onDocReady) {
    let posterData = pdfData.posterData
    let doc = createPDFDoc(posterData.orientation, posterData.format, posterData.width, posterData.height, posterData.unit)

    doc.setProperties(pdfData.documentProperties);

    // for cards
    // if (pdfData.posterData.repeat) {
    //     let repeatX = pdfData.posterData.repeat[0]
    //     let repeatXDim = pdfData.posterData.width / pdfData.posterData.repeat[0]
    //     let repeatY = pdfData.posterData.repeat[1]
    //     let repeatYDim = pdfData.posterData.height / pdfData.posterData.repeat[1]
    //     let tmpNewData = []
    //     for (let item of pdfData.meetupData) {
    //         for (let i = 0; i < repeatX; i++) {
    //             for (let j = 0; j < repeatY; j++) {
    //                 if (i === 0 && j === 0) { // firstElem
    //                     continue
    //                 }
    //                 let tmpElem = JSON.parse(JSON.stringify(item))
    //                 tmpElem.graphic.x += repeatXDim * i
    //                 tmpElem.graphic.y += repeatYDim * j
    //                 tmpElem.id = item.id + i + '-' + j + Math.floor(Math.random()*100000)
    //                 tmpNewData.push(tmpElem)
    //             }
    //         }
    //     }
    //     pdfData.meetupData = pdfData.meetupData.concat(tmpNewData)
    // }

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
            } else if (item.graphic.type === 'svg') {
                addSVG(doc, item, pdfData.posterData)
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
