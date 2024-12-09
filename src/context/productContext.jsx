import api from '../api';
import { createContext, useEffect, useState } from "react";



//1. context yapisinin temeli

export const ProductContext = createContext();

//2. Context yapisinda tutulacak fonksiyonlari ve bunlari diger bilesenlere aktaracak  saglayiciyi tanimla 

export const ProductProvider = ({children}) => {
    //saglayici icerisinde tutulacak stateleri tanimla
const [products, setProducts] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('all');



useEffect(()=>{

const url = selectedCategory ==="all" ? '/products' : `/products/category/${selectedCategory}`;


    api.get(url)
     .then((response) => {setProducts(response.data)})
     .catch(error => console.error(error));

},[selectedCategory]);

//3. Uygulamaya saglanacak verileri belirle
  return (
    <ProductContext.Provider value={{ products, selectedCategory , setSelectedCategory}}>{children}</ProductContext.Provider>
  )
}


