import React from 'react';
import Link from 'next/link';

interface Props {
    products:{
        node: any
    }[]
}


export const FeaturedCol: React.FC<Props> = ({products}) => {
    return(
        <div className="row">
            {products.map((product, index)=>{
                return(
                    <div className="col-md-3 mb-md-0 mb-3" key={index}>
                    <Link 
                        href={`/product?title=${product.node.handle}`} 
                        >
                            <a>
                            <div className="card card--promo_dnone p-3 rounded-0 border-0 text-white" 
                                style={{backgroundImage:`url(${product.node.images.edges[0].node.transformedSrc})`}}>
                                <div className="caption">
                                <span className="layer"></span>
                                    <h3 className="text-uppercase">{product.node.title}</h3>
                                    <p>{product.node.description}</p>
                                </div>
                                <span className="layer"></span>
                            </div>
                            </a>
                        </Link>
                    </div>
                )
            })}
            
          </div>
    )
}