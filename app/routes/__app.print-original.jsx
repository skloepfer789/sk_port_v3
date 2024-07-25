import { useEffect, useState } from 'react';
import PageHeader, { links as headerStyles } from '../components/pagesHeader.component';
import styles from '../styles/global.styles.css'
import MainMenu, {links as menuLinks} from '../components/mainMenu.component';
import pageStyles from '../styles/page.styles.css';
import graphicStyles from '../styles/print.styles.css';
import { useLoaderData, useNavigate } from '@remix-run/react';
import brandingInfo from '../../brandingInfo.json';
import ProgressiveImg from '../components/progressiveImage.component';

export const links = () => [
  {rel: "stylesheet", href: styles},
  {rel: "stylesheet", href: pageStyles},
  {rel: "stylesheet", href: graphicStyles},
  ...menuLinks(),
  ...headerStyles(),
];

export const meta = () => {
  return [
    {title: "Print Design | Stephen Kloepfer Branding & Design?"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved."},
    {name: "description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines."},    
   {name: "og:title", content: "Stephen Kloepfer Design for Print Production"},
   {name: "og:description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines."},
   {name: "og:image", content: "/social_preview.png"},
  ];
};

const PrintDesign = () => {

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
      console.log('fire');
      hasloaded(false);
    }

  return (
    <div className='main'>
      <MainMenu 
        page='print' 
        onReopen={onReopen}      
      />
      <div className={triggered ? `slider backgroundGreen activeSlide` : `slider inactiveSlide`} >
      <button onClick={closeSlide} className={triggered? 'button' : 'button hiddenButton'} >x</button>
        <PageHeader background='#1A746F' setter={data_from_child} onClose={closeSlide} active='print' />       
        <div>
          <h1 className='heading'>Print Design</h1>
          <div className='printRow'>
          {
            brandData.print.map((print) => (
              <div key={print.name} className='printImage' >  
                <ProgressiveImg 
                  src={print.image}
                  placeholderSrc={print.placeholder}
                  classTitle=''
                  alt={print.alt}
                />
              </div>
            ))
          }
        </div>
        <div className='spacerGreen' />    
        </div>      
    </div>
    
    </div>
  );
}

export default PrintDesign;

export async function loader() {
  return brandingInfo;
}