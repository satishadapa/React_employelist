const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser);
server.use(middlewares);

const testUser = {
  email: 'hruday@gmail.com',
  password: 'hruday123'
};


const authUser = (req) => {
  console.log("req",req)
  return req.body.email === testUser.email && req.body.password === testUser.password;
}
console.log("DDdd",authUser)
server.post('/auth', (req, res) => {
  if (req.body.email == "hruday@gmail.com" &&  req.body.password =="hruday123" ) {
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(401).json({
      success: false,
      error: 'Email or password incorrect'
    });
  }
});



server.listen(5000, () => {
  console.log('JSON Server is running..');
});
