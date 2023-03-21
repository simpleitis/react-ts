import { useRef, useEffect } from 'react';

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    //-----------------------or--------------------
    // const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement)

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
};
