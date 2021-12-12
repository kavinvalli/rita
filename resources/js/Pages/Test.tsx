import React from 'react'
import Layout from '../components/Layout'

interface iTestProps {
  name?: string
}
const Test: React.FC<iTestProps> = ({ name }: iTestProps) => (
  <Layout>
    <div className="text-xl bg-white p-6 rounded">
      Hello <strong>{name || 'World!'}</strong>
    </div>
  </Layout>
)

export default Test
