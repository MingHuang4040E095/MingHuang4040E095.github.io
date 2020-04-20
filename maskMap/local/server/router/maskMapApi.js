const express = require('express')
const router = express.Router()
const axios = require('axios')
router.get('/', (req, res) => {
	let url = 'https://quality.data.gov.tw/dq_download_json.php?nid=116285&md5_url=2150b333756e64325bdbc4a5fd45fad1'
	axios
		.get(url)
		.then((result) => {
			console.log(result.data)
			result.data.forEach((item) => {
				if (item.醫事機構地址.indexOf('臺南市新化') !== -1) console.log(item.醫事機構地址)
			})
			// let dataArray = result.data.features
			// let countys = []
			// dataArray.forEach((item) => {
			//     if (county.indexOf(item.county) !== -1) {
			//         countys.push(item.county)
			//     }
			// })
			// console.log('success')
			res.json('success')
		})
		.catch((err) => {
			console.log(err)
		})
})
module.exports = router
