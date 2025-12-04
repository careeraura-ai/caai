// import { useEffect } from "react";

// export default function usePageLoad() {
//   useEffect(() => {
//     const body = document.body;
//     body.classList.add("page-loaded");

//     return () => body.classList.remove("page-loaded");
//   }, []);
// }

// src/utils/usePageLoad.jsx
import { useEffect } from "react";

export default function usePageLoad() {
  useEffect(() => {
    function onLoaded() {
      document.body.classList.add("page-loaded");
    }
    // short delay for nicer reveal
    const t = setTimeout(onLoaded, 120);
    return () => clearTimeout(t);
  }, []);
}
