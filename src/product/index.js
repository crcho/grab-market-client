import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(function () {
    axios
      .get(
        `https://d0d7eb07-bb21-46ab-b5d1-55ddc68b1dc7.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(product);

  if (product === null) {
    return <h1>상품정보를 받고있습니다....</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name"> {product.name} </div>
        <div id="price"> {product.price}원 </div>
        <div id="createdAt"> 2020년 7월 8일</div>
        <div id="description"> {product.description} </div>
      </div>
    </div>
  );
}

export default ProductPage;
