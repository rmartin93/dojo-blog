import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const history = useHistory()

    const [spinner, setSpinner] = useState(false)
    // const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        
        setSpinner(true)        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('blog added')
            setSpinner(false)
            history.push('/')
        })
    }

    return ( 
        <section>
            <div className="create">
                <h2>Add A New Blog</h2>
                <form onSubmit={handleSubmit} className="createForm">
                    <label>Blog title:</label>
                    <input 
                        type="text"                         
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label>Blog body:</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    ></textarea>
                    <label>Blog author:</label>
                    <select onChange={(e) => setAuthor(e.target.value)}>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    { !spinner && <button className="btn-primary">Add Blog</button> }
                    {  spinner && <button className="btn-primary" disabled>Adding Blog...</button> }
                </form>
            </div>        
        </section>
    );
}
 
export default Create;