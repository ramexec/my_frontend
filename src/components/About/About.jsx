import React from 'react'
import './About.css'

export const About = () => {
  return (
    <div className='about-main'>
        <div className='about-body'>
           <div className="ab-container">
        <h1 className="ab-title">ABOUT ME</h1>
        <div className="ab-divider">═══════════════════════════</div>

        <div className="ab-section">
            <h2 className="ab-section-title">Bio</h2>
            <p className="ab-terminal-prompt">Name: Rahul Mondal</p>
            <p className="ab-terminal-prompt">Location: India </p>
            <p className="ab-terminal-prompt">Status: <span className="ab-blink">ONLINE</span></p>
            <p>Welcome to my corner of the web! I'm a passionate developer who loves creating things and solving problems. When I'm not coding, you'll find me exploring new technologies and learning something new.</p>
        </div>

        <div className="ab-section">
            <h2 className="ab-section-title">Interests</h2>
            <ul className="ab-list">
                <li>Coding</li>
                <li>Open Source</li>
                <li>Gaming</li>
                <li>Music</li>
                <li>Coffee ☕</li>
                <li>Anime </li>
            </ul>
        </div>

        <div className="ab-section">
            <h2 className="ab-section-title">Contact</h2>
            <p>Feel free to reach out!</p>
            <p>Email: <a href="mailto:rahulanthonymondal@gmail.com" className="ab-link">rahulanthonymondal@gmail.com</a></p>
            <p>GitHub: <a href="#" className="ab-link">@ramexec</a></p>
            {/* <p>Twitter: <a href="#" className="ab-link">@yourusername</a></p> */}
        </div>

        <div className="ab-divider">═══════════════════════════</div>
        <p className="ab-footer">© 2026 - Built with ♥ </p>
    </div>
  </div>
</div>
)}
