import React from "react";
import ThemeButton from "./ThemeButton";

const Header = () => (<>
    <header
        className={'w-full flex shadow justify-between sm:px-16 px-8 py-4 dark:bg-DarkBlue'}

    >
        <p className="text-lg font-bold text-VeryDarkBlue dark:text-White">Where in the world?</p>
        <ThemeButton />
    </header>
</>);

export default Header;