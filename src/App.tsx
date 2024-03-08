import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Center } from './Layout';
import QuizPage from './pages/QuizPage';
import ScoresPage from './pages/ScoresPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='quiz' element={<QuizPage />} />
      <Route path='scores' element={<ScoresPage />} />
      <Route path='*' element={<Navigate to={'quiz'} />} />
    </>
  )
);


const App = () => (
  <Center sx={{ height: 1, width: 1, overflow: 'auto' }}>
    <RouterProvider router={router} />
  </Center>
);

export default App;