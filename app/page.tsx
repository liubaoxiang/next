// 文件顶部
'use client';
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import {Affix , Anchor } from 'antd';

export default function Home() {
   const [activeId, setActiveId] = useState<string | null>('section1');
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  let menuRef = useRef<HTMLDivElement>();
  const [ show, setShow ] = useState(false);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('.section')) as HTMLDivElement[];
      menuRef.current = document.getElementById('menu') as HTMLDivElement;
  }, []);

   useEffect(() => {
     const handler = () => {
       const menu = menuRef.current;
       const menuX = menu!.getBoundingClientRect();
       console.log(888,menuX.top,menuX.bottom);
       if (menuX.top <= 109&& menuX.bottom > 0) {
         setShow(true)
       } else { 
         setShow(false)
       }
      let i = 0;
      while (i < sectionsRef.current.length) {
        const section = sectionsRef.current[i];
        const rect = section.getBoundingClientRect();
        // 改变判断逻辑，当元素顶部接近视口顶部时，就认为它进入了视口
        if (rect.top <= window.innerHeight && rect.top + rect.height > window.innerHeight * 0.96) { // 你可以根据需要调整这个比例
          setActiveId(`section${i + 1}`);
          break;
        }
        i++;
        //  console.log(444,i);
      }
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <main className="flex bg-white min-h-screen flex-col items-center">
      <div className="mb-32 flex flex-col-reverse lg:flex-row justify-items-start text-center items-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <div className="w-full lg:w-1/3 ">
          <div className="flex items-center justify-center lg:justify-start">
            <Image
                src="https://s3-alpha.figma.com/profile/77d92d28-8203-4dbb-9a95-9d81cacbc6ce"
                alt="Vercel Logo"
                className="dark:invert"
                width={16}
                height={16}
                priority
              />
            <h3 className="ml-2">Material Design</h3>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Material 3 Design Kit</h2>
          <a className="bg-blue-500 hover:bg-blue-600 rounded-full p-2 ml-auto mr-auto text-sm font-semibold md:mt-6 text-white block w-1/3 text-center lg:w-1/2 lg:ml-0">Open in Figma</a>
        </div>
        <div className="mt-6 w-full lg:w-2/3 lg:mt-0">
          <Image
                src="/page.png"
                alt="首页图片"
                // className="dark:invert"
                width={1600}
                height={1400}
                priority
              />
        </div>
      </div>
      <div id="menu" className="flex items-center justify-start border-b w-full mt-4 sticky top-0">
        <div className="ml-auto mr-auto w-full lg:max-w-5xl ">
          <div style={{ display: show ? 'block' : 'none' }}>
            <div className="flex items-center justify-between bg-white">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Material 3 Design Kit</h2>
              <a className="bg-blue-500 hover:bg-blue-600 rounded-full p-2 ml-auto mr-auto text-sm font-semibold text-white block text-center w-40">Open in Figma</a>
            </div>
            </div>
           <ul className="flex text-center text-slate-400 w-full h-10 border-b bg-white" style={{ zIndex: 9 }}>
            <li className={activeId === 'section1' ? 'text-black border-b-slate-900 border-b-2' : ''}>
              <a href="#section1">About</a>
            </li>
            <li className={activeId === 'section2' ? 'text-black border-b-slate-900 border-b-2 ml-2' : 'ml-4'}>
              <a href="#section2">Comments 259</a>
            </li>
            <li className={activeId === 'section3' ? 'text-black border-b-slate-900 border-b-2 ml-2' : 'ml-4'}>
              <a href="#section3">Section 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-auto mr-auto w-full lg:max-w-5xl">
         <div className="content">
          <div style={{ height: '800px', background: 'rgba(255,0,0,0.02)' }} ref={(el) => { if(el) sectionsRef.current[0] = el as HTMLDivElement }} className="section" id="section1">
          
          Content for Section 1
        </div>
          <div style={{ height: '800px', background: 'rgba(255,0,0,0.02)' }} ref={(el) => { if(el) sectionsRef.current[1] = el as HTMLDivElement}} className="section" id="section2">
          Content for Section 2
        </div>
          <div style={{ height: '800px', background: 'rgba(255,0,0,0.02)' }} ref={(el) => { if(el) sectionsRef.current[2] = el as HTMLDivElement}} className="section" id="section3">
          Content for Section 3
        </div>
      </div>
          {/* <div className="pt-4" id="part-1" style={{ height: '800px', background: 'rgba(255,0,0,0.02)' }} >
             内容一
          </div>
          <div id="part-2" style={{ height: '800px', background: 'rgba(0,255,0,0.02)' }} >
             内容二
        </div>
         <div id="part-3" style={{ height: '800px', background: 'rgba(0,255,0,0.02)' }} >
             内容二
          </div> */}
        </div>
    </main>
  );
}
