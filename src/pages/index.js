import React from 'react'

import Layout from '../components/Layout'
import { colors } from '../styles'

const loremIpsum =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

const sections = [
  {
    title: 'FirsSection',
    bgColor: colors.blue,
    dark: false,
    content: () => (
      <div>
        <h1>FirstSection</h1>
        <p>{loremIpsum}</p>
      </div>
    ),
  },
  {
    title: 'SecondSection',
    bgColor: colors.cream,
    dark: true,
    content: () => (
      <div>
        <h1>SecondSection</h1>
        <p>{loremIpsum}</p>
      </div>
    ),
  },
  {
    title: 'ThirdSection',
    bgColor: colors.pink,
    dark: false,
    content: () => (
      <div>
        <h1>ThirdSection</h1>
        <p>{loremIpsum}</p>
      </div>
    ),
  },
]

const IndexPage = () => <Layout sections={sections} />

export default IndexPage
