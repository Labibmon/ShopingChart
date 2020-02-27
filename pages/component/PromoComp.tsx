import React from 'react';
import Link from 'next/link';

interface Props {
    linkPromo: string;
    imageSrc : string;
    headTitle?: string;
    subTitle?: string;
    title?: string
}

export const PromoComp: React.FC<Props> = ({linkPromo,imageSrc, headTitle, subTitle, title}) => {
    return(
        <Link href={linkPromo}>
            <a>
                <div className="card card--promo p-3 rounded-0 border-0 text-white" 
                    style={{backgroundImage:`url(${imageSrc})`}}>
                    <div className="caption mb-3">
                        <h1 className="text-uppercase">{headTitle}</h1>
                        <h2 className="text-uppercase">{subTitle}</h2>
                        <p>{title}</p>
                    </div>
                    <span className="layer"></span>
                </div>
            </a>
        </Link>
    )
}