import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <div className="container flex flex-wrap items-center justify-between mx-auto px-4 py-3">
              <div>
                  <Link href="./lists" className="flex flex-col items-center">
                      <Image
                          src="/icons/list-solid-indigo.svg"
                          alt="list"
                          height={30}
                          width={30}
                      />
                      <p className="text-indigo-600">Lists</p>
                  </Link>
              </div>
              <button className="bg-indigo-600 text-[#E1D7D1] rounded-full px-5 py-1.5 text-center ">
                  <Link href="./recipes">Recipes</Link>
              </button>
              <div >
                  <Link href="./profile" className="flex flex-col items-center">
                      <Image
                          src="/icons/user-solid-indigo.svg"
                          alt="user"
                          height={30}
                          width={30}
                      />
                      <p  className="text-indigo-600">Profile</p>
                  </Link>
              </div>
          </div>
        </nav>
        <heading className="font-['QUEENS'] text-8xl flex justify-center p-4">Pantry</heading>
        {children}
      </body>
    </html>
  )
}
