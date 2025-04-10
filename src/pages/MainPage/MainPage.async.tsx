import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-expect-error: TypeScript не может типизировать промис в данной строке
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
