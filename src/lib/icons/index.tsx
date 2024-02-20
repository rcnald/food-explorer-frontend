import { JSX } from 'react'
import { FoodExplorer } from './food-explorer'

type IconType = {
  [key: string]: () => JSX.Element
}

const Icons: IconType = { FoodExplorer }

export default Icons
