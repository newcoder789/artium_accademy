'use client'
import Link from 'next/link'
import React from 'react'
import courseData from '../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'


interface Courses{
    id:number,
    title:string,
    slug:string,
    description:string,
    price:number,
    instructor:string,
    isFeatured:boolean,

}
const FeaturedCourses = () => {
    const featuredcourses = courseData.courses.filter((courses:Courses)=>courses.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>

        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredcourses.map((courses:Courses)=> (
                    <div key= {courses.id}className='flex justify-center'>
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{courses.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{courses.description}</p>
                                <Link href={`/courses/${courses.slug}`}>
                                <button className="p-[3px] relative"><div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"></div><div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">Learn More</div></button>
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                )
                )}
            </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href={"/courses"}>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"><span className="absolute inset-0 overflow-hidden rounded-full"><span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span></span><div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "><span>View All Courses</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"></path></svg></div><span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span></button>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses
