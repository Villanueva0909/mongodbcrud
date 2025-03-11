"use client"

import { useRouter } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";

const RemoveBtn = ({ id }) => {

    const removeTopic = async () => {
        const router = useRouter()
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE"
            })

            if (res.ok) {
                router.refresh()
            }

        }
    }

    return (
        <button onClick={removeTopic} className="text-red-400">
            <FaRegTrashAlt size={24} />
        </button>
    )
}

export default RemoveBtn