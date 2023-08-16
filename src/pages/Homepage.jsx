import Header from "../components/Header";
import Navbar from "../components/Navbar";
import BodyComponent from "../components/BodyComponent";
import "../index.css";

const HomePage = () => {
  return (
    <>
      <div className="flexcolumn">
      
          <div className="navbar-container" style={{borderRight:"solid 3px lightgrey"}}>
            <Navbar />
          </div>
          <div className="flex-row">

            <div className="header">
              <Header />

            </div>

            <div className="body-container">
              <BodyComponent />
            </div>
          </div>
      </div>


    </>
  )
}


export default HomePage;
