import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Same stylesheets, in the same order, as the <head> of the original pages.
import './styles/open-iconic-bootstrap.min.css';
import './styles/animate.css';
import './styles/owl.carousel.min.css';
import './styles/owl.theme.default.min.css';
import './styles/magnific-popup.css';
import './styles/aos.css';
import './styles/ionicons.min.css';
import './styles/bootstrap-datepicker.css';
import './styles/jquery.timepicker.css';
import './styles/flaticon.css';
import './styles/icomoon.css';
import './styles/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
