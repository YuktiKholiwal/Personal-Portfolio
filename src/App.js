
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Mycomponents/header";
import Head from "./Mycomponents/head";
import Aboutme from "./Mycomponents/aboutme";
import Projects from "./Mycomponents/projects";
import Resume from "./Mycomponents/resume";
import Footer from "./Mycomponents/footer";
import Knowme from "./Mycomponents/knowme";


function App() {
  return (
    <>
    <Header/>
    <Head/>
    <Aboutme/>
    <Knowme/>
    <Projects/>
    <Resume/>
    <Footer/>
    </>
  );
}

export default App;
