// Write your code here
const CommentItem = props => {
  const {CommentItemDetails} = props

  return (
    <div>
      <li>
        <div>
          <p>name</p>
          <p>time</p>
        </div>
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
            <p>Like</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </div>
      </li>
    </div>
  )
}

export default CommentItem
