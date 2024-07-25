import { Link } from "@remix-run/react";
import { useState } from "react";

export default function MenuItem(props) {
    const active = props.Active;
    const [hovered, setHovered] = useState(false);

    function hoverState() {
        setHovered(true);
    }

    function killHover() {
        setHovered(false);
    }

    return(
        <div className="bounding" onMouseEnter={hoverState} onMouseLeave={killHover}>
            <img src="/images/RexTest.png" alt="highlight" className={
                active? `highlightImage` : hovered? `highlightImage` : `highlightImage offImage`
            } />
            <Link
                to={props.to}
                className={active || hovered ? `${props.classprop} active` : props.classprop }
            >
                {props.title}
            </Link>
        </div>
    )
}