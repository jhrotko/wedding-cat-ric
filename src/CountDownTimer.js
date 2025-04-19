import { useEffect, useState } from "react";

const formatTime = (time) => {
    const days = Math.floor(time / (24 * 60 * 60)); // Calculate days
    const hours = Math.floor((time % (24 * 60 * 60)) / 3600); // Calculate hours
    const minutes = Math.floor((time % 3600) / 60); // Calculate minutes
    const seconds = time % 60; // Calculate seconds
  
    return `${days} DIAS ${hours < 10 ? '0' : ''}${hours} HORAS ${minutes < 10 ? '0' : ''}${minutes} MINUTOS ${seconds < 10 ? '0' : ''}${seconds} SEGUNDOS`;
  };

const CountDownTimer = () => {
    const targetDate = new Date('2025-10-04T00:00:00'); // Set your target date here

    const [timeLeft, setTimeLeft] = useState(0); // 10 minutes = 600 seconds
    useEffect(() => {    
        let interval = setInterval(() => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime(); // Difference in milliseconds

        if (difference <= 0) {
            clearInterval(interval); // Stop the timer when target date is reached
            setTimeLeft(0); // Optionally, reset timeLeft to 0
          } else {
            setTimeLeft(Math.floor(difference / 1000)); // Convert milliseconds to seconds
          }
        }, 1000); // Update every second
    
        return () => {
          clearInterval(interval); // Cleanup on component unmount or when timer stops
        };
      }, [timeLeft]);
    return <div>
        <h2>Contagem decrescente</h2>
        <p>{formatTime(timeLeft)}</p>
    </div>
}

export default CountDownTimer