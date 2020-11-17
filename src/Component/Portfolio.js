import React, {useEffect,useState } from 'react'
import project1 from '../image/Project-1.jpg'
import project2 from '../image/Project-2.jpg'
import project3 from '../image/Project-3.jpg'
import project4 from '../image/Project-4.jpg'
import './portfolio.css'

function Portfolio(){
        const [offset, setOffset] = useState(false);
    const scroll = () =>{
        if(window.pageYOffset > 1371){
            setOffset(false)
        }else{
            setOffset(true)
        }
    };

    useEffect(() => {
        scroll()
    }, []);
    window.addEventListener('scroll', scroll)

    const data = [
        {
          sys:{
              id: "1"
          },
          fields:{
              id: "1",
              image: project1,
              project: "Graduation Project",
              title : " Online Hostel Reservation System ",
              content: "ชิ้นงานโปรเจ็คจบ ระบบสามารถแบ่งออกเป็นสองส่วนหลัก 1.ระบบสมาชิก(หน้าบ้าน) 2.แอดมิน(หลังบ้าน) ",
              tag:["PHC","HTML5","CSS3","Java Script",""],
              link:[
                <a className="a" target="_blank" href="https://www.comdept.cmru.ac.th/58223189/index.php">User</a>, 
                <a className="a" target="_blank" href="https://www.comdept.cmru.ac.th/58223189/admin_login.php">Admin</a>],
              remark:["user user : admin admin"],
          }
      },
      {
          sys:{
              id: "2"
          },
          fields:{
              id: "2",
              image: project2,
              project:"Featured Project",
              title : "Tile",
              content: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
              tag:["Next.js","chart.js","Git hup API"],
              link:["Link1", "link2"],
              link:[
                <a className="a" target="_blank" href="https://github.com/nopphon3211/work_shop_tree"><ion-icon name="logo-github"></ion-icon></a>, 
                <a className="a" target="_blank" href="https://nopphon3211.github.io/work_shop_tree/"><ion-icon name="open-outline"></ion-icon></a>
                ],
            //   remark:["user User : admin admin"],
          }
      },
      {
        sys:{
            id: "3" 
        },
        fields:{
            id: "3",
            image: project3,
            project:"Featured Project",
            title : "Tile",
            content: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
            tag:["Next.js","chart.js","Git hup API"],
            link:["Link1", "link2"],
            link:[
                <a className="a" target="_blank" href="https://github.com/nopphon3211/work_shop_two"><ion-icon name="logo-github"></ion-icon></a>, 
                <a className="a" target="_blank" href="https://nopphon3211.github.io/work_shop_two/"><ion-icon name="open-outline"></ion-icon></a>
                ],
            // remark:["user User : admin admin"],
        }
    },
    {
        sys:{
            id: "4" 
        },
        fields:{
            id: "4",
            image: project4,
            project:"Featured Project",
            title : "Tile",
            content: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
            tag:["Next.js","chart.js","Git hup API"],
            link:[<a>sdsd</a>, "link2"],
            link:[
                <a className="a" target="_blank" href="https://github.com/nopphon3211/My-project-"><ion-icon name="logo-github"></ion-icon></a>, 
                <a className="a" target="_blank" href="https://nopphon3211.github.io/My-project-/"><ion-icon name="open-outline"></ion-icon></a>
                ],
            // remark:["user User : admin admin"],
        }
    },
      
  ]


  let list;
  let links;
  let linksA;
  let mainLink;

  const doubled = data.map((datas) => 
  <>

                <div className="projecct-image">
                    <img src={datas.fields.image} />
                    <div class="middle">
                    </div>
                </div>
        <div class="content-p">
            <p>{datas.fields.project}</p>
            <h1>{datas.fields.title}</h1>
            <div>
            <p>{datas.fields.content}</p>
            </div>
            <ul>
                {list = datas.fields.tag.map((lists) => 
                <li>{lists}</li>) }
            </ul>
            <ul>
                    <li><span className="f-r">{datas.fields.remark}</span></li>
                    { links = datas.fields.link.map((links) => 
                    <li>{links}</li>) }
                   
            </ul>
                    
        </div>
  </>
  );
    return(
        <>
                <section id="work" className={offset ?' ' :' animate__animated animate__zoomInUp'}>
                <div>
                    <h1 className="h-text">Where I’ve Worked</h1>
                </div>
                <div class="container-porfolio">
                    {doubled}
                </div>
                </section>
        </>
    )
}
export default  Portfolio
// export default class Portfolio extends Component {
//     render() {
     
//       const list='';
//       const doubled = data.map((datas) => 
//       <>
//                     <div className="projecct-image">
//                         <img src={datas.fields.image} />
//                         <div class="middle">
//                         </div>
//                     </div>
//             <div class="content-p">
//                 <p>{datas.fields.project}</p>
//                 <h1>{datas.fields.title}</h1>
//                 <div>
//                 <p>{datas.fields.content}</p>
//                 </div>
//                 <ul>
//                     { this.list = datas.fields.tag.map((lists) => 
//                     <li>{lists}</li>) }
//                 </ul>
//                 <ul>
//                         { this.links = datas.fields.link.map((links) => 
//                         <li>{links}</li>) }
//                 </ul>
//             </div>
//       </>
//       );
//         return (
//             <>
//                 <section>
//                 <div>
//                     <h1 className="h-text">Where I’ve Worked</h1>
//                 </div>
//                 <div class="container-porfolio">
//                     {doubled}
//                 </div>
//                 </section>
//             </>
//         )
//     }
// }
