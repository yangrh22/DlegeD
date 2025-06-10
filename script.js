// 任务图标（像素风 32x32 SVG base64）
const tasks = [
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI2IiB5PSI0IiB3aWR0aD0iMjAiIGhlaWdodD0iMjQiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iOCIgeT0iNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMDAwMGZmIi8+PHJlY3QgeD0iMTAiIHk9IjI0IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIiBmaWxsPSIjZmZmZmZmIi8+PGNpcmNsZSBjeD0iMjIiIGN5PSIyNCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==', action: 0 }, // 玩手机
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI0IiB5PSIxMiIgd2lkdGg9IjQiIGhlaWdodD0iOCIgZmlsbD0iIzg4ODg4OCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSIxMCIgeT0iMTQiIHdpZHRoPSIxMiIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjI0IiB5PSIxMiIgd2lkdGg9IjQiIGhlaWdodD0iOCIgZmlsbD0iIzg4ODg4OCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=', action: -16 }, // 健身
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI2IiB5PSI0IiB3aWR0aD0iMjAiIGhlaWdodD0iMjQiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTggOGgxNnYyaC0xNnpNOCAxMmgxNnYyaC0xNnoiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMiIgeT0iMjAiIHdpZHRoPSI4IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZjAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+', action: -32 }, // 赶作业
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI0IiB5PSI2IiB3aWR0aD0iMjQiIGhlaWdodD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSI0IiB5PSIxMiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjYiIGZpbGw9IiNlZWVlZWUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iNCIgeT0iMTgiIHdpZHRoPSIyNCIgaGVpZ2h0PSI2IiBmaWxsPSIjZGRkZGRkIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik02IDhoMjB2MmgtMjB6TTYgMTRoMjB2MmgtMjB6IiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+', action: -48 }, // 写论文
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIGZpbGw9IiMwMGZmMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjQiIGhlaWdodD0iOCIgZmlsbD0iI2ZmZmZmZiIvPjxyZWN0IHg9IjEyIiB5PSI4IiB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgZmlsbD0iI2ZmZmZmZiIvPjxyZWN0IHg9IjE2IiB5PSI4IiB3aWR0aD0iNCIgaGVpZ2h0PSI2IiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+', action: -64 }, // 小组Pre
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI4IiB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNCIgcj0iMiIgZmlsbD0iI2ZmMDAwMCIvPjxyZWN0IHg9IjEyIiB5PSIxOCIgd2lkdGg9IjgiIGhlaWdodD0iNCIgZmlsbD0iI2ZmZmYwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=', action: -80 }, // 吃饭
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI2IiB5PSIxMiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIGZpbGw9IiM4ODg4ODgiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSI4IiByPSI0IiBmaWxsPSIjZmZmZmZmIi8+PHJlY3QgeD0iOCIgeT0iMTQiIHdpZHRoPSIxNiIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwMGZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==', action: -96 } // 睡觉
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
    if (slotCount === 0) {
        slotContainer.style.backgroundColor = '#ffffff';
    } else {
        const rStart = 255, gStart = 255, bStart = 255; // 白色 #ffffff
        const rEnd = 255, gEnd = 51, bEnd = 51; // 红色 #ff3333
        const t = slotCount / slotCapacity; // 0到1的插值因子
        const r = Math.round(rStart + (rEnd - rStart) * t);
        const g = Math.round(gStart + (gEnd - gStart) * t);
        const b = Math.round(bStart + (bEnd - bStart) * t);
        slotContainer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
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
