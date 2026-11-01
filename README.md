# SmicaStars

Интерфейс в стиле Spotify, перенесённый в этот репозиторий из
[nayak-nirmalya/spotify-clone](https://github.com/nayak-nirmalya/spotify-clone)
(MIT, автор Antonio Erdeljac).

Перенесён весь визуальный слой: тёмная тема, сайдбар с библиотекой, градиентный
хедер, карточки треков, строчный список медиа, нижний плеер с громкостью,
модальные окна и типографика Figtree. Supabase, Stripe и их хуки убраны, вместо
них — локальные данные и локальное состояние, поэтому проект запускается без
ключей и бэкенда.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Экраны

| Путь        | Что показывает                                                     |
| ----------- | ------------------------------------------------------------------ |
| `/`         | Главная: Welcome Back, плитка Liked Songs, сетка «Newest Songs»     |
| `/search`   | Поиск с debounce-инпутом и списком результатов                     |
| `/liked`    | Плейлист лайкнутых треков (обложка, заголовок, список)              |
| `/account`  | Настройки аккаунта и подписки                                      |

## Структура

```
app/                  маршруты (home, search, liked, account) + layout
components/           Box, Button, Header, Input, Sidebar, Library, MediaItem,
                      SongItem, ListItem, PlayButton, LikeButton, Player,
                      PlayerContent, Slider, Modal, AuthModal, UploadModal,
                      SubscribeModal, SearchInput
providers/            ToasterProvider, ModalProvider
hooks/                zustand-сторы плеера, пользователя, лайков, библиотеки,
                      модалок и утилиты поиска
lib/songs.ts          демо-каталог (8 треков) — единственное место с данными
lib/products.ts       демо-тарифы для модалки подписки
public/images         обложки и обложка плейлиста Liked Songs
public/songs          демо-аудио (mp3, сгенерированные тональные треки)
```

## Как подключить реальные данные

* Каталог треков — замените массив в `lib/songs.ts` (форма `Song` из `types.ts`)
  или отдавайте те же поля из своего API.
* Пользователь и лайки — `hooks/useUser.ts` и `hooks/useLikes.ts` (zustand +
  localStorage). Замените `signIn`/`toggle` на вызовы своего бэкенда.
* Загрузка треков — `components/UploadModal.tsx` сейчас создаёт объект-URL в
  памяти; замените на upload в ваше хранилище.
* Подписка — `lib/products.ts` и `components/SubscribeModal.tsx`. Кнопка оплаты
  пока показывает уведомление, потому что биллинг не подключён.

## Дизайн-токены

Подробная карта стиля (цвета, радиусы, отступы, поведение компонентов) лежит в
[STYLE.md](./STYLE.md).

## Лицензия

MIT — см. [LICENSE](./LICENSE). Оригинальный интерфейс: spotify-clone
(Antonio Erdeljac, MIT).
