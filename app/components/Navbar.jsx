import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={'/'}>RR Coding </Link>
            <Link className="bg-white p-2" href={'/addtopic'}>Add topic</Link>
        </nav>
    )
}

export default Navbar; 