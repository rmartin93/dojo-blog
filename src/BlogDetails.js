import { useState } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, spinner, error } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    const [deleteSpinner, setDeleteSpinner] = useState()

    const handleDelete = () => {
        setDeleteSpinner(true)
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        })
        .then(() => {
            setDeleteSpinner(false)
            history.push('/')            
        })
    }

    return ( 
        <section>
            <div className="blog-details">
                { error && <section><div> {error} </div></section> }
                { spinner && <section><div>Grabbing that blog for ya...</div></section> }
                { blog && (
                    <article>
                        <h2>{ blog.title }</h2>
                        <small>Written by { blog.author }</small>
                        <p>{ blog.body }</p>
                        { !deleteSpinner && <button className="btn-primary" onClick={handleDelete}>Delete</button> }
                        {  deleteSpinner && <button className="btn-primary" disabled>Deleting blog...</button> }
                    </article>
                )}
            </div>
        </section>
    )
}
 
export default BlogDetails;