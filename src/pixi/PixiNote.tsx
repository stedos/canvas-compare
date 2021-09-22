import {Graphics} from "@inlet/react-pixi";
import {useCallback, useRef, useState} from "react";

//@ts-ignore
export const PixiNote = ({ x, y, size, color }) => {
    const ref = useRef(null);
    const [alpha, setAlpha] = useState(1)
    const [isDragging, setIsDragging] = useState(false);
    const [data, setData] = useState(null);
    const [localX, setLocalX] = useState(x);
    const [localY, setLocalY] = useState(y);

    const parsedColor = parseInt(color.replace(/^#/, ''), 16);

    const draw = useCallback(g => {
        g.clear();
        g.beginFill(parsedColor);
        g.drawRect(0, 0, size, size);
        g.endFill();

    }, [])

    const onDragStart = useCallback((event) => {
        setData(event.data)
        setAlpha(0.5);
        setIsDragging(true);
    }, [])

    const onDragMove = useCallback(() => {
        if (isDragging) {
            // @ts-ignore
            const newPosition = data?.getLocalPosition?.(ref.current.parent);
            setLocalX(newPosition.x)
            setLocalY(newPosition.y)
        }
    }, [data, isDragging])

    const onDragEnd = useCallback(() => {
        setData(null)
        setAlpha(1);
        setIsDragging(false);
    }, [])

    return <Graphics  ref={ref} x={localX} y={localY} draw={draw} interactive pointerdown={onDragStart} pointermove={onDragMove} pointerup={onDragEnd} pointerupoutside={onDragEnd} alpha={alpha} />
}