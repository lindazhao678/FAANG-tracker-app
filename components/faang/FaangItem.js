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
                    <img src={company.image} alt={company.title} />
                    {/* <Image 
                        src={company.image} 
                        alt={company.title} 
                        width={650}
                        height={300}
                        layout="intrinsic"
                    />  */}

                </div>
                <div className={styles.content}>
                    <h3>{company.title}</h3>
                    <p>{company.companyName}</p>
                    <p>Ticker: {company.ticker}</p>
                    <p>Exchange: {company.exchange}</p>
                </div>
                    
                <div className={styles.link}>
                    <a href={company.liveStockURL}>
                    Live Stock
                    </a>   
                    <button onClick={handleNavigate}>
                    <a>Read News</a>
                    </button>   
                </div>
             </div>
        </Card>
    );
}

export default FaangItem;