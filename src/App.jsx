import React from 'react'
import Fotter from './Sections/Fotter'
import Hero from './Sections/Hero'
import { Discover } from './Sections/Discover'
import Discover2 from './Sections/Discover2'
import Parameter from './Sections/Parameter'
import Grids from './Sections/Grids'
import Anything from './Sections/Anything'
import Paykart from './Sections/Paykart'
import Reward from './Sections/Reward'
const App = () => {
  return (
    <div>

      <Hero></Hero>
      <Discover></Discover>
      <Discover2></Discover2>
      <Parameter></Parameter>
      <Grids></Grids>
      <Anything></Anything>
      <Paykart></Paykart>
      <Reward></Reward>
      <Fotter></Fotter>

    </div>
  )
}

export default App