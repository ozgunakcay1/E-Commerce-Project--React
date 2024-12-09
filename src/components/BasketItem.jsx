import {useContext} from "react";
import {BasketContext} from "../context/basketContext"
import { FaRegTrashAlt } from "react-icons/fa";


const BasketItem = ({product}) => {
     
        const {addToBasket, removeFromBasket , decreaseAmount}= useContext(BasketContext)



  return (
    <div className="d-flex gap-3 align-items-center gap-md-4 p-3 rounded p-md-4 shadow border" >
        <div>
          <img src={product.image} alt="" height={70} width={70} />
        </div>
    
    <div className='w-100'>
        <div>
           <h5 className="text-truncate fw-bold">{product.title.slice(0, 40)}</h5>
           <p className='text-secondary'>{product.category}</p>
        </div>

        
        <div className='d-flex justify-content-end align-items-center gap-4'> 
           <div className='d-flex gap-1 overflow-hidden' >
             <button onClick={()=>decreaseAmount(product.id)} className='btn btn-dark '>-</button>
             <button onClick={()=> addToBasket(product)} className='btn btn-dark'> +</button>
           </div>

  
           <h5>{product.amount}</h5>
           <button onClick={()=> removeFromBasket(product.id)} className='btn btn-danger '><FaRegTrashAlt/></button>

           </div>
        </div>
        
    
    </div>
  )
}

export default BasketItem