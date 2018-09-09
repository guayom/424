const path = require("path");
const fs = require("fs-extra");
var slugify = require('slugify')

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
      tracks: allContentfulLetras {
        edges {
          node {
            id
            tema
            release {
              titulo
            }
          }
        }
      }
   }
  `).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

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

      result.data.tracks.edges.forEach(({ node }) => {
        const lyricPath = `/letras/${slugify(node.release.titulo, { lower: true })}/${slugify(node.tema, { lower: true })}`
        createPage({
          path: lyricPath,
          component: path.resolve(`src/templates/letra.js`),
          context: {
            id: node.id,
         }
        })
      });

    });
};