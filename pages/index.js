import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const search = 'batman'
const Index = (props) => (
    <div>
        <Layout>
            <h1>{`TV Show results for ${search}`}</h1>
            <ul>
                {props.shows.map(({show}) => (
                    <div>
                        <Link as={`/show/${show.id}`} href={`/page?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </div>
                ))}

            </ul>
           
        </Layout>
    </div>
)

Index.getInitialProps = async () => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
    const shows = await response.json();

    return {shows}
}

export default Index;