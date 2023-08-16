export const secondsToTime = (time: number) => {
  const minutes: string = `${Math.floor(time / 60)}`.padStart(2, "0");
  const seconds: string = `${time - minutes * 60}`.padStart(2, "0");
  return `${minutes}:${seconds}`;
};
