import { useState } from 'react';
import Footer from './footer.component';
import BleedLogo from './logoBleedOfflSVG.component';
import MaskedImage from '../components/maskedImage.component';
import { Link } from '@remix-run/react';
import ScrollAnimation from 'react-animate-on-scroll';

import styles from '../styles/menu.styles.css';

const menuItems = [
    {
      name: 'branding & logos',
      link: '/branding',
      image: '/images/brandImages/rolling/RollingRest_Logo.webp',
    },{
      name: 'print design',
      link: '/print',
      image: '/images/printImages/EliteEstheticianBooth.webp',
    },{
      name: 'playground',
      link: '/spec',
      image: '/images/specImages/coldstone/coldstone_Sketches.webp',
    },{
      name: 'web design',
      link: '/web',
      image: '/images/HoodGuyMockup copy.webp',
    },{
      name: 'about me',
      link: '/about',
      image: '/images/ContactBanner.png',
    }
];

function newArray(linkName) {
  var newPages = [];
  menuItems.forEach(element => {
    if(element.link != linkName) {
      newPages.push(element);
    }    
  });
  return newPages;
}

function getName(linkName) {
  var page = [];
  menuItems.forEach(element => {    
    if(element.link === linkName){      
      page = element;
    }
  });
  return page;
}

export default function MainMenu(props){

    const [image, setImage] = useState('/images/ContactBanner.png');
    const [hoveredItem, setHovered] = useState('');
    const scrolling = props.scrolling;
    const page = String('/' + props.page);

    const newPages = newArray(page);

    function changeHover(newItem){
      setHovered(newItem.name);
      setImage(newItem.image);
    }

    function unsetHover() {
      setHovered('');
    }

    const currentElement = getName(page);
    
    const onReopen = props.onReopen;
  
  return (
     <div className='menuBackground'>
     <Link to='/'><BleedLogo className='logoHeading' color='#e05210' logoID='logoHead' /></Link>
     <br/>
      <MaskedImage 
        classprop='mainMenuImage'
        image={image}
        alt='Branding'
      />
      <div className='menuList'>
      {        
        scrolling && props.page && props.page != '/' ? 
            <div className="bounding" onMouseEnter={() => changeHover(currentElement)} onMouseLeave={unsetHover}>
              <img src="/images/icon_SK.svg" alt="highlight" className={
                  hoveredItem === currentElement.name ? `highlightImage` : `highlightImage offImage`
              } />
              <div
                  className={hoveredItem === currentElement.name ? `menuItem active` : `menuItem` }
                  onClick={onReopen}
              >
                  {currentElement}
              </div>
            </div>
        : props.page && props.page != '/' ?
          <div 
            className="bounding" 
            onMouseEnter={() => changeHover(currentElement)} 
            onMouseLeave={unsetHover}
            onClick={onReopen}
          >
            <img src="/images/icon_SK.svg" alt="highlight" className={
                hoveredItem === currentElement.name ? `highlightImage` : `highlightImage offImage`
            } />
            <div
                className={hoveredItem === currentElement.name ? `menuItem active` : `menuItem` }
            >
                {currentElement.name}
            </div>
          </div>
        : ''
      }
      { scrolling ?
        newPages.map((item) => (          
          <ScrollAnimation animateIn='slideInLeft' key={item.name}> 
          <div className="bounding" onMouseEnter={() => changeHover(item)} onMouseLeave={unsetHover}>
            <img src="/images/icon_SK.svg" alt="highlight" className={
                hoveredItem === item.name ? `highlightImage` : `highlightImage offImage`
            } />
            <Link
                to={item.link}
                className={hoveredItem === item.name ? `menuItem active` : `menuItem` }
            >
                {item.name}
            </Link>
        </div>
        </ScrollAnimation>
        ))
      : newPages.map((item) => (
        <div key={item.name} className="bounding" onMouseEnter={() => changeHover(item)} onMouseLeave={unsetHover}>
            <img src="/images/icon_SK.svg" alt="highlight" className={
                hoveredItem === item.name ? `highlightImage` : `highlightImage offImage`
            } />
            <Link
                to={item.link}
                className={hoveredItem === item.name ? `menuItem active` : `menuItem` }
            >
                {item.name}
            </Link>
        </div>
      ))
      }      
     

      </div>
      <Footer />
    </div>
    
  );
} 

export const links = () => [
    { rel: "stylesheet", href: styles },
];