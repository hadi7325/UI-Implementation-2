import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Feature from './components/feature/Feature';
import Download from './components/download/Download';
import Subscribe from './components/subscribe/Subscribe';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Feature />
      <Download />
      <Subscribe />
      <Faq />
      <Footer/>
    </main>
  );
}

export default App;
