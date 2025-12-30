// 交互功能管理器
class InteractionManager {
    constructor() {
        this.selectedChoices = {};
        this.feedbackTimeout = null;
        this.init();
    }

    init() {
        this.bindInteractiveElements();
        this.initAnimations();
    }

    // 绑定交互元素事件
    bindInteractiveElements() {
        // 选择题按钮事件
        document.querySelectorAll('.choice-btn').forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                this.handleChoiceSelection(e.target, index);
            });

            // 添加悬停效果
            btn.addEventListener('mouseenter', () => {
                this.addHoverEffect(btn);
            });

            btn.addEventListener('mouseleave', () => {
                this.removeHoverEffect(btn);
            });
        });

        // 概念卡片交互
        document.querySelectorAll('.concept-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showConceptDetail(card);
            });
        });

        // SVG元素交互
        this.initSVGInteractions();
    }

    // 处理选择题选择
    handleChoiceSelection(button, choiceIndex) {
        const pageId = this.getCurrentPageId();
        
        // 保存选择
        this.selectedChoices[pageId] = choiceIndex;
        
        // 更新按钮状态
        this.updateChoiceButtons(button);
        
        // 显示反馈
        this.showChoiceFeedback(choiceIndex, pageId);
        
        // 添加选择动画
        this.animateChoice(button);
        
        // 记录分析数据
        this.recordChoice(pageId, choiceIndex);
    }

    // 更新选择按钮状态
    updateChoiceButtons(selectedButton) {
        const allButtons = document.querySelectorAll('.choice-btn');
        
        allButtons.forEach(btn => {
            btn.classList.remove('selected', 'unselected');
            if (btn === selectedButton) {
                btn.classList.add('selected');
            } else {
                btn.classList.add('unselected');
            }
        });
    }

    // 显示选择反馈
    showChoiceFeedback(choiceIndex, pageId) {
        const feedbackMessages = this.getFeedbackMessages(pageId, choiceIndex);
        
        if (feedbackMessages) {
            this.createFeedbackModal(feedbackMessages);
        }
    }

    // 获取反馈信息
    getFeedbackMessages(pageId, choiceIndex) {
        const feedbackData = {
            'page2': {
                0: {
                    title: '坚持梦想的力量',
                    message: '您选择了"有，并且我一直在坚持"。这种坚持不懈的精神正是高远最初拥有的品质，也是我们每个人内心深处最珍贵的力量。'
                },
                1: {
                    title: '重新点燃内心的光',
                    message: '您选择了"有，但后来因为各种原因放弃了"。这与高远的经历非常相似，外界的压力和期望有时会让我们偏离初心，但重要的是重新找回那份热爱。'
                },
                2: {
                    title: '发现内在的声音',
                    message: '您选择了"好像没有如此强烈和明确的感受"。每个人的成长轨迹不同，有些人需要更多时间来发现自己真正的热爱，这个过程本身就很珍贵。'
                }
            },
            'page6': {
                0: {
                    title: '内在驱动力的觉察',
                    message: '您认为主要动因是"内在的愧疚感与责任感"。这正是高远案例的核心，内在的情感冲突往往是行为选择的根本驱动力。'
                },
                1: {
                    title: '爱与认可的渴望',
                    message: '您认为是"对失去爱与认可的恐惧"。这反映了人类最基本的心理需求——归属感和被接纳的需要。'
                },
                2: {
                    title: '未来的不确定性',
                    message: '您认为是"对未来不确定性的担忧"。面对未知的恐惧确实会影响我们的选择，这是人之常情。'
                },
                3: {
                    title: '社会期望的影响',
                    message: '您认为是"对社会主流价值观的顺从"。社会文化背景确实会塑造我们的价值观和行为模式。'
                }
            }
        };

        return feedbackData[pageId] && feedbackData[pageId][choiceIndex];
    }

    // 创建反馈模态框
    createFeedbackModal(feedback) {
        // 移除已存在的模态框
        const existingModal = document.querySelector('.feedback-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'feedback-modal';
        modal.innerHTML = `
            <div class="feedback-content">
                <div class="feedback-header">
                    <h3>${feedback.title}</h3>
                    <button class="close-btn">&times;</button>
                </div>
                <div class="feedback-body">
                    <p>${feedback.message}</p>
                </div>
                <div class="feedback-footer">
                    <button class="continue-btn">继续探索</button>
                </div>
            </div>
        `;

        // 添加样式
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        const content = modal.querySelector('.feedback-content');
        content.style.cssText = `
            background: linear-gradient(135deg, #1a237e, #3f51b5);
            color: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            transform: translateY(30px);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(modal);

        // 触发动画
        setTimeout(() => {
            modal.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 10);

        // 绑定关闭事件
        modal.querySelector('.close-btn').addEventListener('click', () => {
            this.closeFeedbackModal(modal);
        });

        modal.querySelector('.continue-btn').addEventListener('click', () => {
            this.closeFeedbackModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeFeedbackModal(modal);
            }
        });

        // 自动关闭
        this.feedbackTimeout = setTimeout(() => {
            this.closeFeedbackModal(modal);
        }, 8000);
    }

    // 关闭反馈模态框
    closeFeedbackModal(modal) {
        if (this.feedbackTimeout) {
            clearTimeout(this.feedbackTimeout);
        }

        modal.style.opacity = '0';
        modal.querySelector('.feedback-content').style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    }

    // 选择动画效果
    animateChoice(button) {
        button.style.transform = 'scale(0.95)';
        button.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            button.style.transform = 'scale(1.05)';
        }, 100);
        
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    }

    // 添加悬停效果
    addHoverEffect(element) {
        element.style.transform = 'translateY(-3px) scale(1.02)';
        element.style.boxShadow = '0 10px 25px rgba(26, 35, 126, 0.4)';
    }

    // 移除悬停效果
    removeHoverEffect(element) {
        if (!element.classList.contains('selected')) {
            element.style.transform = 'translateY(0) scale(1)';
            element.style.boxShadow = '0 4px 15px rgba(26, 35, 126, 0.3)';
        }
    }

    // 显示概念详情
    showConceptDetail(card) {
        const title = card.querySelector('.concept-title').textContent;
        const description = card.querySelector('.concept-description').textContent;
        
        // 创建详情弹窗
        this.createDetailModal(title, description);
        
        // 添加点击动画
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 150);
    }

    // 创建详情模态框
    createDetailModal(title, description) {
        const modal = document.createElement('div');
        modal.className = 'detail-modal';
        modal.innerHTML = `
            <div class="detail-content">
                <h3>${title}</h3>
                <p>${description}</p>
                <button class="close-detail-btn">关闭</button>
            </div>
        `;

        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close-detail-btn').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // 初始化SVG交互
    initSVGInteractions() {
        // 为SVG元素添加交互效果
        document.querySelectorAll('svg .interactive').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.filter = 'brightness(1.2)';
            });

            element.addEventListener('mouseleave', () => {
                element.style.filter = 'brightness(1)';
            });

            element.addEventListener('click', () => {
                this.handleSVGElementClick(element);
            });
        });
    }

    // 处理SVG元素点击
    handleSVGElementClick(element) {
        const info = element.getAttribute('data-info');
        if (info) {
            this.showTooltip(element, info);
        }
    }

    // 显示工具提示
    showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'svg-tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
            pointer-events: none;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        document.body.appendChild(tooltip);

        const rect = element.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;

        setTimeout(() => {
            tooltip.style.opacity = '1';
        }, 10);

        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 300);
        }, 3000);
    }

    // 初始化页面动画
    initAnimations() {
        // 为页面元素添加进入动画
        const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateX(0)';
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(element => {
            element.style.opacity = '0';
            if (element.classList.contains('slide-in-left')) {
                element.style.transform = 'translateX(-50px)';
            } else if (element.classList.contains('slide-in-right')) {
                element.style.transform = 'translateX(50px)';
            } else {
                element.style.transform = 'translateY(30px)';
            }
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(element);
        });
    }

    // 获取当前页面ID
    getCurrentPageId() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        if (filename === 'index.html' || filename === '') {
            return 'page0';
        }
        
        const match = filename.match(/page(\d+)\.html/);
        return match ? `page${match[1]}` : 'unknown';
    }

    // 记录选择数据
    recordChoice(pageId, choiceIndex) {
        const timestamp = new Date().toISOString();
        const choiceData = {
            pageId,
            choiceIndex,
            timestamp,
            userAgent: navigator.userAgent
        };

        // 保存到本地存储
        const existingData = JSON.parse(localStorage.getItem('psychologyChoices') || '[]');
        existingData.push(choiceData);
        localStorage.setItem('psychologyChoices', JSON.stringify(existingData));

        console.log('Choice recorded:', choiceData);
    }

    // 获取用户选择统计
    getChoiceStatistics() {
        const data = JSON.parse(localStorage.getItem('psychologyChoices') || '[]');
        const stats = {};

        data.forEach(choice => {
            if (!stats[choice.pageId]) {
                stats[choice.pageId] = {};
            }
            if (!stats[choice.pageId][choice.choiceIndex]) {
                stats[choice.pageId][choice.choiceIndex] = 0;
            }
            stats[choice.pageId][choice.choiceIndex]++;
        });

        return stats;
    }

    // 清除选择数据
    clearChoiceData() {
        localStorage.removeItem('psychologyChoices');
        this.selectedChoices = {};
    }
}

// 页面加载完成后初始化交互管理器
document.addEventListener('DOMContentLoaded', () => {
    window.interactionManager = new InteractionManager();
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = InteractionManager;
}