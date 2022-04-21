import executor from './executor';
import { start } from 'live-server';
import { onSigInt } from './signal';

// Mocking
jest.mock('live-server');
jest.mock('./abort');

(start as jest.Mock).mockReturnValue(null);
(onSigInt as jest.Mock).mockReturnValue(Promise.resolve());

describe('Build Executor', () => {
  it('can run', async () => {
    // Start Executor
    const output = await executor({
      folder: ".",
      port: 8080
    });

    // Check for expected results
    expect(output.success).toBe(true);
    expect(start).toHaveBeenCalled();
    expect(onSigInt).toHaveBeenCalled();
  });
});
