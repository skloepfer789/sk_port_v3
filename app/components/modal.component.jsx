import styles from '../styles/modal.styles.css';
import ProgressiveImg from './progressiveImage.component';

const Modal = (props) => {

    const onClose = props.onClose;

    if(props.data && props.data != ''){
        const data = props.data;
        const images = data.images;
        const descr = data.description;
        const hero = data.hero;
        console.log(descr);

        return(
            <div className={"modalBackground " + props.className} style={{backgroundColor: props.color}} >
            <div className='modalContain'>
                <button onClick={onClose} className="buttonModal">x</button>
                <div className='modalImageContain'>
                {data.hero ? 
                    (<>
                <ProgressiveImg 
                    key={hero.image}
                    src={hero.image}
                    placeholderSrc={hero.placeholder}
                    classTitle='brandImage'
                    alt={hero.alt}
                />
                <p className='descrText'>{descr}</p>
                    </>)
                : (<></>)
                }
                {images.map((image) => (
                    <ProgressiveImg 
                        key={image.image}
                        src={image.image}
                        placeholderSrc={image.placeholder}
                        classTitle={
                            image.size === 'small' ? `secondaryImage` : image.size === 'mid' ? 'midImage' : `brandImage`
                        }
                        alt={image.alt}
                    />
                ))}
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