import * as Configs from '@parischap/configs';
import { basename } from 'path';

export default Configs.configOnePackageRepo({
  packageName: basename(import.meta.dirname),
  description: 'Package containing test utilities',
  environment: 'Node',
  packageType: 'Library',
  isPublished: false,
  hasDocGen: false,
});
