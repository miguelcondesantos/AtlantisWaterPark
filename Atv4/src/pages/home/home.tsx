import NavBar from '../../navbar/navbar';
import { Container, Row, Col } from 'react-bootstrap';
import "./home.css";

export default function Home() {
    return (
        <>
            <NavBar />
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Row>
                    <Col className='home'>
                        <h1>
                            
                            <span>B</span>
                            <span>e</span>
                            <span>m</span> 

                            <span>V</span>
                            <span>i</span>
                            <span>n</span>
                            <span>d</span>
                            <span>o</span>

                            <span>a</span>
                            <span>o</span>

                            <span>A</span>
                            <span>t</span>
                            <span>l</span>
                            <span>a</span>
                            <span>n</span>
                            <span>t</span>
                            <span>i</span>
                            <span>s</span>
                            <span>!</span></h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
