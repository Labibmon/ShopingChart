import React from 'react';
import Link from 'next/link';

interface Props {
    products:{
        node: any
    }[]
}


export const FeaturedCol: React.FC<Props> = ({products}) => {
    console.log(products)
    return(
        <div className="row">
            {products.map((product, index)=>{
                return(
                    <div className="col-md-3 mb-3" key={index}>
                        <Link 
                        href={`/product?title=${product.node.handle}`} 
                        >
                            <a className="text-decoration-none">
                                <div className="card card--promo_dnone p-3 rounded-0 border-0 text-white" 
                                    style={{backgroundImage:`url(${product.node.images.edges[0].node.transformedSrc})`}}>
                                    <div className="caption h-100">
                                    <span className="layer"></span>
                                        <h3 className="text-uppercase">{product.node.title}</h3>
                                        <p className="mb-auto">{product.node.description}</p>
                                    </div>
                                    <span className="layer"></span>
                                </div>
                                <div className="bg-dark text-white w-100 p-3 d-flex">
                                    <label className={`mb-0 rounded px-2 ${product.node.availableForSale ? 'bg-info'  :  'bg-danger' }`}>
                                        {product.node.availableForSale ? 'Sale' : 'Sold'}
                                    </label>
                                    <label className="ml-auto mb-0"> Rp.{product.node.priceRange.minVariantPrice.amount}</label>
                                </div>
                            </a>
                        </Link>
                    </div>
                )
            })}
            
          </div>
    )
}