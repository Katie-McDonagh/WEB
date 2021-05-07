import { User } from './models/User'

const user = new User({ name: 'Katie', age: 30 })

user.set({ name: 'new name', age: 999 })
console.log(user.get('name'))
console.log(user.get('age'))