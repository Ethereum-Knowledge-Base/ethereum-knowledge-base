import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Page 2</h1>
    <p>Here you will find more great stuff</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
