import { useRouter } from 'next/router';
import Card from '../ui/Card';
import styles from './FaangItem.module.scss';
import Image from 'next/image';

function FaangItem(props) {
    const { company } = props
    const router = useRouter()

    function handleNavigate() {
        router.push('/' + company.path);
    }

    return (
        <Card>
            <div className={styles.item}>
                <div className={styles.image}>
                    <Image 
                        src={company.image} 
                        alt={company.title} 
                        width={100}
                        height={100}
                        layout="intrinsic"
                    /> 
                    </div>

                <div className={styles.content}>
                    <h3>{company.title}</h3>
                    <p>{company.companyName}</p>
                    <p>Ticker: {company.ticker}</p>
                    <p>Exchange: {company.exchange}</p>
                </div>

                <div className={styles.link}>
                    <a href={company.liveStockURL} target="_blank" rel="noreferrer">
                        Live Stock
                    </a>
                    <a onClick={handleNavigate}>
                        Read News
                    </a>
                </div>
            </div>
        </Card>
    );
}

export default FaangItem;