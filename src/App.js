import { Fragment } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Home } from "./components/home"; //Home from "./components/home/Home";
import About from "./components/about/about";
function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
      <About />
    </Fragment>
  )
}




// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// function App() {
//   return React.createElement(
//     "div",
//     {
//       className : "App", 
//       style : {
//         color : "yellow",
//         fontSize : "50px",
//         backgroundColor : "green",
//         display : "flex",
//         justifyContent : "center",
//         alignItems : "center",
//         height : "100vh"

//       },
//     },
//     React.createElement("h1", null, "Hello World")
//   )
// }


export default App ;