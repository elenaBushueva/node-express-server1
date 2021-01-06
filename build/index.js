"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 5000;
app.get('/', home);
app.post('/info', info);
app.use(apiNotFound);

function apiNotFound(req, res) {
  res.status(400).json('API not found');
}

function home(req, res) {
  res.status(200).json({
    name: 'PASV',
    components: ['abx', 'qwe', 'tre'],
    q: true
  });
}

function info(req, res) {
  var a = 123;
  var b = Math.random();
  var c = a + b;
  res.send('INFO here!' + c);
}

app.listen(PORT, function () {
  console.log("Example app listening at http://localhost:".concat(PORT));
});