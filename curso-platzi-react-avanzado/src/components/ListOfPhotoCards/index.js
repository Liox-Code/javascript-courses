import React from 'react'
import { PhotoCard } from '../PhotoCard/Index'

export const ListOfPhotoCardsComponents = ({ data: { photos = [] } = {} }) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
