import React from 'react'
import styled from 'styled-components'

import Image from '../Image'
import Link from '../Link'
import Icon from '../Icon'
import lightLogo from '../../images/learn-web3-light.png'
import darkLogo from '../../images/learn-web3-dark.png'
import menuIcon from '../../images/menu.svg'
import { fonts, colors, transitions } from '../../styles'

const SHeaderContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  pointer-events: auto;
  padding: 35px;
  width: 100%;
  top: 0;
`

const SHeaderContainerTopLeft = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

const SHeaderContainerTopRight = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

const SLogo = styled(Image)`
  transition: ${transitions.base};
  opacity: ${({ show }) => (show ? '1' : '0')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
`

const SDarkLogo = styled(SLogo)`
  position: absolute;
`

const SLightLogo = styled(SLogo)`
  position: relative;
`

const SLink = styled(Link)`
  font-size: ${fonts.size.tiny};
  font-weight: ${fonts.weight.extrabold};
  text-transform: uppercase;
  margin-right: 50px;
  color: ${({ dark }) => `rgb(${dark ? colors.dark : colors.white})`};
`

const HeaderTop = ({ dark }) => (
  <SHeaderContainerTop>
    <SHeaderContainerTopLeft>
      <Link to="/">
        <>
          <SDarkLogo show={dark} src={darkLogo} maxWidth={50} alt="LW3" />
          <SLightLogo show={!dark} src={lightLogo} maxWidth={50} alt="LW3" />
        </>
      </Link>
    </SHeaderContainerTopLeft>
    <SHeaderContainerTopRight>
      <SLink dark={dark} to="/glossary">
        Glossary
      </SLink>
      <SLink dark={dark} to="/about">
        About
      </SLink>
      <Icon icon={menuIcon} color={dark ? 'dark' : 'white'} size={16} />
    </SHeaderContainerTopRight>
  </SHeaderContainerTop>
)

export default HeaderTop
