import {notFound} from 'next/navigation';

export default function ReviewDetail({params,}:{
    params:{
        productId:string;
        reviewId: string;
    }
}) {
  // custom error page
  if(parseInt(params.reviewId)>1000){
    notFound();
  }
  // 
  return (
    <div>Review {params.productId} for product {params.reviewId}</div>
  )
}
