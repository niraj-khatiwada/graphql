export default (_, args, { db: { comments } }) =>
  comments.find((item) => item.id === args.id)
