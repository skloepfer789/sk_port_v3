import styles from '../styles/menu.styles.css';
import MainMenu from '../components/mainMenu.component';

//https://codesandbox.io/s/plx-framer-motion-demo-flyux?file=/src/intro.js

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export const links = () => [
  {rel: "stylesheet", href: styles},
];

export default function Menu() {

  return (
    <div className='main'>
    
      <div className='backgroundImg'>
        <img className='textureImg' src='/images/texture-1874580_1920.jpg' alt='grunge' />
      </div>
      
      <MainMenu scrolling={false} />
              
    </div>
  );
}
