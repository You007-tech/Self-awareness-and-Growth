// Page 8 - 转机与解决页交互功能

class Page8Controller {
    constructor() {
        this.animationObserver = null;
        this.progressBars = [];
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupProgressBars();
        this.setupBackgroundAnimations();
        this.setupKeyboardNavigation();
    }

    // 页面加载动画
    setupAnimations() {
        // 标题动画
        const title = document.querySelector('.main-title');
        const subtitle = document.querySelector('.subtitle');
        const intro = document.querySelector('.intro-text');

        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(-50px)';
            setTimeout(() => {
                title.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 300);
        }

        if (subtitle) {
            subtitle.style.opacity = '0';
            subtitle.style.transform = 'translateY(30px)';
            setTimeout(() => {
                subtitle.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0)';
            }, 600);
        }

        if (intro) {
            intro.style.opacity = '0';
            intro.style.transform = 'translateY(20px)';
            setTimeout(() => {
                intro.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                intro.style.opacity = '1';
                intro.style.transform = 'translateY(0)';
            }, 900);
        }

        // 转机卡片动画
        const breakthroughCard = document.querySelector('.breakthrough-card');
        if (breakthroughCard) {
            breakthroughCard.style.opacity = '0';
            breakthroughCard.style.transform = 'scale(0.8) translateY(50px)';
            setTimeout(() => {
                breakthroughCard.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                breakthroughCard.style.opacity = '1';
                breakthroughCard.style.transform = 'scale(1) translateY(0)';
            }, 1200);
        }

        // 洞察要点逐个显示
        const insightItems = document.querySelectorAll('.insight-item');
        insightItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-50px)';
            setTimeout(() => {
                item.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 1500 + index * 200);
        });
    }

    // 滚动触发动画
    setupScrollAnimations() {
        this.animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    if (element.classList.contains('solution-card')) {
                        this.animateSolutionCard(element);
                    } else if (element.classList.contains('metric-card')) {
                        this.animateMetricCard(element);
                    } else if (element.classList.contains('qualitative-changes')) {
                        this.animateQualitativeChanges(element);
                    } else if (element.classList.contains('insight-card')) {
                        this.animateInsightCard(element);
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        // 观察所有需要动画的元素
        const elementsToObserve = document.querySelectorAll('.solution-card, .metric-card, .qualitative-changes, .insight-card');
        elementsToObserve.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            this.animationObserver.observe(element);
        });
    }

    // 解决方案卡片动画
    animateSolutionCard(card) {
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';

        // 内部元素动画
        const icon = card.querySelector('.solution-icon');
        const header = card.querySelector('.solution-header h4');
        
        if (icon) {
            setTimeout(() => {
                icon.style.animation = 'iconBounce 0.6s ease-out';
            }, 300);
        }

        if (header) {
            setTimeout(() => {
                header.style.animation = 'textGlow 1s ease-out';
            }, 500);
        }
    }

    // 评估卡片动画
    animateMetricCard(card) {
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';

        // 启动进度条动画
        setTimeout(() => {
            this.animateProgressBars(card);
        }, 500);
    }

    // 质性改变动画
    animateQualitativeChanges(element) {
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';

        // 改变点逐个显示
        const changePoints = element.querySelectorAll('.change-point');
        changePoints.forEach((point, index) => {
            point.style.opacity = '0';
            point.style.transform = 'translateX(-30px)';
            setTimeout(() => {
                point.style.transition = 'all 0.6s ease-out';
                point.style.opacity = '1';
                point.style.transform = 'translateX(0)';
            }, 300 + index * 150);
        });
    }

    // 关键领悟动画
    animateInsightCard(card) {
        card.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';

        const insightText = card.querySelector('.key-insight');
        if (insightText) {
            setTimeout(() => {
                this.typewriterEffect(insightText);
            }, 500);
        }
    }

    // 打字机效果
    typewriterEffect(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }

    // 进度条动画设置
    setupProgressBars() {
        const progressData = [
            { before: 25, after: 85, label: '自我认知清晰度' },
            { before: 30, after: 80, label: '情绪调节能力' },
            { before: 20, after: 75, label: '人际关系质量' },
            { before: 35, after: 90, label: '生活满意度' }
        ];

        this.progressBars = progressData;
    }

    // 进度条动画
    animateProgressBars(container) {
        const progressBars = container.querySelectorAll('.progress-bar');
        
        progressBars.forEach((bar, index) => {
            const beforeBar = bar.querySelector('.progress-before');
            const afterBar = bar.querySelector('.progress-after');
            
            if (beforeBar && afterBar && this.progressBars[index]) {
                const data = this.progressBars[index];
                
                // 设置初始状态
                beforeBar.style.width = '0%';
                afterBar.style.width = '0%';
                
                // 动画到治疗前状态
                setTimeout(() => {
                    beforeBar.style.width = data.before + '%';
                    beforeBar.textContent = `治疗前: ${data.before}%`;
                }, index * 200);
                
                // 动画到治疗后状态
                setTimeout(() => {
                    afterBar.style.width = data.after + '%';
                    afterBar.textContent = `治疗后: ${data.after}%`;
                }, index * 200 + 1000);
            }
        });
    }

    // 悬停效果
    setupHoverEffects() {
        // 解决方案卡片悬停
        const solutionCards = document.querySelectorAll('.solution-card');
        solutionCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.playHoverSound();
                card.style.transform = 'translateY(-15px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // 洞察要点悬停
        const insightItems = document.querySelectorAll('.insight-item');
        insightItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(15px)';
                item.style.background = 'rgba(52, 73, 94, 0.9)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
                item.style.background = 'rgba(52, 73, 94, 0.6)';
            });
        });

        // 技术标签悬停
        const techniqueTags = document.querySelectorAll('.technique-tag');
        techniqueTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                tag.style.transform = 'scale(1.1) rotate(2deg)';
            });

            tag.addEventListener('mouseleave', () => {
                tag.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // 支持项目悬停
        const supportItems = document.querySelectorAll('.support-item');
        supportItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.1)';
                item.style.boxShadow = '0 5px 15px rgba(231, 76, 60, 0.3)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1)';
                item.style.boxShadow = 'none';
            });
        });
    }

    // 背景SVG动画
    setupBackgroundAnimations() {
        // 壁垒碎片动画
        const fragments = document.querySelectorAll('.barrier-fragment');
        fragments.forEach((fragment, index) => {
            fragment.style.animationDelay = `${index * 2}s`;
        });

        // 光芒动画
        const rays = document.querySelectorAll('.light-ray');
        rays.forEach((ray, index) => {
            ray.style.animationDelay = `${index * 0.5}s`;
        });

        // 粒子动画
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            particle.style.animationDelay = `${index * 0.7}s`;
        });

        // 动态光源脉冲
        const lightSource = document.querySelector('.light-source');
        if (lightSource) {
            setInterval(() => {
                lightSource.style.filter = 'drop-shadow(0 0 30px rgba(241, 196, 15, 0.8))';
                setTimeout(() => {
                    lightSource.style.filter = 'drop-shadow(0 0 15px rgba(241, 196, 15, 0.5))';
                }, 500);
            }, 2000);
        }
    }

    // 键盘导航
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'r':
                case 'R':
                    this.resetAnimations();
                    break;
                case 'p':
                case 'P':
                    this.toggleProgressAnimation();
                    break;
                case 'i':
                case 'I':
                    this.highlightInsights();
                    break;
            }
        });
    }

    // 重置动画
    resetAnimations() {
        const animatedElements = document.querySelectorAll('.solution-card, .metric-card, .qualitative-changes, .insight-card');
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // 切换进度动画
    toggleProgressAnimation() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach((bar, index) => {
            const beforeBar = bar.querySelector('.progress-before');
            const afterBar = bar.querySelector('.progress-after');
            
            if (beforeBar && afterBar) {
                // 重置
                beforeBar.style.width = '0%';
                afterBar.style.width = '0%';
                
                // 重新动画
                setTimeout(() => {
                    this.animateProgressBars(bar.closest('.metric-card'));
                }, 200);
            }
        });
    }

    // 高亮洞察要点
    highlightInsights() {
        const insightItems = document.querySelectorAll('.insight-item');
        insightItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.background = 'rgba(241, 196, 15, 0.3)';
                item.style.transform = 'translateX(20px) scale(1.02)';
                
                setTimeout(() => {
                    item.style.background = 'rgba(52, 73, 94, 0.6)';
                    item.style.transform = 'translateX(0) scale(1)';
                }, 800);
            }, index * 200);
        });
    }

    // 播放悬停音效（模拟）
    playHoverSound() {
        // 这里可以添加实际的音效播放逻辑
        console.log('🔊 播放悬停音效');
    }

    // 清理资源
    destroy() {
        if (this.animationObserver) {
            this.animationObserver.disconnect();
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    const page8Controller = new Page8Controller();
    
    // 页面卸载时清理资源
    window.addEventListener('beforeunload', () => {
        page8Controller.destroy();
    });
});

// 全局函数
window.resetBreakthroughAnimations = function() {
    const controller = new Page8Controller();
    controller.resetAnimations();
};

window.showProgressDetails = function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const controller = new Page8Controller();
        controller.animateProgressBars(bar.closest('.metric-card'));
    });
};

// 动态CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes iconBounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2) rotate(10deg); }
    }
    
    @keyframes textGlow {
        0% { text-shadow: none; }
        50% { text-shadow: 0 0 20px rgba(236, 240, 241, 0.8); }
        100% { text-shadow: none; }
    }
    
    @keyframes breakthroughPulse {
        0%, 100% { 
            box-shadow: 0 0 20px rgba(241, 196, 15, 0.3);
            transform: scale(1);
        }
        50% { 
            box-shadow: 0 0 40px rgba(241, 196, 15, 0.6);
            transform: scale(1.02);
        }
    }
    
    @keyframes solutionCardGlow {
        0%, 100% { border-color: rgba(52, 152, 219, 0.3); }
        50% { border-color: rgba(52, 152, 219, 0.8); }
    }
    
    @keyframes insightReveal {
        0% { 
            opacity: 0;
            transform: scale(0.8) rotateY(90deg);
        }
        50% {
            opacity: 0.5;
            transform: scale(1.1) rotateY(45deg);
        }
        100% { 
            opacity: 1;
            transform: scale(1) rotateY(0deg);
        }
    }
`;
document.head.appendChild(style);