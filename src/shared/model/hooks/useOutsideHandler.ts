import { useEffect } from "react";

interface OutsideHandlerData {
    ref: { current: HTMLDivElement | null }
    outsideHandler: () => void
}

export function useOutsideHandler({ ref, outsideHandler }: OutsideHandlerData) {
    useEffect(() => {
        function clickOutsideList(event: Event) {

            if (ref.current && !ref.current.contains(event.target as Node)) {
                outsideHandler()              
            }
        }7

        document.addEventListener("mousedown", clickOutsideList);

        return () => {
            document.removeEventListener("mousedown", clickOutsideList);
        };
    }, [ref, outsideHandler]);
}