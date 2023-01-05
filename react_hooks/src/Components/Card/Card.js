import React from 'react'

export default function Card({details}) {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={details.picture?.large} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name : {details.name?.title} {details.name?.first} {details.name?.last}</h2>
    <h2>Gender : {details.gender}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    </>
  )
}
