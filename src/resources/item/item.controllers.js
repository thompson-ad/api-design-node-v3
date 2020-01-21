import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'

export default crudControllers(Item)

// we have generic controllers and that's really useful but if you wanted to override what one of them does for a specific case:

//  export default {
//     ...crudControllers(item),
//     getOne() {

//     }
// }
