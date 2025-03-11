import { FaRegTrashAlt } from "react-icons/fa";

const RemoveBtn = (id) => {

    const removeTopic = async() = {
        const confirmed = confirm("Are you sure?")

        if(confirmed) {
            await fetch('http')
        }
    }

    return (
        <button className="text-red-400">
            <FaRegTrashAlt size={24} />
        </button>
    )
}

export default RemoveBtn