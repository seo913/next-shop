import Link from "next/link";

export default function Home() {
  let name ='seo';

  return (
    <>
    <div className="m-0 bg-slate-500 min-h-screen flex flex-col justify-center items-center text-white">
    <div className="text-2xl mb-5 font-bold">애플후레시</div>
    <p>by dev {name}</p>
    </div>
    </>
  )
}
