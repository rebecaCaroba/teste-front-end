'use client'
import { useState } from 'react';
import Image from 'next/image'
import LogoEconverse from '../../../../public/LogoEconverse.svg'
import { IconSearch } from '@/components/Icons/IconSearch'
import { IconBox } from '@/components/Icons/IconBox'
import { IconFavorites } from '@/components/Icons/IconFavorites'
import { IconUserCircle } from '@/components/Icons/IconUserCircle'
import { IconShoppingCart } from '@/components/Icons/IconShoppingCart'
import { HeaderResponsive } from '../Responsive';
import { IoMdMenu } from "react-icons/io";
import './style.scss';

export function Center() {
    const [isMenuResponsive, setIsMenuResponsive] = useState<boolean>(false);

    function ToggleMenuResponsive() {
        setIsMenuResponsive(!isMenuResponsive);
    }
    return (
        <div className='center'>
            <div className="container-header-center">
                <div className="container-header-left-content">
                    <Image
                        src={LogoEconverse}
                        width={139}
                        height={41}
                        alt='Logo Econverse'
                    />
                </div>

                <form className='container-header-center-content'>
                    <input type="text" placeholder="O que você está buscando?" />
                    <button>
                        <i><IconSearch /></i>
                    </button>
                </form>

                <div className="container-header-right-content ">
                    <div className="buttons-right-content">
                        <button><i><IconBox /></i></button>
                        <button><i><IconFavorites /></i></button>
                        <button><i><IconUserCircle /></i></button>
                        <button><i><IconShoppingCart /></i></button>
                    </div>
                </div>
                <div className="container-header-responsive">
                    <button onClick={
                        () => ToggleMenuResponsive()}
                    >
                       <i><IoMdMenu size={24}/></i>
                    </button>

                    <HeaderResponsive
                        ToggleMenuResponsive={ToggleMenuResponsive}
                        isMenuResponsive={isMenuResponsive}
                    />
                </div>
            </div>
        </div>
    )
}