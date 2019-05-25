import app from './app'

// app.listen(3333)
const port = process.env.PORT || 8080

app.listen(port, function (): void {
  console.log('Our app is running on http://localhost:' + port)
})
