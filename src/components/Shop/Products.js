import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        title: 'My first book',
        price: 6,
        description: 'This is a first product - amazing!'
    },
    {
        id: 'p2',
        title: 'My second book',
        price: 5,
        description: 'This is the second book'
    },
    {
        id: 'p3',
        title: 'Condoms',
        price: 15,
        description: 'Bareback is the best'
    },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DUMMY_PRODUCTS.map(product => {
              return    <ProductItem
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  id={product.id}
                  key={product.id}
              />
          })}
      </ul>
    </section>
  );
};

export default Products;
