import { BuildExecutorSchema } from './schema';
import executor from './executor';

const options: BuildExecutorSchema = {
  folder: ".",
  port: 8080
};

describe('Build Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
