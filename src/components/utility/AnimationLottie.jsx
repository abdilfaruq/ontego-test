"use client";

import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export default function AnimationLottie() {
    return (
      <div style={{ maxWidth: '100%', width: '100%' }}>
        <Player
            autoplay
            loop
            src={"/images/lottie/animation.json"}
            style={{ maxWidth: '100%', width: '100%' }}
        />
      </div>
    );
};
