const Card2 = ({ productName, productPrice, productImg, productImg2 }) => {
    return (
      <div className="Card">
        <div className="text_card">
          <h2>{productName}</h2>
          <h3>{productPrice}</h3>
        </div>
        <div className="img_card">
          <img className="imge" src={productImg} alt="img" />
          <img className="imge" src={productImg2} alt="img" />

        </div>
      </div>
    )
  }
  
  export default Card2
  