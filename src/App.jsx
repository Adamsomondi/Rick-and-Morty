// File: src/App.jsx
import './App.css';
import Header from './components/Header';
import Destination from './components/Destination';
import Footer from './components/Footer';
import List from './components/List';
import ReviewArticle from './components/ReviewArticle';

function App() {
  return (
    <>
      <Header />
      <main>
        <List/>
        <Destination/>
        <ReviewArticle />
      </main>
      <Footer />
    </>
  );
}

export default App; 