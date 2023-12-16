import Button from "Components/Button"
import DebtDetails from "Components/DebtDetails"
import People from "Components/People"
import FormAddDebt from "Components/FormAddDebt"
import { useState } from 'react'
import initialData from "data"

function App() {

  const [debtValue, setDebtValue] = useState("")
  const [people, setPeople] = useState(initialData)
  const [showAddDebt, setShowAddDebt] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState(null);

  function handleAddPerson(person) {
    setPeople((persons) => [...persons, person]);
  }

  function handleShowAddDebt() {
    setShowAddDebt(!showAddDebt)
  }

  function handleSelection(person) {
    setSelectedPerson(cur => (cur?.id === person.id ? null : person));
    setShowAddDebt(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <People
          people={people}
          selectedFriend={selectedPerson}
          onSelection={handleSelection}
        />

        {showAddDebt &&
          <FormAddDebt
            debtValue={debtValue}
            setDebtValue={setDebtValue}
            addPerson={handleAddPerson}
          />}

        <Button onClick={handleShowAddDebt}>
          {showAddDebt ? "Close" : "Add Someone"}
        </Button>
      </div>

      {selectedPerson &&
        <DebtDetails
          debtValue={debtValue}
          selectedPerson={selectedPerson}
          setDebtValue={setDebtValue}
        />}
    </div>
  )
}

export default App
