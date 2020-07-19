export default {
  author: (parent, args, { db: { users, posts, comments } }, info) =>
    users.find((item) => item.id === parent.author),
  comments: (parent, args, { db: { users, posts, comments } }) =>
    comments.filter((item) => item.post === parent.id),
}
