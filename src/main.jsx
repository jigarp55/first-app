import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './Components/App.jsx'
import './index.css'
// import './Css/App.css';
// import Header from './Components/Header.jsx';
// import Footer from './Components/Footer.jsx';
// import ApiContent from './Components/Apicontent.jsx';
// import Reviewnext from './Components/ReviewNext.jsx';
// import FirstComponent from './Components/FirstComponent.jsx';
import { Registration } from './Components/finalRegistration';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    {/* <FirstComponent /> */}
    {/* <ApiContent />
    <Reviewnext /> */}
    <Registration />
    {/* <Footer /> */}
  </StrictMode>,
)
