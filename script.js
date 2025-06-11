// 任务图标（像素风 64x64 SVG base64）
const tasks = [
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxMiIgeT0iOCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjMzMzMzMzIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNCIvPjxyZWN0IHg9IjE2IiB5PSIxMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMDAwMGZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjI0IiB5PSIzMiIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZmlsbD0iI2ZmZmZmZiI+QVBPPC90ZXh0PjxyZWN0IHg9IjUyIiB5PSIyNCIgd2lkdGg9IjQiIGhlaWdodD0iOCIgZmlsbD0iIzg4ODg4OCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSI1MiIgeT0iMzYiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiM4ODg4ODgiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNDAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSI0NCIgY3k9IjEwIiByPSIyIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjMyIiB5PSI0OCIgd2lkdGg9IjgiIGhlaWdodD0iNCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=', action: 0 }, // 玩手机
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI4IiB5PSIyMiIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIwIiBmaWxsPSIjODg4ODg4IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIvPjx0ZXh0IHg9IjEwIiB5PSIzMiIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZmlsbD0iI2ZmZmZmZiI+MTA8L3RleHQ+PHJlY3QgeD0iMjAiIHk9IjI4IiB3aWR0aD0iMjAiIGhlaWdodD0iOCIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiLz48Y2lyY2xlIGN4PSIxNiIgeT0iMjgiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNDQiIGN5PSIyOCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSI0NCIgeT0iMjIiIHdpZHRoPSIxMiIgaGVpZ2h0PSIyMCIgZmlsbD0iIzg4ODg4OCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiLz48dGV4dCB4PSI0NiIgeT0iMzIiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZpbGw9IiNmZmZmZmYiPjEwPC90ZXh0PjxjaXJjbGUgY3g9IjMyIiBjeT0iMTYiIHI9IjQiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+', action: -16 }, // 健身
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxMiIgeT0iOCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNCIvPjx0ZXh0IHg9IjI0IiB5PSIzMiIgZm9udC1zaXplPSIxNiIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZmlsbD0iIzAwMDAwMCI+SFc8L3RleHQ+PHBhdGggZD0iTTI0IDI0djE2bDgtOCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48cmVjdCB4PSI0OCIgeT0iMzYiIHdpZHRoPSIxNiIgaGVpZ2h0PSI4IiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjgiIGZpbGw9IiNmZmZmMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTEyIDE2aDgiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+', action: -32 }, // 赶作业
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI4IiB5PSIxMiIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjEyIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNCIvPjxyZWN0IHg9IjgiIHk9IjI0IiB3aWR0aD0iNDgiIGhlaWdodD0iMTIiIGZpbGw9IiNlZWVlZWUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHJlY3QgeD0iOCIgeT0iMzYiIHdpZHRoPSI0OCIgaGVpZ2h0PSIxMiIgZmlsbD0iI2RkZGRkZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48dGV4dCB4PSIxMiIgeT0iMjAiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZpbGw9IiMwMDAwMDAiPkVTU0FZPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNDggMTIgNTYgMjAgNTYgMTIiIGZpbGw9IiNjY2NjY2MiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSI1NiIgeT0iMjQiIHdpZHRoPSI4IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMDBmZjAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==', action: -48 }, // 写文章
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iNDgiIGhlaWdodD0iMzIiIGZpbGw9IiNmZmZmZmZiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTYiIHk9IjI0IiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmaWxsPSIjMDBmZjAwIj5QUFQ8L3RleHQ+PHBhdGggZD0iTTE2IDI4aDgtOGgtOCIgZmlsbD0iIzAwZmYwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSI0OCIgeT0iNDgiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=', action: -64 }, // 小组预演
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxNiIgeT0iMjQiIHdpZHRoPSIzMiIgaGVpZ2h0PSIxNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHJlY3QgeD0iMjQiIHk9IjI4IiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjMyIiB5PSIyOCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTYgNDQgMzIgNTYgMjAgNTYiIGZpbGw9IiM4YjQ1MTMiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIwIDQ0IDM2IDU2IDI0IDU2IiBmaWxsPSIjOGI0NTEzIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjQ4IiBjeT0iMTYiIHI9IjQiIGZpbGw9IiNjY2NjY2MiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+', action: -80 }, // 吃饭
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxMiIgeT0iMjQiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxNiIgZmlsbD0iIzg4ODg4OCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiLz48Y2lyY2xlIGN4PSIzMiIgeT0iMTIiIHI9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTIwIDI4IDMyIDQwIDMyIDI4IiBmaWxsPSIjMDAwMGZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjI4IiB5PSIzNiIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZmlsbD0iI2ZmZmZmZiI+Wnp6PC90ZXh0PjxjaXJjbGUgY3g9IjQ4IiBjeT0iMTYiIHI9IjQiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+', action: -96 } // 睡觉
];
const slotCapacity = 7;
let tiles = [];
let slots = [];
let character = null;
let slotContainer = null;
let message = null;

// 洗牌算法
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 初始化游戏
function initGame() {
    tiles = [];
    slots = [];
    const gameContainer = document.getElementById('game-container');
    slotContainer = document.getElementById('slot-container');
    message = document.getElementById('message');
    gameContainer.innerHTML = '';
    slotContainer.innerHTML = '<div id="character" class="walking"></div><div id="ddl-line"></div>';
    slotContainer.style.backgroundColor = '#ffffff';
    message.style.display = 'none';
    console.log('Game initialized, slot container color:', slotContainer.style.backgroundColor);

    // 生成42个图标（7种 × 6个）
    tasks.forEach(task => {
        for (let i = 0; i < 6; i++) {
            const x = 50 + Math.random() * (600 - 100);
            const y = 50 + Math.random() * (400 - 100);
            const z = Math.floor(Math.random() * 3) + 1; // 层级 1-3
            tiles.push({ task, x, y, z, element: null });
        }
    });
    tiles = shuffle(tiles);

    // 渲染图标
    tiles.forEach((tile, index) => {
        const div = document.createElement('div');
        div.className = 'tile';
        div.style.left = `${tile.x}px`;
        div.style.top = `${tile.y}px`;
        div.style.zIndex = tile.z;
        div.style.backgroundImage = `url(${tile.task.icon})`;
        div.dataset.index = index;
        div.addEventListener('click', handleTileClick);
        gameContainer.appendChild(div);
        tile.element = div;
    });

    // 初始化 DDL 槽（7 个）
    for (let i = 0; i < slotCapacity; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slotContainer.appendChild(slot);
    }
    character = document.getElementById('character');
}

// 处理图标点击
function handleTileClick(e) {
    const index = parseInt(e.target.dataset.index);
    const tile = tiles[index];
    if (!tile || !tile.element) return;

    // 精确遮挡检测
    const rect = tile.element.getBoundingClientRect();
    const isBlocked = tiles.some(other => {
        if (other && other.element && other !== tile && other.z > tile.z) {
            const otherRect = other.element.getBoundingClientRect();
            return (
                rect.left < otherRect.right &&
                rect.right > otherRect.left &&
                rect.top < otherRect.bottom &&
                rect.bottom > otherRect.top
            );
        }
        return false;
    });

    if (!isBlocked && slots.length < slotCapacity) {
        slots.push(tile.task);
        tile.element.remove();
        tiles[index] = null;
        updateSlots();
        checkMatches();
        checkGameState();
    }
}

// 更新 DDL 槽
function updateSlots() {
    const slotElements = document.querySelectorAll('.slot');
    slotElements.forEach((slot, i) => {
        slot.style.backgroundImage = slots[i] ? `url(${slots[i].icon})` : '';
    });

    // 更新小人
    const slotCount = slots.length;
    if (slotCount > 0) {
        character.style.left = `${85 * (slotCount - 1) + 42.5}px`; // 居中调整
        character.style.backgroundPosition = `${slots[slotCount - 1].action}px 0`;
    } else {
        character.style.left = '0px';
        character.style.backgroundPosition = '0px 0';
    }

    // 更新槽颜色和表情
    const rStart = 255, gStart = 255, bStart = 255; // 白色 #ffffff
    const rEnd = 255, gEnd = 51, bEnd = 51; // 红色 #ff3333
    const t = slotCount / slotCapacity; // 0到1的插值因子
    const r = Math.round(rStart + (rEnd - rStart) * t);
    const g = Math.round(gStart + (gEnd - gStart) * t);
    const b = Math.round(bStart + (bEnd - bStart) * t);
    slotContainer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    console.log('Slot count:', slotCount, 'Container color:', slotContainer.style.backgroundColor);
}

// 检查三消
function checkMatches() {
    const counts = {};
    slots.forEach(slot => {
        counts[slot.icon] = (counts[slot.icon] || 0) + 1;
    });

    for (let icon in counts) {
        if (counts[icon] >= 3) {
            slots = slots.filter(slot => slot.icon !== icon);
            updateSlots();
        }
    }
}

// 检查游戏状态
function checkGameState() {
    if (slots.length >= slotCapacity) {
        message.innerHTML = 'DDL 已过！';
        message.style.display = 'block';
        character.classList.remove('walking');
    } else if (tiles.every(t => !t)) {
        message.innerHTML = '恭喜你赶上DDL！';
        message.style.display = 'block';
        character.classList.remove('walking');
    }
}

// 重启游戏
document.getElementById('restart').addEventListener('click', initGame);

// 延迟初始化
window.onload = initGame;
