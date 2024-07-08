import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Game {
    id: number;
    title: string;
    thumbnail: Object;
    screenshots: Object[];
    rating: number;
    author: Object;
    description: string;
    genre: String[];
}

interface GamesApiResponse {
    quotes: Game[];
    total: number;
    skip: number;
    limit: number;
  }

// const initialState: GamesSlice = {
//     id: 1,
//     title: "Game 1",
//     thumbnail: {},
//     screenshots: [{}, {}],
//     rating: 4,
//     author: { name: "Studio 1" },
//     description: "This is the default game.",
//     genre: ['Obby', 'Action', 'Adventure'],
// }

export const gameSlice = createAppSlice({
    name: "game",
    // initialState,
    reducers: (create) => ({

    }),
    selectors: {

    }
});

