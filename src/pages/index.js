import React from 'react'
import Layout from '../components/Layout'
import chapters from '../chapters'

const sections = [...chapters.Hero, ...chapters.WhatIsWeb3]

const IndexPage = () => <Layout sections={sections} />

export default IndexPage
