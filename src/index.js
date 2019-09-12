import React from 'react';
import ReactDOM from 'react-dom';
import SocialShare from './Widgets/SocialShare';

export function renderSocialShare(elementId, config, lang) {
	const application = <SocialShare config={config} lang={lang}/>;
	ReactDOM.render(application, document.getElementById(elementId));
}
