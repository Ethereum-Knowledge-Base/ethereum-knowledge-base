import React from 'react'
import Layout from '../components/Layout'
import { Hero, WhatIsWeb3 } from '../chapters'

const sections = [...Hero, ...WhatIsWeb3]

const IndexPage = () => <Layout sections={sections} />

export default IndexPage
