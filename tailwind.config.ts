import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		transitionTimingFunction: {
			smooth: 'cubic-bezier(0.22, 1, 0.36, 1)'
		},
		/*
		 * Fluid type scale. Every step interpolates between a 400px and an
		 * 1800px viewport, so type grows continuously with the window instead
		 * of jumping at breakpoints. Line heights are unitless ratios on
		 * purpose: Tailwind's defaults are fixed rem values, which would stay
		 * put while the font size grew and progressively crush the leading.
		 */
		fontSize: {
			sm: ['clamp(0.875rem, 0.839rem + 0.143vw, 1rem)', '1.5'],
			base: ['clamp(1rem, 0.946rem + 0.214vw, 1.1875rem)', '1.6'],
			lg: ['clamp(1.125rem, 1.054rem + 0.286vw, 1.375rem)', '1.55'],
			xl: ['clamp(1.25rem, 1.143rem + 0.429vw, 1.625rem)', '1.5'],
			'2xl': ['clamp(1.5rem, 1.357rem + 0.571vw, 2rem)', '1.3'],
			'3xl': ['clamp(1.75rem, 1.5rem + 1vw, 2.625rem)', '1.2'],
			'4xl': ['clamp(2rem, 1.571rem + 1.714vw, 3.5rem)', '1.12'],
			'5xl': ['clamp(2.25rem, 1.607rem + 2.571vw, 4.5rem)', '1.08'],
			'6xl': ['clamp(2.5rem, 1.643rem + 3.429vw, 5.5rem)', '1.05'],
			'7xl': ['clamp(2.75rem, 1.679rem + 4.286vw, 6.5rem)', '1.03']
		},
		fontFamily: {
  			sans: [
  				'Geist',
  				'ui-sans-serif',
  				'system-ui',
  				'-apple-system',
  				'Segoe UI',
  				'Roboto',
  				'sans-serif'
  			],
  			serif: [
  				'ui-serif',
  				'Georgia',
  				'serif'
  			],
  			mono: [
  				'Geist Mono',
  				'ui-monospace',
  				'SFMono-Regular',
  				'Menlo',
  				'Consolas',
  				'monospace'
  			]
  		},
  		colors: {
  			/*
  			 * The ink scale as first-class colors, so opacity variants like
  			 * bg-ink-400/15 compile. The hand-written .text-ink-* utilities in
  			 * index.css predate this and keep working; classes Tailwind can
  			 * now generate natively simply stop depending on them.
  			 */
  			ink: {
  				'900': 'hsl(var(--ink-900) / <alpha-value>)',
  				'800': 'hsl(var(--ink-800) / <alpha-value>)',
  				'600': 'hsl(var(--ink-600) / <alpha-value>)',
  				'500': 'hsl(var(--ink-500) / <alpha-value>)',
  				'400': 'hsl(var(--ink-400) / <alpha-value>)'
  			},
  			link: 'hsl(var(--link) / <alpha-value>)',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'scale-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.95)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'marquee-slow': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'marquee-slow-reverse': {
  				'0%': {
  					transform: 'translateX(-50%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			'handwrite': {
  				'0%': {
  					width: '0',
  					opacity: '0'
  				},
  				'10%': {
  					opacity: '1'
  				},
  				'100%': {
  					width: '100%',
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-up': 'fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  			'fade-in': 'fade-in 0.6s ease-out forwards',
  			'scale-up': 'scale-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  			'marquee-slow': 'marquee-slow 30s linear infinite',
  			'marquee-slow-reverse': 'marquee-slow-reverse 30s linear infinite',
  			'handwrite': 'handwrite 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
  		},
  		boxShadow: {
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
