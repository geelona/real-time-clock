import React, { useState, useEffect } from 'react';

function Clock() {
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [second, setSecond] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setHour(now.getHours());
      setMinute(now.getMinutes());
      setSecond(now.getSeconds());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p>{hour}:{minute}:{second}</p>
    </>
  );
}

export default Clock;