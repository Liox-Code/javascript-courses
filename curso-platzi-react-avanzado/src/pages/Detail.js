import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = (props) => {
  const {
    match: {
      params: { detailId }
    }
  } = props
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
