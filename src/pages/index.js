import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Image from '../components/Image'
import doorImg from '../images/door.png'
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

const SHeroImage = styled(Image)`
  max-width: 100%;

  @media screen and (${responsive.sm.min}) {
    margin-left: 7vw;
    max-width: 60vw;
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
    title: 'Hero',
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
        <SHeroBackground align={'center'}>
          <SHeroImage src={doorImg} maxWidth={850} alt="Welcome to Web3" />
        </SHeroBackground>
      </SHeroWrapper>
    ),
  },
]

const IndexPage = () => <Layout sections={sections} />

export default IndexPage
