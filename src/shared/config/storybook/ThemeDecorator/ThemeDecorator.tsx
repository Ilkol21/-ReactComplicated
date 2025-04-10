import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => {
    const DecoratedComponent = (StoryComponent: StoryFn) => (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );

    // Установите displayName для компонента
    DecoratedComponent.displayName = 'ThemeDecorator';

    return DecoratedComponent;
};
