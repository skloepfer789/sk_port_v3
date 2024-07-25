import { useEffect, useState } from 'react';
import PageHeader, { links as headerStyles } from '../components/pagesHeader.component';
import styles from '../styles/global.styles.css';
import aboutStyles from '../styles/about.styles.css';
import MainMenu, { links as menuLinks } from '../components/mainMenu.component';
import pageStyles from '../styles/page.styles.css';
import { useLoaderData, useNavigate } from '@remix-run/react';
import aboutInfo from '../../workhistory.json';
import Timeline from '../components/timeline.component';
import MaskedImage from '../components/maskedImage.component';

export const links = () => [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: pageStyles },
    { rel: "stylesheet", href: aboutStyles },
    ...menuLinks(),
    ...headerStyles(),
];

export const meta = () => {
  return [
    {title: "Who is Stephen Kloepfer?"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved."},
    {name: "description", content: "A bit about me and my history in the fast-paced field of graphic design."},    
   {name: "og:title", content: "Stephen Kloepfer | Who am I?"},
   {name: "og:description", content: "A bit about me and my history in the fast-paced field of graphic desig."},
   {name: "og:image", content: "/social_preview.png"},
  ];
};


const About = () => {
    const aboutInfo = useLoaderData();
    const [triggered, setTriggered] = useState(false);
    const [loaded, hasloaded] = useState(false);
    const [height, setHeight] = useState('63vh');

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
    });

    const onReopen = () => {
      console.log('fire');
      hasloaded(false);
    }

  return (
    <div className='main'>
      <MainMenu 
        page='about'
        onReopen={onReopen}
      />
      <div className={triggered ? `slider backgroundGray activeSlide` : `slider inactiveSlide`} >
      <button onClick={closeSlide} className={triggered? 'button' : 'button hiddenButton'} >x</button>
        <PageHeader background='#35444F' setter={data_from_child} onClose={closeSlide} active='about' />       
        <div>
          <div className='introBox'>
          <h1 className='aboutHeading'>About Me</h1>
            <div className='aboutText'>
              <p>
              It’s a rare thing to find something you love doing and even rarer to do it professionally. I am lucky enough to have found a calling that allows me to express my artistic side, while also helping my clients succeed. It’s my focus to create lasting imagery that is both eye-catching and matches the personality of my clients. To achieve this, I strive to stay up-to-date with the latest trends and technology in the field, so I can continue supporting my clients in today's competitive and evolving market. 
              <br/><br/>
              When not working, my greatest passion is my family. I can often be found playing with my two sons, or spending some quality time with my wife. My primary goal is to provide the best life that I can for them, and be a present and involved as a partner and father. 
              <br/><br/>
              In my free time, I enjoy watching movies, writing, and reading. While I enjoy a wide variety of genres, I find myself often pulled to speculative fiction, and have a vast collection of movies and books delving into the fantastic, horrific, and futuristic. I am also an avid fan of gaming. I enjoy regular table-top sessions with some close friends, and have a long-standing love for video games. Recently, I have begun the path towards a lifelong dream of teaching myself Unreal Engine and Blender in the hopes of creating a video game of my own from the ground up. 
              </p>
            </div>
          </div>
          <div className='historyBox'>
            <h2 className='historyText'>Work History</h2>
          </div>
          <div className='aboutRow'>            
            <Timeline aboutInfo={aboutInfo} selector='about' heightBlock='76vh' />            
          </div>
      </div>
      
    </div>
    
    </div>
  );
}

export default About;

export async function loader() {
  return aboutInfo;
}
