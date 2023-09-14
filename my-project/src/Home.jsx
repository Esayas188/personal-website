import { useEffect, useState } from 'react';
import './index.css';
import './main.css';


const Home = () => {

    const [menuOpen, setMenuOpen] = useState(true); // State to track if the menu is open or closed

    const toggleMenu = () => {
      setMenuOpen(!menuOpen); // Toggle the menuOpen state
      console.log('this is clicked clicked clicked clicked clicked....')
    };

    useEffect(() => {
        
        const sections = document.querySelectorAll("section");
        const navlinks = document.querySelectorAll("header nav a");
    
        window.onscroll = () => {
          sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");
            if (top >= offset && top < offset + height) {
              navlinks.forEach((links) => {
                links.classList.remove("active");
              });
              document.querySelector(
                "header nav a[href*='" + id + "']"
              ).classList.add("active");
            } else {
            }
          });
        };
      }, []);
    return ( 
        <>

        <div className="min-h-screen  bg-slate-50 text-white min-w-[200px]"> 
        <section id='home' className=" h-screen bg-home  bg-cover bg-no-repeat flex  justify-center items-center gap-6">
            <div className="flex  flex-col justify-center items-center">
                <p className=" lg:leading-[57px] text-2xl sm:text-3xl md:text-4xl tracking-tight lg:text-5xl">Hello, I'm<span className="text-[#F21274]"> Esayas Fekade</span> </p>
                <p className=" lg:leading-[57px] text-2xl sm:text-3xl md:text-4xl tracking-tight lg:text-5xl">I'm a Full-Stack Web Developer</p>
                <div className="">
                <a href="#about" className="text-xl mt-4 tracking-[-1] flex justify-center items-center hover:bg-[#F21274] border hover:border-[#F21274] border-white transition-hover duration-1000 px-4 py-2 ">Start With Me <span class="material-symbols-outlined pl-4">arrow_downward</span></a>
                </div>

            </div>

        </section>


        <header className="bg-[#1b242f] py-4 flex   ">
        {menuOpen ? (
                        <span className=" flex-1 font-bold text-xl ml-2 pr-4 md:hidden hover:cursor-pointer material-symbols-outlined"  onClick={toggleMenu}>menu</span>
                        ) : (
                        <span className="font-bold text-xl ml-2 pr-4 md:hidden hover:cursor-pointer material-symbols-outlined"  onClick={toggleMenu}>close</span>
                        )}


            <nav className={` flex-1 navbar md:flex md:flex-row md:space-x-8 justify-center items-center md:justify-start space-y-8 md:pl-6 md:space-y-0  ${menuOpen ? 'hidden' : 'active'} flex flex-col  md:active `} >

                <a href="#home" className="home active hover:text-[#F21274] transition-hover duration-500 hover:cursor-pointer">Home</a>
                <a href="#about" className="hover:text-[#F21274] transition-hover duration-500 hover:cursor-pointer">About</a>
                <a href="#skills" className="hover:text-[#F21274] transition-hover duration-500 hover:cursor-pointer">Skills</a>
                
                <a href="#portfolio" className='hover:text-[#F21274] transition-hover duration-500 hover:cursor-pointer'>Portfolio</a>
                <a target="_blank" href="mailto: esayasfekade188@gmail.com" className='hover:text-[#F21274] transition-hover duration-500 hover:cursor-pointer' >Contact Me</a>
                <a href="/img/resume.pdf" target="_blank" className='hover:text-[#F21274] transition-hover duration-500 hover:cursor-pointer active:text-white'>Resume</a>

                
            </nav>
        </header>
        <section id='about' className="about text-[#1b242f] flex items-center flex-col  h-full px-18 pt-16">
            <p className="text-3xl font-bold uppercase">About</p>
            <div className=' w-[80px] rounded-xl h-1 mt-2 bg-[rgba(27,36,47,0.9)]'>

            </div>
            <div className='grid items-center  md:grid-cols-2 grid-cols-1 mx-2 sm:mx-8 md:mx-0 mt-8 sm:px-14 '>
                <div className=' h-full flex items-center  p-4'>
                    <img src="img/about.svg " className=' min-h-[200px] w-full ' alt="img" />

                </div>
                <div className=' h-full flex items-center  p-4'>
                    <p className=' text-gray-600'>I'm a dedicated web developer specializing in building dynamic websites and applications. With expertise in various programming languages and frameworks, I bring ideas to life by implementing robust back-end functionalities and creating seamless user experiences. I thrive on solving complex problems and delivering innovative solutions. Let's collaborate and build something amazing together.</p>

                </div>
            </div>
        </section>
        <section id='skills' className='pt-16 text-[#1b242f] min-h-screen mx-20 '>
            <div className='flex flex-col justify-center items-center'>
                <p className="text-3xl font-bold uppercase">skills</p>
                <div className=' w-[80px] rounded-xl h-1 mt-2 bg-[rgba(27,36,47,0.9)]'>

                </div>
            </div>
            <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3  justify-center item lg:mx-28 my-10'>
                <div className=' rounded-xl shadow-md  p-6'>
                    <img src="img/python.png" className=' max-h-56 min-w-[50px]' alt="python" />
                </div>
                <div className=' rounded-xl shadow-md  p-6'>
                    <img src="img/django.png" className=' max-h-56 min-w-[50px]' alt="django" />
                </div>
                <div className=' rounded-xl shadow-md justify-center items-center p-6'>
                    <img src="img/html_css.png" className=' max-h-56 min-w-[50px]' alt="html_css" />
                </div>
                <div className=' rounded-xl shadow-md justify-center items-center  p-6'>
                    <img src="img/tailwindcss.png" className=' max-h-56 min-w-[50px]' alt="tailwindcss" />
                </div>
                <div className=' rounded-xl shadow-md justify-center items-center p-6'>
                    <img src="img/js.png" className=' max-h-56 min-w-[50px]' alt="js" />
                </div>
                <div className=' rounded-xl shadow-md justify-center items-center p-6'>
                    <img src="img/react.png" className=' max-h-56 min-w-[50px]' alt="reactjs" />
                </div>
                <div className=' rounded-xl shadow-md justify-center items-center p-6'>
                    <img src="img/nodejs.png" className=' max-h-56 min-w-[50px]' alt="nodejs" />
                </div>
                <div className=' rounded-xl shadow-md flex justify-center items-center  p-6'>
                    <img src="img/express-js.svg" className=' max-h-56 min-w-[50px]' alt="expressjs" />
                </div>
                <div className=' rounded-xl shadow-md flex justify-center items-center  p-6'>
                    <img src="img/mongodb.png" className=' max-h-56 min-w-[50px]' alt="mongodb" />
                </div>
                <div className=' rounded-xl shadow-md flex justify-center items-center  p-6'>
                    <img src="img/sql.png" className=' max-h-56 min-w-[50px]' alt="sql" />
                </div>

            </div>
            


        </section>

        <section id='portfolio' className="about mb-20 text-[#1b242f] h-screen flex items-center flex-col   px-18 pt-16">
            <p className="text-3xl font-bold uppercase">Projects</p>
            <div className=' w-[130px] rounded-xl h-1 mt-2 bg-[rgba(27,36,47,0.9)]'>

            </div>
            <div className='grid grid-cols-1  mx-16 mt-16 '>
                <div className='  grid grid-cols-1 sm:grid-cols-3 gap-8 '>
                    <img src="img/project1.png" className='rounded-2xl overflow-hidden shadow-lg col-span-1' alt="" />
                    
                    <div className='col-span-2'>
                        <p className=' text-lg font-semibold '>Delicious Delights</p>
                        <p className=' col-span-2'>Delicious Delights is a MERN-based recipe website.</p>
                        <div className=' mt-8 flex items-center space-x-6'>
                            <a class="material-symbols-outlined hover:cursor-pointer" href="https://delicious-new.netlify.app" target="_blank">open_in_new</a>

                            <a target="_blank" href="https://github.com/Esayas188/recipe-mern" ><img src="img/github2.svg" className='w-35 h-35' alt="github" /></a>
                        </div>


                    </div>
                

                </div>
                <hr className='mt-10 border-[rgba(242,18,116,0.4)]'/>
            </div>
            <div className='grid grid-cols-1  mx-16 mt-16 '>
                <div className='  grid grid-cols-1 sm:grid-cols-3 gap-8 '>
                    <img src="img/workout.png" className='rounded-2xl overflow-hidden shadow-lg col-span-1' alt="" />
                    
                    <div className='col-span-2'>
                        <p className=' text-lg font-semibold '>Workout Blog Site</p>
                        <p className=' col-span-2'>Workout Blog Site is a website built using the MERN stack, specifically designed for publishing fitness-related blogs.</p>
                        <div className=' mt-8 flex items-center space-x-6'>
                            <a target="_blank" href="https://github.com/Esayas188/mern-blog" ><img src="img/github2.svg" className='w-35 h-35' alt="github" /></a>
                        </div>


                    </div>
                

                </div>
            </div>

        </section>
        <section id='contact' className='py-6 text-[#1b242f] bg-slate-200'>
            <div className='flex flex-col justify-center items-center'>
                <p className=' font-bold text-xl'>socials</p>
                <div className='flex justify-center items-center p-4 space-x-4'>

                    <a target="_blank" href="https://github.com/Esayas188" ><img src="img/github2.svg" alt="" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/esayas-fekade-8b506b247" ><img src="img/linkdin.png" alt="" /></a>
                    
                </div>

            </div>

        </section>



        </div>
        </>
     );
}
 
export default Home;