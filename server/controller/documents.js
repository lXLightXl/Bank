const Trans = require('../models/doc')


exports.addDocument = async (req,res,next) => {
  const trans = await Trans.create(req.body)
  trans.save();
}

exports.getDocument = async (req,res,next) => {
  const getDocument = await Trans.find({})
  res.json({
    data: 
      getDocument
  })
}