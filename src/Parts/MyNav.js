// Importing necessary components from react-bootstrap library and custom CSS file
import { Button, Col, Form, Nav, Row } from 'react-bootstrap'
import '../CSS/MYNav.css'
import { Link } from 'react-router-dom'

// Functional component MyNav that receives props setTitleValue, rangeValue, and setRangeValue
function MyNav({ setTitleValue, rangeValue, setRangeValue }) {

  return (
    <div>
        {/* Styling for the navigation bar */}
        <div className='NavBarCss'>
          {/* Navigation bar with active key and onSelect event handler */}
          <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
            </Nav.Item>
            {/* Navigation items with links and custom styling */}
            <Nav.Item><Nav.Link className='keyColor' > <Link to ='home'>Home</Link> </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link className='keyColor' eventKey="link-1">Link</Nav.Link></Nav.Item>
          
          {/* Form for inline search with input field and submit button */}
          <Form inline className='searchPlace'>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  onChange={(e) => setTitleValue(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button variant="danger" type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>

          {/* Range input with label and value display */}
          <div className="The-range">
            <form action="/action_page.php">
              <label htmlFor="vol" className='elRange'>Rate:</label>
              <p className='valueChoosen'>{rangeValue}</p>
              <input type="range" id="vol" name="vol" className='ElRangeCursor' step="0.1" min="0" max="10" onChange={(e) => setRangeValue(e.target.value)} />
            </form>
          </div>
        </Nav>
      </div>
    </div>
  )
}

// Exporting the MyNav component as the default export
export default MyNav
