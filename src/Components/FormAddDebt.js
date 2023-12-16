import Button from 'Components/Button'
import { useState } from 'react'

function FormAddDebt({ debtValue, setDebtValue, handleDebtValue, addPerson, doIOwe, setDoIOwe }) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")

    function handleSubmit(e) {
        e.preventDefault()

        if (!name || !debtValue) return

        const debt = doIOwe ? -debtValue : debtValue
        const id = crypto.randomUUID()
        const newPerson = {
            id,
            name,
            image: `${image}?=${id}`,
            debt
        }

        addPerson(newPerson)
        setDebtValue("")
        setName("");
        setImage("https://i.pravatar.cc/48")
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
                <input type="checkbox" checked={doIOwe} onChange={() => setDoIOwe(!doIOwe)} />
            </span>

            <label htmlFor="img">Image</label>
            <input
                type="text"
                id='img'
                value={image}
                onChange={e => setImage(e.target.value)}
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