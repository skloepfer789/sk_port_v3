import styles from '../styles/modal.styles.css';
import ProgressiveImg from './progressiveImage.component';

const Modal = (props) => {

    const onClose = props.onClose;

    if(props.data && props.data != ''){
        const data = props.data;
        const images = data.images;
        const hero = data.hero;

        return(
            <div className={"modalBackground " + props.className} style={{backgroundColor: props.color}} >
            <div className='modalContain'>
                <button onClick={onClose} className="buttonModal">x</button>
                <div className='modalImageContain'>
                {data.hero && data.heroAlsoFirstImage ? 
                    (<>
                <ProgressiveImg 
                    key={hero.image}
                    src={hero.image}
                    placeholderSrc={hero.placeholder}
                    classTitle='brandImage'
                    alt={hero.alt}
                />                
                    </>)
                : data.images.length === 1 ? (<>
                <ProgressiveImg 
                    key={images[0].image}
                    src={images[0].image}
                    placeholderSrc={images[0].placeholder}
                    classTitle='brandImage'
                    alt={images[0].alt}
                />                
                    </>) : (<></>)
                }
                {data.noDescription ? (
                <></>
                ): data.noBreakdown ? 
                (
                        <div className='breakdown'>
                            <h2>{data.name}</h2>
                            <p className='descrText'>{data.shortDescription}</p>
                        </div>
                ):(
                        <div className='breakdown'>
                            <h2>{data.name}</h2>
                            
                            {data.breakdown.map((item) => (
                                <div className='breakdownBox'>
                                    <div className='breakdownTitle'>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className='breakdownText'>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))
                            }
                            {data.hasOriginalLogo ? (
                            <div className='breakdownBox'>
                                <div className="breakdownTitle">
                                    <h3>original logo</h3>
                                </div>
                                <div className="breakdownText">
                                    <img src={data.originalLogo.image} className='originalLogo' alt='Original Logo' />
                                </div>
                            </div>
                            ): (<></>)
                            }
                            
                        </div>
                )
                }
                {images.length > 1 ? images.map((image) => (
                    <ProgressiveImg 
                        key={image.image}
                        src={image.image}
                        placeholderSrc={image.placeholder}
                        classTitle={
                            image.size === 'small' ? `secondaryImage` : image.size === 'mid' ? 'midImage' : `brandImage`
                        }
                        alt={image.alt}
                    />
                )):(<></>)}
                </div>
            </div>
            </div>
        )
    }
    
}

export default Modal;

export const links = () => [
  {rel: "stylesheet", href: styles},
];