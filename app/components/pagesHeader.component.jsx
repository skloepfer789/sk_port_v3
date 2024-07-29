import { Link, useNavigate } from "@remix-run/react";
import NameLogo from "./logoSmallSVG.component";
import BleedLogo from "./logoBleedOfflSVG.component";
import styles from '../styles/header.styles.css';
import { useState } from "react";

const pageLinks = [
    {
        link: "branding",
        name: "branding",
    },{
        link: "print",
        name: "print",
    },{
        link: "web",
        name: "web",
    },{
        link: 'spec',
        name: "playground",
    },{
        link: "about",
        name: "about",
    }
];

function determinePage(pageName) {
    var newLinks = [];
    pageLinks.forEach((link) => {
        if(link.link !== pageName) {
            newLinks.push(link);
        }
    });
    return newLinks;
}

const PageHeader = (props) => {
    const pageName = props.active;

    const [activated, setActivated] = useState('');

    var newLinks = determinePage(pageName);

    const onClose = props.onClose;
    const setter = props.setter;

    setter(activated);

    const setActive = (props) => {
        setActivated(props);
        onClose();
    }

    var backgroundURL;
    var logoColor;
    if(props.background == 'dark') {        
        backgroundURL = 'url(/images/GraidentBackground_Full.webp)';
        logoColor = 'fff';
    } else {
        backgroundURL = 'url(/images/GraidentBackground_Light.webp)';
        logoColor = '#e05210';
    }

    return (
       <header>
            <div>
                
                <nav className="pages">
                    {newLinks.map((link) => (
                        <div key={link.link} className="linkBox">
                            <h3 className="link" 
                                setter={link.link} 
                                onClick={() => setActive(link.link)}  
                                style={{color: logoColor}}                                
                            >
                                {link.name}
                            </h3>
                        </div>
                    ))}                    
                </nav>
            </div>
            <div>
                <Link to='/'>
                    <BleedLogo className='headerLogo' color={logoColor} />
                </Link>
            </div>
       </header>
    );
}

export default PageHeader;

export const links = () => [
    { rel: "stylesheet", href: styles },
];