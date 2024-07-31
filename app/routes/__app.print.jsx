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
    {title: "Print Design | Stephen Kloepfer Branding & Design"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved."},
    {name: "description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines."},    
   {name: "og:title", content: "Stephen Kloepfer Design for Print Production"},
   {name: "og:description", content: "With over a decade in Print and Presentation, I specialize in crafting press ready visuals, working within your branded guidelines."},
   {name: "og:image", content: "/social_preview.png"},
  ];
};

const Branding = () => {

    const [triggered, setTriggered] = useState(false);
    const [loaded, hasloaded] = useState(false);
    const [active, setActive] = useState();
    const [IsActive, setActiveBool] = useState(false);

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

    const data = useLoaderData();

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

    function selectItem(item){
      setActive(item);
      setActiveBool(true);
    }

    const onClose = () => {
      setActive('');
      setActiveBool(false);
    }

    const onReopen = () => {
      hasloaded(false);
    }

    function checkLength(item) {
      return item.images.length;
    }

  return (
    <div className='main'>
      <MainMenu 
        page='print'
        onReopen={onReopen}
      />
      <div className={triggered ? `slider activeSlide` : `slider inactiveSlide`} >
      <button onClick={closeSlide} className={triggered? 'button' : 'button hiddenButton'} >x</button>
        <PageHeader setter={data_from_child} onClose={closeSlide} active='print' />        
        <div>
          <h1 className='heading'>Print Design</h1>
          <div className='imageGrid'>          
                        {
              data.print.map((item) => (
                <div className='imageBox' key={item.name} onMouseEnter={() => changeHover(item)} onMouseLeave={unsetHover}>
                <a>
                {
                  checkLength(item.images) > 1 ? (
                    <p className='overlay' style={{fontSize: '150%', opacity: 1}}>{item.name.toUpperCase()}<br/>Click to See More</p>
                  ): (<p className='overlay' style={{fontSize: '150%', opacity: 1}}>{item.name.toUpperCase()}<br/>Click to Expand Image</p>)
                }
              
                  <ProgressiveImg 
                    alt={item.name}  
                    key={item.name}
                    src={ item.hero ? item.hero.image : item.images[0].image}
                    placeholderSrc={item.hero ? item.hero.placeholder : item.images[0].placeholder}
                    classTitle='primaryImage'
                    onClick={() => selectItem(item)}
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
      className={IsActive ? 'openModal' : 'closeModal'} 
      color='white'
      data={active}
    />
    
    </div>
  );
}

export default Branding;

export async function loader() {
  return brandingInfo;
}