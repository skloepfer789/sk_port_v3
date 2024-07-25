import styles from '../styles/landing.styles.css';
import heroStyles from '../styles/hero.styles.css';
import HeroLogo from '../components/heroLogoSVG.component';
import Plx from 'react-plx';
import MainMenu, { links as menuLinks } from '../components/mainMenu.component';
import ScrollAnimation from 'react-animate-on-scroll';
import Background from '../components/background.component';
import Hero from '../components/hero.component';
import { useRef } from 'react';

//https://codesandbox.io/s/plx-framer-motion-demo-flyux?file=/src/intro.js

export const meta = () => {
    return [
        { title: "Graphic Design | Stephen Kloepfer | Branding & Design" },
        { name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved." },
        { name: "description", content: "In today's evolving market, it is imperative your design evolves alongside. Stephen Kloepfer is here to help with all your branding and graphic design needs." },
        { name: "og:title", content: "Stephen Kloepfer | Branding and Design" },
        { name: "og:description", content: "Stephen Kloepfer specializes in evolving graphic design to compete in today's fast-paced market." },
        { name: "og:image", content: "/social_preview.png" },
    ];
};

export const links = () => [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: heroStyles },
    ...menuLinks(),
];


export default function Index() {
    const onWheel = e => {
        e.preventDefault();
        const container = scrollRef.current;
        const containerScrollPosition = scrollRef.current.scrollLeft;
    
        container.scrollTo({
          top: 0,
          left: containerScrollPosition + e.deltaY,
          behavior: "smooth",
        });
      };
    
      const scrollRef = useRef(null);

    return ( 
        <div className='scrolling' id='container' ref={scrollRef} onWheel={onWheel}>
            <div className='panel1'>
                <HeroLogo className='logo' color='#e05210' logoID='logo1' />
                <Hero />
                <div className='spacer'></div>
            </div>
            <div className='panel2' >
                <img src='/images/SteveFlowChart.webp' className='flowPic' />
                <div className='intro'>
                    <h2>ABOUT ME</h2>
                    <p>It’s a rare thing to find something you love doing and even rarer to do it professionally. I am lucky enough to have found a calling that allows me to express my artistic side, while also helping my clients succeed. It’s my focus to create lasting imagery that is both eye-catching and matches the personality of my clients. To achieve this, I strive to stay up-to-date with the latest trends and technology in the field, so I can continue supporting my clients in today's competitive and evolving market.</p>
                </div>
            </div>
            <MainMenu />
        </div>
    );
}