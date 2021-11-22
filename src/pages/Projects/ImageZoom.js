import React from 'react'

function ImageZoom({ zoom, src, alt, background }) {
    const zoomRef = React.useRef(zoom.clone({ background }))

    function attachZoom(image) {
    zoomRef.current.attach(image)
    }

    return <img style={{zIndex:100}} src={src} alt={alt} ref={attachZoom} />
}

export default ImageZoom