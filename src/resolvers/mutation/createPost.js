import { v4 as uuid } from 'uuid'

export default (_, args, { db: { users, posts, comments } }) => {
  console.log(args)
  if (!users.some((item) => item.id === args.postData.author)) {
    throw new Error('User does not exist')
  }
  const post = {
    id: uuid(),
    ...args.postData,
  }
  posts.push(post)
  return post
}
