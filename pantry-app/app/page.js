import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <div className="container flex flex-wrap items-center justify-between pt-8 pb-2 px-12">
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
        <form className="bg-[#EFE7E7] container flex flex-row items-center justify-center w-fit px-4 py-3 rounded-full mx-auto">
            <input type="text" placeholder="Item" className="bg-[#EFE7E7] w-24 px-1"/>
            <div className="flex flex-row items-center">
                <p className="px-1">AMOUNT:</p>
                <input type="number" min="1" max="99" className="bg-[#EFE7E7]"/>
            </div>
            <div className="flex flex-row items-center">
                <p className="px-1">EXP:</p>
                <input type="date" className="bg-[#EFE7E7]"/>
            </div>
        </form>
        <div className="flow-root">
            <button className="bg-indigo-600 text-[#E1D7D1] rounded-full my-2 mx-8 px-5 py-1.5 text-center float-right">Add</button>
        </div>
    </main>
  )
}
