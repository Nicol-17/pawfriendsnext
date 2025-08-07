import { useState } from "react";
import Image from "next/image"; 
 
  

interface NavItemProps {
  children: React.ReactNode;
 
}

export default function NavItem({ children }: NavItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full h-28 flex items-center justify-center backdrop-blur">
      <nav className="flex w-full max-w-7xl items-center justify-between px-4 md:px-8 backdrop-blur-sm">
        
       
        <Image src="/logoVista.png" alt="Pawfriends logo" width={260} height={60} className=" object-contain" />

       
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6  transition-all" />
          <span className="h-0.5 w-6 bg-primary transition-all " />
          <span className="h-0.5 w-6 bg-primary transition-all" />
        </button>

        
        <ul
          data-testid="nav-menu"
          className={`
            ${open ? "flex" : "hidden"}
            md:flex
            fixed md:static left-0 top-28 w-full md:w-auto
            flex-col md:flex-row items-center
            gap-8 md:gap-24
            md:bg-transparent
            p-8 md:p-0            
            transition-all
            text-xl
            text-quicksand
            
          `}
          onClick={(e) => {
            const el = e.target as HTMLElement;
            if (el.tagName === "A" || el.closest("li")) setOpen(false);
          }}
        >
          {children}
        </ul>
      </nav>
    </header>
  );
}
