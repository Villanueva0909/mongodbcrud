import EditTopicForm from "@/app/components/EditTopicForm"

const getTopicById = async() => {
    try {
        const res = await fetch('http://localhost:3000/api/topics/')
    } catch (error) {
        
    }

}

const editTopic = ({ params }) => {
    const { id } = params
    return (
        <EditTopicForm />
    )
}

export default editTopic