import { gql } from "apollo-boost";
 

export const PRODUCT = (jumlahProduct:number, jumlahImages: number, jumlahVariant: number) => gql`
  query {
    products(first: 10) {
   edges {
      node {
        title
        handle
        description
        createdAt
        availableForSale
        variants(first:10){
          edges{
            node{
              id
              }
          }
        }
        images(first: 1) {
          edges {
            node {
              transformedSrc
              altText
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
    }
  }
}`