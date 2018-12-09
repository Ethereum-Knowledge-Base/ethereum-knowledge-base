import React from 'react'
import styled from 'styled-components'

import Image from '../../components/Image'
import web2Img from '../../images/web2.png'
import web3Img from '../../images/web3-merged.png'
import { colors, fonts } from '../../styles'

const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;

  display: flex;
  justify-content: space-around;
`

const SContent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'left'
      ? 'flex-start'
      : 'flex-end'};
  justify-content: center;

  h1 {
    width: 100%;
    max-width: 450px;

    font-family: ${fonts.family.Eczar};
    line-height: 1;
  }

  p {
    width: 100%;
    max-width: 450px;

    font-family: ${fonts.family.OpenSans};
    font-size: ${fonts.size.h5};
  }
`
const Web2VSWeb3 = {
  title: 'Web 2.0 vs Web 3.0',
  bgColor: colors.white,
  dark: true,
  alignment: 'right',
}

Web2VSWeb3.content = () => (
  <SWrapper>
    <SContent align={'center'}>
      <div>
        <Image src={web2Img} maxWidth={450} alt="Web 2.0" />
        <h1>{'Web 2.0'}</h1>
        <p>
          {
            'Web 2.0 are designed around central servers and databases where the your data is completely in the hands of companies such as Facebook and Google. While they may promise not to act maliciously, you can only ‘trust’ them to do so.'
          }
        </p>
      </div>
    </SContent>
    <SContent align={'center'}>
      <div>
        <Image src={web3Img} maxWidth={450} alt="Web 3.0" />
        <h1>{'Web 3.0'}</h1>
        <p>
          {
            'Web 3.0 is designed around a network of computers where the you are given full control and access of their data. While companies and authorities may use the data that you provide, in the end, they ultimately have no ownership and access over it.'
          }
        </p>
      </div>
    </SContent>
  </SWrapper>
)

export default Web2VSWeb3
