import Image from "next/image";
import Link from 'next/link'

export default function Login() {
    return (
        <main>
            <form>
                <div className="flex flex-row justify-center m-2">
                    <h2 className="flex items-center">Username:</h2>
                    <input type="text" className="bg-[#EFE7E7] w-32 p-1 px-3 ml-2 rounded-full"/>
                </div>
                <div className="flex flex-row justify-center">
                    <h2 className="flex items-center">Password:</h2>
                    <input type="password" className="bg-[#EFE7E7] w-32 p-1 px-3 ml-2 rounded-full"/>
                </div>
                <div className="flex justify-center">
                    <Link href="/">
                        <button className="bg-indigo-600 text-[#E1D7D1] rounded-full my-2 mx-8 px-5 py-1.5 text-center ">Login</button>
                    </Link>
                </div>
            </form>
        </main>
    )
}

Login.getLayout = (page) => page