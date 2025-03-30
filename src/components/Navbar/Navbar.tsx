import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useUser, SignInButton, SignOutButton, useClerk, SignedOut, SignedIn, UserButton } from "@clerk/clerk-react";
import WhatsAppButton from "../whatsapp/WhatsAppButton";
import { Link } from "react-router-dom";
import { BriefcaseIcon, Heart } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-navy-950/80 backdrop-blur-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to='/'>
            <div className="flex items-center space-x-2">
              <img src="/logoNav.png" className="w-14 h-16" alt="Logo" />
              <span className="text-white text-xl font-bold">
                Decoding <br /> Bollywood Hits
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
          {!location.pathname.startsWith("/blog") ? (
  <ScrollLink
    to="home"
    smooth={true}
    duration={500}
    className="text-white cursor-pointer hover:text-purple-400"
  >
    Home
  </ScrollLink>
) : null}
          {!location.pathname.startsWith("/blog") ? (
              <ScrollLink
              to="courses"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-purple-400"
            >
              Courses
            </ScrollLink>
          ) : (
            <Link to="/blog" className="text-white cursor-pointer hover:text-purple-400">
            
          </Link>
          )}
            { !location.pathname.startsWith("/blog") ? (
              <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-purple-400"
            >
              About
            </ScrollLink>
          ) : (
            <Link to="/blog" className="text-white cursor-pointer hover:text-purple-400">
            
          </Link>
          )}
            { !location.pathname.startsWith("/blog") ? (
              <Link to="/blog" className="text-white cursor-pointer hover:text-purple-400">
              Blog
            </Link>
          ) : (
            <Link to="/blog" className="text-white cursor-pointer hover:text-purple-400">
            
          </Link>
          )}
          </div>
          <div className="flex items-center justify-between">
            {/* WhatsApp Button */}
            <div
              style={{ marginRight: "30px" }}
              className="whatsapp-button-container flex items-center md:mr-0 md:block"
            >
              <WhatsAppButton />
            </div>

            {/* Authentication Buttons */}
            <div className="hidden md:block">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                    Login
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center space-x-4">
                  <span className="text-white text-lg font-medium">
                    Welcome, {user?.firstName}
                  </span>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10",
                      },
                    }}
                  >
                   <UserButton.MenuItems>
                <UserButton.Link
                  label="My courses"
                  labelIcon={<BriefcaseIcon size={15} />}
                  href="/my-course"
                />
                <UserButton.Link
                  label="Saved courses"
                  labelIcon={<Heart size={15} />}
                  href="/saved-course"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
             </UserButton>
                </div>
              </SignedIn>
            </div>


            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="text-white text-3xl focus:outline-none ml-2"
              >
                {isMenuOpen ? "" : "\u2630"} {/* Close (×) or Hamburger (☰) */}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-navy-950/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
      >
        <div className="flex items-center space-x-2 mt-3 ml-2">
          <img src="/logoNav.png" className="w-14 h-16" alt="Logo" />
          <span className="text-white text-xl font-bold">
            Decoding <br /> Bollywood Hits
          </span>
        </div>
        <div style={{ marginLeft: "30px", marginTop: "20px" }}>
          <SignedIn>
            <div className="flex items-center space-x-4">
              <span className="text-white text-lg font-medium">
                Welcome, {user?.firstName}
              </span>
              <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10",
                      },
                    }}
                  >
                   <UserButton.MenuItems>
                <UserButton.Link
                  label="My courses"
                  labelIcon={<BriefcaseIcon size={15} />}
                  href="/my-course"
                />
                <UserButton.Link
                  label="Saved courses"
                  labelIcon={<Heart size={15} />}
                  href="/saved-course"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
             </UserButton>
            </div>
          </SignedIn>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-6" style={{
          marginTop: "-100px"
        }}>
           {!location.pathname.startsWith("/blog") ? (
              <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-purple-400"
            >
              Home
            </ScrollLink>
          ) : (
            <Link to="/blog" className="text-white cursor-pointer hover:text-purple-400">
            
          </Link>
          )}
           { !location.pathname.startsWith("/blog") ? (
              <ScrollLink
              to="courses"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-purple-400"
            >
              Courses
            </ScrollLink>
          ) : (
            <Link to="/blog" className="text-white cursor-pointer hover:text-purple-400">
            
          </Link>
          )}
          {!location.pathname.startsWith("/blog") ? (
              <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-purple-400"
            >
              About
            </ScrollLink>
          ) : (
            <Link to="/blog" className="text-white cursor-pointer hover:text-purple-400">
            
          </Link>
          )}
           { !location.pathname.startsWith("/blog") ? (
               <Link to="/blog" className="text-white cursor-pointer hover:text-purple-400">
             Blog
               </Link>
          ) : (
            <Link to="/blog" className="text-white cursor-pointer hover:text-purple-400">
            
          </Link>
          )}

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                Login
              </button>
            </SignInButton>
          </SignedOut>


          <div
            className="md:hidden"
            style={{ position: "absolute", top: "0", right: "28px" }}
          >
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {isMenuOpen ? "\u2715" : ""}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}





