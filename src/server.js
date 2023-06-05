const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Xử lý đăng nhập
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = router.db.get('users').find({ username, password }).value();
  if (user) {
    res.json({ success: true, message: 'Đăng nhập thành công' });
  } else {
    res.status(401).json({ success: false, message: 'Tên người dùng hoặc mật khẩu không đúng' });
  }
});
server.get('/listpost', (req, res) => {
    const posts = router.db.get('posts').value();
    res.json(posts);
  });

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});