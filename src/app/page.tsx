import Image from "next/image"

export default function Home() {
  return (
    <body className="bg-gray-200 ">
    <section className="mt-32  flex mx-auto items-center justify-center "  >
      <div className=" w-1/4 mx-14 mb-9">
      <Image src={"/facebook.png"} width={400} height={400} alt="facebook" />
      <p className="font-medium">Facebook helps you connect and share with the people in your life.</p>
    </div>
    <div className="flex flex-col bg-white p-8 rounded-xl w-1/3 relative"  >
      <input className="px-4 h-12 outline-blue-600 my-4 border  border-1 border-gray-300 rounded-lg  " type="text" placeholder="Enter your Email and Phone Number"
      />
      <input className="px-4 h-12 my-4 outline-blue-600 border border-1 border-gray-300 rounded-lg " type="password" placeholder="password" />
      <button className="bg-blue-600 px-4 h-12 my-4 hover:bg-blue-700 border border-1 border-gray-300 rounded-lg text-center text-white font-bold cursor-pointer">Log in</button>
      <span className="text-blue-400 text-center text-sm cursor-pointer hover:underline ">Forgotten password?</span>
      <hr className="my-2"/>
      <button className="bg-green-600  hover:bg-green outline-blue-600-700 px-4 h-12 my-2  rounded-md mx-auto text-white font-bold  w-fit ro cursor-pointer">Create New Account</button>
<span className="absolute -bottom-10 text-sm"> <span className="font-bold hover:underline"> Create a Page</span>  for a celebrity, brand or business.</span>
      </div>
      </section>
      </body>
  )
}
