"use client"

import React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="container mx-auto py-4 px-6" data-aos="fade-down" data-aos-duration="1000">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLinks />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <NavLinks />
        </div>
      )}
    </nav>
  )
}

const NavLinks = () => (
  <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
    <NavLink href="#home">Home</NavLink>
    <NavLink href="#experience">Experience</NavLink>
    <NavLink href="#skills">Skills</NavLink>
    <NavLink href="#projects">Projects</NavLink>
    <NavLink href="#archivment">Achievements</NavLink>
    <NavLink href="#contact">Contact</NavLink>
  </div>
)

const NavLink = ({ href, children }) => (
  <a href={href} className="text-white hover:border-b-2 hover:border-yellow-500 px-4 py-2 block md:inline-block">
    {children}
  </a>
)

export default Navbar

