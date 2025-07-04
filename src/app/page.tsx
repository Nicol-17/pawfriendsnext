'use client';
import NavItem from "@/components/organisms/NavItem/NavItem";
import '@/app/globals.css';
// import LanguageSwitcher from "@/components/atoms/LanguageSwitcher/languageswitcher";
import Button from "@/components/atoms/Button/Button";
import HeroText from "@/components/molecules/HeroText/HeroText";




const HomePage = () => {
  return (
    <>
     <NavItem>
    {/* <LanguageSwitcher/> */}
       
        <li>
          <a href="#us" className="">us</a>
        </li>
        <li>
          <a href="#testimonials" className="">testimonials</a>
        </li>
        <li>
          <a href="#food" className="">food</a>
        </li>
        <li>
          <a href="#contact" className="">contact</a>
        </li>
        <li>
          <Button type="link" destiny="/Login" className=" font-bold  items-center">   
            login
          </Button>
        </li>
      </NavItem>
      <section>
        <HeroText/>

      </section>
    
    </>
    
      




  );
}

export default HomePage;