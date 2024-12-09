import { useContext } from "react"
import { BasketContext } from "../context/basketContext"


const Card = ({product}) => {
  const {addToBasket}=  useContext(BasketContext)

  return (
    <div className='card py-3'>
       <div className='d-flex justify-content-center'>
        <img src={product.image} height={120} className='object-fit-contain' />
       </div>
       <div className='card-body'>
          <h4 className='text-truncate'>{product.title}</h4>
          <h4 className='text-capitalize fs-6 text-secondary'>{product.category}</h4>
          <p><span>{product.price} $</span></p>

          <button onClick={()=>addToBasket(product)}  className='btn btn-primary w-100'>Add to Cart</button>
       </div>
  
    </div>
  )
}

export default Card