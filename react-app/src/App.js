import desktopHero from './assets/images/image-hero-desktop.jpg' ;
import mobileHero from './assets/images/image-hero-mobile.jpg'
import {ReactComponent as CrowdFundLogo } from './assets/images/logo.svg';
import {ReactComponent as Hamburger} from './assets/images/icon-hamburger.svg';
import {ReactComponent as MastercraftLogo} from './assets/images/logo-mastercraft.svg';
import {ReactComponent as Bookmark} from './assets/images/icon-bookmark.svg';
import Button from "./components/globals/Button";
import Stand from "./components/Stand";

function App() {
  const stands = [
    {
      stand: 'Bamboo Stand', 
      pledge: 'Pledge $25 or more',
      desc: 'You get an ergonomic stand made of natural bamboo.You\'ve helped us launch our promotional campaign and you\'ll be added to a special Backer member list',
      itemsLeft: 101
    },
    {
      stand: 'Black Edition Stand', 
      pledge: 'Pledge $75 or more',
      desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      itemsLeft: 64
    },
    {
      stand: 'Mahogany Special Edition', 
      pledge: 'Pledge $200 or more',
      desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      itemsLeft: 0
    }]
  return (
   <div className="app font-commissioner bg-primary-cyan-light">
     <header className="relative ">
       <div className="absolute w-full py-5">
       <div className="w-11/12 mx-auto flex justify-between">
        <CrowdFundLogo/>
        <Hamburger/>
        {/* <nav>
          <div><a href="#">About</a></div>
          <div><a href="#">Discover</a></div>
          <div><a href="#">Get Started</a></div>
        </nav> */}
        </div>
        </div>
         <img src={window.innerWidth < 850 ? mobileHero : desktopHero} alt="macbook desktop"/>
     </header>
     <main className="max-w-2xl mx-auto">
       <article className="text-sm relative bg-white pt-10 pb-7 px-7 w-11/12 mx-auto  -mt-16 text-center rounded-md">
         <MastercraftLogo className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
        <h2 className="text-xl font-bold">Mastercraft Bamboo Monitor Riser</h2>
         <p className=" text-gray-450 py-4">A beautifully handcrafted monitor stand to reduce neck and eye strain</p>
         <div className="flex justify-between gap-4">
           <Button className="bg-primary-cyan-moderate">Back this project</Button>
            <Bookmark className=""/>
         </div>
       </article>
       <article className="card text-center">
        <h1 className="card__text-xxl">$89,914</h1>
        <p className="card__text-xxs">of $100,000 backed</p>
        <hr className="w-1/4 mx-auto h-0 border-0 border-t my-5 border-gray-450"/>
        <h1 className="card__text-xxl">5,007</h1>
        <p className="card__text-xxs">total backers</p>
        <hr className="w-1/4 mx-auto h-0 border-0 border-t my-5 border-gray-450"/>
        <h1 className="card__text-xxl">56</h1>
        <p className="card__text-xxs">days left</p>
  
        <div className="mt-6 w-full h-3 rounded-full bg-primary-cyan-light relative overflow-hidden" >
          <div className="absolute w-9/12 h-full bg-primary-cyan-moderate">

          </div>
        </div>
       </article>
       <section className="card card__text-xxs leading-5">
         <h2 className="text-xl font-bold tracking-tight text-black">About this project</h2>
        <p className="my-3" >
             The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
           your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
       </p>
       <p className="my-3">
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
         to allow notepads, pens, and USB sticks to be stored under the stand.
       </p>
       {
         stands.map(({stand,pledge,desc,itemsLeft})=><Stand stand={stand} pledge={pledge} desc={desc} itemsLeft={itemsLeft}/>)
       }
       </section>
     </main>
   </div>
  );
}

export default App;
