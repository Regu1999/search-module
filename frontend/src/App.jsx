import { QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import { queryClient } from "./util/http.js"
import SearchContainer from "./component/SearchContainer.jsx";
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SearchContainer />
      </QueryClientProvider>
    </>
  )
}

export default App