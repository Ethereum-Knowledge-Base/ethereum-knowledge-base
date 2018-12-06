import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SImgWrapper = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
`

const SImg = styled.img`
  width: 100%;
`

const Image = ({ src, maxWidth, alt, ...props }) => (
  <SImgWrapper maxWidth={maxWidth} {...props}>
    <SImg src={src} alt={alt} />
  </SImgWrapper>
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
