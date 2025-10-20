'use client'
import { useState } from 'react';
import Image from 'next/image'
import LogoEconverse from '../../../public/LogoEconverse.svg'
import './style.scss';
import { IconArrowLeft } from '../Icons/IconArrowLeft';
import { IconArrowRight } from '../Icons/IconArrowRight';

export function Brands() {
    const [countSlide, setCountSlide] = useState<number>(0);

    function NextSlide() {
        if (countSlide === 5) {
            return setCountSlide(0);
        }

        setCountSlide(countSlide + 1);
    }

    function PrevSlide() {
        if (countSlide <= 0) {
            return setCountSlide(0);
        }

        setCountSlide(countSlide - 1);
    }
    return (
        <section className="brands">
            <div className="container-center">
                <h2>Navegue por marcas</h2>


                <div className="container-slide-brand">
                    <div className="slide-cards-buttons-brand">
                        {
                            countSlide > 0 &&
                            <button
                                className='left'
                                onClick={() => PrevSlide()}
                            >
                                <i><IconArrowLeft /></i>
                            </button>
                        }

                        <button
                            className='right'
                            onClick={() => NextSlide()}
                        >
                            <i><IconArrowRight /></i>
                        </button>
                    </div>
                    <div className="container-slide-cards-brand"
                        style={{
                            left: `-${countSlide * 261}px`,
                            width: `calc(261px * 10)`
                        }}
                    >
                        {
                            Array.from(Array(10), (item, key) => (
                                <article key={key}>
                                    <Image
                                        src={LogoEconverse}
                                        width={139}
                                        height={41}
                                        alt='Logo Econverse'
                                    />
                                </article>
                            )
                            )}
                    </div>
                </div>
            </div>
        </section>
    )
}

