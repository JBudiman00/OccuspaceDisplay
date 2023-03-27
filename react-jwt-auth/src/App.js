// const test = () => {
//   fetch("https://domain.provider.com/mas/api/v1/mail/transaction", {
//   body: "{\"id\":\"3970a1b0-6e27-448a-adfc-0083db15b2fb\", \"tokens\":{\"design_token1\":\"Hi\",\"design_token2\":\"Hello\",\"design_token3\":\"World\",\"subject_token1\":\"XYZ\"}, \"recipient\":\"james@sample.com\"}",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     Token: "sfg999666t673t7t82"
//   },
//   method: "POST"
// })
// }

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;

const test = () => {
  fetch("https://domain.provider.com/mas/api/v1/mail/transaction", {
  body: "{\"id\":\"3970a1b0-6e27-448a-adfc-0083db15b2fb\", \"tokens\":{\"design_token1\":\"Hi\",\"design_token2\":\"Hello\",\"design_token3\":\"World\",\"subject_token1\":\"XYZ\"}, \"recipient\":\"james@sample.com\"}",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Token: "sfg999666t673t7t82"
  },
  method: "POST"
})
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;