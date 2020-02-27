import React from 'react'
import Layout from './component/Layout'
import { CaraouselComp } from './component/CarouselComp'
import { PromoComp } from './component/PromoComp'
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost";
// import { ProductSingle } from './component/ProductSingle'

const Index: React.FC = () => {

  const USER_QUERY = gql`
  query {
  products(first:2) {
    edges {
      node {
        id
        handle
        variants(first:3) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
}`

const user = useQuery(USER_QUERY)
console.log(user?.data)
  return (
    <Layout title="Home">
      <hr />
      {/* <ProductSingle product={user?.data?.jobs || []} /> */}
      <hr />
      <CaraouselComp imageSrc="https://picsum.photos/id/1059/1500/800"/>
      <div className="card bg-primary rounded-0 p-3 mb-3 text-white">
          <div className="row">
            <div className="col-md-4">
              <span className="d-flex justify-content-center align-items-center">
                <p className="mb-0 ml-2">HARGA TERJANGKAU</p> 
              </span>
            </div>
            <div className="col-md-4">
              <span className="d-flex justify-content-center align-items-center">
                <p className="mb-0 ml-2">ORIGINAL BRAND</p> 
              </span>
            </div>
            <div className="col-md-4">
              <span className="d-flex justify-content-center align-items-center">   
                <p className="mb-0 ml-2">GRATIS BIAYA PENGEMBALIAN</p> 
              </span>
            </div>
          </div>
      </div>
      <PromoComp 
        linkPromo='pria'
        imageSrc='https://picsum.photos/id/26/1500/700'
        headTitle='Promo Pria'
        subTitle='Beli 2 Gratis 1'
        title="Berlaku sampai dengan 2020"
      />
    </Layout>
  )
}

export default Index