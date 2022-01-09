import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "./assets/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./hooks/useAuth";
import Loading from "./components/Loading";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
