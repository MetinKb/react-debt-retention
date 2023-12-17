import Person from 'Components/Person'

function People({ people, onSelection, selectedPerson }) {
    return (
        <ul>
            {people.length > 0 && people.map(person =>
                <Person
                    person={person}
                    key={person.id}
                    selectedPerson={selectedPerson}
                    onSelection={onSelection}
                ></Person>)}
        </ul>
    )
}

export default People