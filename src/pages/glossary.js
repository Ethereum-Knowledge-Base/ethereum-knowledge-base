import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import { colors } from '../styles'

const sections = [
  {
    title: 'Glossary',
    bgColor: colors.green,
    dark: false,
    content: () => (
      <div>
        <h1>Glossary</h1>
        <p>Welcome to Glossary page</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    ),
  },
]

const GlossaryPage = () => <Layout sections={sections} />

export default GlossaryPage
