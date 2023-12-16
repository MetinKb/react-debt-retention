import { useState } from 'react'
import Button from 'Components/Button'

function DebtDetails({ debtValue, setDebtValue, selectedPerson }) {

    const [paidDebt, setPaidDebt] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        if (!debtValue || !paidDebt) return
    }

    function handlePaid(e) {
        const value = e.target.value

        if (/^[0-9]*$/.test(value))
            setPaidDebt(Number(value) > debtValue ? paidDebt : Number(value))
    }

    return (
        <form className='form-debt-details' onSubmit={handleSubmit}>
            <h3>{selectedPerson.name}'s debt details</h3>

            <label htmlFor="debt-value">Debt Value:</label>
            <input
                type="text"
                id="debt-value"
                value={debtValue}
                onChange={(e) => setDebtValue(Number(e.target.value))}
            />

            <label htmlFor="paid">Paid Debt</label>
            <input
                type="text"
                id="paid"
                value={paidDebt}
                onChange={handlePaid}
            />

            <label htmlFor="remaining">Remainind debt</label>
            <input
                type="text"
                id="remaining"
                disabled value={Math.abs(debtValue - paidDebt)}
            />

            <Button>Save Details</Button>
        </form>
    )
}

export default DebtDetails