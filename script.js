// 任务图标（像素风 32x32 SVG base64）
const tasks = [
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI2IiB5PSI0IiB3aWR0aD0iMjAiIGhlaWdodD0iMjQiIGZpbGw9IiMzMzMiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iOCIgeT0iNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMDBmIi8+PHJlY3QgeD0iMTAiIHk9IjI0IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMjIiIGN5PSIyNCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==', action: 0 }, // 玩手机
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI0IiB5PSIxMiIgd2lkdGg9IjQiIGhlaWdodD0iOCIgZmlsbD0iIzg4OCIgc3Ryb2tlPSIjZmZmIi8+PHJlY3QgeD0iMTAiIHk9IjE0IiB3aWR0aD0iMTIiIGhlaWdodD0iNCIgZmlsbD0iIzQ0NCIgc3Ryb2tlPSIjZmZmIi8+PHJlY3QgeD0iMjQiIHk9IjEyIiB3aWR0aD0iNCIgaGVpZ2h0PSI4IiBmaWxsPSIjODg4IiBzdHJva2U9IiNmZmYiLz48L3N2Zz4=', action: -16 }, // 健身
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI2IiB5PSI0IiB3aWR0aD0iMjAiIGhlaWdodD0iMjQiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTggOGgxNnYyaC0xNnpNOCAxMmgxNnYyaC0xNnoiIGZpbGw9IiMwMDAiLz48cmVjdCB4PSIxMiIgeT0iMjAiIHdpZHRoPSI4IiBoZWlnaHQ9IjQiIGZpbGw9IiNmNDQiIHN0cm9rZT0iIzAwMCIvPjwvc3ZnPg==', action: -32 }, // 赶作业
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI0IiB5PSI2IiB3aWR0aD0iMjQiIGhlaWdodD0iNiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIi8+PHJlY3QgeD0iNCIgeT0iMTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSI2IiBmaWxsPSIjZWVlIiBzdHJva2U9IiMwMDAiLz48cmVjdCB4PSI0IiB5PSIxOCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjYiIGZpbGw9IiNkZGQiIHN0cm9rZT0iIzAwMCIvPjxwYXRoIGQ9Ik02IDhoMjB2Mmg1LTIwdnpNNiAxNGgyMHYyaC0yMHoiIGZpbGw9IiMwMDAiLz48L3N2Zz4=', action: -48 }, // 写论文
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIGZpbGw9IiMwMGZmMDAiIHN0cm9rZT0iI2ZmZiIvPjxwYXRoIGQ9Ik02IDZoMTJ2MTJoLTEyem0xMCA2djYxMiwwaDEyIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==', action: -64 }, // 小组Pre（亮绿色）
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI4IiB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMCIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTQiIHI9IjIiIGZpbGw9IiNmNDQiLz48cmVjdCB4PSIxMiIgeT0iMTgiIHdpZHRoPSI4IiBoZWlnaHQ9IjQiIGZpbGw9IiNiN2I3MDEiIHN0cm9rZT0iIzAwMCIvPjwvc3ZnPg==', action: -80 }, // 吃饭
    { icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSI2IiB5PSIxMiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIGZpbGw9IiM4ODgiIHN0cm9rZT0iI2ZmZiIvPjxwYXRoIGQ9Ik04IDE0aDE2diIgc3Ryb2tlPSIjZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSI4IiByPSIyIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+', action: -96 } // 睡觉
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
