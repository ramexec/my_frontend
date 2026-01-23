import './UpdateMini.css'
import { MdOutlineUpdate } from "react-icons/md";
import {useFetch} from '../../../services/useFetch'

import { TitleBar } from '../../Common/Components/TitleBar/TitleBar'
import { MiniUpdateCard } from './MiniUpdateCard/MiniUpdateCard';

export const UpdateMini = () => {
  const {data, loading , error} = useFetch("/openapi/updates");

  return (
    <div className='updatemini-main'>
        <TitleBar title='Updates' Icon={MdOutlineUpdate } />
        <div className='updatemini-body'>
          <div className="updatemini-content">
            {error && (<div>Something Went Wrong. . .</div>)}
            {loading && (<div>Loading . . .</div>)}
            {!loading && data?.map((data,index) => (<MiniUpdateCard key={index} subject={data?.subject} text={data?.text}/>))}
          </div>
        </div>
    </div>
  )
}
