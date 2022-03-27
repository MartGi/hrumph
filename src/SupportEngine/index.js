import React, { useRef, useEffect, useState } from "react";

import Setupscreen from './Setupscreen'
import SupportWindow from './SupportWindow'

const SupportEngine = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])

    return (
        <div ref={ref} >
            <SupportWindow
                visible={visible}
            />

            <Setupscreen id='getgot'
                onClick={() => setVisible(true) }
                style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        zIndex: '0'}}
            />
        </div>
    )
}

export default SupportEngine;

