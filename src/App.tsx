import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { About, Projects, Music } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
