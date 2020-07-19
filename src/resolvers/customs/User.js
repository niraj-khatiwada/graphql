export default {
  posts: (parent, args, { db: { users, posts, comments } }) =>
    posts.filter((item) => item.author === parent.id),
}
