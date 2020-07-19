const users = [
  { id: '1', firstName: 'Author F1', lastName: 'Author L1', posts: ['1'] },
  { id: '2', firstName: 'Author F2', lastName: 'Author L2', posts: ['2'] },
  { id: '3', firstName: 'Author F3', lastName: 'Author L3', posts: ['3'] },
]

const posts = [
  { id: '1', title: 'Title1', body: 'Body1', author: 1, comments: ['1'] },
  { id: '2', title: 'Title2', body: 'Body2', author: 2, comments: ['2'] },
  { id: '3', title: 'Title3', body: 'Body3', author: 3, comments: ['3'] },
]

const comments = [
  { id: '1', text: 'Comment1', post: '1' },
  { id: '2', text: 'Comment2', post: '2' },
  { id: '3', text: 'Comment3', post: '3' },
]

export default { users, posts, comments }
