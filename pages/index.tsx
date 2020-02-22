import React from 'react'
import Layout from './component/Layout'
import { CaraouselComp } from './component/CarouselComp'
import { PromoComp } from './component/PromoComp'

const Index: React.FC = () => {
  return (
    <Layout title="Home">
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
      <hr />
    </Layout>
  )
}

export default Index