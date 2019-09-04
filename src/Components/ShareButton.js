import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const platformData = {
		  platforms: {
		      facebook: {
		          URL: "https://www.facebook.com/sharer/sharer.php?u=",
		          icon : "http://static.pohjoiskarjala.net/ico/facebook.png"
		      },
		      twitter: {
			      URL: "https://twitter.com/intent/tweet?text=",
			      icon : "http://static.pohjoiskarjala.net/ico/twitter.png"
			  },
			  linkedin: {
				  URL: "https://www.linkedin.com/shareArticle?mini=true&url=",
				  icon : "http://static.pohjoiskarjala.net/ico/linkedin.png"
			  } 
		   }
		};

class ShareButton extends Component {

    constructor() {
        super();
    }

    render() {
        const platform = this.props.config;
        var currentURL = window.location.href;
        if(platform === "linkedin"){
        	currentURL = currentURL + "&title=" + document.title;
        }
        return (
            <div className="singleShareButtonContainer">
              <span className={platform}><a target="_blank" href={platformData.platforms[platform].URL + currentURL}><img src={platformData.platforms[platform].icon} /></a></span>
            </div>
        );
    }
}

ShareButton.propTypes = {
    config: PropTypes.String,
    key: PropTypes.String
};

export { ShareButton };
