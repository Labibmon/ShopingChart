import React from 'react';
import Link from 'next/link';

interface IProduct {
    id?:string
    name:string
    description:string
  }

interface Props {
    name?: string;
    product: IProduct[]; 
}

export const ProductSingle: React.FC<Props> = ({name, product}) => {
    const productList = product.map((data)=>{
        return(
        <p key={data.id}>name:{data.name}</p>
        )
      })
    return(
        <>
            <p>{name}</p>
            <p>this data: </p>
            {productList}
        </>
    )
}