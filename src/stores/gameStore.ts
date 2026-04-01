import { create } from 'zustand';

export type LaunchStatus = 'IDLE' | 'LAUNCHING' | 'RUNNING' | 'ERROR';

interface GameState {
    status: LaunchStatus;
    setStatus: (status: LaunchStatus) => void;
    splashMessage: string | null;
    setSplashMessage: (msg: string | null) => void;
    errorMsg: string | null;
    setErrorMsg: (msg: string | null) => void;
}

export const useGameStore = create<GameState>((set) => ({
    status: 'IDLE',
    setStatus: (status) => set({ status }),
    splashMessage: null,
    setSplashMessage: (msg) => set({ splashMessage: msg }),
    errorMsg: null,
    setErrorMsg: (msg) => set({ errorMsg: msg }),
}));
