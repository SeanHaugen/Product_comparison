// import products from "../products/products";
// import ProductCompare from "./ProductCompare";
// import { useState } from 'react';

// function ProductPage() {

//     const [selectedItems, setSelectedItems] = useState([])

//     const handleCheckboxChange = (product) => {
//         if (selectedItems.includes(product)) {
//           setSelectedItems(selectedItems.filter(p => p !== product));
//         } else {
//           setSelectedItems([...selectedItems, product]);
//         }
//       };

//       return (
//       <div>
//         <ProductCompare selectedItems={selectedItems} setSelectedItems={setSelectedItems} handleCheckboxChange={handleCheckboxChange} />
//         {/* show products  */}
//         <ul className="product-container">
//         {products.map((product) => (
//           <ul key={product.id}>
//             <label className="product-label">

//               <div className="container">
//                 {product.name}
//                 <li>{product.id}</li>
//                     <li>Media: {product.media}</li>
//                     <li>Size: {product.size}</li>
//                     <li>Hardware: {product.hardware}</li>
//                     <li>{product.hardware2}</li>
//                     <li>{product.hardware3}</li>
//                     <li>RCAT rating: {product.RCAT}</li>
//                     <li>Production time: {product.production}</li>
//                     {product.image}
//                     <input
//                 type="checkbox"
//                 checked={selectedItems.includes(product)}
//                 onChange={() => handleCheckboxChange(product)}
//               />
//               <br />
//                 </div>
//             </label>
//           </ul>
//         ))}
//       </ul>
//       </div>
//     )
// }

// export default ProductPage