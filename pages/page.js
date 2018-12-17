import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Page = (props) => (
    <Layout>
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.summary.replace(/<[/]?[pb]>/g, '')}</p>
            <img src={props.data.image.medium}></img>       
        </div>
    </Layout>
)

Page.getInitialProps = async (context) => {
    const { id } = context.query;
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();

    return {data};
}

export default Page;