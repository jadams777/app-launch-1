import { useEffect } from 'react';

const AuthRedirectPage = () => {
	useEffect(() => {
		// Extract the hash part from the current URL
		const hashFragment = window.location.hash; // This includes everything after `#`
		console.log(hashFragment);

		// Construct the app link with the hash fragment
		const appLink = `chatstars://${hashFragment}`;
		window.location.href = appLink;

		// Detect platform
		const userAgent = navigator.userAgent || navigator.vendor;
		let storeUrl = '';
		console.log(userAgent);

		if (/android/i.test(userAgent)) {
			storeUrl = 'https://play.google.com/store';
		} else if (/iPad|iPhone|iPod/.test(userAgent)) {
			storeUrl = 'https://apps.apple.com/store';
		}

		// Redirect to the store if the app link fails
		setTimeout(() => {
			window.location.href = storeUrl;
		}, 3000);
	}, []);

	return <div>Redirecting...</div>;
};

export default AuthRedirectPage;
