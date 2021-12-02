import React, { useState } from "react";
import Link from 'next/link';

import { Navbar } from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    }

    return (
        <Navbar>
            <div>
                <small>
                    <span>WebQuest</span>
                    <span>Estatística</span>
                </small>

                {collapsed
                    ? <FaBars
                        onClick={() => toggleCollapse()}
                    />
                    : <FaTimes
                        onClick={() => toggleCollapse()}
                    />}
            </div>

            {!collapsed && <div>
                <Link href="/">Home</Link>
                <Link href="/statistic">Estatística</Link>
                <Link href="/probability">Probabilidade</Link>
                <Link href="/about">Sobre</Link>
            </div>}
        </Navbar>
    )
}

export default Menu;