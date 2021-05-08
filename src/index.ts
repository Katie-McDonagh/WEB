import { User } from './models/User'

const user = new User({ id: 1 })

user.set({ name: 'kate', age: 67 })
user.save()