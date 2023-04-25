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
    <div className='clockContainer'>
      <p>
      {hour >= 10 ? hour : '0' + hour}:
      {minute >= 10 ? minute : '0' + minute}:
      {second >= 10 ? second : '0' + second}
      </p>
    </div>
  );
}

export default Clock;