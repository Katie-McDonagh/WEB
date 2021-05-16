import { Eventing } from './Eventing'
import { Sync } from './Sync'
export interface UserProps {
  name?: string
  age?: number
  id?: number
}

// type alias
type Callback = () => void

const rootUrl = 'http://localhost:3000/users'
export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
  //  below is assigning events to an object where the key is a string and the value is a callback function
  // events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) { }

  on(eventName: string, callback: Callback): void {
    //will be either a callback[] or undefined 
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach(callback => {
      callback()
    })
  }
}
