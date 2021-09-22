import {Graphics, useApp} from "@inlet/react-pixi";
import {useCallback, useRef, useState} from "react";

export const PixiNote = () => {
    const ref = useRef(null);
    const [alpha, setAlpha] = useState(1)
    const [isDragging, setIsDragging] = useState(false);
    const [data, setData] = useState(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    const draw = useCallback(g => {
        g.clear();
        g.beginFill(0xDE3249);
        g.drawRect(0, 0, 100, 100);
        g.endFill();

    }, [])

    const onDragStart = useCallback((event) => {
        console.log("onDragStart", event)
        setData(event.data)
        setAlpha(0.5);
        setIsDragging(true);
    }, [])

    const onDragMove = useCallback((event) => {
        console.log("onDragMove", ref.current)
        if (isDragging) {
            console.log("onDragMove", ref.current)
            // @ts-ignore
            const newPosition = data?.getLocalPosition?.(ref.current);
            setX(newPosition.x)
            setY(newPosition.y)
        }
    }, [data, isDragging])

    const onDragEnd = useCallback((event) => {
        setData(null)
        setAlpha(1);
        setIsDragging(false);
    }, [])

    console.log("isDragging", isDragging)
    return <Graphics  ref={ref} x={x} y={y} draw={draw} interactive pointerdown={onDragStart} pointermove={onDragMove} pointerup={onDragEnd} pointerupoutside={onDragEnd} alpha={alpha} />
}