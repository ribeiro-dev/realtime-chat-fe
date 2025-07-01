import { Body } from './components/Body'
import { useViewportHeight } from './hooks/useViewportHeight';
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  useViewportHeight();

  return (
    <>
      <GlobalStyles />
      <Body />
    </>
  )
}

export default App
