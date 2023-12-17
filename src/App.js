import Button from "Components/Button"
import DebtDetails from "Components/DebtDetails"
import People from "Components/People"
import FormAddDebt from "Components/FormAddDebt"
import { useEffect, useState } from 'react'

function App() {

  const [debtValue, setDebtValue] = useState("")
  const [people, setPeople] = useState(() => {
    const storedData = localStorage.getItem("people")
    return storedData ? JSON.parse(storedData) : []
  })
  const [showAddDebt, setShowAddDebt] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState(null)

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people))
  })

  useEffect(() => {
    const people = localStorage.getItem("people")
    setPeople(JSON.parse(people))
  }, [])

  function handleAddPerson(person) {
    setPeople(people => [...people, person])
    setShowAddDebt(false)
  }

  function handleShowAddDebt() {
    setShowAddDebt(!showAddDebt)
  }

  function handleClearLocalStorage() {
    if (window.confirm("Are you sure you want to delete all records?")) {
      localStorage.clear()
      setPeople([])
    }
  }

  function handleSelection(person) {
    setSelectedPerson(current => (current?.id === person.id ? null : person))
    setDebtValue(current => current.id === person.id ? "" : person.debt)
    setShowAddDebt(false)
  }

  function handleDebtValue(e) {
    if (/^[0-9]*$/.test(e.target.value))
      setDebtValue(Number(e.target.value))
  }

  function handleRemainingDebt(remaining) {
    setPeople(people =>
      people.map(person =>
        person.id === selectedPerson.id
          ? { ...person, debt: remaining }
          : person
      )
    )
    setDebtValue(remaining)
    setSelectedPerson(null)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <People
          people={people}
          selectedPerson={selectedPerson}
          onSelection={handleSelection}
        />

        {showAddDebt &&
          <FormAddDebt
            debtValue={debtValue}
            setDebtValue={setDebtValue}
            handleDebtValue={handleDebtValue}
            addPerson={handleAddPerson}
          />}

        <Button onClick={handleShowAddDebt}>
          {showAddDebt ? "Close" : "Add Someone"}
        </Button>

        {people.length > 0 &&
          <Button onClick={handleClearLocalStorage}>
            Clear All
          </Button>}
      </div>

      {selectedPerson &&
        <DebtDetails
          debtValue={debtValue}
          setDebtValue={setDebtValue}
          selectedPerson={selectedPerson}
          handleDebtValue={handleDebtValue}
          handleRemainingDebt={handleRemainingDebt}
        />}
    </div>
  )
}

export default App
