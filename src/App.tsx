import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import { Header } from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Search = lazy(() => import("./pages/Search"));
// admin routes
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Products = lazy(() => import("./pages/admin/products"));
const Customers = lazy(() => import("./pages/admin/customers"));
const Transaction = lazy(() => import("./pages/admin/transaction"));
const Barcharts = lazy(() => import("./pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/transactionmanagement")
);

// Routes

function App() {
  return (
    <Router>
      <Header />
      {/* yaha pe jo likhenge header yeh saare routes mai available hoga :) */}

      {/* admin routes----------------------------------- */}

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
          {/* ------------------------------admin routes----------------------------------- */}
          <Route
          // element={
          //   <ProtectedRoute
          //     isAuthenticated={true}
          //     adminRoute={true}
          //     isAdmin={true}
          //   />
          // }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            {/* Charts */}
            <Route path="/admin/chart/bar" element={<Barcharts />} />
            <Route path="/admin/chart/pie" element={<Piecharts />} />
            <Route path="/admin/chart/line" element={<Linecharts />} />
            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />

            <Route path="/admin/product/:id" element={<ProductManagement />} />

            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
            {/* ------------------------------admin routes END----------------------------------- */}
          </Route>
          ;
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
