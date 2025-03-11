import { FaRegTrashAlt } from "react-icons/fa";

const RemoveBtn = (id) => {

    const removeTopic = async() = {
        const confirmed = confirm("Are you sure?")

        if(confirmed) {
            await fetch(`http://localhost:3000/api/topics?id=${id}` || `http://localhost:3001/api/topics?id=${id}`, {
                method: "DELETE"
            })
        }
    }

    return (
        <button onClick={removeTopic} className="text-red-400">
            <FaRegTrashAlt size={24} />
        </button>
    )
}

export default RemoveBtn