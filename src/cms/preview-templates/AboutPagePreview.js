import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  console.log(data);

  if (data) {
    return (
      <AboutPageTemplate
        data={{
          experiencia: data.experiencia || '',
          noQueAcredito1: data.noQueAcredito1 || '',
          noQueAcredito2: data.noQueAcredito2 || '',
          noQueAcredito3: data.noQueAcredito3 || '',
          noQueAcreditoImg: data.noQueAcreditoImg || {}
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview
