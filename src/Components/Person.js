import Button from 'Components/Button'

function Person({ person, onSelection, selectedPerson }) {
    const isSelected = selectedPerson?.id === person.id;

    return (
        <li>
            <img src={person.image} alt={person.name} />
            <h3>{person.name}</h3>

            {person.debt < 0 && (
                <p className="red">
                    You owe ${Math.abs(person.debt)} to {person.name}
                </p>
            )}
            {person.debt > 0 && (
                <p className="green">
                    {person.name} owes you ${person.debt}
                </p>
            )}
            {person.debt === 0 && <p>No debt</p>}

            <Button onClick={() => onSelection(person)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    )
}

export default Person