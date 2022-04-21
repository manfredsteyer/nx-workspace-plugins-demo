export function onSigInt() {
    return new Promise<void>((resolve) => {
        process.on('SIGINT', () => resolve());
    });
}