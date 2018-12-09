import React from 'react'
import styled from 'styled-components'

import Image from '../../components/Image'
import plantTriangleMerged from '../../images/plant-triangle-merged.png'
import { colors, fonts, responsive } from '../../styles'

const SIntroductionWrapper = styled.div`
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

const SIntroductionBackground = styled.div`
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

const SIntroductionImage = styled(Image)`
  max-width: 100%;

  @media screen and (${responsive.sm.min}) {
    margin-left: 7vw;
    max-width: 60vw;
  }
`

const SIntroductionContent = styled.div`
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

const SIntroductionText = styled.div`
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

const Introduction = {
  title: 'Introduction',
  bgColor: colors.cream,
  dark: true,
  content: () => (
    <SIntroductionWrapper>
      <SIntroductionContent>
        <SIntroductionText>
          <h1>{'What is this new internet about?'}</h1>
          <div>{'Web3.'}</div>
        </SIntroductionText>
      </SIntroductionContent>
      <SIntroductionBackground align={'center'}>
        <SIntroductionImage
          src={plantTriangleMerged}
          maxWidth={850}
          alt="New Internet"
        />
      </SIntroductionBackground>
    </SIntroductionWrapper>
  ),
}

export default Introduction
