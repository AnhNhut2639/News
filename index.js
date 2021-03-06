require("dotenv").config();
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const port = 3000;
const routers = require("./routers");
let check = require("./middlewares/check.middleware");
let permission = require("./middlewares/checkPermission");
let checkWasLogin = require("./middlewares/checkWasLogin");
app.engine(
  "handlebars",
  handlebars({
    extname: "handlebars",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
  })
);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

//var router = express.Router();
var mongoose = require("mongoose"); // use mongoose db
mongoose.connect(process.env.MONGO_URL);
app.use(cookieParser(process.env.SESSION_SECRET));
//mongoose.connect('mongodb://localhost/ITNews');

// app.get('/', function(req,res){ //endpoint này sẽ viết trang cho người dùng là đọc giả
//     res.render('index.pug');
// })

// app.use("/", client); //endpoint này sẽ viết trang cho người dùng là đọc giả

// app.use("/login", login); // endpoint này sẽ dùng để làm middleware đăng nhập
// public static file
app.use(express.static("public"));

// WebRouter -->
app.use("/", routers.web);
app.use("/admin", check.checkCookies, permission.checkAdmin, routers.admin);
app.use("/editor", check.checkCookies, permission.checkEditor, routers.editor);
app.use("/login", checkWasLogin.checkWasLogin, routers.login);
app.use(express.static(__dirname + "/public"));
// <-- WebRouter

//app.use('/admin',admin); // phân quyên quản lý của admin(dòng nay để test)
//app.use('/admin',middlewareLogin.checkLogin,admin); // dùng dòng này để  chạy cuối cùng khi hoàn thành dùng middleware để yêu cầu đăng nhập
// app.use("/admin", middlewareLogin.checkLogin, admin); // dùng middleware xét cookie

app.listen(port, () => console.log(`Deployed ${port}!`));
