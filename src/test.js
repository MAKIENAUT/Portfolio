import { useState } from 'react';
import React from 'react';

const Test = () => {
   const [blogs, setBlogs] = useState([
      {title: 'Blog 1', id: 1},
      {title: 'Blog 2', id: 2},
      {title: 'Blog 3', id: 3},
      {title: 'Blog 4', id: 4}
   ]);

   const [foundBlog, setFoundBlog] = useState(null);

   const findBlog = (event) => {
      const inputValue = parseInt(event.target.value, 10);

      if (inputValue) {
         const found = blogs.find(blog => blog.id === inputValue);

         if (found) {
            setFoundBlog(found);
         } else {
            setFoundBlog(null);
         }
      } else {
         setFoundBlog(null);
      }
   }

   return (
      <div className="new">
         <input type="number" id='search_blog' onChange={findBlog}/>

         <div className="Blog_Container">
            {foundBlog ? (
               <p>{`Found Blog: ${foundBlog.id}`}</p>
            ) : (
               <p>No blog found</p>
            )}
         </div>
      </div>
   );
}

export default Test;
