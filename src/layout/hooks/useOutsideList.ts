import { useEffect } from "react";

export function useOutsideHandler(ref, hanlder) {
    useEffect(() => {
        function clickOutsideList(event: Event) {

            if (ref.current && !ref.current.contains(event.target)) {
                hanlder()              
            }
        }7

        document.addEventListener("mousedown", clickOutsideList);

        return () => {
            document.removeEventListener("mousedown", clickOutsideList);
        };
    }, [ref, hanlder]);
}