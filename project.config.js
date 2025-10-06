import * as Configs from '@parischap/configs';
import { merge } from 'ts-deepmerge';

export default merge(
	Configs.configOnePackageRepo({
		description: 'Provides simple utilities for testing Effect apps',
		dependencies: {},
		devDependencies: {},
		internalPeerDependencies: {},
		// Add Effect as a peerDep. Otherwise, Equal.equals from this package will call an object's .toEqual method which in turn will call Equal.equals from another package. Moreover, the StructuralRegion setting will have a different value in each Effect library.
		externalPeerDependencies: { effect: '^3.18.1' },
		examples: [],
		scripts: {},
		environment: Configs.Environment.Type.Node,
		bundled: false,
		visibility: Configs.Visibility.Type.PublicByForce,
		hasStaticFolder: false,
		hasDocGen: false,
		keywords: []
	})
);
