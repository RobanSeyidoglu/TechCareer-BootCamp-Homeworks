import Header from "./Components/Header/Header.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {

    return (
        <>
            <Header/>
            <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}>
                <Projects/>
                <About/>
                <Contact/>
            </div>
            <Footer/>

        </>
    )
}

export default App