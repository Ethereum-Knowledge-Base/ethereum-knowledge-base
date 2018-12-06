import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Image from '../components/Image'
import doorImg from '../images/door.png'
import { colors, fonts } from '../styles'

const SHeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const SHeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`

const SHeroImage = styled(Image)`
  margin-left: 100px;
`

const SHeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1;
`

const SHeroText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Eczar;
  font-size: 180px;
  font-weight: 800;
  line-height: 150px;
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
            <span>{'Learn'}</span>
            <span>{'Web3.'}</span>
          </SHeroText>
        </SHeroContent>
        <SHeroBackground>
          <SHeroImage src={doorImg} maxWidth={850} alt="LW3" />
        </SHeroBackground>
      </SHeroWrapper>
    ),
  },
]

const IndexPage = () => <Layout sections={sections} />

export default IndexPage
