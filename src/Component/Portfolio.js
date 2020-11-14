import React, {useEffect,useState } from 'react'
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
              image: "https://picsum.photos/600/400",
              project:"Featured Project",
              title : "tile",
              content: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
              tag:["Next.js","chart.js","Git hup API"],
              link:["Link1", "link2"],
          }
      },
      {
          sys:{
              id: "2"
          },
          fields:{
              id: "2",
              image: "https://picsum.photos/600/400",
              project:"Featured Project",
              title : "Tile",
              content: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
              tag:["Next.js","chart.js","Git hup API"],
              link:["Link1", "link2"],
          }
      },
      {
        sys:{
            id: "3"
        },
        fields:{
            id: "3",
            image: "https://picsum.photos/600/400",
            project:"Featured Project",
            title : "Tile",
            content: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
            tag:["Next.js","chart.js","Git hup API"],
            link:["Link1", "link2"],
        }
    },
      
  ]
  let list;
  let links;
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
                    { links = datas.fields.link.map((links) => 
                    <li>{links}</li>) }
            </ul>
        </div>
  </>
  );
    return(
        <>
                <section className={offset ?' ' :' animate__animated animate__zoomInUp'}>
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
