import Button from 'Components/Button'
import { useState } from 'react'

function FormAddDebt({ debtValue, setDebtValue, handleDebtValue, addPerson }) {

    const [name, setName] = useState("")
    const [doIOwe, setDoIOwe] = useState(false)
    const [image, setImage] = useState("userprofile.jpg")

    function handleImageChange(e) {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = e => setImage(e.target.result)
            reader.readAsDataURL(file)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!name || !debtValue) return

        const debt = doIOwe ? -debtValue : debtValue
        const id = crypto.randomUUID()
        const newPerson = {
            id,
            name,
            image,
            debt
        }

        addPerson(newPerson)
        setDebtValue("")
        setName("")
        setImage("userprofile.jpg")
        setDoIOwe(false)
    }

    return (
        <form className='form-add-person' onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <label htmlFor="whose">My debt</label>
            <span className='checkbox'>
                <input type="checkbox" checked={doIOwe} onChange={e => setDoIOwe(e.target.value)} />
            </span>

            <label htmlFor="img">Image</label>
            <input
                type="file"
                accept="image/*"
                id='img'
                onChange={handleImageChange}
            />

            <label htmlFor="debt-value">Debt value</label>
            <input
                type="text"
                id='debt-value'
                value={debtValue}
                onChange={handleDebtValue}
            />

            <Button>Add Debt</Button>
        </form>
    )
}


export default FormAddDebt