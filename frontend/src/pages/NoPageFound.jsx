import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
// import errorPage from '../pageNotFoundImg.png';


export default function NoPageFound () {
	return (
		<>
			<Row className="my-3">
				<Col className="col-6 mx-auto">
				{/* <img src = { errorPage } alt = "Error Web page!" /> */}
				<p className='text-red-900 bg-yellow-400'><Link to = '/'>Back to Homepage</Link></p>
				</Col>
			</Row>		  	
		</>
	)
}