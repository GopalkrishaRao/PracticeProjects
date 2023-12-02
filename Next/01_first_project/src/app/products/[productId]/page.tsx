import { Metadata } from "next";

type Props={
  params:{productId:string}
};

export const generateMetadata = ({params,}:Props):Metadata=>{
  return {
    title: `Product ${params.productId}`,
  }
}

export default function ProductDetails({params,}:Props) {
return (
  <div>ProductDetails {params.productId}</div>
)
}
// export default function ProductDetails({params,}:{
//     params:{productId:string}
// }) {
//   return (
//     <div>ProductDetails {params.productId}</div>
//   )
// }
