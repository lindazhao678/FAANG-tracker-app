import Card from '../ui/Card';
import styles from './NewsItem.module.scss';
import Image from 'next/image';

function NewsItem(props) {
    const { news } = props
    let publishedDate = news.publishedAt.slice(0, 10)

    return (
        <Card>
            <div className={styles.item}>
                <div className={styles.image}>
                    <img src={news.urlToImage} alt={news.title} />
                </div>
                <div className={styles.content}>
                    <h3>{news.title}</h3>
                    <p>{news.author} | {news.source.name}</p>
                    <p>published date: {publishedDate}</p>
                </div>
                    
                <div className={styles.link}>
                    <a href={news.url} target="_blank" rel="noreferrer">
                    Read More
                    </a>     
                </div>
             </div>
        </Card>
    );
}

export default NewsItem;