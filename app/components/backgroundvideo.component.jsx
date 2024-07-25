export default function BackgroundVideo(props){
  
    return (
        <video className='backgroundVid' playsInline autoPlay muted loop={true}>
            <source src={props.video} />
        </video>
      
    );
} 