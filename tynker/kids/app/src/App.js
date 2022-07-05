import './App.css';


function App() {
  return (
    <div>
      <div className="hero">
        <header>
          <div className="logo"></div>
          <div className="nav">
            <span>PLAY</span><span>PARENTS</span><span>EDUCATORS</span><span>WHY CODE?</span>
          </div>
          <div className="actionbtn">
            <button className="join">JOIN FOR FREE</button>
            <button className="login">LOG IN</button>
          </div>
        </header>
        <div className="content-wrapper">
          <div className="content">

            <h2>Coding Made Easy</h2>
            <p>The fun way to learn programming and develop problem-solving & critical thinking skills! Ages 5-18</p>
            <button className='hero-btn'>GET STARTED FOR FREE</button>
            <h3>At-home plans from <span className='underline'>$9 per month</span></h3>
          </div>
          <div className="img"></div>
        </div>
      </div>

      <div className="info-section">
        <div className="info-wrapper">
          <div className="info-content">
            <h2>The #1 Coding Platform for Kids</h2>
            <p>Tynker powers the creativity of over <strong>60 million kids</strong> and serves thousands of schools and educators worldwide.</p>
            <p>Our interactive story-based learning allows kids to learn the basics with easy block-based coding challenges before seamlessly transitioning to real-world <a href="#">text-based languages</a> like <strong>JavaScript</strong> and <strong>Python</strong>.</p>
            <p>With 65+ award-winning courses, there’s a learning path for every kid, no matter their age or level. We have over 5,000 learning modules, backed by hundreds of built-in tutorials and hands-on projects.</p>
            <button className='hero-btn start-btn'>START CODING NOW</button>
          </div>
          <div className="info-img"></div>
        </div>
      </div>

      <div className="new-info">
        <div className="new-info-wrapper">
          <h2>Tynker has been busy. Good Busy. Check out what’s NEW!</h2>
          <div className="new-info-col">
            <div className="new-info-cols">
              <div className="new-info-img1"></div>
              <div className="info-details">
                <h2>AP Computer Science</h2>
                <p>2 New AP® CS courses endorsed by the College Board.</p>
                <p className='learn-btn'><a href="#">Learn More</a></p>
              </div>
            </div>
            <div className="new-info-cols">
              <div className="new-info-img2"></div>
              <div className="info-details">
                <h2>AP Computer Science</h2>
                <p>2 New AP® CS courses endorsed by the College Board.</p>
                <p className='learn-btn'><a href="#">Learn More</a></p>
              </div>
            </div>
            <div className="new-info-cols">
              <div className="new-info-img3"></div>
              <div className="info-details">
                <h2>AP Computer Science</h2>
                <p>2 New AP® CS courses endorsed by the College Board.</p>
                <p className='learn-btn'><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parent-section">
        <div className="info-wrapper parent-wrapper">
          <div className="parent-img"></div>
            <div className="info-content parent-content">
              <h2>Parents</h2>
              <p>Coding is quickly becoming an essential skill, one that will prepare your kids to succeed in an increasingly digital world.</p>
              <p>Tynker offers a range of options to learn coding: Your children can learn to code with our self-paced, <a href="#">immersive game-like courses,</a> and then advance to learning real-world Python and JavaScript.</p>
              <p>Select the option that’s best for your child!</p>
              <button className='hero-btn start-btn parent-btn'>LEARN MORE</button>
            </div>
          </div>
      </div>

      <div className="educator-section">
        <div className="info-wrapper educator-wrapper">
            <div className="info-content parent-content">
              <h2>Educators</h2>
              <p>Join over 100,000 schools that use Tynker to engage students with coding and connect with other educators who love to code!</p>
              <p>Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can <a href="#">create a free account</a>, set up your virtual classroom, and assign ready-made lesson plans!</p>
              <p>Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular STEM coding, AP Computer Science courses, and many great coding resources.</p>
              <button className='hero-btn start-btn parent-btn'>LEARN MORE</button>
            </div>
            <div className="educator-img"></div>
          </div>
      </div>

      <div className="app-section">
        <div className="app-section-wrapper">
          <h2>3 Highly-Rated Mobile Apps for Learning Code</h2>
          <p>Download Tynker apps and learn to code on the go.</p>
          <button className='hero-btn start-btn parent-btn'>LEARN MORE</button>
          <div className="apps">
            <div className="app-img"></div>
            <div className="app-info-wrapper">
              <div className="app-card">
                <div className="app-thumb-img1"></div>
                <div className="app-details">
                  <h2>Tynker Junior</h2>
                  <p>Tap-Tap picture coding with voice-overs. Pre-readers solve story-based puzzles and build their first programs in coding sandboxes. Ages 5-7</p>
                  <div className="review">
                    <div className="stars"></div>
                    <p>4.7</p>
                    <p>10,400+ reviews</p>
                  </div>
                </div>
              </div>
              <div className="app-card">
                <div className="app-thumb-img2"></div>
                <div className="app-details">
                  <h2>Tynker Junior</h2>
                  <p>Tap-Tap picture coding with voice-overs. Pre-readers solve story-based puzzles and build their first programs in coding sandboxes. Ages 5-7</p>
                  <div className="review">
                    <div className="stars"></div>
                    <p>4.7</p>
                    <p>10,400+ reviews</p>
                  </div>
                </div>
              </div>
              <div className="app-card">
                <div className="app-thumb-img3"></div>
                <div className="app-details">
                  <h2>Tynker Junior</h2>
                  <p>Tap-Tap picture coding with voice-overs. Pre-readers solve story-based puzzles and build their first programs in coding sandboxes. Ages 5-7</p>
                  <div className="review">
                    <div className="stars"></div>
                    <p>4.7</p>
                    <p>10,400+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app-section iot-section">
        <div className="app-section-wrapper iot-wrapper">
          <h2>A Mini-Computer for the Internet of Things!</h2>
          <div className="info-wrapper iot-holder">
            <div className="info-content iot-content">
              <p>The BBC Doctor Who HiFive Inventor is a visually stunning IoT-enabled hand-shaped mini-computer designed to teach kids how to control robots or interface with IoT systems to investigate the world around them.</p>
              <p>Younger students will begin their learning journey with visual block coding and advanced students with Micropython.</p>
              <p>The HiFive Inventor was developed by Tynker in collaboration with BBC Learning and SiFive, a fabless RISC-V semiconductor company.</p>
              <p className='learn'>Learn More:</p>
              <a href="#">www.HiFiveInventor.com</a>
            </div>
            <div className="iot-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;