import {Component} from 'react'

import NavBar from '../Navbar'
import ScoreCard from '../ScoreCard'
import {v4} from 'uuid';

class MatchGame extends Component{
    state={clickedImageList:[],isGameInProgress:true,topScore:0,
    activeTabId:tabsList[0].tabId,timeElapsedInSeconds:0,isTimerRunning:false}


componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

incrementTimeElapsedInSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const isTimerCompleted = timeElapsedInSeconds === 60

    if (isTimerCompleted) {
      this.clearTimerInterval()
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }
  }

renderTimerController()={
    const {isTimerRunning}=this.state

     const isTimerCompleted = timeElapsedInSeconds === 60

    if (isTimerCompleted) {
      this.setState({timeElapsedInSeconds: 0})
    }
    if (isTimerRunning) {
      this.clearTimerInterval()
    } else {
      this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }
    
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }


onStartTimer()=>{
    const {timeElapsedInSeconds}=this.seconds
    const timerLimitInSeconds=60-timeElapsedInSeconds

    return timerLimitInSeconds

}

render(){
    const {clickedImageList,isGameInProgress,topScore,activeTabId}=this.state
    const {imagesList,tabsList}=this.props

    return(

        <div className="app-container">
            {this.renderTimerController()}
            <NavBar score={clickedImageList.length} onStartTimer={this.onStartTimer} 
                clickedImageList={clickedImageList}
            />
        </div>
    )
}
}
export default MatchGame