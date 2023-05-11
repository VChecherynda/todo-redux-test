import { useEffect } from "react";

interface OutsideHandlerData {
    ref: { current: HTMLDivElement | null }
    outsideHandler: () => void
}

export function useOutsideHandler({ ref, outsideHandler }: OutsideHandlerData) {
    // TODO Цей эфект буде спрацьювуваит на кожен перерендер, кожного разу буде addEventListener + removeEventListener

    useEffect(() => {
        function clickOutsideList(event: Event) {

            if (ref.current && !ref.current.contains(event.target as Node)) {
                // TODO Такий спосіб працює не так як треба. Що буде якщо клікнути між айтемами (зараз там відступів нема, але..)?
                //  Або якщо форму розмістити не в контейнері зі списком задач, а десь в модалці в порталі?
                outsideHandler()
            }
        }7

        document.addEventListener("mousedown", clickOutsideList);

        return () => {
            document.removeEventListener("mousedown", clickOutsideList);
        };
    }, [ref, outsideHandler]);
}