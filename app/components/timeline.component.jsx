import { useEffect, useState } from "react";

export default function Timeline(props) {
    const [activeInfo, setInfo] = useState('');
    const [priorSelect, setPrior] = useState('');
    var aboutInfo;
    const select = props.selector;


    if(select === 'about') {
        aboutInfo = props.aboutInfo.about;
    } else if(select === 'education') {
        aboutInfo = props.aboutInfo.education;
    } else if(select === 'skills') {
        aboutInfo = props.aboutInfo.skills;
    } else {
        aboutInfo = '';
    }

    const setActive = (props) => {
        setInfo('')
        setInfo(props);
    }

    useEffect(() => {
        if(activeInfo == '' && priorSelect != select){
            setInfo(aboutInfo[0]);
            setPrior(select);
        } else if(priorSelect != select) {
            setInfo(aboutInfo[0]);
            setPrior(select);
        }
    }, [aboutInfo, activeInfo, priorSelect, setPrior, select]);
    
     return(
        <div className="scrollbox">
        <div className="aboutContainer">
            <div className="timeline" style={{maxHeight: props.heightBlock}}>
                
                {
                    aboutInfo.map((info) => (
                        <>
                        <div key={info.title} 
                            className={
                                activeInfo && activeInfo != '' && info.title === activeInfo.title ?
                                "bullet activeBullet"
                                : "bullet"                            
                            } 
                            onClick={() => setActive(info)} 
                        >
                            {info.date}
                        </div>
                        {
                            activeInfo && activeInfo != '' && info.title === activeInfo.title ? (
                                <div className="bulletActive-line" />
                            ) : ''
                        }
                        
                        {
                            !info.final ? (
                                <div className={info.spaceClass} />
                            ) : ''
                        }
                        </>
                    ))
                  }
            </div>
            <div className="textbox" style={{minHeight: props.heightBlock}} >
                {
                    activeInfo && activeInfo != '' ? (
                        <>
                        <h2>{activeInfo.title}</h2>
                        <h3>{activeInfo.date}</h3>
                        <ul>
                            {
                                activeInfo.text.map((text) => (
                                    <li key={text}>{text}</li>
                                ))
                            }
                        </ul>
                        </>
                    ): (
                        <p>Please Select a Bullet</p>
                    )
                }
            </div>
        </div>
        </div>
     )
}