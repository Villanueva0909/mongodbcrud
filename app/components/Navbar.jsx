import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 w-lg rounded-lg">
                <Link className="text-white font-bold" href={'/'}>RR Coding </Link>
                <Link className="bg-white p-2 rounded-lg" href={'/addTopic'}>Add topic</Link>
            </nav>

            <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 w-lg rounded-lg">
                <Link className="text-white font-bold" href={'/'}>RR Coding </Link>
                <Link className="bg-white p-2 rounded-lg" href={'/addTopic'}>Add topic</Link>
            </nav>
        </>
    )
}

export default Navbar; 