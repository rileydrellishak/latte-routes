import app from './app.js'
const port = 3000;

app.get('/', (req, res) => {
  res.send('the server is running!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})