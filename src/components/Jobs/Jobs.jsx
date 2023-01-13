import React, { useState } from 'react'
import './jobs.css'
import { jobtitle } from '../dummy'

export default function Jobs() {
    const [change, setChange] = useState(true)
    //usestate for store the filter data
    const [sdata,setSdata]=useState([])  


    const singleCard = (idData) => {
        // console.log(idData)
        const result = jobtitle.filter(jobData=>jobData.id===idData);
        setSdata(result[0]);
        setChange(false);
    }


    return (
        <>{(change === true) ?
            <>
                <p id='HeadText'>AVAILABLE JOBS</p>
                {jobtitle.map((item) =>
                    <div className="card-wrap" onClick={() => singleCard(item.id)}>
                        <div className="card-text" >{item.title}</div>
                    </div>
                )}

            </> :
            <>
                <div className="detailData">
                    <div className="card-main">
                        <div className="card-text2">{sdata.title}</div>
                        <p id='Desc'>{sdata.description}</p>
                        <p id='Typetext'>JOB TYPE:{sdata.employment_type}</p>
                    </div>
                    <button className="button" onClick={()=>setChange(true)}><span>ALL JOBS</span></button>
                </div>
            </>
        }
        </>

    )
}
