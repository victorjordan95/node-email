import app from './app'

const port = process.env.PORT || 8081

app.listen(port, (): void => console.log('Our app is running on http://localhost:' + port))
