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
      
      <MainMenu scrolling={false} />
              
    </div>
  );
}
