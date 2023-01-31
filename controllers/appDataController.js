const asyncHandler = require("express-async-handler")
const AppData = require('../Models/appDataModel')


// */api/appdata/rates
const getAppData = asyncHandler(async(req,res)=> {

    const rates = await AppData.find()
    if (!rates) {
        res.status(300).json({
            message: "resource not available",
          })
        return
    }
    console.log(rates)
    //res.status(200).json({rates: rates})
})

module.exports = { getAppData }