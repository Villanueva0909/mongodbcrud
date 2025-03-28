import EditTopicForm from "@/app/components/EditTopicForm"

const getTopicById = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error('Failed to fetch topic')
        }

        return res.json()
    } catch (error) {
        console.log(error)

    }

}

const editTopic = async ({ params }) => {
    const { id } = params;
    await getTopicById(id)
    return (
        <EditTopicForm />
    )
}

export default editTopic