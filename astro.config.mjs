// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Manual de Identidad Institucional UNMDP',
            customCss: ['./src/styles/custom.css'],
            sidebar: [
                {
                    label: 'Identidad Visual',
                    items: [
                        { label: 'Colores Institucionales', link: '/identidad/colores/' }
                    ]
                },
                {
                    label: 'Identidad Visual',
                    items: [
                        { label: 'Nuestra Marca', slug: 'identidad-visual/nuestra-marca' },
                        { label: 'Escudo', slug: 'identidad-visual/escudo' },
                        { label: 'Tipografías', slug: 'identidad-visual/tipografias' },
                        { label: 'Colores', slug: 'identidad-visual/colores' }
                    ]
                },
                {
                    label: 'UX y Tono',
                    items: [
                        { label: 'Voz de Marca', slug: 'ux-y-tono/voz-de-marca' },
                        { label: 'Redacción', slug: 'ux-y-tono/redaccion' }
                    ]
                },
                {
                    label: 'Normas de Construcción',
                    items: [
                        { label: 'Proporciones', slug: 'normas-de-construccion/proporciones' },
                        { label: 'Tamaños', slug: 'normas-de-construccion/tamanos' },
                        { label: 'Usos Incorrectos', slug: 'normas-de-construccion/usos-incorrectos' }
                    ]
                },
                {
                    label: 'Aplicaciones Impresas',
                    items: [
                        { label: 'Papelería', slug: 'aplicaciones-impresas/papeleria' },
                        { label: 'Folletos', slug: 'aplicaciones-impresas/folletos' },
                        { label: 'Diplomas', slug: 'aplicaciones-impresas/diplomas' }
                    ]
                },
                {
                    label: 'Gráfica Digital',
                    items: [
                        { label: 'Web', slug: 'grafica-digital/web' },
                        { label: 'Redes Sociales', slug: 'grafica-digital/redes-sociales' },
                        { label: 'Presentaciones', slug: 'grafica-digital/presentaciones' }
                    ]
                },
                {
                    label: 'Entorno y Merchandising',
                    items: [
                        { label: 'Señalética', slug: 'entorno-y-merchandising/senaletica' },
                        { label: 'Parque Móvil', slug: 'entorno-y-merchandising/parque-movil' },
                        { label: 'Indumentaria', slug: 'entorno-y-merchandising/indumentaria' }
                    ]
                },
                {
                    label: 'Pautas Institucionales',
                    items: [
                        { label: 'Perspectiva de Género', slug: 'pautas-institucionales/perspectiva-de-genero' },
                        { label: 'Solicitudes', slug: 'pautas-institucionales/solicitudes' }
                    ]
                }
            ],
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});