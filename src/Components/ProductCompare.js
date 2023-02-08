import products from "../products/products"
import { useState } from "react"
// import ProductPage from "./ProductPage"

function ProductCompare() {

    const [selectedItems, setSelectedItems] = useState([])

    const handleCheckboxChange = (product) => {
        if (selectedItems.includes(product)) {
          setSelectedItems(selectedItems.filter(p => p !== product));
        } else {
          setSelectedItems([...selectedItems, product]);
        }
      };



    
      return (
      <div>

        {/* show products  */}
        <ul className="product-container">
        {products.map((product) => (
          <ul key={product.id}>
            <label className="product-label">

              <div className="container">
                {product.name}
                <li>{product.id}</li>
                    <li>Media: {product.media}</li>
                    <li>Size: {product.size}</li>
                    <li>Hardware: {product.hardware}</li>
                    <li>{product.hardware2}</li>
                    <li>{product.hardware3}</li>
                    <li>RCAT rating: {product.RCAT}</li>
                    <li>Production time: {product.production}</li>
                    {product.image}
                    <input
                type="checkbox"
                checked={selectedItems.includes(product)}
                onChange={() => handleCheckboxChange(product)}
              />
              <br />
                </div>
            </label>
          </ul>
        ))}
      </ul>
      <hr />
      <h3>Selected Products</h3>
      <ul>
      {selectedItems.map((product, index) => {
        let mediaClass = "";
        let sizeClass = "";
        let hardwareClass = "";
        let hardware2Class = "";
        let hardware3Class = "";
        let RCATClass = "";
        let productionClass = "";
        if (index === 1) {
            // compare the product properties between two products
            const prevProduct = selectedItems[index - 1];
            if (prevProduct) {
              if (prevProduct.media !== product.media) {
                mediaClass = "highlight";
              }
              if (prevProduct.size !== product.size) {
                sizeClass = "highlight";
              }
              if (prevProduct.hardware !== product.hardware) {
                hardwareClass = "highlight";
              }
              if (prevProduct.hardware2 !== product.hardware2) {
                hardware2Class = "highlight";
              }
              if (prevProduct.hardware3 !== product.hardware3) {
                hardware3Class = "highlight";
              }
              if (prevProduct.RCAT !== product.RCAT) {
                RCATClass = "highlight";
              }
              if (prevProduct.production !== product.production) {
                productionClass = "highlight";
              }
            }
          }
          if (index === 2) {
            // compare the product properties between two products
            const prevProduct = selectedItems[index - 2];
            if (prevProduct) {
              if (prevProduct.media !== product.media) {
                mediaClass = "highlight";
              }
              if (prevProduct.size !== product.size) {
                sizeClass = "highlight";
              }
              if (prevProduct.hardware !== product.hardware) {
                hardwareClass = "highlight";
              }
              if (prevProduct.hardware2 !== product.hardware2) {
                hardware2Class = "highlight";
              }
              if (prevProduct.hardware3 !== product.hardware3) {
                hardware3Class = "highlight";
              }
              if (prevProduct.production !== product.production) {
                productionClass = "highlight";
              }
            }
          }
        return (
          <div className="container-2">
            <li key={product.id}>{product.name}</li>
            <li>{product.id}</li>
            <li className={mediaClass}>Media: {product.media}</li>
            <li className={sizeClass}>Size: {product.size}</li>
            <li className={hardwareClass}>Hardware: {product.hardware}</li>
            <li className={hardware2Class}>{product.hardware2}</li>
            <li className={hardware3Class}>{product.hardware3}</li>
            <li className={RCATClass}>RCAT rating: {product.RCAT}</li>
            <li className={productionClass}>Production Time: {product.production}</li>
            <br />
          </div>
            );
            })}
      </ul>
    </div>
    
    )
}

export default ProductCompare;