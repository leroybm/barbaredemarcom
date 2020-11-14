import React from 'react'
import PropTypes from 'prop-types'
import { TerapiaDeCasal } from '../../templates/terapia-de-casal'

const TerapiaDeCasalPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <TerapiaDeCasal
        data={data}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

TerapiaDeCasalPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TerapiaDeCasalPreview
