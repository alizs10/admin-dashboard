import Link from "next/link";

export default function Home() {

  return (

    <div className="bg-black w-screen h-screen flex justify-center items-center text-white">
      <Link href={'/dashboard'}>
        <button className="px-8 py-3 text-lg text-white rounded-full bg-purple-900">Dashboard</button>
      </Link>
    </div>

  );
}
