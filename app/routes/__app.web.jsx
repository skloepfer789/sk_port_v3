import { useEffect, useState } from 'react';
import PageHeader, { links as headerStyles } from '../components/pagesHeader.component';
import styles from '../styles/global.styles.css'
import MainMenu, {links as menuLinks} from '../components/mainMenu.component';
import pageStyles from '../styles/page.styles.css';
import { useLoaderData, useNavigate } from '@remix-run/react';
import brandingInfo from '../../brandingInfo.json';
import ProgressiveImg from '../components/progressiveImage.component';

export const links = () => [
  {rel: "stylesheet", href: styles},
  {rel: "stylesheet", href: pageStyles},
  ...menuLinks(),
  ...headerStyles(),
];

export const meta = () => {
  return [
    {title: "Web Design | Stephen Kloepfer Branding & Design?"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved."},
    {name: "description", content: "Whether you need a simple Wordpress site for customers to land on, or full hand-coded websites with all the bells and whistles, I am here to help!"},    
   {name: "og:title", content: "Stephen Kloepfer Website Development"},
   {name: "og:description", content: "hether you need a simple Wordpress site for customers to land on, or full hand-coded websites with all the bells and whistles, I am here to help!"},
   {name: "og:image", content: "/social_preview.png"},
  ];
};

const WebDesign = () => {

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

    useEffect(() => {
        if(!loaded){triggerSlide();}
    })

    const onReopen = () => {
      hasloaded(false);
    }

  return (
    <div className='main'>
      <MainMenu 
        page='web' 
        onReopen={onReopen}
      />
      <div className={triggered ? `slider backgroundLight activeSlide` : `slider inactiveSlide`} >
      <button onClick={closeSlide} className={triggered? 'button' : 'button hiddenButton'} >x</button>
        <PageHeader background='#1A4C74' setter={data_from_child} onClose={closeSlide} active='web' />       
        <div>
          <h1 className='heading'>Web Design</h1>
          {
            brandData.web.map((web) => (
              <ProgressiveImg 
                  key={web.name}
                  src={web.image}
                  placeholderSrc={web.placeholder}
                  classTitle='fullImage'
                  alt={web.alt}
                />
            ))
          }
      </div>
      
    </div>
    
    </div>
  );
}

export default WebDesign;

export async function loader() {
  return brandingInfo;
}