import {
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';

import {
  libraryGenerator
} from '@nrwl/angular/generators';

import * as path from 'path';
import { MyPluginGeneratorSchema } from './schema';

export default async function (tree: Tree, options: MyPluginGeneratorSchema) {

  tree.write('readme.txt', 'Manfres was here!');

  await libraryGenerator(tree, options);

  const libsDir = getWorkspaceLayout(tree).libsDir;
  const projectRoot = `${libsDir}/${options.name}`;
  
  const templateOptions = {
    projectName: options.name,
    template: ''
  };

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    projectRoot,
    templateOptions
  );

  await formatFiles(tree);
}
