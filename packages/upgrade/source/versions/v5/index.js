import createLoader from '../../util/load-change.js';

const load = createLoader({
	version: '5',
	baseUrl: 'https://clerk.com/docs/upgrade-guides/v5',
});

const reactChangesList = [
	'magiclinkerrorcode',
	'usemagiclink',
	'ismagiclinkerror',
	'magiclinkerror',
	'handlemagiclinkverification',
	'clerkprovider-frontendapi',
	'setsession',
	'navigate-to-routerpush-routerreplace',
];

export const matchers = {
	nextjs: load('next', [
		'api-key-to-secret-key',
		'frontend-api-to-publishable-key',
		'with-clerk-middleware-removed',
		'auth-middleware-deprecated',
		'clerk-js-version-next-public',
		'authmiddleware-apikey',
		'authmiddleware-frontendapi',
		'createclerkclient-apikey',
		'createclerkclient-frontendapi',
		'getauth-apikey',
		'clerkprovider-frontendapi',
		'import-nextjs-app-beta',
		'import-nextjs-ssr',
		'import-nextjs-edge-middleware',
		'import-nextjs-edge-middlewarefiles',
		'import-api-url',
		'import-api-version',
		'import-clerk-js-url',
		'import-clerk-js-version',
		'import-domain',
		'import-is-satellite',
		'import-proxy-url',
		'import-publishable-key',
		'import-secret-key',
		'import-sign-in-url',
		'import-sign-up-url',
		'import-nextjs-api',
		'api-url-value-change',
		'ismagiclinkerror',
		'usemagiclink',
		'magiclinkerrorcode',
		'setsession',
	]),
	// since we export clerk-react at the top level from the gatsby plugin
	// if you're using gatsby, we also need to scan for the react changes
	gatsby: load(
		'gatsby',
		dedupeMerge(reactChangesList, [
			'api-key-to-secret-key',
			'createclerkclient-apikey',
			'apikey-to-publishable-key',
			'createclerkclient-frontendapi',
			'ismagiclinkerror',
			'usemagiclink',
			'magiclinkerrorcode',
			'setsession',
			'api-url-value-change',
			'withserverauth-return-type',
		]),
	),
	expo: load('expo', [
		'apikey-to-publishable-key',
		'ismagiclinkerror',
		'usemagiclink',
		'magiclinkerrorcode',
		'setsession',
	]),
	fastify: load('fastify', [
		'api-key-to-secret-key',
		'api-url-value-change',
		'frontend-api-to-publishable-key',
		'createclerkclient-apikey',
		'createclerkclient-frontendapi',
		'clerkplugin-frontendapi',
	]),
	node: load('node', [
		'package-rename',
		'api-key-to-secret-key',
		'api-url-value-change',
		'frontend-api-to-publishable-key',
		'clerkexpressrequireauth-apikey',
		'clerkexpresswithauth-apikey',
		'createclerkclient-apikey',
		'createclerkexpressrequireauth-apikey',
		'createclerkexpresswithauth-apikey',
		'createclerkclient-frontendapi',
		'createclerkexpressrequireauth-frontendapi',
		'clerkexpressrequireauth-frontendapi',
		'createclerkexpresswithauth-frontendapi',
		'clerkexpresswithauth-frontendapi',
		'setclerkapikey',
		'setclerkapiversion',
		'setclerkhttpoptions',
		'setclerkserverapiurl',
		'cjs-esm-instance',
	]),
	react: load('react', reactChangesList),
	js: load('js', [
		'magiclinkerror',
		'ismagiclinkerror',
		'magiclinkerrorcode',
		'usemagiclink',
		'handlemagiclinkverification',
		'external-account-avatarurl', // shared w/ all
		'organization-logourl', // shared w/ all
		'user-orgpublicdata-profileimageurl', // shared w/ all
		'useorganizations',
		'userprofile-prop',
		'setsession',
		'user-update-password', // shared w/ all
		'afterswitchorganizationurl', // shared w/ all
		'experimental-canusecaptcha',
		'experimental-captchaurl',
		'experimental-captchasitekey',
		'getorganizationmemberships',
		'lastorganizationinvitation-member',
		'unstable-invitationupdate',
		'unstable-membershipupdate',
		'organization-create-string', // maybe shared with all?
		'organization-getpendinginvitations', // maybe shared with all?
		'useorganization-invitationlist', // maybe shared with all?
		'useorganization-membershiplist', // maybe shared with all?
		'user-createexternalaccount-redirecturl', // maybe shared with all?
		'signup-attemptweb3walletverification-generatedsignature',
		'appearance-organizationpreview-organizationswitcher', // shared w/ all
		'redirecttohome',
	]),
	shared: load('shared', [
		'magiclinkerror',
		'ismagiclinkerror',
		'magiclinkerrorcode',
		'usemagiclink',
		'buildrequesturl',
		'organizationcontext',
		'useorganizationlist-organizationlist', // shared outside this pkg?
	]),
	backend: load('backend', [
		'createclerkclient-frontendapi',
		'clerk-import',
		'externalaccount-picture',
		'externalaccountjson-avatarurl',
		'organization-logourl',
		'organizationjson-logourl',
		'user-profileimageurl',
		'userjson-profileimageurl',
		'organizationmembershippublicuserdata-profileimageurl',
		'organizationmembershippublicuserdatajson-profileimageurl',
		'clockskewinseconds',
	]),
};

function dedupeMerge(arr1, arr2) {
	return [...new Set(arr1.concat(arr2))];
}
