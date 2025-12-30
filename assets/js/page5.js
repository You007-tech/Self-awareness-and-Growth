// Page 5 - 理论框架页交互功能

class Page5Controller {
    constructor() {
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupInteractions();
        this.startBackgroundAnimations();
        this.setupConceptCards();
    }

    setupAnimations() {
        // 页面加载动画
        this.animatePageLoad();
        
        // 设置滚动触发动画
        this.setupScrollAnimations();
    }

    animatePageLoad() {
        // 理论家信息动画
        const theoristInfo = document.querySelector('.theorist-info');
        if (theoristInfo) {
            theoristInfo.style.opacity = '0';
            theoristInfo.style.transform = 'translateY(-50px)';
            
            setTimeout(() => {
                theoristInfo.style.transition = 'all 1s ease-out';
                theoristInfo.style.opacity = '1';
                theoristInfo.style.transform = 'translateY(0)';
            }, 300);
        }

        // 肖像动画
        const portrait = document.querySelector('.portrait-placeholder');
        if (portrait) {
            portrait.style.transform = 'scale(0)';
            
            setTimeout(() => {
                portrait.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                portrait.style.transform = 'scale(1)';
            }, 800);
        }

        // 内容区域动画
        this.animateContentSections();
    }

    animateContentSections() {
        const sections = document.querySelectorAll('.theory-overview, .core-concepts, .application-relevance');
        
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                section.style.transition = 'all 1s ease-out';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 1200 + index * 400);
        });
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
                    
                    // 特殊处理概念卡片
                    if (entry.target.classList.contains('concept-card')) {
                        this.animateConceptCard(entry.target);
                    }
                }
            });
        }, observerOptions);

        // 观察需要动画的元素
        const animateElements = document.querySelectorAll('.concept-card, .relevance-item, .theory-description');
        animateElements.forEach(el => observer.observe(el));
    }

    setupInteractions() {
        // 理论家肖像交互
        this.setupPortraitInteraction();
        
        // 概念卡片交互
        this.setupConceptCardInteractions();
        
        // 应用价值项目交互
        this.setupRelevanceInteractions();
    }

    setupPortraitInteraction() {
        const portrait = document.querySelector('.portrait-placeholder');
        
        if (portrait) {
            portrait.addEventListener('mouseenter', () => {
                portrait.style.transform = 'scale(1.1) rotate(5deg)';
                portrait.style.boxShadow = '0 15px 40px rgba(243, 156, 18, 0.5)';
            });
            
            portrait.addEventListener('mouseleave', () => {
                portrait.style.transform = 'scale(1) rotate(0deg)';
                portrait.style.boxShadow = '0 10px 30px rgba(243, 156, 18, 0.3)';
            });
            
            portrait.addEventListener('click', () => {
                this.showTheoristInfo();
            });
        }
    }

    setupConceptCards() {
        const conceptCards = document.querySelectorAll('.concept-card');
        
        conceptCards.forEach(card => {
            // 初始化详细信息状态
            const details = card.querySelector('.concept-details');
            if (details) {
                details.style.maxHeight = '0';
                details.style.opacity = '0';
            }
        });
    }

    setupConceptCardInteractions() {
        const conceptCards = document.querySelectorAll('.concept-card');
        
        conceptCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.expandConceptCard(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.collapseConceptCard(card);
            });
            
            card.addEventListener('click', () => {
                this.showConceptDetail(card);
            });
        });
    }

    expandConceptCard(card) {
        const details = card.querySelector('.concept-details');
        const icon = card.querySelector('.concept-icon');
        
        if (details) {
            details.style.maxHeight = '200px';
            details.style.opacity = '1';
        }
        
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
        
        // 添加特殊效果
        card.style.transform = 'translateY(-15px) scale(1.02)';
    }

    collapseConceptCard(card) {
        const details = card.querySelector('.concept-details');
        const icon = card.querySelector('.concept-icon');
        
        if (details) {
            details.style.maxHeight = '0';
            details.style.opacity = '0';
        }
        
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
        
        card.style.transform = 'translateY(0) scale(1)';
    }

    setupRelevanceInteractions() {
        const relevanceItems = document.querySelectorAll('.relevance-item');
        
        relevanceItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const icon = item.querySelector('.relevance-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.3) rotate(15deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                const icon = item.querySelector('.relevance-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });
    }

    animateConceptCard(card) {
        // 卡片进入动画
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 100);
    }

    showTheoristInfo() {
        // 创建理论家详细信息弹窗
        const modal = document.createElement('div');
        modal.className = 'theorist-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>卡尔·罗杰斯 (Carl Rogers)</h2>
                    <button class="close-btn">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="bio-section">
                        <h3>生平简介</h3>
                        <p>卡尔·罗杰斯是美国心理学家，人本主义心理学的创始人之一。他提出了以来访者为中心的治疗方法，强调治疗师应该提供无条件的积极关注、真诚一致和共情理解。</p>
                    </div>
                    <div class="contributions-section">
                        <h3>主要贡献</h3>
                        <ul>
                            <li>创立了以来访者为中心的治疗方法</li>
                            <li>提出了人格发展的自我实现理论</li>
                            <li>强调了治疗关系中的核心条件</li>
                            <li>推动了心理治疗的人本主义发展</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: modalFadeIn 0.3s ease-out;
        `;
        
        document.body.appendChild(modal);
        
        // 关闭按钮事件
        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            modal.style.animation = 'modalFadeOut 0.3s ease-out';
            setTimeout(() => {
                if (modal.parentNode) {
                    modal.parentNode.removeChild(modal);
                }
            }, 300);
        });
        
        // 点击外部关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBtn.click();
            }
        });
    }

    showConceptDetail(card) {
        const concept = card.getAttribute('data-concept');
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;
        
        // 创建概念详细说明
        const tooltip = document.createElement('div');
        tooltip.className = 'concept-tooltip';
        tooltip.innerHTML = `
            <h4>${title}</h4>
            <p>${description}</p>
            <div class="concept-examples">
                ${this.getConceptExamples(concept)}
            </div>
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
            border: 2px solid #f39c12;
            color: #ecf0f1;
            max-width: 500px;
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

    getConceptExamples(concept) {
        const examples = {
            unconditional: `
                <h5>实践示例：</h5>
                <ul>
                    <li>"我理解你现在的感受，无论你做了什么"</li>
                    <li>"你的价值不会因为任何行为而改变"</li>
                    <li>"我完全接受你现在的状态"</li>
                </ul>
            `,
            genuineness: `
                <h5>实践示例：</h5>
                <ul>
                    <li>"我现在感到有些困惑，能帮我理解吗？"</li>
                    <li>"我注意到我内心有些担心"</li>
                    <li>"让我诚实地分享我的感受"</li>
                </ul>
            `,
            empathy: `
                <h5>实践示例：</h5>
                <ul>
                    <li>"听起来你感到非常孤独和被误解"</li>
                    <li>"我能感受到你内心的痛苦"</li>
                    <li>"你的愤怒背后似乎有深深的伤痛"</li>
                </ul>
            `
        };
        
        return examples[concept] || '';
    }

    startBackgroundAnimations() {
        // 启动背景SVG动画
        this.animateHumanSilhouette();
        this.animateAuraRings();
        this.animateTheorySymbols();
        this.animateConnectionLines();
    }

    animateHumanSilhouette() {
        const silhouetteParts = document.querySelectorAll('.human-silhouette > *');
        
        silhouetteParts.forEach((part, index) => {
            setInterval(() => {
                const randomOpacity = Math.random() * 0.4 + 0.5;
                part.style.opacity = randomOpacity;
            }, 2000 + index * 300);
        });
    }

    animateAuraRings() {
        const rings = document.querySelectorAll('.aura-rings .ring');
        
        rings.forEach((ring, index) => {
            setInterval(() => {
                const randomScale = Math.random() * 0.2 + 0.9;
                const randomOpacity = Math.random() * 0.3 + 0.2;
                
                ring.style.transform = `scale(${randomScale})`;
                ring.style.opacity = randomOpacity;
            }, 3000 + index * 1000);
        });
    }

    animateTheorySymbols() {
        const symbols = document.querySelectorAll('.theory-symbols .symbol');
        
        symbols.forEach((symbol, index) => {
            setInterval(() => {
                const randomY = (Math.random() - 0.5) * 20;
                const randomRotate = (Math.random() - 0.5) * 10;
                
                symbol.style.transform += ` translateY(${randomY}px) rotate(${randomRotate}deg)`;
            }, 4000 + index * 1000);
        });
    }

    animateConnectionLines() {
        const lines = document.querySelectorAll('.connection-lines .line');
        
        lines.forEach((line, index) => {
            setInterval(() => {
                const randomOpacity = Math.random() * 0.5 + 0.3;
                line.style.opacity = randomOpacity;
            }, 2500 + index * 600);
        });
    }
}

// 添加CSS动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes modalFadeIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes modalFadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.8);
        }
    }
    
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
    
    .theorist-modal .modal-content {
        background: rgba(44, 62, 80, 0.95);
        padding: 2rem;
        border-radius: 20px;
        border: 2px solid #f39c12;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        backdrop-filter: blur(20px);
    }
    
    .theorist-modal .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid rgba(243, 156, 18, 0.3);
        padding-bottom: 1rem;
    }
    
    .theorist-modal h2 {
        color: #f39c12;
        margin: 0;
        font-size: 1.8rem;
    }
    
    .theorist-modal .close-btn {
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
    
    .theorist-modal .close-btn:hover {
        background: rgba(231, 76, 60, 0.2);
        color: #e74c3c;
    }
    
    .theorist-modal h3 {
        color: #e67e22;
        margin: 1.5rem 0 1rem 0;
    }
    
    .theorist-modal p {
        color: #bdc3c7;
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    .theorist-modal ul {
        color: #95a5a6;
        padding-left: 1.5rem;
    }
    
    .theorist-modal li {
        margin-bottom: 0.5rem;
        line-height: 1.5;
    }
    
    .concept-tooltip h4 {
        color: #f39c12;
        margin: 0 0 1rem 0;
        font-size: 1.3rem;
    }
    
    .concept-tooltip p {
        margin: 0 0 1.5rem 0;
        line-height: 1.6;
    }
    
    .concept-tooltip h5 {
        color: #e67e22;
        margin: 1rem 0 0.5rem 0;
        font-size: 1.1rem;
    }
    
    .concept-tooltip ul {
        margin: 0 0 1rem 0;
        padding-left: 1.5rem;
    }
    
    .concept-tooltip li {
        color: #95a5a6;
        margin-bottom: 0.5rem;
        line-height: 1.4;
    }
    
    .concept-tooltip small {
        color: #bdc3c7;
        font-style: italic;
    }
`;
document.head.appendChild(style);

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new Page5Controller();
});

// 导出控制器供其他脚本使用
window.Page5Controller = Page5Controller;