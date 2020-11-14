import React, {useState ,useEffect} from 'react'
import './worked.css'
function Worked () {
    
    const [offset, setOffset] = useState(false);
    const scroll = () =>{
        if(window.pageYOffset > 600){
            setOffset(false)
        }else{
            setOffset(true)
        }
    };

    useEffect(() => {
        scroll()
    }, []);
    window.addEventListener('scroll', scroll)

    const state = {
                Education: [
                    <>
                    {/* <h3>EDUCATION HISTORY</h3> */}
                    <div>
                        <span>2012-2015</span>
                        <p>Rajabhat - Information Technology, University, Chiang Mai</p>
                    </div>
                    <div>
                        <span>2012-2015</span>
                        <p>HANGDONGRATHUPATHUM - Art Chinese, High School, Chiang Mai</p>
                    </div>
                        
                    </>

                ],
                Work: [
                    <>
                        <div>
                            <span>2020 - NOW</span>
                            <ul>
                                <li>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    Support ERP System for Company
                                </li>

                                <li>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                </li>
                                <li>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                </li>

                                <li>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                </li>

                                <li>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span>2018-2019</span>
                            <p>ChiangMaiAquarium - Trainee IT Support Technician</p>
                            <ul>
                                <li>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    Support User And company
                                </li>
                                <li>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    Customer Relationship Management System (PHP)
                                </li>
                                <li>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    Website ChiangMaiAquarium
                                </li>
                            </ul>
                        </div>
                    </>
                ],
        status: false
      }
      const [open, setOpen] = useState(false);

      const Resume = () => {
        setOpen(false)
        console.log(state.status);
      }
      const Education = () => {
        setOpen(true)
        console.log(state.status);
      }
      

        return (
            <section className={offset ?'ms ' :'ms animate__animated animate__zoomInUp'}>
                <div>
        <h1 className="h-text">Where I’ve Worked</h1>
                </div>
                <div className="inner">
                    <ul className="inner-li"> 

                        <li className={open ? "" :"active"}>
                            <div className={open ? "active-no" :"active-b"}  onClick={Resume} >Working Experience</div>
                        </li>

                        <li className={open ? "active" :""}>
                                <div className={open ? "active-b" :"active-no"} onClick={Education}>Education</div>
                        </li>
                        
                    </ul>
                    <div className="rl-2">
                        {open ?  state.Education : state.Work}
                    </div>
                </div>
            </section>
        )
    }

    export default  Worked