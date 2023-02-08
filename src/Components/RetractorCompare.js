import Retractors from "../products/Retractors"
import { useState } from "react"
// import ProductPage from "./ProductPage"

function RetractorCompare() {

    const [selectedItems, setSelectedItems] = useState([])

    const handleCheckboxChange = (product) => {
        if (selectedItems.includes(product)) {
          setSelectedItems(selectedItems.filter(p => p !== product));
        } else {
          setSelectedItems([...selectedItems, product]);
        }
      };

    const [limitReached, setLimitReached ] = useState(false)
    const productLimit = 3



    const handleSelectedProducts = (product) => {
      if(selectedItems.length < productLimit) {
        setSelectedItems([...selectedItems, product])
      } else {
        setLimitReached(true) 
        selectedItems(2)
      }
    }


    const handleRemoveProducts = () => {
      setSelectedItems(selectedItems.filter(product => product.id !== product.id))
    }
  
      return (
      <div>

        {limitReached && (<p>You have reached the product limit of {productLimit}.</p>)}

        {/* show products  */}
        <ul className="product-container">
        {Retractors.map((product) => (
          <ul key={product.id}>
            <label className="product-label">

              <div className="container">
                {product.name}
                <li>{product.id}</li>
                    {product.image}
                    <button
                      type="checkbox"
                      checked={selectedItems.includes(product) }
                      onChange={() => handleCheckboxChange(product)}
                      onClick={() => handleSelectedProducts(product)}
                    >
                    compare
                    </button>
                  <br />
                </div>
            </label>
          </ul>
        ))}
      </ul>
      <hr />





          {/* the following is the product comparison which opens once the product checkbox is selected */}
      <h3>Selected Products</h3>
      <ul>
        {/* map the products selected */}
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
      <button onClick={handleRemoveProducts} >Clear Products</button>




    </div>
    
    )
}

export default RetractorCompare;