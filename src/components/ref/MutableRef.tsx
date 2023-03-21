import React, { useState, useRef, useEffect } from 'react';

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const stopTimer = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        return () => {
            stopTimer();
        };
    }, []);

    return (
        <div>
            Hooktimer - {timer}
            <button onClick={() => stopTimer()}>Stop timer</button>
        </div>
    );
};
