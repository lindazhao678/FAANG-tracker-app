import FaangItem from './FaangItem';
import Container from '../ui/Container';

function FaangList(props) {
    const { companies }= props

    return (
        <Container>
            {companies.map(company =>  
            <div key={company.id}> <FaangItem company={company} /> </div> 
            )}
        </Container>
    );
}

export default FaangList