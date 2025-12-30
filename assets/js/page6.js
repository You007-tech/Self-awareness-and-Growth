// Page 6 - 理论契合页交互功能

class Page6Controller {
    constructor() {
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupInteractions();
        this.startBackgroundAnimations();
        this.setupStageCards();
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
        const sections = document.querySelectorAll('.theory-connection, .erikson-stages, .case-application, .integration-summary');
        
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                section.style.transition = 'all 1s ease-out';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 800 + index * 300);
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
                    
                    // 特殊处理阶段卡片
                    if (entry.target.classList.contains('stage-card')) {
                        this.animateStageCard(entry.target);
                    }
                }
            });
        }, observerOptions);

        // 观察需要动画的元素
        const animateElements = document.querySelectorAll('.stage-card, .application-item, .integration-point');
        animateElements.forEach(el => observer.observe(el));
    }

    setupInteractions() {
        // 阶段卡片交互
        this.setupStageCardInteractions();
        
        // 应用项目交互
        this.setupApplicationInteractions();
        
        // 整合点交互
        this.setupIntegrationInteractions();
    }

    setupStageCards() {
        const stageCards = document.querySelectorAll('.stage-card');
        
        // 设置初始状态
        stageCards.forEach(card => {
            if (!card.classList.contains('active')) {
                card.style.opacity = '0.8';
            }
        });
    }

    setupStageCardInteractions() {
        const stageCards = document.querySelectorAll('.stage-card');
        
        stageCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.highlightStageCard(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.resetStageCard(card);
            });
            
            card.addEventListener('click', () => {
                this.selectStageCard(card);
            });
        });
    }

    highlightStageCard(card) {
        // 高亮效果
        card.style.transform = 'translateY(-15px) scale(1.02)';
        card.style.boxShadow = '0 20px 50px rgba(155, 89, 182, 0.4)';
        
        // 数字动画
        const stageNumber = card.querySelector('.stage-number');
        if (stageNumber) {
            stageNumber.style.transform = 'scale(1.2) rotate(10deg)';
            stageNumber.style.transition = 'transform 0.3s ease';
        }
        
        // 年龄范围高亮
        const ageRange = card.querySelector('.age-range');
        if (ageRange) {
            ageRange.style.background = 'rgba(243, 156, 18, 0.4)';
            ageRange.style.transform = 'scale(1.1)';
        }
    }

    resetStageCard(card) {
        if (!card.classList.contains('active')) {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        }
        
        const stageNumber = card.querySelector('.stage-number');
        if (stageNumber) {
            stageNumber.style.transform = 'scale(1) rotate(0deg)';
        }
        
        const ageRange = card.querySelector('.age-range');
        if (ageRange) {
            ageRange.style.background = 'rgba(243, 156, 18, 0.2)';
            ageRange.style.transform = 'scale(1)';
        }
    }

    selectStageCard(card) {
        // 移除其他卡片的激活状态
        const allCards = document.querySelectorAll('.stage-card');
        allCards.forEach(c => {
            c.classList.remove('active');
            c.style.opacity = '0.7';
        });
        
        // 激活当前卡片
        card.classList.add('active');
        card.style.opacity = '1';
        
        // 显示详细信息
        this.showStageDetail(card);
    }

    setupApplicationInteractions() {
        const applicationItems = document.querySelectorAll('.application-item');
        
        applicationItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const icon = item.querySelector('.item-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.3) rotate(15deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                const icon = item.querySelector('.item-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
            
            item.addEventListener('click', () => {
                this.showApplicationDetail(item);
            });
        });
    }

    setupIntegrationInteractions() {
        const integrationPoints = document.querySelectorAll('.integration-point');
        
        integrationPoints.forEach(point => {
            point.addEventListener('mouseenter', () => {
                point.style.transform = 'translateX(15px) scale(1.02)';
                point.style.boxShadow = '0 12px 35px rgba(155, 89, 182, 0.3)';
            });
            
            point.addEventListener('mouseleave', () => {
                point.style.transform = 'translateX(0) scale(1)';
                point.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            });
        });
    }

    animateStageCard(card) {
        // 卡片进入动画
        card.style.opacity = '0';
        card.style.transform = 'translateX(-50px) scale(0.9)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0) scale(1)';
        }, 100);
    }

    showStageDetail(card) {
        const stage = card.getAttribute('data-stage');
        const title = card.querySelector('h4').textContent;
        
        // 创建详细信息弹窗
        const modal = document.createElement('div');
        modal.className = 'stage-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="close-btn">&times;</button>
                </div>
                <div class="modal-body">
                    ${this.getStageDetailContent(stage)}
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

    getStageDetailContent(stage) {
        const content = {
            identity: `
                <div class="stage-detail">
                    <h3>同一性 vs 角色混乱阶段详解</h3>
                    <div class="detail-section">
                        <h4>阶段特征</h4>
                        <ul>
                            <li>青少年开始思考"我是谁"的问题</li>
                            <li>探索不同的角色和身份可能性</li>
                            <li>寻求独立和自主性</li>
                            <li>容易出现身份认同危机</li>
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4>成功发展的标志</h4>
                        <ul>
                            <li>形成稳定的自我概念</li>
                            <li>建立清晰的价值观体系</li>
                            <li>获得忠诚品质</li>
                            <li>能够做出人生重要决定</li>
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4>治疗意义</h4>
                        <p>这个阶段的理论为理解青少年的心理困扰提供了重要框架，帮助治疗师识别和处理身份认同相关的问题。</p>
                    </div>
                </div>
            `,
            intimacy: `
                <div class="stage-detail">
                    <h3>亲密 vs 孤独阶段详解</h3>
                    <div class="detail-section">
                        <h4>阶段特征</h4>
                        <ul>
                            <li>寻求建立亲密的人际关系</li>
                            <li>学习爱与被爱的能力</li>
                            <li>面临孤独和隔离的风险</li>
                            <li>发展长期承诺的能力</li>
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4>成功发展的标志</h4>
                        <ul>
                            <li>建立深度的人际关系</li>
                            <li>获得爱的能力</li>
                            <li>能够做出长期承诺</li>
                            <li>平衡独立性和亲密性</li>
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4>治疗意义</h4>
                        <p>帮助理解成年早期的关系困扰，为处理亲密关系问题提供发展性视角。</p>
                    </div>
                </div>
            `
        };
        
        return content[stage] || '<p>详细信息暂未提供</p>';
    }

    showApplicationDetail(item) {
        const title = item.querySelector('h4').textContent;
        const description = item.querySelector('p').textContent;
        
        // 创建应用详情提示
        const tooltip = document.createElement('div');
        tooltip.className = 'application-tooltip';
        tooltip.innerHTML = `
            <h4>${title}</h4>
            <p>${description}</p>
            <div class="practical-tips">
                <h5>实践建议：</h5>
                ${this.getApplicationTips(title)}
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
            border: 2px solid #9b59b6;
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

    getApplicationTips(title) {
        const tips = {
            '身份探索': `
                <ul>
                    <li>鼓励多元化的体验和尝试</li>
                    <li>提供安全的探索环境</li>
                    <li>支持价值观的澄清过程</li>
                </ul>
            `,
            '角色整合': `
                <ul>
                    <li>帮助识别不同角色的共同点</li>
                    <li>促进自我一致性的发展</li>
                    <li>处理角色冲突的困扰</li>
                </ul>
            `,
            '发展支持': `
                <ul>
                    <li>创造支持性的治疗环境</li>
                    <li>提供发展性的反馈</li>
                    <li>促进健康的同一性形成</li>
                </ul>
            `
        };
        
        return tips[title] || '<p>暂无具体建议</p>';
    }

    startBackgroundAnimations() {
        // 启动背景SVG动画
        this.animateSpiral();
        this.animateNodes();
        this.animateConnections();
    }

    animateSpiral() {
        const spiral = document.querySelector('.spiral-path');
        
        if (spiral) {
            setInterval(() => {
                const randomOpacity = Math.random() * 0.4 + 0.5;
                spiral.style.opacity = randomOpacity;
            }, 2000);
        }
    }

    animateNodes() {
        const nodes = document.querySelectorAll('.stage-node');
        
        nodes.forEach((node, index) => {
            setInterval(() => {
                const randomScale = Math.random() * 0.3 + 0.9;
                const randomOpacity = Math.random() * 0.4 + 0.6;
                
                node.style.transform = `scale(${randomScale})`;
                node.style.opacity = randomOpacity;
            }, 3000 + index * 600);
        });
    }

    animateConnections() {
        const connections = document.querySelectorAll('.connection');
        
        connections.forEach((connection, index) => {
            setInterval(() => {
                const randomOpacity = Math.random() * 0.5 + 0.3;
                connection.style.opacity = randomOpacity;
            }, 2500 + index * 500);
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
    
    .stage-modal .modal-content {
        background: rgba(44, 62, 80, 0.95);
        padding: 2rem;
        border-radius: 20px;
        border: 2px solid #9b59b6;
        max-width: 700px;
        max-height: 80vh;
        overflow-y: auto;
        backdrop-filter: blur(20px);
    }
    
    .stage-modal .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid rgba(155, 89, 182, 0.3);
        padding-bottom: 1rem;
    }
    
    .stage-modal h2 {
        color: #9b59b6;
        margin: 0;
        font-size: 1.8rem;
    }
    
    .stage-modal .close-btn {
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
    
    .stage-modal .close-btn:hover {
        background: rgba(231, 76, 60, 0.2);
        color: #e74c3c;
    }
    
    .stage-detail h3 {
        color: #f39c12;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }
    
    .detail-section {
        margin-bottom: 2rem;
    }
    
    .detail-section h4 {
        color: #e67e22;
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    .detail-section ul {
        color: #bdc3c7;
        padding-left: 1.5rem;
        line-height: 1.6;
    }
    
    .detail-section li {
        margin-bottom: 0.5rem;
    }
    
    .detail-section p {
        color: #95a5a6;
        line-height: 1.6;
    }
    
    .application-tooltip h4 {
        color: #9b59b6;
        margin: 0 0 1rem 0;
        font-size: 1.3rem;
    }
    
    .application-tooltip p {
        margin: 0 0 1.5rem 0;
        line-height: 1.6;
    }
    
    .application-tooltip h5 {
        color: #e67e22;
        margin: 1rem 0 0.5rem 0;
        font-size: 1.1rem;
    }
    
    .application-tooltip ul {
        margin: 0 0 1rem 0;
        padding-left: 1.5rem;
    }
    
    .application-tooltip li {
        color: #95a5a6;
        margin-bottom: 0.5rem;
        line-height: 1.4;
    }
    
    .application-tooltip small {
        color: #bdc3c7;
        font-style: italic;
    }
`;
document.head.appendChild(style);

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new Page6Controller();
});

// 导出控制器供其他脚本使用
window.Page6Controller = Page6Controller;