import { Outlet } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/fetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";



function App() {
  const FetchStatus=useSelector((store)=>store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems/>
      {FetchStatus.currentlyFetching ? <LoadingSpinner/>:<Outlet/>}
      
      
      <Footer></Footer>
    </>
  );
}

export default App;
