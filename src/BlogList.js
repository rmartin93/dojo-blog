import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return (        
        <section>
            <div className="blog-list">            
                <h2 className="page-title">{title}</h2>
                {blogs.map((blog) => (
                    <div className="blog-preview-wrapper" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <div className="blog-preview">
                                <h2>{blog.title}</h2>
                                <p>Written by {blog.author}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>   
        </section>     
    );
}
 
export default BlogList;