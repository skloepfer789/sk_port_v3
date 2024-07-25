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
    {title: "Artistic Playground | Stephen Kloepfer Branding & Design?"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved."},
    {name: "description", content: "Featuring non-client projects, done for fun and practice."},    
   {name: "og:title", content: "Stephen Kloepfer Artistic Playground"},
   {name: "og:description", content: "Featuring non-client projects, done for fun and practice."},
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
        page='spec'
        onReopen={onReopen}
      />
      <div className={triggered ? `slider backgroundLight activeSlide` : `slider inactiveSlide`} >
      <button onClick={closeSlide} className={triggered? 'button' : 'button hiddenButton'} >x</button>
        <PageHeader background='dark' setter={data_from_child} onClose={closeSlide} active='spec' />        
        <div>
          <h1 className='heading'>Artistic Playground<br/>& Speculative Work</h1>
          <br/>
          <p className='introText'>Whether to keep our creative edge honed, or just for day-to-day fun, sometimes our best work ends up being purely fictional work. While I prefer to focus my portfolio on real-world projects, occassionally a 'for fun' design is just too good to keep to myself. That is why I created the 'speculative' section of my portfolio, as a chance to show off work I'm proud of, that has never seen the light of day professionally.</p>
          <div className='imageGrid'>          
                        {
              brandData.spec.map((brand) => (
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