"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const router = useRouter();

    const handleClick = function(){
        console.log("Placing Order");
        router.push("/")        
    }

  return (
    <>
    <h1>Order Product</h1>
    <button onClick={handleClick}>Place Order</button>
    </>
  )
}
