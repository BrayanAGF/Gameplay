import { createSlice } from '@reduxjs/toolkit';

export const PrincipalSlice = createSlice({
    name: 'Principal',
    initialState: {
        MenuExpandido: false,
        ReproductorExpandido: false,
        Reproduciendo: {},
        ProgresoReproduccion: {
            "Avance": 0,
            "Duracion": 0,
            "Deslizando": false
        }
    },
    reducers: {
        cambiarMenu: (state) => {
            state.MenuExpandido = !state.MenuExpandido;
        },
        cargarCancion: (state, { payload }) => {
            state.Reproduciendo = payload;
        },
        cambiarReproductorExpandido: (state, {payload}) => {
            state.ReproductorExpandido = payload;
        },
        establecerAvance: (state, {payload}) => {
            state.ProgresoReproduccion = {...state.ProgresoReproduccion, "Avance": payload};
        },
        establecerDuracion: (state, {payload}) => {
            state.ProgresoReproduccion = {...state.ProgresoReproduccion, "Duracion": payload};
        },
        establecerDeslizando: (state, {payload}) => {
            state.ProgresoReproduccion = {...state.ProgresoReproduccion, "Deslizando": payload};
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    cambiarMenu, 
    cargarCancion, 
    cambiarReproductorExpandido,
    establecerAvance,
    establecerDeslizando,
    establecerDuracion
} = PrincipalSlice.actions;