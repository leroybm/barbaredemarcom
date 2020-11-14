import React from 'react'
import PropTypes from 'prop-types'
import { TerapiaIndividualTemplate } from '../../templates/terapia-individual'

const TerapiaIndividualPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <TerapiaIndividualTemplate
        data={data}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

TerapiaIndividualPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TerapiaIndividualPreview
