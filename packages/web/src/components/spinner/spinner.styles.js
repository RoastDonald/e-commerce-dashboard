import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  loaderWrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

//   #loading {
//     display: inline-block;
//     width: 50px;
//     height: 100vh;
//     border: 3px solid rgba(255, 255, 255, 0.3);
//     border-radius: 50%;
//     background-color: yellow;
//     border-top-color: #fff;
//     animation: spin 1s ease-in-out infinite;
//     -webkit-animation: spin 1s ease-in-out infinite;
//   }

//   @keyframes spin {
//     to {
//       -webkit-transform: rotate(360deg);
//     }
//   }
//   @-webkit-keyframes spin {
//     to {
//       -webkit-transform: rotate(360deg);
//     }
//   }