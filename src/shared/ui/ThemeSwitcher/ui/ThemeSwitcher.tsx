import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-dark.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();


    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon  /> : <LightIcon />}
        </Button>
    );
};

