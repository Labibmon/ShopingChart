import React from 'react';
import Slider from "react-slick";
import Link from 'next/link'

interface Props {
    product: {
        name: string;
        harga: string;
        rating: string;
        pict: string;
    }[]
}

export const SlickComp: React.FC<Props> = ({product}) => {
   
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
      };
    return(
        <span>
            <Slider {...settings}>
            {product.map((row, index)=>{
                return(
                <Link
                key={index} 
                href={`/product?nameProduct=${product[index].name}&&harga=${product[index].harga}&&pict=${product[index].pict}`} 
                >
                    <a>
                        <div className="card mx-3 text-dark" style={{width: "18rem;", height:'18rem'}}>
                            <img className="card-img-top" src={product[index].pict} alt="Card image cap" />
                            <div className="card-body">
                                <h6>{product[index].name}</h6>
                                <p className="card-text">{product[index].harga}</p>
                            </div>
                        </div>
                    </a>
                </Link>
                )
            })}
            </Slider>
        </span>
    )
}