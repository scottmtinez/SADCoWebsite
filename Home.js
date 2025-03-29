import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';
import AI from '../images/AIBrain.png';
import SAS from '../images/SASIcon.png';
import Risk from '../images/RiskIcon.png';
import Algo from '../images/AlgoIcon.png';
import MutliLang from '../images/MultiLangIcon.png';
import Econ from '../images/ScalableEconIcon.png';
import Content from '../images/AIContentIcon.png';
import Software from '../images/SoftwareIcon.png';
import Integration from '../images/AIIntegrationIcon.png';
import Legacy from '../images/LegacySystemIcon.png';
import Data from '../images/DataVisualIcon.png';
import Scalable from '../images/ScalableIcon.png';
import Maintenance from '../images/MaintenanceIcon.png';
import Optimization from '../images/OptimizationIcon.png'; 

function Home() {
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      // Ensure the NavBar's activeTab reflects the current location
      if (location.pathname === '/contactUs') {
        navigate('/contactUs'); // Navigate to Contact Us if button is clicked
      }
    }, [location, navigate]);
  
    const handleContactUsClick = () => {
      navigate('/contactUs');
    };

  return(
    <div className='home-main-container'>
        <section className='home-bio-container'> 
            <p className=''>Empowering Insurance and Finance with AI-Enabled Software Solutions</p>
        </section>

        <h2 className='home-aboutUs-title'>About Us</h2>
        <section className='home-aboutUs-container'>
            <p className='home-aboutUs-p'>At SAD co., we specialize in creating custom AI-enabled software for the insurance and finance industries. With over five years of experience in building SaaS AI-enabled products and more than two decades of software engineering expertise, we deliver cutting-edge solutions tailored to your unique needs. Our mission is to bring your visions to life and help you leverage AI technologies to improve the efficiency and accuracy of your existing business processes.</p>
        </section>

        <h2 className='home-expertise-title'>Our Expertise</h2>
        <section className='home-expertise-container '>
            <ul className='home-expertise-ul'>
                <li className='home-expertise-li'>
                    <div>
                        <img src={AI} className='home-expertise-img'/>
                        <span className='home-expertise-img-label'>Custom AI-enabled software development</span>
                    </div>
                </li>

                <li className='home-expertise-li'>
                    <div>
                        <img src={SAS} className='home-expertise-img' />
                        <span className='home-expertise-img-label'>SaaS product creation</span>
                    </div>
                </li>

                <li className='home-expertise-li'>
                    <div>
                        <img src={Risk} className='home-expertise-img'/>
                        <span className='home-expertise-img-label'>Risk analysis models</span>
                    </div>
                </li>

                <li className='home-expertise-li'>
                    <div>
                        <img src={Algo} className='home-expertise-img' />
                        <span className='home-expertise-img-label'>Forecasting algorithms</span>
                    </div>
                </li>
                
                <li className='home-expertise-li'>
                    <div>
                        <img src={Content} className='home-expertise-img' />
                        <span className='home-expertise-img-label'>AI-powered content generation</span>
                    </div>
                </li>
                
                <li className='home-expertise-li'>
                    <div>
                        <img src={MutliLang} className='home-expertise-img' />
                        <span className='home-expertise-img-label'>Multi-language development capabilities</span>
                    </div>
                </li>
                
                <li className='home-expertise-li'>
                    <div>
                        <img src={Econ} className='home-expertise-img' />
                        <span className='home-expertise-img-label'>Scalable and economically optimized solutions</span>
                    </div>
                </li>
            </ul>
        </section>

        <h2 className='home-why-title'>Why Choose SAD co.?</h2>
        <section className='home-why-container'>    
            <ul className='home-why-ul'>
                <li className='home-why-li'>5+ years of experience in AI-enabled SaaS products</li>
                <li className='home-why-li'>20+ years of software engineering expertise</li>
                <li className='home-why-li'>Tailored solutions for insurance and finance industries</li>
                <li className='home-why-li'>Cutting-edge AI models for risk analysis and forecasting</li>
                <li className='home-why-li'>Proven track record of successful project deliveries</li>
                <li className='home-why-li'>Expertise across multiple programming languages</li>
                <li className='home-why-li'>Commitment to finding the best economic and scalable fit for each client</li>
            </ul>
        </section>

        <h2 className='home-approach-title'>Our Approach</h2>
        <section className='home-approach-container'>
            <p className='home-approach-p'>At SAD co., we believe in tailoring individual solutions to best fit both economically and for scale. Our team's expertise spans across many programming languages, allowing us to choose the most appropriate technology stack for each project. We don't just build software; we bring visions to life, helping companies leverage AI technologies to transform their operations.</p>
        </section>

        <h2 className='home-services-title'>Our Services</h2>
        <section className='home-services-container'>
            <ul className='home-services-ul'>
                <li className='home-services-li'>
                    <div>
                        <img src={Software} className='home-services-img'/>
                        <span className='home-services-img-label'>Custom software development</span>
                    </div>
                </li>

                <li className='home-services-li'>
                    <div>
                        <img src={Integration} className='home-services-img' />
                        <span className='home-services-img-label'>AI model creation and integration</span>
                    </div>
                </li>

                <li className='home-services-li'>
                    <div>
                        <img src={Legacy} className='home-services-img' />
                        <span className='home-services-img-label'>Legacy system modernization</span>
                    </div>
                </li>

                <li className='home-services-li'>
                    <div>
                        <img src={Data} className='home-services-img' />
                        <span className='home-services-img-label'>Data analytics and visualization</span>
                    </div>
                </li>

                <li className='home-services-li'>
                    <div>
                        <img src={Optimization} className='home-services-img' />
                        <span className='home-services-img-label'>Process optimization through AI</span>
                    </div>
                </li>

                <li className='home-services-li'>
                    <div>
                        <img src={Scalable} className='home-services-img' />
                        <span className='home-services-img-label'>Scalable architecture design</span>    
                    </div>
                </li>
                
                <li className='home-services-li'>
                    <div>
                        <img src={Maintenance} className='home-services-img' />
                        <span className='home-services-img-label'>Ongoing support and maintenance</span>
                    </div>
                </li>
            </ul>
        </section>

        <h2 className='home-help-title'>How We Help</h2>
        <section className='home-help-container'>
            <p className='home-help-p'>We specialize in helping companies leverage AI technologies to improve the efficiency and accuracy of their existing business processes. Our solutions are designed to:</p>
            <ul className='home-help-ul'>
                <li className='home-help-li'>Streamline operations and reduce manual work</li>
                <li className='home-help-li'>Enhance decision-making with data-driven insights</li>
                <li className='home-help-li'>Improve risk assessment and management</li>
                <li className='home-help-li'>Automate complex calculations and forecasting</li>
                <li className='home-help-li'>Personalize customer experiences</li>
                <li className='home-help-li'>Ensure scalability as your business grows</li>
            </ul>
        </section>

        <h2 className='home-contact-title'>Contact Us</h2>
        <section className='home-contact-container'>
            <p className='home-contact-p'>Ready to transform your business with AI-enabled software solutions? Get in touch with us today to discuss how we can bring your vision to life and optimize your processes with cutting-edge AI technology.</p>
            <button className="home-contact-btn" onClick={handleContactUsClick}>Contact Us</button>
        </section>
      
    </div>
  );
}

export default Home;  
