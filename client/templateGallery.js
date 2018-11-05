import React from 'react'

export default class TemplateGallery extends React.Component {

    render = () => {

        return (
            <div className="TemplateGallery">
                <div className="TemplateGalleryRow">
                    <div className="TemplateThumb landscape effect2"></div>
                    <div className="TemplateThumb landscape effect6"></div>
                    <div className="TemplateThumb portrait"></div>
                    <div className="TemplateThumb portrait"></div>
                </div>
                <div className="TemplateGalleryRow">
                    <div className="TemplateThumb landscape"></div>
                    <div className="TemplateThumb landscape"></div>
                    <div className="TemplateThumb portrait"></div>
                    <div className="TemplateThumb portrait"></div>
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
