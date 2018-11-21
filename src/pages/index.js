import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <h1>Welcome!</h1>
    <p>"Hub for all education resources around Ethereum</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
