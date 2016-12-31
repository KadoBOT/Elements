export type Contact = {
  message: {
    name: string,
    email: string,
    telephone: string,
    message: string
  },
  errors: {
    name: array,
    email: array,
    telephone: array,
    message: array
  }
}

export type State = Contact{}
