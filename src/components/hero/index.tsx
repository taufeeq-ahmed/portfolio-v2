import React from 'react'
import { BackgroundLines } from '../ui/background-lines'
import { TextHoverEffect } from '../ui/text-hover-effect'

type Props = {}

function Hero({ }: Props) {
    return (
        <div className="h-[40rem] flex flex-col items-center justify-center">
        <TextHoverEffect text="Taufeeq" />

      </div>
    )
}

export default Hero