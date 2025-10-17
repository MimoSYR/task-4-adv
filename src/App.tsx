import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Root from "./layouts/Root";

function App() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* Main */}
      <main>
        <Root />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
