import { User } from './models/User'

const user = new User({ name: 'Katie', age: 30 })

console.log(user.get('name'))
console.log(user.get('age'))