import React from 'react'
import styled from 'styled-components'

import Image from '../../components/Image'
import doorImg from '../../images/door.png'
import { colors, fonts, responsive } from '../../styles'

const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (${responsive.sm.min}) {
    display: block;
  }
`

const SBackground = styled.div`
  display: flex;
  justify-content: ${({ align }) =>
    align === 'left' ? 'flex-end' : 'flex-start'};
  align-items: center;
  z-index: -1;

  @media screen and (${responsive.sm.min}) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const SImage = styled(Image)`
  max-width: 100%;

  @media screen and (${responsive.sm.min}) {
    margin-right: 10vw;
    max-width: 60vw;
  }
`

const SContent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === 'left' ? 'flex-start' : 'flex-end')};
  justify-content: center;

  h1 {
    font-family: ${fonts.family.Eczar};
    font-weight: ${fonts.weight.extrabold};
    font-size: 25vw;
    line-height: 0.833em;
    margin: 0;
  }

  @media screen and (${responsive.sm.min}) {
    margin: 0;

    h1 {
      font-size: 12.7vw;
      line-height: 0.833em;
    }
  }

  @media screen and (${responsive.xl.min}) {
    h1 {
      font-size: 178px;
      line-height: 0.833em;
    }
  }
`

const Hero = {
  title: 'Hero',
  bgColor: colors.blue,
  dark: false,
  alignment: 'left',
}

Hero.content = () => (
  <SWrapper>
    <SContent align={Hero.alignment}>
      <div>
        <h1>{'Learn'}</h1>
        <h1>{'Web3.'}</h1>
      </div>
    </SContent>
    <SBackground align={Hero.alignment}>
      <SImage src={doorImg} maxWidth={850} alt="Hero" />
    </SBackground>
  </SWrapper>
)

export default Hero
