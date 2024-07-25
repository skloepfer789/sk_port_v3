import ProgressiveImg from "./progressiveImage.component";

export default function Hero() {
    return (
        <div className='hero'>
            <div className="container">
                <div className="containerRow">
                <div className="containerImage">
                        <ProgressiveImg 
                            src='/images/brandImages/rolling/RollingRest_Logo.webp'
                            placeholderSrc='/images/brandImages/rolling/RollingRest_Logo_LowRes.webp'
                            classTitle=''
                            alt='hero image'
                        />
                    </div>
                    <div className="containerImage">
                        <ProgressiveImg 
                            src='/images/printImages/EliteEstheticianBooth.webp'
                            placeholderSrc='/images/printImages/EliteEstheticianBooth_LowRes.webp'
                            classTitle=''
                            alt='hero image'
                        />
                    </div>
                    <div className="containerImage">
                        <ProgressiveImg 
                            src='/images/HoodGuyMockup copy.webp'
                            placeholderSrc='/images/HoodGuyMockup copy-lowRes.webp'
                            classTitle=''
                            alt='hero image'
                        />
                    </div>
                    <div className="containerImage">
                        <ProgressiveImg 
                            src='/images/brandImages/enhance/EnhanceMagazines.webp'
                            placeholderSrc='/images/brandImages/enhance/EnhanceMagazines_LowRes.webp'
                            classTitle=''
                            alt='hero image'
                        />
                    </div>
                </div>
                <div className="containerRow">                    
                    <div className="containerImage">
                        <ProgressiveImg 
                            src='/images/printImages/NelsonWrap.webp'
                            placeholderSrc='/images/printImages/NelsonWrap_LowRes.webp'
                            classTitle=''
                            alt='hero image'
                        />
                    </div>
                    <div className="containerImage">                        
                        <ProgressiveImg 
                            src='/images/printImages/MatadorBottle_v2_Mockup.webp'
                            placeholderSrc='/images/printImages/MatadorBottle_v2_Mockup_LowRes.webp'
                            classTitle=''
                            alt='hero image'
                        />
                    </div>
                    <div className="containerImage">                        
                        <ProgressiveImg 
                            src='/images/printImages/BugattiBook_Mockup.webp'
                            placeholderSrc='/images/printImages/BugattiBook_Mockup_LowRes.webp'
                            classTitle=''
                            alt='hero image'
                        />
                    </div>
                </div>
                <div className="containerRow">
                     <div className="containerImage">
                        <ProgressiveImg 
                            src='/images/printImages/FreyaAbsinthe_MockUp.webp'
                            placeholderSrc='/images/printImages/FreyaAbsinthe_MockUp_LowRes.webp'
                            classTitle=''
                            alt='hero image'
                        />
                    </div>    
                    <div className="containerImage">
                        <ProgressiveImg 
                            src='/images/brandImages/enhance/EnhanceWebsite.webp'
                            placeholderSrc='/images/brandImages/enhance/EnhanceWebsite_LowRes.webp'
                            classTitle=''
                            alt='hero image'
                        />
                    </div>                                     
                </div>
                <div className="containerRow">
                     <div className="containerImage">
                        <ProgressiveImg 
                            src='/images/brandImages/rolling/RollingRest_Sketches.webp'
                            placeholderSrc='/images/brandImages/rolling/RollingRest_Sketches_LowRes.webp'
                            classTitle=''
                            alt='hero image'
                        />
                    </div>                                        
                </div>
            </div>
        </div>
      )
};