import './App.css';
import ContactUs from './components/Contactus';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import HomeComponent from './components/Home';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Header />
      <HomeComponent />
      <Menu />
      <Reservation />
      <Testimonials />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
