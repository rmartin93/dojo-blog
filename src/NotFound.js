import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section>
            <div className="notFound">
                <h1>404</h1>
                <p>Sorry, that page could not be found</p>
                <Link to="/">Back to the home page...</Link>
            </div>
        </section>
    );
}
 
export default NotFound;