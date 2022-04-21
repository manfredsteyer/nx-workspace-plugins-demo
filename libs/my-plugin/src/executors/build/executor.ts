import { BuildExecutorSchema } from './schema';
import { start } from 'live-server';
import { onSigInt } from './signal';

export default async function runExecutor(options: BuildExecutorSchema) {
  console.log('Starting live-server', options);

  start({
    root: options.folder,
    port: options.port
  });

  await onSigInt();

  return {
    success: true,
  };
}
