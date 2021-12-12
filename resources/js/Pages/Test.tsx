import React from 'react'
import Layout from '../Components/Layout'

interface iTestProps {
  name?: string
}
const Test: React.FC<iTestProps> = ({ name }: iTestProps) => (
  <Layout>
    <div className="text-xl bg-white p-6 rounded">Hello {name || 'World!'}</div>
  </Layout>
)

export default Test
