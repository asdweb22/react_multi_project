import React, { useMemo, useState } from 'react'

export default function UseMemo() {

    const [add, setAdd] = useState(1);
    const [sub, setSub] = useState(100);

    const multiply = useMemo(() => {
        console.log("*************************");
        return add * 10;
    }, [add]);

    return (
        <div>
            <h2>Use Memo Example</h2>
            {multiply}
            <br />
            <button onClick={() => setAdd(add + 1)}>Add</button>
            <span>{add}</span>
            <br />
            <button onClick={() => setSub(sub - 1)}>Sub</button>
            <span>{sub}</span>
        </div>
    )
}
