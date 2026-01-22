import './TitleBar.css'
import { FaRegWindowMinimize,FaWindowMaximize,FaWindowClose } from "react-icons/fa";

export const TitleBar = ({title = "Default"  , Icon = null}) => {
  
    return (
        <div className='tb-container'>
            <div className="tb-icon">
                <Icon/>
            </div>
            <div className="tb-title">
                {title}
            </div>
            <div className="tb-btns">
                <div><button> <FaRegWindowMinimize /></button> </div>
                <div><button> <FaWindowMaximize /></button> </div>
                <div><button> <FaWindowClose /></button> </div>
            </div>
        </div>
  )
}
