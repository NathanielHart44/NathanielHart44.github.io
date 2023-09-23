import './App.css';
import MainStyle from './components/MainStyle';
import NotistackProvider from './components/NotistackProvider';
import ThemeLocalization from './components/ThemeLocalization';
import MetadataProvider from './contexts/MetadataContext';
// import Router from './routes';
import ThemeProvider from './theme';
import Home from './pages/Home';

// ----------------------------------------------------------------------

function App() {
  return (
    <ThemeProvider>
      <ThemeLocalization>
        <MetadataProvider>
          <NotistackProvider>
            <MainStyle>
              {/* <Router /> */}
              <Home />
            </MainStyle>
          </NotistackProvider>
        </MetadataProvider>
      </ThemeLocalization>
    </ThemeProvider>
  );
}

export default App;
