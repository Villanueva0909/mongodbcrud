import RemoveBtn from "./RemoveBtn"
import { HiPencilSquare } from "react-icons/hi2";
import Link from "next/link";

const TopicsList = () => {
    return (
        <>
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl" >Topic Title</h2>
                    <div>Topic Description</div>
                </div>
                <div className="flex gap-2">
                    <RemoveBtn />
                    <Link href={'/editTopic/123'}>
                        <HiPencilSquare size={24} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TopicsList