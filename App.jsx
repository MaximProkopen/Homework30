import Card from "./components/Card/Card";
import "./App.css";
import authorFace from "./assets/authorFace.png";
import clock from "./assets/clock.png";
import document from "./assets/document.png";
import star from "./assets/star.png";
import userIcon from "./assets/userIcon.png";

function App() {
  const url = "https://assets.ithillel.ua/images/blog/cover/_transform_blogCard_2x/Hillel-Blog-BusinessAnalysis.jpg";
  
  return (
    <div className="App">
      <Card img1={authorFace} img2={clock} img3={document} img4={star} img5={userIcon} img={url} title="UX Design : How To Implement Usability Testing" author="Alfredo Rhiel Madsen" students={500} level="Beginner" rating={4.5} duration={1.5} modules={5} />
    
    </div>
  );
}

export default App;