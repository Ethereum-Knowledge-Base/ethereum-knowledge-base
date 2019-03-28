import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { colors, fonts, responsive } from '../styles'

const SHeroWrapper = styled.div`
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

const SHeroBackground = styled.div`
  display: flex;
  justify-content: ${({ align }) => align};
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

const SAboutText = styled.div`
  width: 100%;
  @media screen and (${responsive.sm.min}) {
    width: 50%;
    font-family: ${fonts.family.Eczar};
    font-weight: ${fonts.weight.semibold};
    font-size: ${fonts.size.h3};
  }
`

const SHeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1;
  margin: 40px auto;

  @media screen and (${responsive.sm.min}) {
    margin: 0;
    height: 100%;
  }
`

const SHeroText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${fonts.family.Eczar};
  font-weight: ${fonts.weight.extrabold};
  font-size: 25vw;
  line-height: 0.833em;

  @media screen and (${responsive.sm.min}) {
    font-size: 12.7vw;
    line-height: 0.833em;
  }

  @media screen and (${responsive.xl.min}) {
    font-size: 178px;
    line-height: 0.833em;
  }
`

const sections = [
  {
    title: 'About',
    bgColor: colors.blue,
    dark: false,
    content: () => (
      <SHeroWrapper>
        <SHeroContent>
          <SHeroText>
            <div>{'Learn'}</div>
            <div>{'Web3.'}</div>
          </SHeroText>
        </SHeroContent>
        <SHeroBackground align={'flex-end'}>
          <SAboutText>
            <div>
              {
                'LearnWeb3 is a hub for curated educational content that answers frequently asked questions about Web3 Technologies, Blockchain and Ethereum in an interactive and user-friendly approach'
              }
            </div>
          </SAboutText>
        </SHeroBackground>
      </SHeroWrapper>
    ),
  },
]

const AboutPage = () => <Layout sections={sections} />

export default AboutPage
