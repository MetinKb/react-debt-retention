import { useState } from 'react'
import Button from 'Components/Button'

function DebtDetails({ debtValue, handleRemainingDebt, handleDebtValue, selectedPerson }) {

    const [paidDebt, setPaidDebt] = useState("")
    const remaining = debtValue - paidDebt

    function handleSubmit(e) {
        e.preventDefault()

        if (!debtValue) return

        handleRemainingDebt(remaining)
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
                onChange={handleDebtValue}
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
                disabled
                type="text"
                id="remaining"
                value={Math.abs(remaining)}
            />

            <Button>Save Details</Button>
        </form>
    )
}

export default DebtDetails