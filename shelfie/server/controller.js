//let products = [];

module.exports = {
  getProducts: (req, res, next) => {
    const db = req.app.get('db');
    db.get_products()
      .then( products => res.status(200).send( products ) )
      .catch( err => res.status(500).send(err) );
  },
  addProduct: (req, res, next) => {
    const db = req.app.get('db');
    const { product_name, price, image_url } = req.body;
    db.add_product([product_name, price, image_url])
      .then( products => res.status(200).send( products ) )
      .catch( err => console.log(`Server Error: ${err.message}`) );
  },
  deleteProduct: (req, res, next) => {
    let { id } = req.params;
    const db = req.app.get('db');
    db.delete_product([id])
      .then( products => res.status(200).send( products ) )
      .catch( err => console.log(`Server Error: ${err.message}`) );
  },
  editProduct: (req, res, next) => {
    console.log('hello');
    let { product_name, price, image_url } = req.body;
    let { id } = req.params;
    const db = req.app.get('db');
    db.edit_product([id, product_name, price, image_url])
      .then( products => res.status(200).send( products ) )
      .catch( err => console.log(`Server Error: ${err.message}`) );
  }
}