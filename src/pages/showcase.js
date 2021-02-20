import React from "react"
import Layout from "../components/layout"

const Grid = props => (
  <div>
    <img width="250" height="250" src={props.site} alt={props.description} />
  </div>
)

export default function Test() {
  return (
    <Layout>
      <h1>Showcase</h1>
      <Grid
        site="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        description="sample"
      />
    </Layout>
  )
}
