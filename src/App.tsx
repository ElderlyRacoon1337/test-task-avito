import { CssBaseline, ThemeProvider } from "cutie-ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { GamePage } from "./pages/GamePage";
import { themeOptions } from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider themeOptions={themeOptions}>
        <CssBaseline />
        <div
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <Header />
          <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/:id" element={<GamePage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
