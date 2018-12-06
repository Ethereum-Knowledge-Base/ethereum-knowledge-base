import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SImg = styled.img`
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
`

const Image = ({ src, maxWidth, alt, ...props }) => (
  <SImg src={src} maxWidth={maxWidth} alt={alt} {...props} />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  maxWidth: PropTypes.number,
  alt: PropTypes.string,
}

Image.defaultProps = {
  maxWidth: 300,
  alt: 'Image',
}

export default Image
