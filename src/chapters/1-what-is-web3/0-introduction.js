import React from 'react'
import styled from 'styled-components'

import Image from '../../components/Image'
import plantImg from '../../images/plant-triangle-merged.png'
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
    margin-left: -3vw;
    max-width: 60vw;
  }

  @media screen and (${responsive.lg.min}) {
    max-width: 615px;
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
    width: 100%;
    max-width: 380px;
    font-family: ${fonts.family.Eczar};
    line-height: 1;
  }

  p {
    width: 100%;
    max-width: 660px;

    font-family: ${fonts.family.OpenSans};
    font-size: ${fonts.size.h5};
  }
`

const Introduction = {
  title: 'Introduction',
  bgColor: colors.cream,
  dark: true,
  alignment: 'left',
}

Introduction.content = () => (
  <SWrapper>
    <SContent align={Introduction.alignment}>
      <div>
        <h1>{'What is this new internet about?'}</h1>
        <p>
          {
            'You have probably heard of Bitcoin, Ethereum, the concept of cryptocurrencies as well as smart contracts. And while on the surface, yes - they are another form of digital money, they are technologies that belong to a movement that is working towards building a new version of the internet that will bring bring greater digital liberty to each and every one of us.'
          }
        </p>
      </div>
    </SContent>
    <SBackground align={Introduction.alignment}>
      <SImage src={plantImg} maxWidth={850} alt="Introduction" />
    </SBackground>
  </SWrapper>
)

export default Introduction
