import { Container, Row } from 'react-bootstrap'
import CustomText from './components/modules/CustomText/CustomText'
import Counter from './components/modules/Counter'

function App() {
  // Test events for counter
  const counterEvents = [
    { name: "ATK-YTP", date: new Date(2022, 10, 24) },
    { name: "Titeenit", date: new Date(2022, 10, 24) }
  ]

  return (
    <div className="App">
      <Container fluid className="mt-2">
        <Row>
          <CustomText text="Moi" />
          <CustomText text="Moi 2" />
          <CustomText text="Esimerkki" />
        </Row>
        <Row>
          {counterEvents.map( event =>
            <Counter key={event.name} event={event} />
          )}
        </Row>
      </Container>
    </div>
  )
}

export default App
