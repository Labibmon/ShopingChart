import React from 'react';
import Slider from "react-slick";
import { Popup, Card, Image, Rating } from 'semantic-ui-react'


export const SlickComp = () => {
    const product = [{
        name:'Meja Belajar Minimalis',
        harga_lama: '300,000',
        harga_baru: '200,000',
        rating: '4',
        pict: 'https://s1.bukalapak.com/img/6079371563/s-194-194/Meja_Lipat_Set_Kursi___Meja_Belajar_Minimalis___Meja_Makan__.jpg'
    },{
        name:'Speaker Aktif Portable',
        harga_lama: '610,000',
        harga_baru: '400,000',
        rating: '5',
        pict: 'https://s1.bukalapak.com/img/16920882461/s-194-194/data.jpeg'
    },{
        name:'Lampu senter',
        harga_lama: '957,000',
        harga_baru: '800,000',
        rating: '3',
        pict: 'https://s1.bukalapak.com/img/68358989801/s-194-194/20190323_135938_Recovered.jpg'
    },{
        name:'Pompa Galon Elektrik',
        harga_lama: '300,000',
        harga_baru: '150,000',
        rating: '4',
        pict: 'https://s0.bukalapak.com/img/57778233051/s-194-194/Pompa_Galon_Elektrik_Touch_Screen_Child_Lock_Water_Dispenser.jpg'
    },{
        name:'Meja Komputer',
        harga_lama: '600,000',
        harga_baru: '400,000',
        rating: '4',
        pict: 'https://s0.bukalapak.com/img/51482781331/s-194-194/data.png.webp'
    },{
        name:'Senter LED',
        harga_lama: '300,000',
        harga_baru: '200,000',
        rating: '4',
        pict: 'https://s1.bukalapak.com/img/68358989801/s-194-194/20190323_135938_Recovered.jpg'
    }]
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
                    <div key={index} className="px-3">
                        <Popup
                            trigger={
                            <Card className="p-0">
                                <Image src={row.pict}/>
                                <Card.Content>
                                <Card.Header>{row.name}</Card.Header>
                                <Card.Description>
                                <del>Rp.{row.harga_lama}</del>
                                <strong className='text-danger'> Rp.{row.harga_baru}</strong>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                            }
                        >
                            <Popup.Header>Rating</Popup.Header>
                            <Popup.Content>
                            <Rating icon='star' defaultRating={row.rating} maxRating={4} />
                            </Popup.Content>
                        </Popup>
                    </div>
                )
            })}
            </Slider>
        </span>
    )
}
