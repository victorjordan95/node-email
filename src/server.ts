import app from './app'

const port = process.env.PORT || 8082

app.listen(port, (): void => console.log('Our app is running on http://localhost:' + port))
