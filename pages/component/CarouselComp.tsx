import React from 'react';

interface Props {
    imageSrc : {
      node:{
        images:{
          edges:{
            node: {
              altText: string
              transformedSrc: string
            }
          }[]
        }
      }
    }[]
}

export const CaraouselComp: React.FC<Props> = ({imageSrc}) => {
    return(
        <div id="carouselExampleIndicators" className="carousel carousel--home slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {imageSrc.map((image, index)=>{
            return(
              <div className={`carousel-item ${index === 0 && 'active'}`} key={index}>
                <img className="d-block w-100" src={image.node.images.edges[0].node.transformedSrc} alt="First slide" />
              </div>
            )
          })}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}