import express, { json, urlencoded } from 'express'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

app.get("/search", async (req, res) => {
  const { q } = req.query
  res.json(q)
})

app.listen(3000, () => { })