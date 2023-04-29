import { useState, useEffect } from "react";

import InfoBlock from "./InfoBlock";

import "../styles/LeftDrawer.css";

export default function LeftDrawer(params) {
  let name = params.name;
  let itemId = params.itemId;

  const [showBlock, setShowBlock] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest("#"+itemId) === null) {
        setShowBlock(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="leftElements"
      onClick={() => {
        setShowBlock(true);
      }}
    >
      <h1 id={itemId}>{name}</h1>
      {showBlock && <InfoBlock clickedItemId = {itemId}></InfoBlock>}
    </div>
  );
}

// import { useState } from "react";

// import InfoBlock from "./InfoBlock";

// import "../styles/LeftDrawer.css";

// export default function LeftDrawer(params) {
//   let name = params.name;
//   let itemId = params.itemId;

//   const [showBlock, setShowBlock] = useState(false);

//   return (
//     <div
//       className="leftElements"
//       onClick={() => {
//         setShowBlock(true);
//       }}
//       onMouseEnter={() => {
//         setShowBlock(true);
//       }}
//       onMouseLeave={() => {
//         setShowBlock(false);
//       }}
//     >
//       <h1 id={itemId}>{name}</h1>
//       {showBlock && <InfoBlock>Info</InfoBlock>}
//     </div>
//   );
// }
