import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/Index'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = (props) => {
  const {
    match: {
      params: { id }
    }
  } = props
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.match.params.id === props.match.params.id
})
