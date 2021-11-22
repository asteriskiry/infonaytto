import { Container, Row } from 'react-bootstrap'
import CustomText from './components/modules/CustomText/CustomText'

function App() {
  return (
    <div className="App">
      <Container fluid className="mt-2">
        <Row>
          <CustomText text="Moi" />
          <CustomText text="Moi 2" />
          <CustomText text="Esimerkki" />
        </Row>
      </Container>
    </div>
  )
}

export default App
