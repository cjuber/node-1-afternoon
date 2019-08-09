const products = require('../products.json')

const getProduct = (req,res) => {

    const product = products.filter(item => item.id == +req.params.id)[0]
    if (!product){

        return res.status(500).send('Item is not there')
    }

    res.status(200).send(product)
}

module.exports = getProduct