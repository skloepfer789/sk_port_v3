import { useEffect, useState } from 'react';
import PageHeader, { links as headerStyles } from '../components/pagesHeader.component';
import styles from '../styles/global.styles.css'
import MainMenu, {links as menuLinks} from '../components/mainMenu.component';
import pageStyles from '../styles/page.styles.css';

import brandingInfo from '../../brandingInfo.json';
import { useLoaderData, useNavigate } from '@remix-run/react';
import Modal, {links as modalStyles} from '../components/modal.component';
import ProgressiveImg from '../components/progressiveImage.component';

export const links = () => [
  {rel: "stylesheet", href: styles},
  {rel: "stylesheet", href: pageStyles},
  ...menuLinks(),
  ...headerStyles(),
  ...modalStyles(),
];

export const meta = () => {
  return [
    {title: "Brand Identity Services | Stephen Kloepfer Branding & Design?"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved."},
    {name: "description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition."},    
   {name: "og:title", content: "Stephen Kloepfer Branding Services"},
   {name: "og:description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition."},
   {name: "og:image", content: "/social_preview.png"},
  ];
};

const Branding = () => {

    const [triggered, setTriggered] = useState(false);
    const [loaded, hasloaded] = useState(false);
    const [activeBrand, setActiveBrand] = useState();
    const [brandIsActive, setBrandBool] = useState(false);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const navigate = useNavigate();

    const triggerSlide = async() => {
        await delay(250);
        hasloaded(true);
        setTriggered(true);
    }

    const data_from_child = async(data) => {
      if(data != '' && data != undefined) {
        closeSlide();
        await delay(500);
        navigate('/' + data);
      }
    }

    const closeSlide = () => {      
      setTriggered(false); 
    }    

    const brandData = useLoaderData();

    useEffect(() => {
        if(!loaded){triggerSlide();}
    })

    const [hoveredItem, setHovered] = useState('');

    function changeHover(newItem){
      setHovered(newItem.name);
    }

    function unsetHover() {
      setHovered('');
    }

    function selectBrand(brand){
      setActiveBrand(brand);
      setBrandBool(true);
    }

    const onClose = () => {
      setActiveBrand('');
      setBrandBool(false);
    }

    const onReopen = () => {
      hasloaded(false);
    }

    function checkLength(brand) {
      return brand.images.length;
    }

  return (
    <div className='main'>
      <MainMenu 
        page='branding'
        onReopen={onReopen}
      />
      <div className={triggered ? `slider activeSlide` : `slider inactiveSlide`} >
      <button onClick={closeSlide} className={triggered? 'button' : 'button hiddenButton'} >x</button>
        <PageHeader background='dark' setter={data_from_child} onClose={closeSlide} active='branding' />        
        <div>
          <h1 className='heading'>Brand Identity <br/> & Logo Design</h1>
          <div className='imageGrid'>          
                        {
              brandData.branding.map((brand) => (
                <div className='imageBox' key={brand.name} onMouseEnter={() => changeHover(brand)} onMouseLeave={unsetHover}>
                <a>
                {
                  checkLength(brand) > 1 ? (
                    <p className='overlay'>Click to See More</p>
                  ): (<p className='overlay'>Click to Expand Image</p>)
                }
                
                  <ProgressiveImg 
                    alt={brand.name}  
                    key={brand.name}
                    src={ brand.hero ? brand.hero.image : brand.images[0].image}
                    placeholderSrc={brand.hero ? brand.hero.placeholder : brand.images[0].placeholder}
                    classTitle='primaryImage'
                    onClick={() => selectBrand(brand)}
                  />
                </a>
                </div>
                
              ))
            }
                                    
        </div>
                    
      </div>
      
    </div>
    <Modal 
      onClose={onClose} 
      className={brandIsActive ? 'openModal' : 'closeModal'} 
      color='white'
      data={activeBrand}
    />
    
    </div>
  );
}

export default Branding;

export async function loader() {
  return brandingInfo;
}