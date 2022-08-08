const NavBar = props => {
  const {score, startTimer, clickedImageList} = props
  const {timerLimitInSeconds} = startTimer

  return (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div>
        <p>Score:{clickedImageList.length}</p>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{timerLimitInSeconds} sec</p>
        </div>
      </div>
    </div>
  )
}
export default NavBar
