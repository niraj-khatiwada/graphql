export default (parent, args, { db: { users, posts, comments } }, info) =>
  posts.find((item) => item.id === args.id)
