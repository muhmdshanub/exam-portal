type TimerDisplayProps = {
    timeRemaining: number;
  };
  
  const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeRemaining }) => {
    const formatTime = (timeInSeconds: number) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
  
    return (
      <div >
        <strong> {formatTime(timeRemaining)}</strong>
      </div>
    );
  };
  
  export default TimerDisplay;
  