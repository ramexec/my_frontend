import './UpdateMini.css'
import { MdOutlineUpdate } from "react-icons/md";

import { TitleBar } from '../../Common/Components/TitleBar/TitleBar'
import { MiniUpdateCard } from './MiniUpdateCard/MiniUpdateCard';
export const UpdateMini = () => {
  return (
    <div className='updatemini-main'>
        <TitleBar title='Updates' Icon={MdOutlineUpdate } />
        <div className='updatemini-body'> 
          <div className="updatemini-content">
            <MiniUpdateCard subject='Website' text='Started Working in Backend !'/>
          </div>
        </div>
    </div>
  )
}
