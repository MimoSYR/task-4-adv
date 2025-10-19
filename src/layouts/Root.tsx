import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* Main */}
      <main style={{ height: "200vh" }}>
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Root;
