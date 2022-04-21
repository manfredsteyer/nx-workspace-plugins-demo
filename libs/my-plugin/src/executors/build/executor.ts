import { BuildExecutorSchema } from './schema';
import { start } from 'live-server';

export default async function runExecutor(options: BuildExecutorSchema) {
  console.log('Starting live-server', options);

  start({
    root: options.folder,
    port: options.port
  });

  const abortPromise = new Promise<void>((resolve) => {
    process.on('SIGINT', () => resolve());
  });

  await abortPromise;

  return {
    success: true,
  };
}
