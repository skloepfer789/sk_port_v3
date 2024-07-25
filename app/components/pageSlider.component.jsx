import { useEffect, useState } from 'react';
import { PageHeader } from '../components/pagesHeader.component';
import MainMenu from '../components/mainMenu.component';
import { Outlet } from '@remix-run/react';


export default function PageSlider() {

    const [triggered, setTriggered] = useState(false);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const triggerSlide = async() => {
        await delay(500)
        setTriggered(true);
    }

    useEffect(() => {
        triggerSlide();
    })

  return (
    <div className='main'>
      <div className='backgroundImg'>
        <img className='textureImg' src='/images/texture-1874580_1920.jpg' alt='grunge' />
      </div>
      <MainMenu />
      <div className={triggered ? `slider active` : `slider`} >
        <PageHeader />                    
      </div>
    </div>
  );
}