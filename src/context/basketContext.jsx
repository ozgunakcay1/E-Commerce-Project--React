import { createContext, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

export const BasketContext = createContext()




export const BasketProvider = ({children}) => {
    const [basket, setBasket] =  useState([]);

    const addToBasket =(product)=>{
        //sepete eklenmeye calisan urunu sepette ara 
        const found = basket.find((i)=>i.id === product.id)


        //urun sepette yoksa sepete ekle
        if(!found){
      
            setBasket(basket.concat({...product, amount : 1}));

            toast.success('Ürün sepete eklendi')
         
        } else{
            // urun sepettte varsa sepetteki elemanin miktarini arttir 

            // sepetteki elemanin miktarini guncelle
            const updated = { ...found, amount : found.amount + 1 };
            //sepet dizisini guncelle

            const newBasket = basket.map((i)=> updated.id ===i.id ? updated : i);

            setBasket(newBasket);

            toast.success(`Ürün sepete eklendi. (${updated.amount} adet)`)

        }

      
       

    };

    const removeFromBasket =(delete_id)=>{
        const filtered = basket.filter((i)=> i.id !== delete_id);
        setBasket(filtered);

        toast.error ("Ürün sepetten kaldırıldı")
    };

  

    const decreaseAmount =(delete_id)=>{
      const found = basket.find((i)=>i.id === delete_id);

      if(found.amount > 1){
        const newBasket =basket.map((i)=> i.id === delete_id ? { ...found, amount: found.amount - 1 } : i )

        setBasket(newBasket);

        toast.info ("Ürün miktarı azaltıldı")

    }else{
      removeFromBasket(delete_id)
    }
  
  };

  return (
    <BasketContext.Provider value={{ basket , addToBasket, removeFromBasket, decreaseAmount } }>{children}</BasketContext.Provider>
  );
};
