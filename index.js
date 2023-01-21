const express = require("express")
const app = express()
const userRoute = require("./routes/user")

const PORT = 3000 || 6000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

app.use("/api/users", userRoute)
