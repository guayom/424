const path = require("path");
const fs = require("fs-extra");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage, createLayout } = boundActionCreators;

  return graphql(`
    {
      products: allContentfulProducto {
        edges {
          node {
            id
            slug
          }
        }
      }
   }
  `).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      //const products = result.data.allContentfulProducto.edges
      result.data.products.edges.forEach(({ node }) => {
        const productPath = `/tienda/${node.slug}`
        createPage({
          path: productPath,
          component: path.resolve(`src/templates/product.js`),
          context: {
            id: node.id,
         }
        })
      });

    });
};