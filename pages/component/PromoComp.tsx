import React from 'react';

interface Props {
    linkPromo: string;
    imageSrc : string;
    headTitle?: string;
    subTitle?: string;
    title?: string
}

export const PromoComp: React.FC<Props> = ({linkPromo,imageSrc, headTitle, subTitle, title}) => {
    return(
        <a href={linkPromo}>
          <div className="card card--promo p-3 rounded-0 border-0 text-white" 
            style={{backgroundImage:`url(${imageSrc})`}}>
              <div className="caption">
                <h1 className="text-uppercase">{headTitle}</h1>
                <h2 className="text-uppercase">{subTitle}</h2>
                <p>{title}</p>
              </div>
              <span className="layer"></span>
          </div>
        </a>
    )
}