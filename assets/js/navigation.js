// 导航系统控制器
class NavigationController {
    constructor() {
        this.currentPage = 0;
        this.totalPages = 11;
        this.pages = [
            'index.html',
            'pages/page1.html',
            'pages/page2.html',
            'pages/page3.html',
            'pages/page4.html',
            'pages/page5.html',
            'pages/page6.html',
            'pages/page7.html',
            'pages/page8.html',
            'pages/page9.html',
            'pages/page10.html'
        ];
        this.init();
    }

    init() {
        this.createNavigationUI();
        this.bindEvents();
        this.updateProgress();
        this.getCurrentPageIndex();
    }

    // 获取当前页面索引
    getCurrentPageIndex() {
        const currentPath = window.location.pathname;
        const currentFile = currentPath.split('/').pop() || 'index.html';
        
        console.log(`当前页面文件: ${currentFile}`);
        
        if (currentFile === 'index.html') {
            this.currentPage = 0;
        } else {
            const pageMatch = currentFile.match(/page(\d+)\.html/);
            if (pageMatch) {
                this.currentPage = parseInt(pageMatch[1]);
                console.log(`匹配到页面: page${this.currentPage}`);
            } else {
                console.log(`未匹配到页面编号，文件: ${currentFile}`);
            }
        }
        
        console.log(`当前页面索引: ${this.currentPage}`);
        this.updateProgress();
        this.updateNavigationState();
    }

    // 创建导航UI
    createNavigationUI() {
       // 确保导航系统正确显示
setTimeout(() => {
    const navigation = document.querySelector('.navigation');
    if (navigation) {
        navigation.style.display = 'flex';
        navigation.style.opacity = '1';
        navigation.style.visibility = 'visible';
    }
}, 500);
        // 创建进度条
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.innerHTML = '<div class="progress-fill"></div>';
        document.body.appendChild(progressBar);

        // 创建导航栏
        const navigation = document.createElement('div');
        navigation.className = 'navigation';
        navigation.innerHTML = `
            <button class="nav-btn" id="prevBtn">上一页</button>
            <div class="page-indicator">
                ${Array.from({length: this.totalPages}, (_, i) => 
                    `<div class="page-dot ${i === this.currentPage ? 'active' : ''}" data-page="${i}"></div>`
                ).join('')}
            </div>
            <button class="nav-btn" id="nextBtn">下一页</button>
        `;
        document.body.appendChild(navigation);
    }

    // 绑定事件
    bindEvents() {
        // 上一页按钮
        document.getElementById('prevBtn').addEventListener('click', () => {
            this.prevPage();
        });

        // 下一页按钮
        document.getElementById('nextBtn').addEventListener('click', () => {
            this.nextPage();
        });

        // 页面指示器点击
        document.querySelectorAll('.page-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToPage(index);
            });
        });

        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                this.prevPage();
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                this.nextPage();
            } else if (e.key >= '0' && e.key <= '9') {
                const pageIndex = parseInt(e.key);
                if (pageIndex < this.totalPages) {
                    this.goToPage(pageIndex);
                }
            }
        });

        // 触屏手势支持
        this.initTouchGestures();
    }

    // 初始化触屏手势
    initTouchGestures() {
        let startX = 0;
        let startY = 0;
        let startTime = 0;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const deltaTime = endTime - startTime;
            
            // 检查是否为有效滑动（距离足够且时间不太长）
            if (Math.abs(deltaX) > 50 && deltaTime < 300 && Math.abs(deltaY) < 100) {
                if (deltaX > 0) {
                    // 向右滑动，上一页
                    this.prevPage();
                } else {
                    // 向左滑动，下一页
                    this.nextPage();
                }
            }
        }, { passive: true });
    }

    // 前进到下一页
    nextPage() {
        if (this.currentPage < this.totalPages - 1) {
            this.goToPage(this.currentPage + 1);
        }
    }

    // 返回上一页
    prevPage() {
        if (this.currentPage > 0) {
            this.goToPage(this.currentPage - 1);
        }
    }

    // 跳转到指定页面
    goToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < this.totalPages && pageIndex !== this.currentPage) {
            let targetPage = this.pages[pageIndex];
            
            // 确保路径是相对于项目根目录的
            const currentPath = window.location.pathname;
            const isInPagesFolder = currentPath.includes('/pages/');
            
            if (isInPagesFolder && !targetPage.startsWith('../')) {
                // 如果当前在 pages 文件夹中，需要返回上级目录
                if (targetPage === 'index.html') {
                    targetPage = '../index.html';
                } else if (targetPage.startsWith('pages/')) {
                    targetPage = targetPage.replace('pages/', '');
                }
            } else if (!isInPagesFolder && targetPage !== 'index.html') {
                // 如果当前在根目录，确保页面路径正确
                if (!targetPage.startsWith('pages/')) {
                    targetPage = 'pages/' + targetPage;
                }
            }
            
            // 调试信息
            console.log(`页面跳转: ${this.currentPage} -> ${pageIndex}, 目标页面: ${targetPage}`);
            console.log(`当前路径: ${currentPath}, 是否在pages文件夹: ${isInPagesFolder}`);
            
            // 添加页面切换动画
            this.addTransitionEffect(() => {
                window.location.href = targetPage;
            });
        }
    }

    // 添加页面切换动画效果
    addTransitionEffect(callback) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        `;
        
        document.body.appendChild(overlay);
        
        // 触发淡入动画
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        // 在动画完成后执行回调
        setTimeout(() => {
            callback();
        }, 300);
    }

    // 更新进度条
    updateProgress() {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            const progress = ((this.currentPage + 1) / this.totalPages) * 100;
            progressFill.style.width = `${progress}%`;
        }
    }

    // 更新导航状态
    updateNavigationState() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dots = document.querySelectorAll('.page-dot');

        // 更新按钮状态
        if (prevBtn) {
            prevBtn.disabled = this.currentPage === 0;
        }
        if (nextBtn) {
            nextBtn.disabled = this.currentPage === this.totalPages - 1;
        }

        // 更新页面指示器
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentPage);
        });
        
        // 更新页面计数器
        const currentPageSpan = document.querySelector('.current-page');
        const totalPagesSpan = document.querySelector('.total-pages');
        if (currentPageSpan) {
            currentPageSpan.textContent = this.currentPage + 1;
        }
        if (totalPagesSpan) {
            totalPagesSpan.textContent = this.totalPages;
        }
        
        console.log(`更新导航状态 - 当前页: ${this.currentPage + 1}/${this.totalPages}`);
    }

    // 更新导航状态
    updateNavigation() {
        this.updateProgress();
        this.updateNavigationState();
    }

    // 获取当前页面信息
    getCurrentPageInfo() {
        return {
            current: this.currentPage,
            total: this.totalPages,
            progress: ((this.currentPage + 1) / this.totalPages) * 100
        };
    }
}

// 页面加载完成后初始化导航（仅在没有实例时创建）
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM加载完成，初始化导航控制器...');
    if (!window.navigationController) {
        console.log('创建新的导航控制器实例');
        window.navigationController = new NavigationController();
    } else {
        console.log('导航控制器已存在，重新初始化');
        window.navigationController.getCurrentPageIndex();
    }
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationController;

}
