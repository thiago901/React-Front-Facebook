import React, {Component} from 'react'
import Comment from '../Comment';
import './style.css';

class Post extends Component{
  
    render(){
      const {posts} =this.props;
      console.log(posts);
      
      
        return (
          
          <div className='post'>
            <div className='data-post'>
            <div className='user'>
              <img src={posts.author.avatar} className='img-user-profile'/>
              <div className='user-data'>
                <p className='name'>{posts.author.name}</p>
                <small className='date'>{posts.date}</small>
              </div>
            </div>
            <p className='text-post'>
                {posts.content}
            </p>
            </div>
            {
              posts.comments.map(comment=>{
                return <Comment key={comment.id} comment={comment}/>
              })
            }
           
          </div>
        );
    }
}

export default Post;