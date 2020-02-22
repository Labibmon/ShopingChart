import React from 'react'
import Layout from './component/Layout'
import { PromoComp } from './component/PromoComp'
import { SlickComp } from './component/SlickComp'


const Pria: React.FunctionComponent = () => {
  const product = [{
    name:'Kemeja Lengan Panjang',
    harga: '300,000',
    rating: '4',
    pict: 'https://s3.bukalapak.com/img/3242464527/s-194-194/Kemeja_Lengan_Panjang_Pria_Slim_Fit_Motif_Kotak_Kotak.jpg'
},{
    name:'Kemeja Resmi Flanell',
    harga: '610,000',
    rating: '5',
    pict: 'https://s1.bukalapak.com/img/60150427361/s-194-194/data.jpeg.webp'
},{
    name:'Kemeja Batik',
    harga: '957,000',
    rating: '3',
    pict: 'https://s1.bukalapak.com/img/63970123481/s-194-194/data.jpeg.webp'
},{
    name:'Kemeja Batik Slimfit',
    harga: '300,000',
    rating: '4',
    pict: 'https://s0.bukalapak.com/img/02437946841/s-194-194/data.png.webp'
},{
    name:'Kemeja HnM Slimfit',
    harga: '600,000',
    rating: '4',
    pict: 'https://s1.bukalapak.com/img/19615297081/s-194-194/780946ac78656f85ae479f2b4178a0a7.jpg.webp'
},{
    name:'Kemeja Koko Batik',
    harga: '300,000',
    rating: '4',
    pict: 'https://s1.bukalapak.com/img/14206137571/s-194-194/data.jpeg.webp'
}]
  return (
    <Layout title="Pria">
      <PromoComp 
        linkPromo='#'
        imageSrc='https://picsum.photos/id/26/1500/700'
        headTitle='Promo Pria'
        subTitle='Beli 2 Gratis 1'
        title="Berlaku sampai dengan 2020"
      />
      <div className="card px-5 py-4 bg-primary mt-3">
        <h3 className="mb-3 text-white">Produk Andalan</h3>
        <SlickComp product={product} />
      </div>
      <hr />
    </Layout>
  )
}
export default Pria