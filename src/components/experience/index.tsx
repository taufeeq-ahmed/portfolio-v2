"use client "

import React from 'react'
import { Timeline } from '../ui/timeline';
import Image from 'next/image';
import { AnimatedCards } from '../ui/animated-cards';
import { cogoportExperienceCards, fibrExperienceCards } from '@/lib/constants';
import { CardStack } from '../ui/card-stack';

type Props = {}

function Experience({ }: Props) {
    const data = [
        {
            title: "July 2024",
            content: (
                <div>
                    <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <h2 className='text-6xl font-bold mb-4'>Fibr.ai</h2>
                        <p className='text-4xl font-semibold opacity-80'>Senior Frontend Engineer</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <ul className="list-disc pl-4 text-lg font-medium ">
                            <li className="mb-2">
                                Developed a Personalized Dashboard for controlling the A/B testing experience of the product and helped
                                Fibr.Ai scale to a revenue of $80K per month
                            </li>
                            <li className="mb-2">
                                Created a components library for standardizing the UI across the product and enforcing consistent visual
                                experience in Typescript
                            </li>
                        </ul>
                        <div className="mt-8 flex items-start justify-center w-full z-0 relative min-h-[60vh] ">
                            <CardStack items={fibrExperienceCards} />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "March 2023",
            content: (
                <div>
                    <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <h2 className='text-6xl font-bold mb-4'>Cogoport</h2>
                        <p className='text-4xl font-semibold opacity-80'>SDE-1 (Associate Software Engineer)</p>
                    </div>
                    <div className="flex gap-4">
                        <AnimatedCards cards={cogoportExperienceCards} />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className='experience'>
            <Timeline data={data} />
        </div>
    )
}

export default Experience