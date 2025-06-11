// 任务图标（像素风 64x64 SVG base64）
const tasks = [
    { 
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYgOCBoMzIgYTYgNiAwIDAgMSA2IDZ2MzYgYTYgNiAwIDAgMS02IDZoLTMyIGE2IDYgMCAwIDEtNi02di0zNiBhNiA2IDAgMCAxIDYtNnpNMTYgMTIgaDEyIG0yMCA4IGw0IC00IGwtNCAtNCBtOCAwIGw0IDQgbC00IDQgbS04IDE2IGgxNiBtLTggLTQgaDEyIG0tOCAxNiBsNCAtNCBsLTQgLTQiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHJlY3QgeD0iMTgiIHk9IjE0IiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IiMwMGNjZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIyIDIyIGw4IDQgbDQgLTggbDQgLTQgbDQgLTgiIGZpbGw9IiMwMGZmMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTQ4IDE4IGw1IDAgbDMgLTMgbC0zIC0zIGwtNSAwIGwzIDMgbDMgMyIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=', 
        action: 0 
    }, // 玩手机
    { 
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzIgMTYgaDEyIG0tMTIgMTggbDggOCBsMTIgMCBsOCAtOCBsLTggLTggbC0xMiAwIGw4IC0zIGg0IG0tMTIgMTYgbDggNCBsNCAtNCBsLTQgLTggbC0xMiAwIGw0IDQgbDggNCBtMTIgLTggaDEyIG0tMTIgMTgiIGZpbGw9IiNmZmNjOTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTIwIDI0IGw0IDQgbC00IDAgbC00IC00IGw0IC0zIGwxMiAwIGw0IC0zIGw0IC00IGwtNCAtNCBsLTQgMyBsLTEyIDAgbDEyIDExIGwxMiAwIGw0IDQiIGZpbGw9IiNjYzkzMzMiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIwIDQwIGw0IC00IGw4IDAgbC00IC00IGwtNCAtMyBsLTQgMCBsNCAtMyBsLTQgLTQgbDggMCBsNCAtMyBsNCAtNCBsLTQgNCBsNCAtMyBsNCAtNCBsLTQgMyBsNCAtMyIgZmlsbD0iIzg4ODg4OCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNDggMTYgbDMgMyBsMyAwIGwtMyAtMyBsLTMgMCBsMyAtMyIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNDggMjAgbDUgMCBsMyAtMyBsLTMgLTMgbC01IDAgbDMgMyBsMyAzIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==', 
        action: -16 
    }, // 健身
    { 
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgOCBoMzIgYTYgNiAwIDAgMSA2IDZ2MzYgYTYgNiAwIDAgMS02IDZoLTMyIGE2IDYgMCAwIDEtNi02di0zNiBhNiA2IDAgMCAxIDYtNnpNMjAgMTIgaDI4IHYyOCBsNCAtNCBsNCAtMyBsLTQgLTMgbC00IC0zIGwtMjQgMCBsMyAzIGwzIDMgMTIgMCBsLTMgLTMgbC0zIC0zIGwtMTIgMCBoMTIgbDggOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48dGV4dCB4PSIyNiIgeT0iMzIiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZpbGw9IiMwMDAwMDAiPkhXPC90ZXh0PjxwYXRoIGQ9Ik0yOCAyNCBsNiAwIGwzIC0zIGwtMyAzIGw2IDAgbDMgLTMgbC0zIDMgbDYgMCBsMyAtMyBsLTMgMyBsNiAwIGwzIC0zIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00OCAzMiBsOCAxNiBsLTMgLTMgbDQgLTMgbC00IC0zIGwzIC0zIGwtMyAtMyBsLTQgLTMgbDMgLTMgbC0zIC0zIGw3IDMiIGZpbGw9IiNmZjAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTIwIDE2IGw4IDAgbDMgLTMgbC0zIDMgbDYgMCBsMyAtMyBsLTMgMyBsMyAwIGwtMyAyIGwtMyAzIiBmaWxsPSIjZmZmZjAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==', 
        action: -32 
    }, // 赶作业
    { 
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMTIgaDI4IGEyIDIgMCAwIDEgMiA2di0xMiBsLTIwIDM2IGwtMSAxIGwzIDMgbDcgMyBjMiAyIDIgMCAyIDAgbDEgMSBsLTMgMSBsMyAxIGwtMyAzIGwtMyAyIGw3IDAgbDMgMyIgZmlsbD0iI2Y1ZjVkYyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48dGV4dCB4PSIyNCIgeT0iMjgiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZpbGw9IiMwMDAwMDAiPlRFWFQ8L3RleHQ+PHBhdGggZD0iTTQ4IDI0IGw0IC00IGw0IDQgbC00IDQgbC00IC00IGw0IC0zIGw0IC0zIGwtNCAtMyBsLTQgLTMgbDQgLTMgbDQgLTMgbC00IC0zIGwtNCAtMyBsNCAtMyIgZmlsbD0iIzAwZmYwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMjAgNDQgbDMgMyBsOCAwIGwtMyAtMyBsLTMgLTMgbC04IDAgbDMgLTMgbDMgLTMgbC0zIC0zIGwtMyAtMyBsMyAtMyBsMyAtMyBsLTMgLTMgbC0zIC0zIGw4IDAgbDMgLTMiIGZpbGw9IiMwMDAwOTkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+', 
        action: -48 
    }, // 写文章
    { 
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgOCBoMjggYTIgMiAwIDAgMSAyIDZ2MzYgYTIgMiAwIDAgMS0yIDZoLTI4IGEyIDIgMCAwIDEtMi02di0zNiBhMiAyIDAgMCAxIDItNnpNMjAgMTIgaDI4IHY4IGwtNCAtNCBsLTQgLTQgbDI0IDAgbDMgMyBsMyAzIGwtMTIgMCBsLTMgLTMgbC0zIC0zIGwtMTIgMCBsOCAwIGw0IC0zIGw0IC0zIGwtNCAtMyBsLTQgLTMgbDQgLTMgbDQgLTMgbC00IC0zIGwtNCAtMyIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMjAgMjQgbDYgMCBsMyAtMyBsLTMgMyBsNiAwIGwzIC0zIGwtMyAzIGw2IDAgbDMgLTMgbC0zIDMgbDYgMCBsMyAtMyBsLTMgMyBsNiAwIGwzIC0zIiBmaWxsPSIjMDBmZjAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00OCAxNiBsMyAzIGwzIDAgbC0zIC0zIGwtMyAwIGwzIC0zIGwtMyAtMyBsMyAtMyBsMyAtMyBsLTMgLTMgbC0zIC0zIGwzIC0zIGwtMyAtMyBsMyAtMyIgZmlsbD0iI2ZmZmYwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMjAgNDQgbDMgMyBsOCAwIGwtMyAtMyBsLTMgLTMgbC04IDAgbDMgLTMgbDMgLTMgbC0zIC0zIGwtMyAtMyBsMyAtMyBsMyAtMyBsLTMgLTMgbC0zIC0zIGw4IDAgbDMgLTMiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+', 
        action: -64 
    }, // 小组预演
    { 
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIxNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMjggMjggbDYgMCBsMyAtMyBsLTMgMyBsNiAwIGwzIC0zIGwtMyAzIGw2IDAgbDMgLTMgbC0zIDMgbDYgMCBsMyAtMyBsLTMgMyBsNiAwIGwzIC0zIiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0zMiAyOCBsNiAwIGwzIC0zIGwtMyAzIGw2IDAgbDMgLTMgbC0zIDMgbDYgMCBsMyAtMyBsLTMgMyBsNiAwIGwzIC0zIiBmaWxsPSIjMDBmZjAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0yMCA0NCBsMyAzIGw4IDAgbC0zIC0zIGwtMyAtMyBsLTggMCBsMyAtMyBsMyAtMyBsLTMgLTMgbC0zIC0zIGwzIC0zIGwzIC0zIGwtMyAtMyBsLTMgLTMgbDggMCBsMyAtMyIgZmlsbD0iIzhiNDUxMyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMjQgNDQgbDMgMyBsOCAwIGwtMyAtMyBsLTMgLTMgbC04IDAgbDMgLTMgbDMgLTMgbC0zIC0zIGwtMyAtMyBsMyAtMyBsMyAtMyBsLTMgLTMgbC0zIC0zIGw4IDAgbDMgLTMiIGZpbGw9IiM4YjQ1MTMiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTQ4IDE2IGwzIDMgbDMgMCBsLTMgLTMgbC0zIDAgbDMgLTMiIGZpbGw9IiNjY2NjY2MiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+', 
        action: -80 
    }, // 吃饭
    { 
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMjQgbDggOCBsMTIgMCBsOCAtOCBsLTggLTggbC0xMiAwIGw4IC0zIGg0IG0tMTIgMTYgbDggNCBsNCAtNCBsLTQgLTggbC0xMiAwIGw0IDQgbDggNCBtMTIgLTggaDEyIG0tMTIgMTgiIGZpbGw9IiNmZmNjOTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTIwIDI0IGw0IDQgbC00IDAgbC00IC00IGw0IC0zIGwxMiAwIGw0IC0zIGw0IC00IGwtNCAtNCBsLTQgMyBsLTEyIDAgbDEyIDExIGwxMiAwIGw0IDQiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIwIDQwIGw0IC00IGw4IDAgbC00IC00IGwtNCAtMyBsLTQgMCBsNCAtMyBsLTQgLTQgbDggMCBsNCAtMyBsNCAtNCBsLTQgNCBsNCAtMyBsNCAtNCBsLTQgMyBsNCAtMyIgZmlsbD0iIzAwMDBmZiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMjggMzIgYjMgMyAwIDAgMSAtMyAzIGMzIDMgMCAwIDEgLTMgMyBjMyAzIDAgMCAxIC0zIDMgbDMgMyAwIDAgMSAtMyAzIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00OCAxNiBsMyAzIGwzIDAgbC0zIC0zIGwtMyAwIGwzIC0zIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==', 
        action: -96 
    } // 睡觉
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

    // 更新槽颜色
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
