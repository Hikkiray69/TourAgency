# 🚀 Полное руководство по установке и запуску Docker-контейнера

Это руководство поможет вам установить Docker, создать контейнер и запустить Next.js-приложение в нём. В конце будут приведены возможные ошибки и информация о том, как их устранить.

---

## 🔹 1. Установка Docker

### 🔸 Windows 10/11
1. Перейдите на официальный сайт Docker и скачайте **Docker Desktop**:
   👉 [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
2. Запустите установщик и следуйте инструкциям.
3. После установки **перезагрузите компьютер**.
4. Запустите Docker Desktop и дождитесь, пока он полностью загрузится.
5. Проверьте, что всё работает, запустив в `PowerShell`:
   ```powershell
   docker --version
   ```
   Если появилась версия, значит всё установлено корректно.
6. Убедитесь, что включён WSL 2 (если используете Windows 10/11):
   - Откройте **Docker Desktop → Settings**.
   - Включите `Use the WSL 2 based engine`.
   - В разделе **Resources → WSL Integration** включите свою систему (например, Ubuntu).

### 🔸 Linux (Ubuntu, Fedora и другие)
1. Откройте терминал и выполните:
   ```bash
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   ```
2. Добавьте пользователя в группу `docker`, чтобы запускать без `sudo`:
   ```bash
   sudo usermod -aG docker $USER
   ```
3. Перезагрузите систему и проверьте:
   ```bash
   docker --version
   ```

### 🔸 macOS
1. Скачайте и установите **Docker Desktop** отсюда:  
   👉 [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
2. Запустите Docker и убедитесь, что он работает:
   ```bash
   docker --version
   ```

---

## 🔹 2. Установка Git

Перед клонированием репозитория необходимо установить Git.

### 🔸 Windows
1. Скачайте установщик с [официального сайта](https://git-scm.com/downloads).
2. Установите, следуя инструкциям.
3. Проверьте установку командой:
   ```powershell
   git --version
   ```

### 🔸 Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install git -y
git --version
```

### 🔸 macOS
```bash
brew install git
git --version
```

---

## 🔹 3. Проверка работоспособности Docker
После установки убедитесь, что Docker работает, запустив тестовый контейнер:
```bash
docker run hello-world
```
Если вы увидите сообщение `Hello from Docker!`, значит, всё работает! 🚀

---

## 🔹 4. Клонирование проекта
Для начала необходимо перейти в нужную папку.

1. Воспользуйтесь командой `pwd` что бы узнать, в какой папке вы находитесь.
2. Далее с помощью команды `cd Путь/До/Папки` перейдите в необходимую вам папку. 
3. Клонируйте проект с GitHub:
   ```bash
   git clone https://github.com/Hikkiray69/TourAgency
   cd TourAgency
   ```
   Если у вас уже есть готовый проект, просто откройте его в терминале.

---

## 🔹 5. Запуск контейнера
После сборки образа запустите контейнер:
```bash
docker run -p 3000:3000 nextjs-tour-agency
```

Теперь откройте в браузере **http://localhost:3000** 🚀
---

## 🔹 6. Остановка и удаление контейнера

- Остановить выполнение процесса (в консоли):
  `Ctrl + C`
- Посмотреть список запущенных контейнеров:
  ```bash
  docker ps
  ```
- Остановить контейнер:
  ```bash
  docker stop <container_id>
  ```
- Удалить контейнер:
  ```bash
  docker rm <container_id>
  ```
- Удалить образ:
  ```bash
  docker rmi nextjs-tour-agency
  ```

---

## ✅ Готово!
Теперь у вас есть полностью рабочий Next.js-проект, запущенный в Docker-контейнере. 🎉

## 🔧 Возможные ошибки и их решение
- **Порт уже используется**
  Описание:
  ```bash
  Error response from daemon: driver failed programming external connectivity on endpoint
  ```
  Решение:
  Проверить процесс, занимающий порт 3000:
  ```bash
  lsof -i :3000
  ```
  Завершить процесс:
  ```bash
  kill -9 <PID>
  ```
  Либо запустить контейнер на другом порту:
  ```bash
  docker run -p 4000:3000 nextjs-tour-agency
  ```
- **Ошибка прав доступа**
  Описание:
  ```bash
  permission denied while trying to connect to the Docker daemon
  ```
  Решение:
  Добавить пользователя в группу Docker:
  ```bash
  sudo usermod -aG docker $USER
  ```
  Перезагрузить систему.
- **Ошибка при сборке**
  Описание:
  ```bash
  npm ERR! missing script: build
  ```
  Решение:
  Проверить файл package.json, убедиться, что в секции scripts присутствует:
  ```bash
  "scripts": {
  "build": "next build",
  "start": "next start"
  }
  ```
  Если команда отсутствует, добавить и пересобрать контейнер.