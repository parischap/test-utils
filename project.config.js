import * as Configs from '@parischap/configs';

export default Configs.configOnePackageRepo({
	description: 'Your description',
	dependencies: { effect: '^3.18.1' },
	devDependencies: {},
	internalPeerDependencies: {},
	externalPeerDependencies: {},
	examples: [],
	scripts: {},
	environment: Configs.Environment.Type.Node,
	bundled: true,
	visibility: Configs.Visibility.Type.Public,
	hasStaticFolder: false,
	hasDocGen: false,
	keywords: []
});
