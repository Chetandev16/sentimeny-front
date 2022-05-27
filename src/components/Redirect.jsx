import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Redirect = () => {
    const url = `https://sentiment-analyzer16.herokuapp.com/`
    const fetch = async () => {
      window.location.href = url;
    };
  
    useEffect(() => {
      fetch();
    }, []);
  
    return (
      <div>
        <Box sx={{ display: "flex", marginLeft: "45%", marginTop: "20%" }}>
          <CircularProgress />
        </Box>
        <h1 style={{ marginLeft: "43%" }}>Loading .....</h1>
      </div>
    );
}

export default Redirect

// import React, { useEffect } from "react";

// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

// export const SentimentPage = () => {
//   // {cred}
//   // ?username=${cred.username}&pass=${crehd.password}
//   const url = `http://localhost:8501/`
//   const fetch = async () => {
//     window.location.href = url;
//   };

//   useEffect(() => {
//     fetch();
//   }, []);

//   return (
//     <div>
//       <Box sx={{ display: "flex", marginLeft: "45%", marginTop: "20%" }}>
//         <CircularProgress />
//       </Box>
//       <h1 style={{ marginLeft: "43%" }}>Loading .....</h1>
//     </div>
//   );
// };