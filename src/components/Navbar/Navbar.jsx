import {useContext} from 'react'
import './Navbar.css'
import { TitleBar } from '../Common/Components/TitleBar/TitleBar'
import { FiNavigation2 } from "react-icons/fi";
import LinkTree from '../Common/Components/LinkTree/LinkTree';
import { LinksContext } from '../../App';
import { AMarquee } from '../Marquee-Animes/AMarquee';

export const Navbar = () => {
   const { links ,page, setPage } = useContext(LinksContext);

  return (
    <div className="navbar-main">
        <div className='nav'>
        <div className="navbar-section">
          <TitleBar title='Naviagation' Icon={FiNavigation2}/>
          <LinkTree links={links} page={page} setPage={setPage} />
        </div>
        </div>
        <div className='nav-marquee'><AMarquee /></div>
    </div>
  )
}
