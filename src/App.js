import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.compnenent";
import Navigation from "./routes/navigation/navigation.componenet";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>Shop in bound</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
