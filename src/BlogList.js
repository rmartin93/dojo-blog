import { Link } from "react-router-dom";
// import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

const BlogList = ({blogs, title}) => {
    return (            
        <section>
            {/* <CloudinaryContext cloudName="gmartin" secure="true">
                <Image publicId="Screen_Shot_2017-09-08_at_2.46.55_PM_urmubo.png" >
                    <Transformation effect="sharpen" />
                    <Transformation quality="auto" />
                </Image>
            </CloudinaryContext> */}
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