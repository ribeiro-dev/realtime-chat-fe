import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useViewportHeight } from './hooks/useViewportHeight';
import { GlobalStyles } from './styles/GlobalStyles'
import { Chat } from './pages/Chat';

function App() {
  useViewportHeight();

  return (
    <>
      <GlobalStyles />

      <Router>
        <Routes>
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
