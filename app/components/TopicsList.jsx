import RemoveBtn from "./RemoveBtn"
import { HiPencilSquare } from "react-icons/hi2";
import Link from "next/link";
import { cache } from "react";

const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3001/api/topics', {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Failed to fetch topics")
        }

        return res.json()
    } catch (error) {
        console.log("Error loading topics", error)
    }
}

const TopicsList = async () => {

    const { topics } = await getTopics()

    return (
        <>
            {topics.map(t => (
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl" >{t.title}</h2>
                        <div>{t.description}</div>
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn />
                        <Link href={'/editTopic/${t._id}'}>
                            <HiPencilSquare size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TopicsList