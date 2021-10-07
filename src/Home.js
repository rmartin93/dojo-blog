import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {    
    const {data: blogs, spinner, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            { error && <section><div> {error} </div></section> }
            { spinner && <section><div>Loading blogs...</div></section> }
            {blogs && <BlogList blogs={blogs} title="Welcome to my blog!" />}
        </div>
    )
}

export default Home;