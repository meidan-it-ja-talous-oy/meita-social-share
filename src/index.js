import React from 'react';
import ReactDOM from 'react-dom';
import SocialShare from './Widgets/SocialShare';

export function renderSocialShare(elementId, config) {
	const application = <SocialShare config={config} />;
	ReactDOM.render(application, document.getElementById(elementId));
}
