export default {
  post: (parent, args, { db: { users, posts, comments } }) =>
    posts.find((item) => item.id === parent.post),
}
