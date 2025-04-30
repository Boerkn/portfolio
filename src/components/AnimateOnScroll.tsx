'use client';

import {motion} from 'framer-motion';
import {ReactNode} from 'react';

type Props = {
    children: ReactNode;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
};

export function AnimateOnScroll({
                                    children,
                                    className = '',
                                    direction = 'up',
                                    delay = 0
                                }: Props) {
    const getDirectionAnimation = () => {
        switch (direction) {
            case 'up':
                return {y: 20};
            case 'down':
                return {y: -20};
            case 'left':
                return {x: 20};
            case 'right':
                return {x: -20};
        }
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...getDirectionAnimation()
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{once: true}}
            transition={{
                duration: 0.5,
                delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}