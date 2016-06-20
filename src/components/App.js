import React from 'react'
const {array, shape, string} = React.PropTypes
const jsonize = (res) => res.json();



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      redditRes: {}
    }
  }

  componentDidMount(){
    fetch("https://www.reddit.com/r/all.json")
      .then(jsonize)
      .then( json =>  this.setState({redditRes: json}))
  }

  render(){
    const {redditRes} = this.state
    return redditRes.data
      ? <FeedList feeds={redditRes.data.children} />
      : <LoadingFeeds />


  }

}

const LoadingFeeds = () => <div>Loading Feeds ... </div>

const FeedListTitle = () => <div>
  <h2>Feeds</h2>

</div>


const FeedList = ({feeds}) =>
  <div>
    <FeedListTitle />
    {feeds.map( (feed, idx) => <Feed key={idx}  feed={feed} /> ) }
  </div>

FeedList.propTypes = {
  feeds: array.isRequired
}


const Feed = ({feed}) => {
  const {data} = feed;
  const {title} = data;

  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
}
Feed.propTypes = {
  data: shape({
    title: string
  })
}


export default App;
