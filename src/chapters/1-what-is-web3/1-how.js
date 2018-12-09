import React from 'react'
import styled from 'styled-components'

import Image from '../../components/Image'
import howImg from '../../images/how.png'
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
    max-width: 470px;
    font-family: ${fonts.family.Eczar};
    line-height: 1;
  }

  p {
    width: 100%;
    max-width: 660px;
    color: #000000;
    font-family: ${fonts.family.OpenSans};
    font-size: ${fonts.size.h5};
  }
`
const How = {
  title: 'How We Got Here',
  bgColor: colors.white,
  dark: true,
  alignment: 'right',
}

How.content = () => (
  <SWrapper>
    <SContent align={How.alignment}>
      <div>
        <h1>{'How we got here'}</h1>
        <p>
          {
            'Going back to when the internet started, only email and simple static websites were possible. With the second version of the internet, we saw the the rise of web applications in the form of mobile apps and web platforms such as Facebook and Instagram. While a new era dawned upon society, we quickly became aware of the deeply flawed models that this internet was built upon. The second version of the internet, also known as Web 2.0, led to the centralisation of data on the internet and has subsequently come at the cost our digital freedom as well as our privacy.'
          }
        </p>
        <p>
          {
            'Web3 is the next generation of websites and applications built on top of blockchain technologies. This current technology powers the cryptocurrency: Bitcoin as well as other decentralised computing platforms such as Ethereum. As a user, web3 products allows the you to completely own and control your own data, preventing it to be leaked and compromised by internet companies. And this happens through the magic of cryptography and mathematics.'
          }
        </p>
      </div>
    </SContent>
    <SBackground align={How.alignment}>
      <SImage src={howImg} maxWidth={850} alt="How we got here" />
    </SBackground>
  </SWrapper>
)

export default How
