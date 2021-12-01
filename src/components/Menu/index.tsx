import React from "react";
import Link from 'next/link';

import { Navbar } from "./styles";

const Menu = () => {
    return (
        <Navbar>
            <small>
                <span>WebQuest</span>
                <span>Estatística</span>
            </small>
            <div>
                <Link href="/">Home</Link>
                <Link href="/statistic">Vídeos estatística</Link>
                <Link href="/probability">Vídeos probabilidade</Link>
                <Link href="/about">Sobre</Link>
            </div>
        </Navbar>
    )
}

export default Menu;