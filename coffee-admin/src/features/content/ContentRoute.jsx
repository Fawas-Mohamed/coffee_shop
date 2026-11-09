import { Navigate,useParams } from 'react-router-dom';
import AboutContentPage from './AboutContentPage.jsx';
import HeroContentPage from './HeroContentPage.jsx';
import PricingContentPage from './PricingContentPage.jsx';
import ServicesContentPage from './ServicesContentPage.jsx';
export default function ContentRoute(){const{section}=useParams();if(section==='hero')return <HeroContentPage/>;if(section==='services')return <ServicesContentPage/>;if(section==='pricing')return <PricingContentPage/>;if(section==='about')return <AboutContentPage/>;return <Navigate to="/content/hero" replace/>;}
