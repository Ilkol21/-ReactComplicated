export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    src: string;
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}