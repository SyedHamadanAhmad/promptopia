"use client"
import Link from "next/link"
import Image from "next/image"
import logo from '../public/images/logo.svg'
import { useState, useEffect } from "react"
import {signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn =  true
    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)
    
    useEffect(()=>{
        const setProviders = async()=>{
            const response = await getProviders();
            setProviders(response)
        }
        setProviders()
    }, [])

    
    return (

    <nav className="flex-between w-full mb-16 pt-3 px-2 py-4">
    
    <Link href='/' className="flex gap-2 flex-center">
        <Image src={logo} width={30} height={30} className="object-contain" alt="logo"/>
        <p className="logo_text">Promptopia</p>
    </Link>
    {/* Nav bar elements if user is signed in */}

     {isUserLoggedIn ? (<div className="flex gap-2">
        <Link href='/create-post' className="black_btn"> Create Post</Link>
        <button onclick={signOut} className="black_btn">Sign Out</button>

        <Link href='/prfile' className="flex gap-2"> 
        <Image src={logo} width={37} height={37} className="object-contain" alt="user profile picture"/>
        </Link>

     </div>):
     (<div>
        {/* Nav bar elements if user is not signed in */}
        {providers && Object.values(providers).map((provider)=>{
            <button key={provider.name} onClick={()=>{signIn(provider.id)}}>
                Sign in with {provider.name}
            </button>
        })}
     
     </div>)}   
  </nav>)
      }

 

    
        


export default Nav