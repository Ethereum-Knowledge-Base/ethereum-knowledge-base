import React from 'react'
import styled from 'styled-components'

import { colors, transitions } from '../../styles'

const SHeaderContainerRight = styled.div`
  position: absolute;
  pointer-events: auto;
  padding: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  right: 0;
  flex-direction: column;
  opacity: ${({ show }) => (show ? '1' : '0')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
`

const SHeaderSectionDot = styled.div`
  transition: ${transitions.base};
  border-radius: 50%;
  margin: 20px 0;
  height: ${({ active }) => (active ? `12px` : `5px`)};
  width: ${({ active }) => (active ? `12px` : `5px`)};
  border: ${({ active, dark }) =>
    active
      ? `4px solid rgb(${dark ? colors.dark : colors.white})`
      : `0 solid rgb(${dark ? colors.dark : colors.white})`};
  background-color: ${({ active, dark }) =>
    active ? 'transparent' : `rgb(${dark ? colors.dark : colors.white})`};
`

const HeaderRight = ({ dark, sectionCount, activeIndex }) => {
  let dots = []
  for (let i = 0; i < sectionCount; i++) {
    dots.push(i)
  }
  return (
    <SHeaderContainerRight show={dots.length > 1}>
      {dots.map((n, idx) => (
        <SHeaderSectionDot
          key={`dot-${idx}`}
          dark={dark}
          active={idx === activeIndex}
        />
      ))}
    </SHeaderContainerRight>
  )
}

export default HeaderRight
