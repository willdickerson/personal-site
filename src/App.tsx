import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { About, Music } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
