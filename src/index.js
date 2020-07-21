import './js/firebase/firebase-config';
import './js/header/onscroll';
import './js/header/navbar';
import './js/auth/auth-main';
import { carouselNavigate } from './js/index/carousel';
import { animateTitleAbout } from './js/about/about-text';
import { animateTitleBarbers } from './js/barbers/barbers-text';
import { videoPlayer } from './js/contact/video-player.js';
import { accountNavigation } from './js/account/account-navigation';

import './assets/css/main.css';
import './assets/scss/main.scss';

const currentPage = document.title;

switch (currentPage) {
	case 'LevelUp - Home':
		carouselNavigate();
	break;
	case 'LevelUp - About':
		animateTitleAbout();
	break;
	case 'LevelUp - Barbers':
		animateTitleBarbers();
	break;
	case 'LevelUp - Contact':
		videoPlayer();
	break;
	case 'LevelUp - Account':
		accountNavigation();
	break;
}