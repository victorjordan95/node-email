import app from './app'

const port = process.env.PORT || 8080

app.listen(port, function (): void {
  console.log('Our app is running on http://localhost:' + port)
})
