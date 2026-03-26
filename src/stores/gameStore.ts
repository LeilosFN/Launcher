import { create } from 'zustand';

export type LaunchStatus = 'IDLE' | 'LAUNCHING' | 'RUNNING' | 'ERROR';

interface GameState {
    status: LaunchStatus;
    setStatus: (status: LaunchStatus) => void;
    errorMsg: string | null;
    setErrorMsg: (msg: string | null) => void;
}

export const useGameStore = create<GameState>((set) => ({
    status: 'IDLE',
    setStatus: (status) => set({ status }),
    errorMsg: null,
    setErrorMsg: (msg) => set({ errorMsg: msg }),
}));
