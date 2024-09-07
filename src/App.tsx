import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/Cart"));
const Search = lazy(() => import("./pages/Search"));
function App() {
  return (
    <Router>
      {/* yaha pe jo likhenge header yeh saare routes mai available hoga :) */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* =======================Lazy Loading==================================== 
         /* Now when we are at the home page we see that other
         components like cart and search etc are also fetched in the
          homepage whereas they are not required to be fetched so to optimise we will use
          lazy loading so that other pages are not fetched when not required.
          So rather than importing pages directly we will lazy load them :)
         ========================Lazy Loading============================================ */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
