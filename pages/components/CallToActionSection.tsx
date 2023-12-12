import Link from "next/link";

export default function CallToActionSection(){
    return (
        <div className="p-4 -mt-6">
          <h1 className="text-2xl font-bold ">Custom Travel</h1>
          <Link href="https://i.ibb.co/3WfsSZ9/yellow-stone-2.jpg" legacyBehavior>
            <a className="text-lg no-underline hover:underline text-black">Create a custom vacation with us. Our travel experts will help plan and coordinate your dream vacation.</a>
          </Link>
          <h3></h3>
        </div>
    )
}