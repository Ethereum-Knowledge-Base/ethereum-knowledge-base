import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../styles'

const SSectionWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  color: ${({ dark }) => `rgb(${dark ? colors.dark : colors.white})`};
  background-color: ${({ bgColor }) => `rgb(${bgColor})`};
`

const SSection = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1400px;
  padding: 70px 35px;
`

const Section = ({ children, active, dark, bgColor }) => {
  if (active) {
    if (typeof window !== 'undefined') {
      document.body.style.background = `rgb(${bgColor})`
    }
  }
  return (
    <SSectionWrapper dark={dark} bgColor={bgColor}>
      <SSection>{children}</SSection>
    </SSectionWrapper>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  active: PropTypes.bool,
  bgColor: PropTypes.string,
}

Section.defaultProps = {
  dark: false,
  active: false,
  bgColor: 'transparent',
}

export default Section
