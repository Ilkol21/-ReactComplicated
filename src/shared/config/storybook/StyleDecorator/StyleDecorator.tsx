import { StoryFn } from '@storybook/react'; // Импортируем StoryFn вместо Story

export const StyleDecorator = (StoryComponent: StoryFn) => (
    <div className="app">
        <StoryComponent />
        </div>
);
