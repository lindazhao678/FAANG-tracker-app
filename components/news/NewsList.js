import NewsItem from './NewsItem';
import Container from '../ui/Container';

function NewsList(props) {
    const { loadedNews }= props

    return (
        <Container>
            {loadedNews.map(news =>  
            <div key={news.title}> <NewsItem news={news} /> </div> 
            )}
        </Container>
    );
}

export default NewsList;