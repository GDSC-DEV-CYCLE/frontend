import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/login';
import PostDetailPage from './pages/postdetail';
import PostListPage from './pages/postlist';
import PostWritePage from './pages/postwrite';
import SignUpPage from './pages/signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/postlist" element={<PostListPage />} />
        <Route path="/postdetail" element={<PostDetailPage />} />
        <Route path="/postwrite" element={<PostWritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
