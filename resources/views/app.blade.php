<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @inertiaHead

        <script>
            (function() {
                const savedTheme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = savedTheme || systemTheme;
                const html = document.documentElement;

                if (theme === 'dark') {
                    html.classList.add('dark');
                } else {
                    html.classList.remove('dark');
                }

                const applyBodyClass = () => {
                    const body = document.body;
                    if (!body) return;
                    if (theme === 'dark') {
                        body.classList.add('dark', 'bg-gray-900');
                    } else {
                        body.classList.remove('dark', 'bg-gray-900');
                    }
                };

                if (document.body) {
                    applyBodyClass();
                } else {
                    document.addEventListener('DOMContentLoaded', applyBodyClass, { once: true });
                }
            })();
        </script>
    </head>
    <body class="h-full">
        @inertia
    </body>
</html>
