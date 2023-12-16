import Button from 'Components/Button'
import { useState } from 'react'

function FormAddDebt({ debtValue, setDebtValue, addPerson }) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")
    const [doIowe, setDoIOwe] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        if (!name || !debtValue) return

        const debt = doIowe ? -debtValue : debtValue
        const id = crypto.randomUUID()
        const newPerson = {
            id,
            name,
            image: `${image}?=${id}`,
            debt
        }

        addPerson(newPerson)

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
                <input type="checkbox" checked={doIowe} onChange={() => setDoIOwe(!doIowe)} />
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
                onChange={e => setDebtValue(e.target.value)} />

            <Button>Add Debt</Button>
        </form>
    )
}


export default FormAddDebt