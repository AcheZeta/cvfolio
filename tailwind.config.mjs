/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans:     ['Forum', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif:    ['Cormorant Garamond', 'Georgia', 'serif'],
        editorial:['Cormorant Garamond', 'Georgia', 'serif'],
        ui:       ['Forum', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          'midnight-violet': '#250e2c',
          'soft-periwinkle': '#837ab6',
          'space-indigo':    '#3e3a5d',
          'muted-olive':     '#b0c49c',
          'sweet-peony':     '#d183a9',
          'tea-green':       '#d1efbd',
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            fontFamily: `'Forum', ui-sans-serif, system-ui, sans-serif`,
            '--tw-prose-body':            'var(--color-foreground)',
            '--tw-prose-headings':        'var(--color-headings)',
            '--tw-prose-bullets':         '#837ab6',
            '--tw-prose-links':           '#837ab6',
            '--tw-prose-bold':            'var(--color-headings)',
            '--tw-prose-invert-body':     'var(--color-foreground)',
            '--tw-prose-invert-headings': 'var(--color-headings)',
            '--tw-prose-invert-bullets':  '#837ab6',
          },
        },
      }),
    },
  },
};
