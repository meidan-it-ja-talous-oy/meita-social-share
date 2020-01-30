import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import i18n from "i18next";

const platformData = {
		  platforms: {
		      facebook: {
		          URL: "https://www.facebook.com/sharer/sharer.php?u=",
		          icon : "https://static.pohjoiskarjala.net/ico/facebook.png"
		      },
		      twitter: {
			      URL: "https://twitter.com/intent/tweet?text=",
			      icon : "https://static.pohjoiskarjala.net/ico/twitter.png"
			  },
			  linkedin: {
				  URL: "https://www.linkedin.com/shareArticle?mini=true&url=",
				  icon : "https://static.pohjoiskarjala.net/ico/linkedin.png"
			  },
			  whatsapp: {
				  URL: "whatsapp://send?text=",
				  icon: "https://static.pohjoiskarjala.net/ico/whatsapp.png"
			  },
			  messenger: {
				  URL: "fb-messenger://share/?link=",
				  icon: "https://static.pohjoiskarjala.net/ico/messenger.png",
				  appId: "&app_id=186742706063596"
			  },
			  vk: {
				  URL: "http://vk.com/share.php?url=",
				  icon: "https://static.pohjoiskarjala.net/ico/vk.png"
			  }
		   }
		};


const resources = {
en: {
 translation: {
   "share_in": "Share in"
 }
},
fi: {
	 translation: {
	   "share_in": "Jaa"
	 }
	}
};

const StyledContainer = styled.div`
	margin-left: 3px;
	margin-right: 3px;
	display: inline-block;
	max-width: 24px;
        img {
		display: inline-block;
                max-width: 100%;
	}
`;

class ShareButton extends Component {

    constructor(props) {
        super(props);
        const languageProp = this.props.langKey;
        i18n.init({
      	  resources,
      	  lng: languageProp
      	});
    }

    render() {
        const platform = this.props.config;
        var currentURL = window.location.href;
        if(platform === "linkedin"){
        	currentURL = currentURL + "&title=" + document.title;
        } else if (platform === "messenger"){
        	currentURL = currentURL + platformData.platforms[platform].appId;
        } 
        return (
            <StyledContainer className="singleShareButtonContainer">
              <span className={platform}><a target="_blank" href={platformData.platforms[platform].URL + currentURL} aria-label={i18n.t('share_in') + " " + platform} ><img src={platformData.platforms[platform].icon} alt={platform + " icon"} /></a></span>
            </StyledContainer>
        );
    }
}

ShareButton.propTypes = {
    config: PropTypes.string,
    langKey: PropTypes.string
};

export { ShareButton };
