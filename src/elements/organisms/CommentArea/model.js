export type CommentArea = {
  running: boolean,
  comments: any,
  comment: {
    name: string,
    email: string,
    comment: string,
  },
  errors: {
    name: string,
    email: string,
    comment: string,
  }
}

export type State = CommentArea{}
