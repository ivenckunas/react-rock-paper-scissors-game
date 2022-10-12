import React from 'react'

function PhotosBackgroundChange({ photo }) {

  function bgChange(id) {
    if (id > 0 && id < 10) {
      return "green"
    } else {
      return "yellow"
    }

  }
  return (
    <div style={{ backgroundColor: bgChange(photo.id) }}
    > {photo.id}</div >
  )
}

export default PhotosBackgroundChange

// if photo id is less than 20, card background is green
// more than 20, but less than 50, yellow
// more than 50, less than 100 orange
// more than 100 red