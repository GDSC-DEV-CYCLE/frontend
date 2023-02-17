import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopNavigation from './components/Navigation/TopNavigation';
import LoginPage from './pages/login';
import MyPage from './pages/mypage';
import PostDetailPage from './pages/postdetail';
import PostListPage from './pages/postlist';
import SignUpPage from './pages/signup';
import WritePage from './pages/write';

const App = () => {
  return (
    <BrowserRouter>
      <TopNavigation />

      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/postlist" element={<PostListPage />} />
        <Route path="/postdetail" element={<PostDetailPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
