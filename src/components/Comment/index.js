import React,{ Component } from 'react'
import './style.css';
import userProfile from '../../assets/icons/user-profile.jpg'
class Comment extends Component{
    render(){
      const {comment} = this.props;
      return (
        <div className='comment'>
          <div className='data-comment'>
            <img className='img-user' src={comment.author.avatar}/>
            <p className='text-comment'>
              <span className='name'>{comment.author.name}</span>{comment.content}</p>
          </div>

        </div>
      );
    }
}

export default Comment;