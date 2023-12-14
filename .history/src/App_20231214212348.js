import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route index element={<New />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;