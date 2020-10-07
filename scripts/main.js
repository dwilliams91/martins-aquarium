import {useFish} from './FishDataProvider.js'
import {FishList} from './FishList.js'
import { locationList } from './LocationList.js'

import { tipList } from './TipList.js'

const allTheFish = useFish()



// importing the fish
FishList()
tipList()
locationList()
