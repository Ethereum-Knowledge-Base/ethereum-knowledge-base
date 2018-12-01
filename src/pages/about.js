import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import { colors } from '../styles'

const sections = [
  {
    title: 'About',
    bgColor: colors.lightGrey,
    dark: true,
    content: () => (
      <div>
        <h1>About</h1>
        <p>Welcome to About page</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    ),
  },
]

const AboutPage = () => <Layout sections={sections} />

export default AboutPage
