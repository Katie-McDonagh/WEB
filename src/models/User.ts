interface UserProps {
  name?: string,
  age?: number
}

// type alias
type Callback = () => {}

export class User {
  //  below is assigning events to an object where the key is a string and the value is a callback function
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) { }

  get(propName: string): (number | string) {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {

  }
}
