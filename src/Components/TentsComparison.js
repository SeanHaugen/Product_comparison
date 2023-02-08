import tents from "../products/tents";
import { useState } from "react";

function TentsCompare() {
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
          {tents.map((product) => (
            <ul key={product.id}>
              <label className="product-label">
  
                <div className="container">
                  {product.name}
                  <li>{product.id}</li>
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
          let locationClass = "";
          let canopyClass = "";
          let colorClass = "";
          let frameClass = "";
          let jointsClass = "";
          let legsClass = "";
          let feetClass = "";
          let setup_dimsClass = "";
          let collapse_dimsClass = "";
          let weightClass = "";

  
          if (index === 1) {
              // compare the product properties between two products
              const prevProduct = selectedItems[index - 1];
              if (prevProduct) {
                if (prevProduct.locations !== product.locations) {
                  locationClass = "highlight";
                }
                if (prevProduct.canopy !== product.canopy) {
                  canopyClass = "highlight";
                }
                if (prevProduct.colors !== product.colors) {
                  colorClass = "highlight";
                }
                if (prevProduct.frame !== product.frame) {
                  frameClass = "highlight";
                }
                if (prevProduct.joints !== product.joints) {
                  jointsClass = "highlight";
                }
                if (prevProduct.legs !== product.legs) {
                  legsClass = "highlight";
                }
                if (prevProduct.feet !== product.feet) {
                  feetClass = "highlight";
                }
                if (prevProduct.setup_dimensions !== product.setup_dimensions) {
                    setup_dimsClass = "highlight";
                }
              }
            }
            if (index === 2) {
              // compare the product properties between two products
              const prevProduct = selectedItems[index - 2];
              if (prevProduct) {
                if (prevProduct.locations !== product.locations) {
                  locationClass = "highlight";
                }
                if (prevProduct.canopy !== product.canopy) {
                  canopyClass = "highlight";
                }
                if (prevProduct.colors !== product.colors) {
                  colorClass = "highlight";
                }
                if (prevProduct.frame !== product.frame) {
                  frameClass = "highlight";
                }
                if (prevProduct.joints !== product.joints) {
                  jointsClass = "highlight";
                }
                if (prevProduct.legs !== product.legs) {
                  legsClass = "highlight";
                }
                if (prevProduct.feet !== product.feet) {
                  feetClass = "highlight";
                }
                if (prevProduct.setup_dimensions !== product.setup_dimensions) {
                    setup_dimsClass = "highlight";
                }
                if (prevProduct.collapsible_dimensions !== product.collapsible_dimensions) {
                    collapse_dimsClass = "highlight";
                }
                if (prevProduct.weight !== product.weight) {
                    weightClass = "highlight";
                }
              }
            }
          return (
            <div className="container-2">
              <li key={product.id}>{product.name}</li>
              <li>{product.id}</li>
              <li className={locationClass}>{product.location}</li>
              <li className={canopyClass}>{product.canopy}</li>
              <li className={colorClass}>{product.colors}</li>
              <li className={frameClass}>{product.frame}</li>
              <li className={jointsClass}>{product.joints}</li>
              <li className={legsClass}>{product.legs}</li>
              <li className={feetClass}>{product.feet}</li>
              <li className={setup_dimsClass}>{product.setup_dimensions}</li>
              <li className={collapse_dimsClass}>{product.collapsible_dimensions}</li>
              <li className={weightClass}>{product.weight}</li>

              <br />
            
            </div>
              );
              })}
        </ul>
        <button onClick={handleRemoveProducts} >Clear Products</button>
  
  
  
  
      </div>
      
      )
}

export default TentsCompare;