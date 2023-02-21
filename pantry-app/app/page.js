import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <div className="container flex flex-wrap items-center justify-evenly md:justify-between pt-8 pb-2 px-12 mx-auto md:w-2/3 xl:w-[55%]">
            <h2 className="text-3xl">ADD ITEM</h2>
            <button className="flex flex-row justify-between">
                <h3 className="text-2xl pr-2 flex items-center">SCAN</h3>
                <Image
                    src="/icons/barcode-solid.svg"
                    alt="barcode"
                    height={30}
                    width={30}
                    className="flex items-center"
                />
            </button>
        </div>
        <form className="bg-[#EFE7E7] container flex flex-col md:flex-row items-center justify-center md:justify-around
        w-fit md:w-2/3 xl:w-[55%] px-4 py-3 rounded-full mx-auto">
            <input type="text" placeholder="Item" className="bg-[#EFE7E7] w-64 p-2"/>
            <div className="flex flex-row items-center p-2">
                <div className="flex flex-row items-center">
                    <p className="px-1">AMOUNT:</p>
                    <input type="number" min="1" max="99" className="bg-[#EFE7E7] lg:w-24"/>
                </div>
                <div className="flex flex-row items-center">
                    <p className="px-1">EXP:</p>
                    <input type="date" className="bg-[#EFE7E7]"/>
                </div>
            </div>
        </form>
        <div className="flow-root">
            <button className="bg-indigo-600 text-[#E1D7D1] rounded-full my-2 mr-[15%] md:mr-[18%] lg:mr[40%] px-5 py-1.5 text-center float-right">Add</button>
        </div>
    </main>
  )
}
