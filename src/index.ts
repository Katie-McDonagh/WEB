import { User } from './models/User'

const user = new User({ id: 1, name: 'new record', age: 0 })

user.events.on('change', () => {
  console.log('change')
})

user.events.trigger('change')