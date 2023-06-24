const Card = ({ productName, productText, productPrice, productImg }) => {
  return (
    <div className="Card">
      <div className="text_card">
        <h2>{productName}</h2>
        <h4>{productText}</h4>
        <h3>{productPrice}</h3>
      </div>
      <div className="img_card">
        <img className="imge" src={productImg} alt="img" />
      </div>
    </div>
  )
}

export default Card
