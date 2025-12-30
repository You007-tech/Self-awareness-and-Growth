// Page 4 - 核心困境页交互功能

class Page4Controller {
    constructor() {
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupInteractions();
        this.startBackgroundAnimations();
    }

    setupAnimations() {
        // 页面加载动画
        this.animatePageLoad();
        
        // 设置滚动触发动画
        this.setupScrollAnimations();
    }

    animatePageLoad() {
        // 标题动画
        const title = document.querySelector('.main-title');
        const subtitle = document.querySelector('.subtitle');
        
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(-50px)';
            
            setTimeout(() => {
                title.style.transition = 'all 1s ease-out';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 300);
        }
        
        if (subtitle) {
            subtitle.style.opacity = '0';
            subtitle.style.transform = 'translateY(-30px)';
            
            setTimeout(() => {
                subtitle.style.transition = 'all 1s ease-out 0.3s';
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0)';
            }, 500);
        }

        // 内容区域动画
        this.animateContentSections();
    }

    animateContentSections() {
        const problemItems = document.querySelectorAll('.problem-item');
        const impactCards = document.querySelectorAll('.impact-card');
        
        // 问题项目动画
        problemItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-50px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.8s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 800 + index * 200);
        });
        
        // 影响卡片动画
        impactCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateX(50px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.8s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateX(0)';
            }, 1000 + index * 200);
        });
        
        // 引用区域动画
        const quote = document.querySelector('.philosophical-quote');
        if (quote) {
            quote.style.opacity = '0';
            quote.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                quote.style.transition = 'all 1s ease-out';
                quote.style.opacity = '1';
                quote.style.transform = 'translateY(0)';
            }, 1800);
        }
    }

    setupScrollAnimations() {
        // 创建交叉观察器用于滚动动画
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // 观察需要动画的元素
        const animateElements = document.querySelectorAll('.problem-item, .impact-card, .philosophical-quote');
        animateElements.forEach(el => observer.observe(el));
    }

    setupInteractions() {
        // 问题项目悬停效果
        this.setupProblemItemInteractions();
        
        // 影响卡片交互
        this.setupImpactCardInteractions();
        
        // 引用区域交互
        this.setupQuoteInteraction();
    }

    setupProblemItemInteractions() {
        const problemItems = document.querySelectorAll('.problem-item');
        
        problemItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                // 添加悬停效果
                item.style.transform = 'translateX(15px) scale(1.02)';
                item.style.boxShadow = '0 12px 35px rgba(231, 76, 60, 0.4)';
                
                // 图标动画
                const icon = item.querySelector('.icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(5deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0) scale(1)';
                item.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                
                const icon = item.querySelector('.icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
            
            // 点击效果
            item.addEventListener('click', () => {
                this.showProblemDetail(item);
            });
        });
    }

    setupImpactCardInteractions() {
        const impactCards = document.querySelectorAll('.impact-card');
        
        impactCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 15px 40px rgba(231, 76, 60, 0.3)';
                
                // 图标动画
                const icon = card.querySelector('.card-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.3)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                
                const icon = card.querySelector('.card-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
            });
        });
    }

    setupQuoteInteraction() {
        const quote = document.querySelector('.philosophical-quote');
        
        if (quote) {
            quote.addEventListener('mouseenter', () => {
                quote.style.transform = 'scale(1.02)';
                quote.style.boxShadow = '0 10px 30px rgba(231, 76, 60, 0.2)';
            });
            
            quote.addEventListener('mouseleave', () => {
                quote.style.transform = 'scale(1)';
                quote.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            });
        }
    }

    showProblemDetail(item) {
        // 创建详细信息弹窗
        const title = item.querySelector('strong').textContent;
        const description = item.querySelector('p').textContent;
        
        // 简单的提示效果
        const tooltip = document.createElement('div');
        tooltip.className = 'problem-tooltip';
        tooltip.innerHTML = `
            <h4>${title}</h4>
            <p>${description}</p>
            <small>点击其他地方关闭</small>
        `;
        
        tooltip.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(44, 62, 80, 0.95);
            padding: 2rem;
            border-radius: 15px;
            border: 2px solid #e74c3c;
            color: #ecf0f1;
            max-width: 400px;
            z-index: 1000;
            backdrop-filter: blur(20px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            animation: tooltipFadeIn 0.3s ease-out;
        `;
        
        document.body.appendChild(tooltip);
        
        // 点击外部关闭
        const closeTooltip = (e) => {
            if (!tooltip.contains(e.target)) {
                tooltip.style.animation = 'tooltipFadeOut 0.3s ease-out';
                setTimeout(() => {
                    if (tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                    }
                }, 300);
                document.removeEventListener('click', closeTooltip);
            }
        };
        
        setTimeout(() => {
            document.addEventListener('click', closeTooltip);
        }, 100);
    }

    startBackgroundAnimations() {
        // 启动背景SVG动画
        this.animateFragments();
        this.animateCracks();
        this.animateLights();
    }

    animateFragments() {
        const fragments = document.querySelectorAll('.fragment');
        
        fragments.forEach((fragment, index) => {
            // 随机浮动动画
            setInterval(() => {
                const randomX = (Math.random() - 0.5) * 20;
                const randomY = (Math.random() - 0.5) * 15;
                const randomRotate = (Math.random() - 0.5) * 5;
                
                fragment.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
            }, 3000 + index * 1000);
        });
    }

    animateCracks() {
        const cracks = document.querySelectorAll('.crack');
        
        cracks.forEach((crack, index) => {
            // 裂缝闪烁效果
            setInterval(() => {
                crack.style.opacity = Math.random() * 0.5 + 0.3;
                crack.style.strokeWidth = Math.random() * 2 + 2;
            }, 2000 + index * 800);
        });
    }

    animateLights() {
        const lights = document.querySelectorAll('.light');
        
        lights.forEach((light, index) => {
            // 光效脉冲
            setInterval(() => {
                const scale = Math.random() * 0.5 + 0.8;
                const opacity = Math.random() * 0.4 + 0.2;
                
                light.style.transform = `scale(${scale})`;
                light.style.opacity = opacity;
            }, 1500 + index * 500);
        });
    }
}

// 添加CSS动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes tooltipFadeIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes tooltipFadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
    
    .problem-tooltip h4 {
        color: #f39c12;
        margin: 0 0 1rem 0;
        font-size: 1.3rem;
    }
    
    .problem-tooltip p {
        margin: 0 0 1rem 0;
        line-height: 1.6;
    }
    
    .problem-tooltip small {
        color: #bdc3c7;
        font-style: italic;
    }
`;
document.head.appendChild(style);

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new Page4Controller();
});

// 导出控制器供其他脚本使用
window.Page4Controller = Page4Controller;