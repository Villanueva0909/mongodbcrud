import { useState } from "react"

const addTopic = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const handleSubmit = () => {
        
    }

    return (
        <>
            <form className="flex flex-col gap-3">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />
                <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Description" />
                <button className="bg-red-600 font-bold text-white py-3 px-6 w-fit rounded-lg">Add Topic</button>
            </form>
        </>

    )
}

export default addTopic