import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Aman</span>
        👋
        <br />
        A Software Engineer from India 🇮🇳
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          I've collaborated with various companies <br /> and gained numerous skills along the way.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          I've successfully led multiple impactful projects. <br /> Want to see my work in action?
        </p>
  
        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Explore my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain ml-2' />
        </Link>
      </div>
    );
  }
  
  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Have a project in mind or need a skilled developer? <br /> Let's connect and make it happen!
        </p>
  
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain ml-2' />
        </Link>
      </div>
    );
  }
  
  return null;
};

export default HomeInfo;
