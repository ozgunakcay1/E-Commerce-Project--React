// Bir bilesenden context yapisinda value olarak tanimlanan verilere erismek
// useContext adindaki react hook kullanilir
// parametre olarak abone olunacak context yapisi verilir 
// useContext belirledigimiz context yapisina abone olur ve her guncellemeyi anlik olarak getirir


import { useContext } from "react"
import { ProductContext } from "../context/productContext";
import Card from '../components/Card';


const Home = () => {
  const { products, selectedCategory } = useContext(ProductContext);

  return (
    <div className="mt-4 container">
      <h1 className="fs-3">{products?.length} Products Found </h1>
      <h5 className='text-secondary' >{selectedCategory !== "all" && selectedCategory + " category results :"}</h5>

      <div className="wrapper">
        {products?.map((product) => (
          <Card key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Home