import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.1) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const safeThreshold =
            typeof threshold === "number" && !isNaN(threshold)
                ? threshold
                : 0.1;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            {
                threshold: safeThreshold,
            }
        );

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };

    }, [threshold]);

    return [ref, visible];
}