// import fetch from 'isomorphic-fetch'
//
// export const REQUEST_POSTS = 'REQUEST_POSTS'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function addBox(title, items) {
  return {
    type: "ADD_BOX",
    payload:{title,items}

  }
}

export function removeBox(title) {
  return {
    type: "REMOVE_BOX",
    payload: {title}
  }
}


export function requestInformation(subRedit, dispatch){
  return fetch(`http://www.reddit.com/r/${subRedit}.json`)
  .then((response) => response.json())
      .then(json => {
        const title = subRedit

        dispatch(addBox(title, json))
      })
}

function receivePosts() {
  return {
    type: RECEIVE_POSTS
  }
}
//
// function fetchPosts(dispatch, subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`http://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json => {
//         const title = this.state.value
//         this.props.dispatch(fetchDispatch.dataFetched(json))
//         this.props.dispatch(displayBoxes.addBox(title, json))
//       )} )
//   }
// }

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}
