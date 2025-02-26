import React from 'react'
import { DiMysql } from 'react-icons/di'
import { FaLaravel } from 'react-icons/fa'
import { RiBootstrapLine, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import {motion} from 'framer-motion'

const iconsVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [-10, 10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className='pb-24'>
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transmition={{duration: 1}}
                className='my-20 text-center text-4xl'
            >
                Stack Tecnológico
            </motion.h2>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transmition={{duration: 1}}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(2)}
                >
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(4)}                                    
                    className="p-4"
                >
                    <RiNodejsLine className='text-7xl text-green-400' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(6)}
                    className="p-4"
                >
                    <FaLaravel className='text-7xl text-red-400' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(6)}
                    className="p-4"
                >
                    <DiMysql className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(4)}
                    className="p-4"
                >
                    <RiTailwindCssLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(2)}
                    className="p-4"
                >
                    <RiBootstrapLine className='text-7xl text-purple-400' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies