const express = require('express')

const router = express.Router()

/* GET plans listing. */
router.get('/', (req, res) => {
	res.send('Travel planning page')
})

module.exports = router
