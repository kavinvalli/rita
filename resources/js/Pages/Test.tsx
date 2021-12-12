import React from 'react'

interface iTestProps {
  name?: string
}
const Test: React.FC<iTestProps> = ({ name }: iTestProps) => <div>Hello {name || 'World!'}</div>

export default Test
