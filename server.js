const express = require('express');
const app = express();
const path = require('path');

// 配置模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 中间件
app.use(express.urlencoded({ extended: true }));  // 解析表单数据
app.use(express.static(path.join(__dirname, 'assets'))); // 静态资源

// 路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    console.log('注册:', username, password);
    res.redirect('/login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('登录:', username, password);
    res.redirect('/');
});

app.post('/feedback', (req, res) => {
    const { description } = req.body;
    console.log('反馈Bug:', description);
    res.redirect('/');
});

// 启动服务器
app.listen(3000, () => {
    console.log('服务器在 http://localhost:3000 运行');
});
