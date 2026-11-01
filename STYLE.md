# Style map

Карта визуального слоя, перенесённого из `nayak-nirmalya/spotify-clone`.
Все значения — Tailwind-классы, которые реально используются в компонентах.

## Основа

| Что | Значение |
| --- | --- |
| Фон приложения | `black` (`app/globals.css` → `html, body, :root`) |
| Основная панель | `bg-neutral-900 rounded-lg` |
| Хедер | `bg-gradient-to-b from-emerald-800` (на `/search` и `/account`: `from-bg-neutral-900`) |
| Акцент | `bg-green-500` / `text-green-500`, иконка сердца `#22c55e` |
| Текст | `text-white`, вторичный `text-neutral-400`, третичный `text-neutral-300` |
| Шрифт | Figtree (`next/font/google`) |
| Радиусы | `rounded-lg` для панелей, `rounded-md` для карточек и инпутов, `rounded-full` для кнопок и плеера |
| Цветовая схема | `color-scheme: dark` |

## Каркас

* `Sidebar` — колонка `w-[300px]` на `bg-black`, внутри два `Box`:
  навигация (`px-5 py-4`, `gap-y-4`) и библиотека со скроллом.
* При активном треке каркас сжимается: `h-[calc(100%-80px)]`.
* `main` — `flex-1 overflow-y-auto py-2`, страницы внутри скроллятся отдельно.
* Мобильный вид: сайдбар `hidden md:flex`, в хедере появляются круглые кнопки
  Home/Search (`bg-white p-2`, иконка `text-black`).

## Компоненты

| Компонент | Ключевые классы |
| --- | --- |
| `Box` | `bg-neutral-900 rounded-lg h-fit w-full` |
| `Button` | `rounded-full bg-green-500 px-3 py-3 text-black font-bold hover:opacity-75 disabled:opacity-50` |
| `Input` | `rounded-md bg-neutral-700 px-3 py-3 text-sm placeholder:text-neutral-400 focus:outline-none` |
| `SidebarItem` | `gap-x-4 text-md font-medium text-neutral-400 hover:text-white`, активный `text-white` |
| `ListItem` | `bg-neutral-100/10 hover:bg-neutral-100/20 pr-4`, обложка `64×64`, зелёная кнопка play появляется на hover |
| `SongItem` | `bg-neutral-400/5 hover:bg-neutral-400/10 p-1`, обложка `aspect-square`, play-кнопка `bottom-20 right-3` |
| `MediaItem` | `gap-x-3 p-2 rounded-md hover:bg-neutral-800/50`, картинка `48×48` |
| `PlayButton` | `bg-green-500 p-4 drop-shadow-md`, появление `opacity-0 → group-hover:opacity-100` с подъёмом `translate-y-1/4 → 0` |
| `LikeButton` | `text-neutral-400`/`#22c55e`, `hover:opacity-75` |
| `Player` | `fixed bottom-0 h-[80px] bg-black px-4 py-2`, сетка `grid-cols-2 md:grid-cols-3` |
| `PlayerContent` | центральные кнопки: круглые `bg-white h-10 w-10`, боковые иконки `text-neutral-400 hover:text-white` |
| `Slider` | трек `h-[3px] bg-neutral-600`, заполнение `bg-white`, ползунок появляется на hover |
| `Modal` | оверлей `bg-neutral-900/90 backdrop-blur-sm`, панель `bg-neutral-800 border-neutral-700 rounded-md max-w-[450px]`, крестик в правом верхнем углу |
| `SearchInput` | тот же `Input`, debounce 500 мс, запрос пишется в `?title=` |

## Сетки и состояния

* Сетка треков: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4`.
* Плитки быстрых ссылок: `grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3`.
* Пустые состояния — `text-neutral-400` («No Songs Available», «No Song Found»).
* Ховеры везде через прозрачность (`hover:opacity-75`) и полупрозрачные подложки
  (`bg-neutral-100/10`, `bg-neutral-800/50`), без резких цветовых скачков.
