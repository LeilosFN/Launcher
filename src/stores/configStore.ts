import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ConfigState {
    fortnitePath: string;
    backendUrl: string;
    hostUrl: string;
    setFortnitePath: (path: string) => void;
    setBackendUrl: (url: string) => void;
    setHostUrl: (url: string) => void;
}

export const useConfigStore = create<ConfigState>()(
    persist(
        (set) => ({
            fortnitePath: '',
            backendUrl: 'https://launcher.leilos.qzz.io',
            hostUrl: 'http://launcher.leilos.qzz.io:7777',
            setFortnitePath: (path) => set({ fortnitePath: path }),
            setBackendUrl: (url) => set({ backendUrl: url }),
            setHostUrl: (url) => set({ hostUrl: url }),
        }),
        {
            name: 'leilos-config',
            storage: createJSONStorage(() => localStorage),
            version: 15, // Bumped version to force migration
            migrate: (persistedState: any) => {
                persistedState.backendUrl = 'https://launcher.leilos.qzz.io';
                if (!persistedState.hostUrl) {
                    persistedState.hostUrl = 'http://launcher.leilos.qzz.io:7777';
                }
                return persistedState;
            },
        }
    )
);
