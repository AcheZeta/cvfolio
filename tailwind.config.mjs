/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Neulis Alt', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        editorial: ['Neulis Alt', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        ui: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          'black-pearl': '#08070B',
          'lavender-violet': '#E6E1FF',
          'charcoal-violet': '#37324B',
          'soft-periwinkle': '#837ab6',
          'muted-olive': '#b0c49c',
          'sweet-peony': '#d183a9',
          'tea-green': '#d1efbd',
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            fontFamily: `'Poppins', ui-sans-serif, system-ui, sans-serif`,
            '--tw-prose-body': 'var(--color-foreground)',
            '--tw-prose-headings': 'var(--color-headings)',
            '--tw-prose-bullets': '#837ab6',
            '--tw-prose-links': '#837ab6',
            '--tw-prose-bold': 'var(--color-headings)',
            '--tw-prose-invert-body': 'var(--color-foreground)',
            '--tw-prose-invert-headings': 'var(--color-headings)',
            '--tw-prose-invert-bullets': '#837ab6',
            '--tw-prose-invert-bold': 'var(--color-headings)',
          },
        },
      }),
    },
  },
};
