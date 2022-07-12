import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SideBar from "./components/sideBar";
import Usuarios from "./components/usuarios";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <SideBar />
          <Usuarios />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
