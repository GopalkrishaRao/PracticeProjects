import React, { useEffect, useState } from 'react';
import './pagination.css';


export default function Pagination() {

    const [products, setProduct]= useState([]);
    const [page,setPage]=useState(1)

    const fetchProducts = async ()=>{
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        if(data && data.products){
            setProduct(data.products)
        };
    };
    console.log(products);

    useEffect(()=>{
        fetchProducts();
    },[])
  return (
    <>
    <h2>Pagination</h2>
    { products.length ? ( 
        <div className='products'>
        {
            products.map(product=>{
            return(
                <span key={product.id} className='products__single'>
                    {/* {product.title} */}
                    <img src={product.thumbnail} alt={product.title}/>
                    <span>{product.title}</span>
                </span>
            )
            })
        }
        {
         products.length>0 && <div className='pagination'>
            <sapn>Previous</sapn>
            <sapn>2</sapn>
            <sapn>3</sapn>
            <sapn>4</sapn>
            <sapn>Next</sapn>

         </div>
        }
        </div>
        ): <h2>Loadingin.....</h2>
    }

    </>

  )
}
