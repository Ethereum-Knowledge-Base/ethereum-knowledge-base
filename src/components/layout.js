import React, { Component } from 'react'
import styled from 'styled-components'

import Section from './Section'
import Header from './Header'

const SContent = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0;
  background-color: ${({ bgColor }) => bgColor};
`

class SectionController extends Component {
  state = {
    lastScrollTop: 0,
    activeIndexTop: 0,
    activeIndexRight: 0,
  }

  componentDidMount() {
    this.setActiveIndex()
    window.onscroll = this.setActiveIndex
  }

  setActiveIndex = () => {
    const { lastScrollTop } = this.state
    const { sections } = this.props
    const windowHeight = window.innerHeight
    const windowOffset = window.pageYOffset
    const direction = lastScrollTop < windowOffset ? 'up' : 'down'
    const sectionCount = sections.length
    const headerOffsetTop = 50
    const headerOffsetRight =
      direction === 'down'
        ? (windowHeight - sectionCount * 50) / 2
        : (windowHeight + sectionCount * 50) / 2
    let activeIndexTop = null
    let activeIndexRight = null
    for (let sectionIndex = 0; sectionIndex < sectionCount; sectionIndex++) {
      let sectionOffset = sectionIndex * windowHeight

      let sectionOffsetTop = sectionOffset - headerOffsetTop
      if (windowOffset >= sectionOffsetTop) {
        activeIndexTop = sectionIndex
      }

      let sectionOffsetRight = sectionOffset - headerOffsetRight
      if (windowOffset >= sectionOffsetRight) {
        activeIndexRight = sectionIndex
      }
    }
    this.setState({
      activeIndexTop,
      activeIndexRight,
      lastScrollTop: windowOffset,
    })
  }

  componentWillUnmount() {
    window.onscroll = null
  }

  render() {
    const { activeIndexTop, activeIndexRight } = this.state
    const { sections } = this.props
    return (
      <>
        <Header
          activeIndexTop={activeIndexTop}
          activeIndexRight={activeIndexRight}
          sections={sections}
        />

        <SContent>
          {sections.map(({ title, bgColor, content, dark }, idx) => (
            <Section
              key={title}
              bgColor={bgColor}
              dark={dark}
              active={idx === activeIndexTop}
            >
              {content()}
            </Section>
          ))}
        </SContent>
      </>
    )
  }
}

export default SectionController
