import './App.css'
import card from './assets/images/bg-pattern-card.svg'
import profilePhoto from './assets/images/image-victor.jpg'
function App() {

  return (
    <>
      <main>
        <div className="profile-card">
          <div className="cover-image">
            <img src={card} alt="" />
          </div>
          <div className="profile-photo">
            <img src={profilePhoto} alt="" />
          </div>
          <div className="profile-name-age">
            <h1>Victor Crest</h1>
            <p>26</p>
          </div>
          <p className="location">London</p>
          <hr className='hr' />
          <div className="profile-stats">
            <div className="stat">
              <h1>80K</h1>
              <p>Followers</p>
            </div>
            <div className="stat">
              <h1>80K</h1>
              <p>Likes</p>
            </div>
            <div className="stat">
              <h1>1.4K</h1>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
