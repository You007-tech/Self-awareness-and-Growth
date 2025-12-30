// Page 10 - 总结与结束页交互功能

class Page10Controller {
    constructor() {
        this.initializeAnimations();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupClickInteractions();
        this.setupKeyboardNavigation();
        this.startBackgroundAnimations();
    }

    // 初始化页面加载动画
    initializeAnimations() {
        // 页面加载时的动画序列
        setTimeout(() => {
            this.animatePageHeader();
        }, 500);

        setTimeout(() => {
            this.animateProjectSummary();
        }, 1000);

        setTimeout(() => {
            this.animateAcademicContribution();
        }, 1500);

        setTimeout(() => {
            this.animateFutureResearch();
        }, 2000);

        setTimeout(() => {
            this.animateAcknowledgments();
        }, 2500);

        setTimeout(() => {
            this.animateConclusion();
        }, 3000);
    }

    // 页面头部动画
    animatePageHeader() {
        const header = document.querySelector('.page-header');
        if (header) {
            header.style.animation = 'fadeInUp 1s ease-out forwards';
        }

        // 标题字符逐个显示动画
        const mainTitle = document.querySelector('.main-title');
        if (mainTitle) {
            this.typewriterEffect(mainTitle, mainTitle.textContent, 100);
        }
    }

    // 项目总结动画
    animateProjectSummary() {
        const summaryCards = document.querySelectorAll('.summary-overview, .key-findings');
        summaryCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'slideInFromLeft 0.8s ease-out forwards';
                card.style.animationDelay = `${index * 0.2}s`;
            }, index * 200);
        });

        // 指标数字动画
        this.animateMetrics();
    }

    // 指标数字动画
    animateMetrics() {
        const metricNumbers = document.querySelectorAll('.metric-number');
        metricNumbers.forEach(number => {
            const finalValue = number.textContent;
            const isPercentage = finalValue.includes('%');
            const numericValue = parseInt(finalValue.replace('%', ''));
            
            let currentValue = 0;
            const increment = Math.ceil(numericValue / 50);
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                number.textContent = currentValue + (isPercentage ? '%' : '');
            }, 50);
        });
    }

    // 学术贡献动画
    animateAcademicContribution() {
        const contributionCards = document.querySelectorAll('.contribution-card');
        contributionCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'slideInFromRight 0.8s ease-out forwards';
                card.style.animationDelay = `${index * 0.1}s`;
            }, index * 100);
        });
    }

    // 未来研究动画
    animateFutureResearch() {
        const directionCards = document.querySelectorAll('.direction-card');
        directionCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'slideInFromBottom 0.8s ease-out forwards';
                card.style.animationDelay = `${index * 0.15}s`;
            }, index * 150);
        });
    }

    // 致谢部分动画
    animateAcknowledgments() {
        const acknowledgmentCard = document.querySelector('.acknowledgment-card');
        const finalMessage = document.querySelector('.final-message');
        
        if (acknowledgmentCard) {
            acknowledgmentCard.style.animation = 'fadeInScale 1s ease-out forwards';
        }
        
        if (finalMessage) {
            setTimeout(() => {
                finalMessage.style.animation = 'fadeInScale 1s ease-out forwards';
            }, 500);
        }
    }

    // 结论部分动画
    animateConclusion() {
        const conclusionCard = document.querySelector('.conclusion-card');
        if (conclusionCard) {
            conclusionCard.style.animation = 'fadeInScale 1.2s ease-out forwards';
        }
    }

    // 设置滚动触发动画
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    if (element.classList.contains('finding-item')) {
                        element.style.animation = 'slideInFromLeft 0.6s ease-out forwards';
                    } else if (element.classList.contains('research-item')) {
                        element.style.animation = 'slideInFromRight 0.6s ease-out forwards';
                    } else if (element.classList.contains('thanks-category')) {
                        element.style.animation = 'fadeInScale 0.8s ease-out forwards';
                    }
                }
            });
        }, observerOptions);

        // 观察需要滚动动画的元素
        document.querySelectorAll('.finding-item, .research-item, .thanks-category').forEach(el => {
            observer.observe(el);
        });
    }

    // 设置悬停效果
    setupHoverEffects() {
        // 指标卡片悬停效果
        document.querySelectorAll('.metric-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.05) rotate(2deg)';
                item.style.boxShadow = '0 8px 25px rgba(241, 196, 15, 0.3)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1) rotate(0deg)';
                item.style.boxShadow = 'none';
            });
        });

        // 发现项目悬停效果
        document.querySelectorAll('.finding-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                const number = item.querySelector('.finding-number');
                if (number) {
                    number.style.transform = 'scale(1.2) rotate(360deg)';
                    number.style.transition = 'transform 0.5s ease';
                }
            });

            item.addEventListener('mouseleave', () => {
                const number = item.querySelector('.finding-number');
                if (number) {
                    number.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });

        // 贡献卡片悬停效果
        document.querySelectorAll('.contribution-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.contribution-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(10deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });

            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.contribution-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });

        // 研究方向卡片悬停效果
        document.querySelectorAll('.direction-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.direction-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.3) rotate(-10deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });

            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.direction-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });
    }

    // 设置点击交互
    setupClickInteractions() {
        // 贡献卡片点击显示详细信息
        document.querySelectorAll('.contribution-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showContributionDetails(card);
            });
        });

        // 研究方向点击显示详细信息
        document.querySelectorAll('.research-item').forEach(item => {
            item.addEventListener('click', () => {
                this.showResearchDetails(item);
            });
        });

        // 感谢类别点击效果
        document.querySelectorAll('.thanks-category').forEach(category => {
            category.addEventListener('click', () => {
                this.showGratitudeMessage(category);
            });
        });
    }

    // 显示贡献详细信息
    showContributionDetails(card) {
        const title = card.querySelector('h4').textContent;
        const points = Array.from(card.querySelectorAll('.contribution-points li')).map(li => li.textContent);
        
        this.showModal('学术贡献详情', `
            <h3>${title}</h3>
            <ul class="detail-list">
                ${points.map(point => `<li>${point}</li>`).join('')}
            </ul>
            <p class="detail-note">这些贡献体现了本研究在理论和实践方面的价值，为心理学领域的发展做出了积极贡献。</p>
        `);
    }

    // 显示研究详细信息
    showResearchDetails(item) {
        const title = item.querySelector('h5').textContent;
        const description = item.querySelector('p').textContent;
        
        this.showModal('未来研究方向', `
            <h3>${title}</h3>
            <p class="research-description">${description}</p>
            <div class="research-suggestions">
                <h4>具体建议：</h4>
                <ul>
                    <li>制定详细的研究计划和时间表</li>
                    <li>寻找合适的研究合作伙伴</li>
                    <li>申请相关的研究资金支持</li>
                    <li>建立有效的数据收集和分析方法</li>
                </ul>
            </div>
        `);
    }

    // 显示感谢信息
    showGratitudeMessage(category) {
        const title = category.querySelector('h5').textContent;
        const content = category.querySelector('p').textContent;
        
        const messages = {
            '学术指导': '感谢每一位老师和同学的耐心指导，您们的智慧照亮了我们前进的道路。',
            '专业支持': '感谢专业心理咨询师的悉心治疗，您们的专业让我们重新找到了自己。',
            '情感支持': '感谢家人朋友的无条件支持，您们的爱是我们最大的力量源泉。',
            '自我成长': '感谢那个勇敢的自己，在困境中不放弃，在挫折中不退缩。'
        };
        
        const message = messages[title] || '感谢您在我们成长路上的陪伴和支持！';
        
        this.showTooltip(category, message);
    }

    // 设置键盘导航
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'r':
                case 'R':
                    // 重置所有动画
                    this.resetAllAnimations();
                    break;
                case 'c':
                case 'C':
                    // 播放庆祝动画
                    this.playCelebrationAnimation();
                    break;
                case 's':
                case 'S':
                    // 显示统计信息
                    this.showStatistics();
                    break;
                case 'h':
                case 'H':
                    // 显示帮助信息
                    this.showHelpInfo();
                    break;
            }
        });
    }

    // 重置所有动画
    resetAllAnimations() {
        const animatedElements = document.querySelectorAll('[style*="animation"]');
        animatedElements.forEach(el => {
            el.style.animation = 'none';
            setTimeout(() => {
                el.style.animation = '';
            }, 10);
        });
        
        // 重新初始化动画
        setTimeout(() => {
            this.initializeAnimations();
        }, 100);
    }

    // 播放庆祝动画
    playCelebrationAnimation() {
        // 创建庆祝效果
        const celebration = document.createElement('div');
        celebration.className = 'celebration-overlay';
        celebration.innerHTML = `
            <div class="celebration-content">
                <div class="celebration-icon">🎉</div>
                <h2>恭喜完成心理成长之旅！</h2>
                <p>您已经成功完成了这段深刻的自我探索旅程</p>
            </div>
        `;
        
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            celebration.remove();
        }, 3000);
    }

    // 显示统计信息
    showStatistics() {
        const stats = {
            totalPages: 10,
            totalSections: 25,
            keyInsights: 15,
            growthAchievements: 8
        };
        
        this.showModal('项目统计信息', `
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">${stats.totalPages}</div>
                    <div class="stat-label">总页面数</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${stats.totalSections}</div>
                    <div class="stat-label">内容章节</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${stats.keyInsights}</div>
                    <div class="stat-label">核心洞察</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${stats.growthAchievements}</div>
                    <div class="stat-label">成长收获</div>
                </div>
            </div>
            <p class="stats-note">这些数字代表了您在心理成长旅程中的重要里程碑。</p>
        `);
    }

    // 显示帮助信息
    showHelpInfo() {
        this.showModal('键盘快捷键', `
            <div class="help-content">
                <div class="help-item">
                    <kbd>R</kbd> <span>重置所有动画</span>
                </div>
                <div class="help-item">
                    <kbd>C</kbd> <span>播放庆祝动画</span>
                </div>
                <div class="help-item">
                    <kbd>S</kbd> <span>显示统计信息</span>
                </div>
                <div class="help-item">
                    <kbd>H</kbd> <span>显示帮助信息</span>
                </div>
            </div>
            <p class="help-note">使用这些快捷键可以增强您的浏览体验。</p>
        `);
    }

    // 开始背景动画
    startBackgroundAnimations() {
        // 完成圆环动画已在CSS中定义
        
        // 成就星星闪烁
        this.animateAchievementStars();
        
        // 庆祝烟花
        this.animateCelebrationFireworks();
        
        // 旅程路径
        this.animateJourneyPath();
        
        // 感谢花瓣
        this.animateGratitudePetals();
        
        // 飞舞光点
        this.animateFloatingLights();
    }

    // 成就星星动画
    animateAchievementStars() {
        const stars = document.querySelectorAll('.achievement-stars .star');
        stars.forEach((star, index) => {
            setInterval(() => {
                star.style.transform = `translate(${star.getAttribute('transform').match(/translate\(([^)]+)\)/)[1]}) scale(${1 + Math.sin(Date.now() * 0.003 + index) * 0.2})`;
            }, 50);
        });
    }

    // 庆祝烟花动画
    animateCelebrationFireworks() {
        const fireworks = document.querySelectorAll('.celebration-fireworks .firework');
        fireworks.forEach((firework, index) => {
            setInterval(() => {
                const lines = firework.querySelectorAll('line');
                lines.forEach((line, lineIndex) => {
                    const angle = (Date.now() * 0.002 + index + lineIndex) % (Math.PI * 2);
                    const length = 15 + Math.sin(angle) * 5;
                    const x2 = Math.cos(angle) * length;
                    const y2 = Math.sin(angle) * length;
                    line.setAttribute('x2', x2);
                    line.setAttribute('y2', y2);
                });
            }, 100);
        });
    }

    // 旅程路径动画
    animateJourneyPath() {
        const pathPoints = document.querySelectorAll('.journey-path .path-point');
        pathPoints.forEach((point, index) => {
            setInterval(() => {
                const scale = 1 + Math.sin(Date.now() * 0.004 + index * 0.5) * 0.3;
                point.style.transform = `scale(${scale})`;
            }, 50);
        });
    }

    // 感谢花瓣动画
    animateGratitudePetals() {
        const petals = document.querySelectorAll('.gratitude-petals .petal');
        petals.forEach((petal, index) => {
            setInterval(() => {
                const rotation = (Date.now() * 0.001 + index * 45) % 360;
                const currentTransform = petal.getAttribute('transform');
                const baseTransform = currentTransform.replace(/rotate\([^)]+\)/, '');
                petal.setAttribute('transform', `${baseTransform} rotate(${rotation} ${petal.getAttribute('cx')} ${petal.getAttribute('cy')})`);
            }, 100);
        });
    }

    // 飞舞光点动画
    animateFloatingLights() {
        const lights = document.querySelectorAll('.floating-lights .light');
        lights.forEach((light, index) => {
            const originalCx = parseFloat(light.getAttribute('cx'));
            const originalCy = parseFloat(light.getAttribute('cy'));
            
            setInterval(() => {
                const time = Date.now() * 0.002 + index;
                const offsetX = Math.sin(time) * 20;
                const offsetY = Math.cos(time * 0.7) * 15;
                light.setAttribute('cx', originalCx + offsetX);
                light.setAttribute('cy', originalCy + offsetY);
            }, 100);
        });
    }

    // 打字机效果
    typewriterEffect(element, text, speed = 100) {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(timer);
            }
        }, speed);
    }

    // 显示模态框
    showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 关闭模态框
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // 显示提示框
    showTooltip(element, message) {
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = message;
        
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        
        setTimeout(() => {
            tooltip.remove();
        }, 3000);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new Page10Controller();
});

// 全局函数
window.celebrateCompletion = function() {
    const controller = new Page10Controller();
    controller.playCelebrationAnimation();
};

window.showProjectStats = function() {
    const controller = new Page10Controller();
    controller.showStatistics();
};

// 动态CSS样式
const dynamicStyles = `
<style>
/* 滑入动画 */
@keyframes slideInFromLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInFromBottom {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* 庆祝覆盖层 */
.celebration-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.5s ease-out;
}

.celebration-content {
    background: rgba(52, 73, 94, 0.95);
    padding: 3rem;
    border-radius: 20px;
    text-align: center;
    border: 2px solid #f1c40f;
    backdrop-filter: blur(10px);
}

.celebration-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: bounce 1s ease-in-out infinite;
}

.celebration-content h2 {
    color: #f1c40f;
    margin-bottom: 1rem;
    font-size: 2rem;
}

.celebration-content p {
    color: #ecf0f1;
    font-size: 1.2rem;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
}

/* 模态框样式 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease-out;
}

.modal-content {
    background: rgba(52, 73, 94, 0.95);
    border-radius: 15px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(241, 196, 15, 0.3);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(241, 196, 15, 0.2);
}

.modal-header h3 {
    color: #f1c40f;
    margin: 0;
    font-size: 1.5rem;
}

.modal-close {
    background: none;
    border: none;
    color: #ecf0f1;
    font-size: 2rem;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.modal-close:hover {
    background: rgba(231, 76, 60, 0.2);
    color: #e74c3c;
}

.modal-body {
    padding: 1.5rem;
    color: #ecf0f1;
    line-height: 1.6;
}

.detail-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.detail-list li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
}

.detail-list li::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #f39c12;
}

.detail-note, .research-description, .stats-note, .help-note {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(241, 196, 15, 0.1);
    border-radius: 8px;
    border-left: 3px solid #f1c40f;
}

.research-suggestions h4 {
    color: #3498db;
    margin-bottom: 0.5rem;
}

.research-suggestions ul {
    list-style: none;
    padding: 0;
}

.research-suggestions li {
    padding: 0.3rem 0;
    padding-left: 1.2rem;
    position: relative;
}

.research-suggestions li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #2ecc71;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1rem 0;
}

.stat-item {
    text-align: center;
    padding: 1rem;
    background: rgba(52, 152, 219, 0.1);
    border-radius: 10px;
    border: 1px solid rgba(52, 152, 219, 0.2);
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #3498db;
    display: block;
    margin-bottom: 0.5rem;
}

.stat-label {
    color: #bdc3c7;
    font-size: 0.9rem;
}

.help-content {
    space-y: 1rem;
}

.help-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
    background: rgba(155, 89, 182, 0.1);
    border-radius: 8px;
    margin-bottom: 0.8rem;
}

.help-item kbd {
    background: #34495e;
    color: #ecf0f1;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-family: monospace;
    font-weight: 700;
    border: 1px solid #5d6d7e;
    min-width: 30px;
    text-align: center;
}

.help-item span {
    color: #ecf0f1;
}

/* 自定义提示框 */
.custom-tooltip {
    position: absolute;
    background: rgba(52, 73, 94, 0.95);
    color: #ecf0f1;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    max-width: 250px;
    text-align: center;
    border: 1px solid rgba(241, 196, 15, 0.3);
    backdrop-filter: blur(5px);
    z-index: 9998;
    animation: tooltipFadeIn 0.3s ease-out;
}

.custom-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(52, 73, 94, 0.95);
}

@keyframes tooltipFadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
</style>
`;

// 添加动态样式到页面
document.head.insertAdjacentHTML('beforeend', dynamicStyles);