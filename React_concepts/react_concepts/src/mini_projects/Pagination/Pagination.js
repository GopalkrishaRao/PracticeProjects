import React, { useEffect, useState } from 'react';
import './pagination.css';

export default function Pagination() {

    const [products, setProduct]= useState([]);
    const [currentPage,setCurrentPage]=useState(1);

    let productsPerPage=5;

    let toatalNumberofPages = Math.ceil(products.length/productsPerPage);

    let indexofLastProduct = currentPage * productsPerPage;

    let indexofFirstProduct = indexofLastProduct-productsPerPage; 

    let pages=[...Array(toatalNumberofPages + 1).keys()].slice(1);

    const fetchProducts = async ()=>{
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        if(data && data.products){
            setProduct(data.products)
        };
    };
    
    console.log(products.slice(indexofFirstProduct,indexofLastProduct));

    useEffect(()=>{
        fetchProducts();
    },[]);

  return (
    <>
    <h2>Pagination</h2>
    { products.length ? ( 
        <div className='products'>
        {
            products.slice(indexofFirstProduct,indexofLastProduct).map(product=>{
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
            <button onClick={()=>{
                if(currentPage!=1)
                setCurrentPage(currentPage-1)
            }}>Previous</button>

        <button>
             {pages.map((page) => {
                return (
                  <span
                    key={page}
                    className={`${currentPage === page ? "active" : ""}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page} |{" "}
                  </span>
                );
              })}
        </button>
        
            <button onClick={()=>{
                if(currentPage!=toatalNumberofPages)
                setCurrentPage(currentPage+1)
            }}>Next</button>
         </div>
        }
        </div>
        ): <h2>Loadingin.....</h2>
    }
    </>
  );
};
