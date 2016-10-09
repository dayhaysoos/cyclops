import React from 'react';

class Home extends React.Component {
  render () {

    return (
    	<div className="main-container row">
    		<div className='welcome large-6 large-centered columns'>
    			<h1>Welcome To Cyclops</h1>
    			<p>Brief Description of what Cyclops is/does</p>
    		</div>
    		<div className="large-6 large-centered page-section video">
    			<h2>Nate's Video</h2>
    		</div>
    		<div className="large-6 large-centered page-section demo">
    			<h3>Demo Of Product</h3>
    			<p>
    				There were lots of ideas around this. Live streamed video can be used here
    				or pre-recorded video stream with options to use Cyclop features on it. 
    				Waikit was thinking of giving people the option to create a room immediately.
    			</p>
    		</div>
    	</div>
    	)
  }
}

export default Home;