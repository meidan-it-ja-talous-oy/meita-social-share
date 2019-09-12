import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ShareButton} from '../Components/ShareButton';
import PropTypes from 'prop-types';

class SocialShare extends Component {

	constructor(props) {
	    super(props);
	    const configJson = JSON.parse(this.props.config);
	    var langSetting = "en";
	    if(this.props.lang != null){
	    	langSetting = this.props.lang;
	    }
	    this.state = {
	    	config: configJson,
	    	lang: langSetting
	    }
	 }
	
	 render () {
		 const platforms = this.state.config.platforms;
		 const languageKey = this.state.lang;
	    return (
	      <div className="socialShareContainer">
	      {platforms.map(function(platform, index){
              return <ShareButton key={ index } config={platform} langKey={languageKey} />;
            })}
	      </div>
	    )
	  }

}

SocialShare.propTypes = {
    contact: PropTypes.object,
    lang: PropTypes.string
};

export default SocialShare;
