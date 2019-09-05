import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ShareButton} from '../Components/ShareButton';
import PropTypes from 'prop-types';

class SocialShare extends Component {

	constructor(props) {
	    super(props);
	    const configJson = JSON.parse(this.props.config);
	    this.state = {
	    	config: configJson
	    }
	 }
	
	 render () {
		 const platforms = this.state.config.platforms;
	    return (
	      <div className="socialShareContainer">
	      {platforms.map(function(platform, index){
              return <ShareButton key={ index } config={platform} />;
            })}
	      </div>
	    )
	  }

}

SocialShare.propTypes = {
    contact: PropTypes.object
};

export default SocialShare;
