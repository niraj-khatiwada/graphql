import { v4 as uuid } from 'uuid'

export default (parent, args, { db: { users, posts, comments } }, info) => {
  if (users.some((item) => item.firstName === args.userData.username)) {
    throw new Error('Username already taken')
  }
  const user = {
    id: uuid(),
    firstName: args.userData.username,
    lastName: args.userData.email,
  }
  users.push(user)
  return user
}
