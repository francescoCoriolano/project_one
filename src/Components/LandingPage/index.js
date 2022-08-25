// import React from "react";
// import Header from "../Header";
// import ProductsOverview from "../ProductsOverview";
// import ShopSection from "../ShopSection";
// import RecomendedItems from "../RecomendedItems";
// import "./style.scss";
// import Footer from "../Footer";

// const LandingPage = () => {
//   return (
//     <div>
//       <Header />
//       <ProductsOverview />
//       <ShopSection />
//       <RecomendedItems />
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;

///////////////////////////////////////

import React from "react";
import Header from "../Header";
import ProductsOverview from "../ProductsOverview";
import ShopSection from "../ShopSection";
import RecomendedItems from "../RecomendedItems";
import "./style.scss";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="max-w-[600px] mx-auto my-16 p-4">
        <h1 className="text-2xl font-bold py-4">Account</h1>
        <p>User Email: {user && user.email}</p>

        <button onClick={handleLogout} className="border px-6 py-2 my-4">
          Logout
        </button>
      </div>
      <Header />
      <ProductsOverview />
      <ShopSection />
      <RecomendedItems />
      <Footer />
    </>
  );
};

export default Account;
