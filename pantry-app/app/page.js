import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <div className="container flex flex-wrap items-center justify-between py-8 px-12">
            <h2 className="text-3xl">ADD ITEM</h2>
            <button className="flex items-center justify-between">
                <h3 className="text-2xl pr-2">SCAN</h3>
                <Image
                    src="/icons/barcode-solid.svg"
                    alt="barcode"
                    height={30}
                    width={30}
                />
            </button>
        </div>
        <p>AMOUNT:</p>
        <p>EXP:</p>
        <button className="bg-indigo-600 text-amber-100 rounded-full px-5 py-1.5 text-center ">Add</button>
    </main>
  )
}
