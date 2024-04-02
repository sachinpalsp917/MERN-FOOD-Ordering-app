import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
