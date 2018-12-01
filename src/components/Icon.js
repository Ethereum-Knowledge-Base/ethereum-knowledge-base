import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../styles'

const SIconWrapper = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`

const SIcon = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => `rgb(${colors[color]})`};
  mask: ${({ icon }) => `url(${icon}) center no-repeat`};
  mask-image: ${({ icon }) => `url(${icon}) center no-repeat`};
  mask-size: 100%;
`

const Icon = ({ icon, color, size, ...props }) => (
  <SIconWrapper size={size} {...props}>
    <SIcon color={color} icon={icon} />
  </SIconWrapper>
)

export default Icon
