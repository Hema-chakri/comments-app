import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {count: 0}

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <form className="top-container">
          <div className="items-container">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input type="text" placeholder="Your Name" />
            <textarea type="text" placeholder="Your Comment" />
            <button type="button">Add Comment</button>
            <hr />
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </form>
        <div>
          <p>{count} Comments</p>
          <ul>
            <CommentItem />
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
