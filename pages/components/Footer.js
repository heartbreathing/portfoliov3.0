import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer>
      <section>
        <div className="text-center py-10  mt-20 bg-purple-200 dark:bg-gray-900 dark:mt-0">
          <h3 className="text-2xl py-2 font-bold text-purple-800 md:text-3xl dark:text-white">Contact Me</h3>
          <div className="flex items-center justify-center gap-5 py-2 text-purple-800 md:text-2xl dark:text-gray-200">
            <BsFillTelephonePlusFill />
            <p className="py-1 text-gray-800 md:text-xl dark:text-gray-200">
              +46 (0)703556196
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 py-1 text-purple-800 md:text-2xl dark:text-gray-200">
            <AiOutlineMail />
            <p className="py-1 text-gray-800 md:text-xl dark:text-gray-200">
              li-wang-sw@gmail.com
            </p>

          </div>


          <div className="text-4xl flex justify-center gap-10 py-3 text-purple-700 md:text-5xl dark:text-gray-200">
            <Link href="https://github.com/heartbreathing"><AiFillGithub className="hover:text-purple-900" /></Link>
            <Link href="https://www.linkedin.com/in/li-wang-14b34322b/"><AiFillLinkedin className="hover:text-purple-900" /></Link>

          </div>
        </div>
      </section>
    </footer>

  )
}



