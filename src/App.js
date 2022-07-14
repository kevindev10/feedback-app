
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import AboutPage from './pages/AboutPage';
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from './context/FeedbackContext'


function App(){
  
  return(
    <FeedbackProvider>

        
        <Router>
          <Header/>
          <div className="container">
            <h1>My App</h1> 
            <Routes>
              <Route
                exact
                path="/"
                element = {
                  <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  </>
                }
                                    
              >
              </Route>
            </Routes>
            
          </div>
          <Routes>
              <Route path="/about" element={<AboutPage/>}/>
          </Routes>
        
          <AboutIconLink/>

        </Router>


    </FeedbackProvider>
    
   
  )
}

export default App;