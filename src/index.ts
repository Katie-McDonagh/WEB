import { User } from './models/User'

const user = new User({ name: 'Katie', age: 30 })

user.on('change', () => {
  console.log('1')
})
user.on('save', () => {
  console.log('save was triggered')
})

user.trigger('change')