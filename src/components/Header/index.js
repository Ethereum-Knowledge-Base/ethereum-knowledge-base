import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HeadTag from './HeadTag'
import HeaderTop from './HeaderTop'
import HeaderRight from './HeaderRight'

const SHeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: none;
  z-index: 1000;
  backface-visibility: hidden;
`

const SHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  pointer-events: none;
`

const Header = ({ activeIndexTop, activeIndexRight, sections }) => (
  <>
    <HeadTag />
    <SHeaderWrapper>
      <SHeaderContainer>
        <HeaderRight
          dark={sections[activeIndexRight].dark}
          sectionCount={sections.length}
          activeIndex={activeIndexRight}
        />
        <HeaderTop dark={sections[activeIndexTop].dark} />
      </SHeaderContainer>
    </SHeaderWrapper>
  </>
)

Header.propTypes = {
  activeIndexTop: PropTypes.number.isRequired,
  activeIndexRight: PropTypes.number.isRequired,
  sections: PropTypes.array.isRequired,
  dark: PropTypes.bool,
}

Header.defaultProps = {
  dark: false,
}
export default Header
