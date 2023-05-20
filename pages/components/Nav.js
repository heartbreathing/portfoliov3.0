import { BsFillMoonStarsFill } from 'react-icons/bs';
import Image from 'next/image';
import { useState } from 'react'; 



function Nav () {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <nav className="py-10 mb-12 flex justify-between">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        {/* <h1 className="font-burtons">Li's Portfolio</h1> */}
        <ul className="flex items-center gap-3">
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer dark:text-gray-200" />
          </li>
          <li>
            {/* <a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-2 rounded-md" href="#">Resume</a> */}
            <a className=" bg-gradient-to-r from-orange-600 to-purple-800  text-white px-3 py-2 rounded-md" href="#">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;