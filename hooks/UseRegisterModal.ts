
import { create } from 'zustand';

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useRegisterModal;



// import { create } from 'zustand';

// interface RegisterModalStore {
//   isOpen: boolean;}
//   type RegisterModalActions={
//   onOpen: () => void;
//   onClose: () => void;
// }

// const useRegisterModal = create<RegisterModalStore &  RegisterModalActions>((set) => ({
//   isOpen: false,
//   onOpen: () => set({ isOpen: true }),
//   onClose: () => set({ isOpen: false })
// }));


// export default useRegisterModal;