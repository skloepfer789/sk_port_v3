import { Link } from '@remix-run/react'

export default function Footer() {
    
    return(
        <footer>
            <div className='contacts'>
                <Link to='https://www.linkedin.com/in/stephenkloepfer-ft-collins' target="_blank" rel='noreferrer'>
                    linkedin
                </Link>
                <Link to='mailto:stevekloepferdesign@gmail.com'>
                    e-mail
                </Link>
                <p>2023 - All Rights Reserved</p>
            </div>
        </footer>
    )
}