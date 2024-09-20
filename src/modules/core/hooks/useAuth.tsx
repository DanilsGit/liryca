import { create } from "zustand";

type Store = {
  user: any;
  login: (user: any) => void;
  logout: () => void;
  register: (user: any) => void;
};

export const useAuth = create<Store>()((set) => ({
  user: {
    id: 1,
    name: "Gato_feliz0142",
    email: "johndoe@gmail.com",
    banner:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6699f2df-96dc-44e2-ad22-cd1ca9ab29ca/dfjjzid-6ef90540-fd47-41cf-a836-16425a4545b6.png/v1/fill/w_1600,h_676,q_80,strp/cat_banner_by_wholemleko_dfjjzid-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njc2IiwicGF0aCI6IlwvZlwvNjY5OWYyZGYtOTZkYy00NGUyLWFkMjItY2QxY2E5YWIyOWNhXC9kZmpqemlkLTZlZjkwNTQwLWZkNDctNDFjZi1hODM2LTE2NDI1YTQ1NDViNi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._QbzyJs9gpb516G_oAbBiFtQCBOpZ5Tm-KLS-dOc51s",
    icon: "https://img-9gag-fun.9cache.com/photo/aGyDPdn_460s.jpg",
    followers: 100,
    following: 200,
    playlist: 10,
    liked: 3,
    role: "listener",
    token: "",
  },
  login: (user: any) => {
    // Call the login API
    set({ user });
  },
  logout: () => {
    set({ user: null });
  },
  register: (user: any) => {
    // Call the register API
    set({ user });
  },
}));
