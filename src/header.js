import './header.css';

function Header(){
    return (
        <div className="header">
            <div className="header_left">
                <img className="logo" src="https://th.bing.com/th?id=OIP.aCT9_vViOF6uOYqjPOyAtAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
                <h2>Owen Halvorson</h2>
            </div>
            <div className="header_center">
                <ul className="header_lists">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/resume">My Resume</a></li>
                    <li><a href="/portfolio">Projects info and Gallary</a></li>
                    <li><a href="/contact">Contact Me</a></li>
                </ul>

            </div>
            <div className="header_right">
            <a href="https://www.linkedin.com/in/owen-halvorson-5ba201236"><img src="https://th.bing.com/th?id=OIP.EweiZI5x1TFwSg9aJw6pZgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="LinkedIn Logo" /></a>
            <a href="https://github.com/OHalvorson77"><img src="https://th.bing.com/th?id=OIP.X7ARxMznF30ghkys1BQkPQHaHl&w=246&h=253&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="GitHub Logo" /></a>
            </div>
        </div>
    )
}

export default Header