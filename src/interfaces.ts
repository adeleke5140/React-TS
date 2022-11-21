export interface User {
  name: string
  age: number
  country: string
  admin: boolean
  address: Address
}

export interface Address {
  street: string
  number: number
  zip: string
}
