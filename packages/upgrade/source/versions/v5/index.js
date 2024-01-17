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
	'afterswitchorganizationurl',
	'appearance-organizationpreview-organizationswitcher',
	'useorganization-invitationlist',
	'useorganization-membershiplist',
	'useorganizations',
	'userprofile-prop',
	'organizationprofile-settings',
	'userprofile-security',
	'mfa-dropdown',
	'connected-accounts-dropdown',
	'userbuttonpopoveractionbuttontext-removed',
	'userbuttontrigger-userbuttonbox-invert',
	'organizationswitcherpopoveractionbuttontext-removed',
	'card-changes',
	'alternativemethods-backlink',
	'button-to-organizationlistcreateorganizationactionbutton',
	'remove-socialbuttonsblockbuttonarrow',
	'remove-identitypreview-avatar',
	'withsession-removed',
	'withclerk-removed',
	'withuser-removed',
	'withclerk-hof-removed',
	'withsession-hof-removed',
	'withuser-hof-removed',
];

export default {
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
		'organizationprofile-settings',
		'userprofile-security',
		'mfa-dropdown',
		'connected-accounts-dropdown',
		'userbuttonpopoveractionbuttontext-removed',
		'userbuttontrigger-userbuttonbox-invert',
		'organizationswitcherpopoveractionbuttontext-removed',
		'card-changes',
		'alternativemethods-backlink',
		'button-to-organizationlistcreateorganizationactionbutton',
		'remove-socialbuttonsblockbuttonarrow',
		'remove-identitypreview-avatar',
		'multisessionappsupport-import-change',
		'auth-import-change',
		'currentuser-import-change',
		'authmiddleware-import-change',
		'buildclerkprops-import-change',
		'verifytoken-import-change',
		'verifyjwt-import-change',
		'decodejwt-import-change',
		'signjwt-import-change',
		'constants-import-change',
		'createauthenticaterequest-import-change',
		'createisomorphicrequest-import-change',
		'clerk-import-change',
		'isclerkapiresponserror-import-change',
		'isemaillinkerror-import-change',
		'isknownerror-import-change',
		'ismetamaskerror-import-change',
		'withsession-removed',
		'withclerk-removed',
		'withuser-removed',
		'withclerk-hof-removed',
		'withsession-hof-removed',
		'withuser-hof-removed',
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
	remix: load('remix', [
		'clerkerrorboundary-removed',
		'createclerkclient-apikey',
		'rootauthloader-apikey',
		'getauth-apikey',
		'clerkprovider-frontendapi',
		'rootauthloader-frontendapi',
		'frontend-api-to-publishable-key',
		'api-key-to-secret-key',
		'ismagiclinkerror',
		'magiclinkerrorcode',
		'usemagiclink',
		'setsession',
	]),
	expo: load('expo', [
		'apikey-to-publishable-key',
		'ismagiclinkerror',
		'usemagiclink',
		'magiclinkerrorcode',
		'setsession',
		'organizationprofile-settings',
		'userprofile-security',
		'mfa-dropdown',
		'connected-accounts-dropdown',
		'userbuttonpopoveractionbuttontext-removed',
		'userbuttontrigger-userbuttonbox-invert',
		'organizationswitcherpopoveractionbuttontext-removed',
		'card-changes',
		'alternativemethods-backlink',
		'button-to-organizationlistcreateorganizationactionbutton',
		'remove-socialbuttonsblockbuttonarrow',
		'remove-identitypreview-avatar',
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
		'setsession',
		'user-update-password', // shared w/ all
		'experimental-canusecaptcha',
		'experimental-captchaurl',
		'experimental-captchasitekey',
		'getorganizationmemberships',
		'lastorganizationinvitation-member',
		'unstable-invitationupdate',
		'unstable-membershipupdate',
		'organization-create-string', // maybe shared with all?
		'organization-getpendinginvitations', // maybe shared with all?
		'user-createexternalaccount-redirecturl', // maybe shared with all?
		'signup-attemptweb3walletverification-generatedsignature',
		'redirecttohome',
		'organizationprofile-settings',
		'userprofile-security',
		'mfa-dropdown',
		'connected-accounts-dropdown',
		'userbuttonpopoveractionbuttontext-removed',
		'userbuttontrigger-userbuttonbox-invert',
		'organizationswitcherpopoveractionbuttontext-removed',
		'card-changes',
		'alternativemethods-backlink',
		'button-to-organizationlistcreateorganizationactionbutton',
		'remove-socialbuttonsblockbuttonarrow',
		'remove-identitypreview-avatar',
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
	chromeExtension: load('chromeExtension', ['clerkprovider-tokencache']),
	localizations: [],
	types: [],
	backend: [],
	// backend: load('backend', [
	//  'verifyjwt-import-path-move'
	//  'decodejwt-import-path-move'
	//  'signjwt-import-path-move'
	//  'constants-import-path-move'
	//  'redirect-import-path-move'
	//  'createauthenticaterequest-import-path-move'
	//  'createisomorphicrequest-import-path-move'
	// 	'createclerkclient-frontendapi',
	//  'authenticaterequest-params-change',
	// 	'clerk-import',
	// 	'externalaccount-picture',
	// 	'externalaccountjson-avatarurl',
	// 	'organization-logourl',
	// 	'organizationjson-logourl',
	// 	'user-profileimageurl',
	// 	'userjson-profileimageurl',
	// 	'organizationmembershippublicuserdata-profileimageurl',
	// 	'organizationmembershippublicuserdatajson-profileimageurl',
	// 	'clockskewinseconds',
	// ]),
};

function dedupeMerge(arr1, arr2) {
	return [...new Set(arr1.concat(arr2))];
}
