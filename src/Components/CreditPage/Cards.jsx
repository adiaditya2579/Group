import React,{ useState, useEffect } from 'react'
import Card from './Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer'
import './About.css'

function Cards() { 

  const [slidesToShow, setslidesToShow] =  useState(1)
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 675) { 
        setslidesToShow(1);
        setAutoplay(true);
      }else if (window.innerWidth < 850) { 
        setslidesToShow(2);
        setAutoplay(true);
      }else if (window.innerWidth < 1000){
        setslidesToShow(3);
        setAutoplay(true);
      }
       else { 
        setslidesToShow(4);
        setAutoplay(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: slidesToShow,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  
  
  
  
  
  return (
    <div className="bg-[#27272A] h-full w-screen">
        <div className="About-header">
          <h1 >Core Team</h1>
        </div>
        <div className="border-b-[2px]  border-[rgb(57,57,57)] w-full"></div>
        <div className=" sm:w-[90%] w-[70%]   m-auto slider-container ">
        <Slider {...settings}>
          {coremember.map((member, index) => (
            <Card key={index} item={member} />
          ))}
          </Slider>
 
          </div>

          <div className="About-header"><h1>Contributors</h1></div>
          <div className="border-b-[2px] border-[#393939] w-full"></div>
          <div className=" sm:w-[90%] w-[70%] m-auto py-[50px] ">
          <Slider {...settings}>
            {contributors.map((member, index) => (
              <Card key={index} item={member} />
            ))}
            </Slider>
          </div>
          <Footer/>
    </div>
  )
}
const coremember = [
  {
    image:"https://i.ibb.co/XYBYHMH/IMG-20231106-033208.jpg",
    name: "SUMIT SHARMA",
    roll: "Project Lead",
    email:'sumitsharma.iitm@gmail.com',
    linkedin:"https://www.linkedin.com/in/in-sumit",
    github:'https://www.github.com/repo-sumit',
  },
  {
    image:"https://i.ibb.co/zQhFHbC/Shashank-Reddy.jpg",
    name: "SHASANK REDDY",
    roll: "Backend & Deployment",
    linkedin:"https://www.linkedin.com/in/gadilashashank/",
    email:'',
    github:' https://github.com/gadilashashank',

  },
  {
    image:" https://i.ibb.co/GCDd6Z6/rohitphoto.jpg",
    name: "ROHIT RAJ",
    roll: "Lead Frontend",
    email:'official.rohitr@gmail.com',
    linkedin:"https://www.linkedin.com/in/rohit-raj-3abb13201/",
    github:'https://github.com/code-rohitr',
  },
  {
    image:"https://i.ibb.co/VHvsTP3/Pratham-Professional-Pic.png",
    name: "PRATHAM BHALLA",
    roll: "Frontend",
    email:'prathambhalla7@gmail.com',
    linkedin:"https://www.linkedin.com/in/pratham-bhalla/",
    github:'https://github.com/pkbhalla',
  },
];
const contributors = [
 
  {
    image:"https://i.ibb.co/0nP5sKZ/IMG-20240404-144254.jpg",
    name: "Harsh Dubey",
    roll: "Frontend",
    email:'',
    linkedin:"https://www.linkedin.com/in/harsh-dubey-3b4aa225b/",
    github:' https://github.com/harsh6333',
  },
  {
    image:"https://i.ibb.co/72WwrcH/IMG-20230725-053036.jpg",
    name: "Aditya Gupta",
    roll: "Frontend",
    email:'adiadity2579@gmail.com',
    linkedin:"https://www.linkedin.com/in/adityagupta2579/",
    github:'https://github.com/adiaditya2579',
  },
  {
    image:"https://i.ibb.co/52cfM05/Shivam-pic.jpg",
    name: "Shivam Sharma",
    roll: "WebOps Team",
    email:'shivam.klt77@gmail.com',
    linkedin:"https://www.linkedin.com/in/theshivam7/",
  },
  {
    image:"https://i.ibb.co/p45hbw8/PRIYANSHU.jpg",
    name: "Priyanshu Tiwari",
    roll: "WebOps Team",
    email:'priyanshutiwari.k30@gmail.com',
    linkedin:"https://www.linkedin.com/in/realpriyanshutiwari/",
  },
  {
    image:"https://i.ibb.co/ynqSpxr/Whats-App-Image-2024-03-01-at-11-52-27-PM.jpg",
    name: "Kaustubh Dwivedi",
    roll: "WebOps Team",
    email:'ram.shivaay100@gmail.com',
    linkedin:"https://www.linkedin.com/in/kaustubh-dwivedi-kd/",
  }
];

export default Cards;
