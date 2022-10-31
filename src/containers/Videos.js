import React from 'react'
import "./Videos.css";

function Videos({match}) {
  return (
    <div>
       <iframe
          width="100%"
          src={`https://www.youtube.com/embed/${match.params.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
    </div>
  )
}

export default Videos