import { BasketContext } from "../context/basketContext";
import { useContext } from "react";
import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";



const Basket = () => {
  const { basket } = useContext(BasketContext);

  //toplam sepetteki sayiyi hesaplamak icin; 
  const totalAmount = basket.reduce((total , i)=> total + i.amount, 0 )

  //toplam fiyati hesaplamak icin
  const totalPrice = basket.reduce((total ,i) => total + i.price * i.amount ,0)

  return (
    <div className="container mt-5">
      <h1>SEPET</h1>
      <div>
        <div className="d-flex flex-column gap-4 mt-4">
          {basket.length === 0 ? ( <div className="text-centerfs-5"> 
            <p>Sepete ürün ekleyiniz</p>
            <Link to="/" className="btn btn-primary" >Ürünlere Git</Link>
          </div>)  
          : (basket.map((product) => (
            <BasketItem key={product.id} product={product} /> // Her ürün için BasketItem'e product prop'u geç
          )))}

          <div className="rounded my-5 shadow  border p-4">
            <p className="fs-5" >Sepette <span className="text-success fw-bold">{totalAmount}</span> adet ürün var</p>
            <h4>Toplam Fiyat: <span className="text-success fw-bold">{totalPrice.toFixed(2)} $</span> </h4>
            <Link className="btn btn-warning w-100 mt-3 p-2">Sepeti Onayla</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;