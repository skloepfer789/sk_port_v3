import { useEffect, useRef, useState } from 'react';
import PageHeader, { links as headerStyles } from '../components/pagesHeader.component';
import styles from '../styles/global.styles.css'
import MainMenu, {links as menuLinks} from '../components/mainMenu.component';
import logoStyles from '../styles/logos.styles.css';
import pageStyles from '../styles/page.styles.css';
import { useLoaderData, useNavigate } from '@remix-run/react';
import brandingInfo from '../../brandingInfo.json';
import ProgressiveImg from '../components/progressiveImage.component';

export const links = () => [
  {rel: "stylesheet", href: styles},
  {rel: "stylesheet", href: pageStyles},
  {rel: "stylesheet", href: logoStyles},
  ...menuLinks(),
  ...headerStyles(),
];

export const meta = () => {
  return [
    {title: "Logo Design | Stephen Kloepfer Branding & Design?"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved."},
    {name: "description", content: "I specialize in creating logos in a wide variety of styles to create a unique and personalized look that draws your customers' eyes."},    
   {name: "og:title", content: "Stephen Kloepfer Logo Design"},
   {name: "og:description", content: "I specialize in creating logos in a wide variety of styles to create a unique and personalized look that draws your customers' eyes."},
   {name: "og:image", content: "/social_preview.png"},
  ];
};

function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollBy(e.deltaY, 0);
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

const LogoDesign = () => {

    const [triggered, setTriggered] = useState(false);
    const [loaded, hasloaded] = useState(false);

    const brandData = useLoaderData();

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const triggerSlide = async() => {
        await delay(500);
        hasloaded(true);
        setTriggered(true);
    }

    const closeSlide = () => {
      setTriggered(false);
    }

    const navigate = useNavigate();

    const data_from_child = async(data) => {
      if(data != '' && data != undefined) {
        closeSlide();
        await delay(500);
        navigate('/' + data);
      }
    }

    const scrollRef = useHorizontalScroll();

    useEffect(() => {
        if(!loaded){triggerSlide();}
    });

    const onReopen = () => {
      hasloaded(false);
    }

  return (
    <div className='main'>
      <MainMenu 
        page='logos' 
        onReopen={onReopen}
      />
      <div className={triggered ? `slider backgroundBlue activeSlide` : `slider inactiveSlide`} >
      <button onClick={closeSlide} className={triggered? 'button' : 'button hiddenButton'} >x</button>
        <PageHeader background='#1A4C74' setter={data_from_child} onClose={closeSlide} active='logos' />       
        <div>
          <h1 className='heading'>Logo Design</h1>                    
      </div>
      <div > 
        {
          brandData.logos.map((logo, index) => {
            
            return (
            <div key={logo.name} className='logosRow'>
            <div className='logoBounding'>
              <div className='logoDescriptionNoSlide'>
                <h2>{logo.name}</h2>
                {logo.description}
              </div>
              <div className='logoBoxNoSlide'>
                <ProgressiveImg 
                  src={logo.image}
                  placeholderSrc={logo.placeholder}
                  classTitle=''
                  alt={logo.alt}
                />
                
              </div>
            </div>
            </div>
          )})
        }
      </div>
      <div className='spacer' />
      
    </div>
    
    </div>
  );
}

export default LogoDesign;

export async function loader() {
  return brandingInfo;
}