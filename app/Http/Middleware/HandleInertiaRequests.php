<?php

namespace App\Http\Middleware;

use App\Helpers\MenuHelper;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'menuGroups' => $this->withMenuIcons(MenuHelper::getMenuGroups()),
        ]);
    }

    /**
     * Attach SVG markup for sidebar icons.
     *
     * @param  array<int, array<string, mixed>>  $groups
     * @return array<int, array<string, mixed>>
     */
    private function withMenuIcons(array $groups): array
    {
        return array_map(function (array $group): array {
            $items = array_map(function (array $item): array {
                if (isset($item['icon'])) {
                    $item['iconSvg'] = MenuHelper::getIconSvg($item['icon']);
                }
                return $item;
            }, $group['items'] ?? []);

            return [
                'title' => $group['title'] ?? '',
                'items' => $items,
            ];
        }, $groups);
    }
}
