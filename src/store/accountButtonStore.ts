import {create} from 'zustand';
type ABState = {
    buttonNum: number;
    setButtonNum: (newNum: number) => void;
};
export const useAccountButtonStore = create<ABState>()((set) => ({
    buttonNum: 0,
    setButtonNum: (newNum: number) => set({buttonNum: newNum}),
}));