<?php

if (! function_exists('__asset')) {
    /**
     * Generate an asset path for the application.
     *
     * @param  string  $path
     * @param  bool    $secure
     * @return string
     */
    function __asset($name, $secure = null)
    {
        $manifest = json_decode(file_get_contents(base_path() . "/public/manifest.json"), true);

        $secure = request()->secure();

        return app('url')->asset($manifest[$name], $secure);
    }
}
