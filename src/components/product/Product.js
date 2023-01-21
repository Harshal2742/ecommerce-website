import { useParams } from "react-router-dom"

const Product = () => {
  const {productId} = useParams();

  return <h3>{productId}</h3>
}

export default Product;