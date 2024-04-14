import { useEffect } from "react";
import Dropdown from "./components/Dropdown";
import Header from "./components/UI/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/username-actions";
import Card from "./components/UI/Card";
import SortButton from "./components/SortButton";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="controllers">
        <Dropdown />
        <SortButton />
      </div>

      <Card />
    </div>
  );
}

export default App;
