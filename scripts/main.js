import {useFish} from './FishDataProvider.js'
import {FishList} from './FishList.js'
import { getTips } from './TipDataProvider.js'
import { tipList } from './TipList.js'

const allTheFish = useFish()



// importing the fish
FishList()
tipList()

