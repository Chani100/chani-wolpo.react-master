import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ROUTES from "./ROUTES";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
import EditMenuPage from "../pages/EditCardMenuPage";
import CraetCardMenu from "../pages/CreatCardMenu";
import CRMPage from "../pages/CrmPage";
// import RP1 from "../pages/RP1";
// import RP2 from "../pages/RP2";
import ProtectedRoute from "../components/ProtectedRoute";
import MenuLogoutPage from "../pages/MenuLogout";
// import ProfilePage from "../pages/ProfilePage";
// import SuperProtectedRoute from "../components/SuperProtectedRoute";
import LogoutPage from "../pages/LogoutPage";
import PaymentForm from "../pages/PaymentForm";
import Contact from "../pages/Contact";
import Profail from "../pages/Profail";
import MyOrders from "../pages/AllMyOrders";
import MyOrder from "../pages/MyOrder";
import AboutPage from "../pages/About";
import OrderDetails from "../pages/OrderDetails";

// import NestedPage1 from "../pages/NestedRoutePage/NestedPage1";
// import NestedPage2 from "../pages/NestedRoutePage/NestedPage2";
// import About from "../pages/About";
// import MyCards from "../pages/MyCards";

// import FavCardsPage from "../pages/FavCards";
// import InformationCard from "../pages/InformationCard";
// import SandBox from "../pages/Sandbox";
// import SuperProtectedRouteEdit from "../components/SuperProtectedRouteEdit";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.CREATMENU} element={<CraetCardMenu />} />
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.MENU} element={<MenuPage />} />
      <Route path={ROUTES.CRM} element={<CRMPage />} />
      <Route path="/edit/:id" element={<EditMenuPage />} />
      <Route path={ROUTES.MUNELOGOUT} element={<MenuLogoutPage />} />
      <Route path={ROUTES.PAYMENT} element={<PaymentForm />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.PROFAIL} element={<Profail />} />
      <Route path={ROUTES.MYORDERS} element={<MyOrders />} />
      {/*    <Route path={ROUTES.ORDER} element={<MyOrder />} /> */}
      <Route path="/order/:id" element={<MyOrder />} />
      <Route path="/crm/:id" element={<OrderDetails />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route
        path={ROUTES.LOGOUT}
        element={<ProtectedRoute element={<LogoutPage />} />}
      />
      
    </Routes>

    //       <Route  path="infor/:id" element=// {<InformationCard />} />

    //       <Route
    //         path={ROUTES.FAVCARD}
    //         element={<ProtectedRoute element={<FavCardsPage />} />}
    //       />
    //       <Route
    //         path={ROUTES.PROFILE}
    //         element={<ProtectedRoute element={<ProfilePage />} />}
    //       />
    //       <Route
    //         path="/myCards"
    //         element={
    //           <SuperProtectedRoute
    //             isAdmin={true}
    //             isBiz={true}
    //             element={<MyCards />}
    //           />
    //         }
    //       />
    //       <Route
    //         path="/edit/:id"
    //         element={
    //           <SuperProtectedRouteEdit
    //             isAdmin={true}
    //             isBiz={true}
    //             element={<EditCardPage />}
    //           />
    //         }
    //       />
    //       <Route
    //         path={ROUTES.CREATE}
    //         element={
    //           <SuperProtectedRoute
    //             isAdmin={true}
    //             isBiz={true}
    //             element={<CreateCardPage />}
    //           />
    //         }
    //       />
    //       <Route
    //         path="/sandBox"
    //         element={
    //           <SuperProtectedRoute
    //             isAdmin={true}
    //             isBiz={false}
    //             element={<SandBox />}
    //           />
    //         }
    //       >
    //         <Route path="nestedpage1" element={<NestedPage1 />} />
    //         <Route path="nestedpage2" element={<NestedPage2 />} />
    //         <Route path="RP1" element={<RP1 />} />
    //         <Route path="RP2" element={<RP2 />} />

    //       </Route>

    //       <Route path="*" element={<h1>404</h1>} />
    //     </Routes>
  );
};

export default Router;
