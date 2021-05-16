

export class Attributes {

  get(propName: string): (number | string) {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }
}