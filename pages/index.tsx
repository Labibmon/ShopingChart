import React from 'react'
import Layout from './component/Layout'
import { CaraouselComp } from './component/CarouselComp'
import { PromoComp } from './component/PromoComp'
import { useQuery } from "@apollo/react-hooks"
import { PRODUCT } from './utils/productGql'
// import { ProductSingle } from './component/ProductSingle'
import Link from 'next/link'
import { FeaturedCol } from './component/FeaturedCol'


const Index: React.FC = () => {
  const products = useQuery(PRODUCT(4,3,2))
  return (
    <Layout title="Home">
      {/* <ProductSingle product={user?.data?.jobs || []} /> */}
      <CaraouselComp imageSrc={products?.data?.products.edges || []}/>
      <PromoComp 
        linkPromo='pria'
        imageSrc='https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/70008476_980032025721995_5140472758299262976_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=l77XiPMv0iIAX-MCGj1&oh=7f30aba269b65191e0c68dc46b8a2fb2&oe=5E8AB0AD'
        headTitle='FEEL TRUST OFFICIALY'
        subTitle='SEE CATALOG'
        // title="Berlaku sampai dengan 2020"
      />
        <div>
          <h3 className="text-center my-5">FEATURED COLLECTION</h3>
          <FeaturedCol
            products={products?.data?.products.edges || []}
          />
        </div>
        <div className="row p-5">
          <div className="col-md-6 mb-md-0 mb-3">
              <img 
                className="w-md-50 w-100"
                src="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/70008476_980032025721995_5140472758299262976_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=l77XiPMv0iIAX-MCGj1&oh=7f30aba269b65191e0c68dc46b8a2fb2&oe=5E8AB0AD" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <span>
              <h3>FEEL TRUST</h3>
              <p>Punk/PANG berkembang menjadi subkelompok kecil yang mempunyai ciri khas masing-masing.</p>
              <p>Punk/PANG sebagai fenomena subkultur. Sekelompok orang yang memiliki perilaku dan kepercayaan berbeda dengan kebudayaan induk. Keanggotaan subkultur ditunjukkan melalui gaya hidup serta penggunaan simbol-simbol tertentu. (John Martono dan Arsita Pinandita, 2009:10).</p>
              <p>Subkultur dapat terbentuk di sekitar suatu kesenangan atau kegiatan apapun. Setiap subkultur mempunyai nilai dan norma sendiri oleh setiap anggota menjadikan suatu identitas. Kebanyakan subkultur sepadan dengan nilai kebudayaan dominan, namun ada subkultur yang berbenturan dengan kebudayaan yaitu punk/PANG.(James M. Henslin, 2006:50).</p>
            </span>
          </div>
        </div>
        <hr />
        hello
    </Layout>
  )
}

export default Index