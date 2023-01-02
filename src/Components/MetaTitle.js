import React from 'react'
import { Helmet } from 'react-helmet'

const MetaTitle = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title ? `${props.title}` : 'Splat Studio'}</title>
      </Helmet>
    </>
  )
}

export default MetaTitle
