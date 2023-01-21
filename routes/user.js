const router = require("express").Router()

router.get("/", async (req, res) => {
  try {
    res.json({
      message: "api is working"
    })
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

module.exports = router
