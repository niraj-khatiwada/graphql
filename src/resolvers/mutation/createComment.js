import { v4 as uuid } from 'uuid'

export default (__, args, { db: { users, posts, comments } }) => {
  if (!posts.some((item) => item.id === args.commentData.post)) {
    throw new Error('Post does not exist')
  }
  const comment = {
    id: uuid(),
    ...args.commentData,
  }
  comments.push(comment)
  return comment
}
