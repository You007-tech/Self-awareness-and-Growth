// Page 7 - 互动页②（困境抉择）交互功能

class Page7Controller {
    constructor() {
        this.selectedChoice = null;
        this.choiceData = {
            family: {
                title: "承担家族责任的选择",
                icon: "🏢",
                description: "你选择了承担家族责任，这体现了你对传统价值和稳定性的重视。这个选择显示了你的责任感和对家庭的忠诚。",
                psychology: {
                    title: "心理学分析",
                    content: `
                        <p>从心理学角度来看，你的选择反映了以下特征：</p>
                        <ul>
                            <li><strong>责任导向型人格：</strong>你倾向于将他人的期望和社会责任置于个人欲望之上</li>
                            <li><strong>安全需求优先：</strong>马斯洛需求层次理论中，你优先满足安全和归属需求</li>
                            <li><strong>传统价值认同：</strong>你认同传统的家庭价值观和社会期望</li>
                            <li><strong>风险规避倾向：</strong>你倾向于选择确定性较高的道路，避免未知风险</li>
                        </ul>
                        <p>这种选择模式在埃里克森的发展理论中，可能反映了你在"同一性 vs 角色混乱"阶段更倾向于接受既定的社会角色。</p>
                    `
                },
                growth: {
                    title: "成长建议",
                    content: `
                        <p>虽然承担责任是值得赞赏的品质，但也要注意平衡：</p>
                        <ul>
                            <li><strong>保持自我意识：</strong>在履行责任的同时，不要完全忽视个人的兴趣和梦想</li>
                            <li><strong>寻找创新空间：</strong>在传统框架内寻找创新和自我表达的机会</li>
                            <li><strong>建立支持系统：</strong>与理解你选择的人建立联系，获得情感支持</li>
                            <li><strong>定期反思：</strong>定期评估这个选择是否仍然符合你的价值观和目标</li>
                            <li><strong>培养兴趣爱好：</strong>在工作之外培养个人兴趣，保持生活的多样性</li>
                        </ul>
                    `
                }
            },
            dream: {
                title: "追求艺术梦想的选择",
                icon: "🎨",
                description: "你选择了追求艺术梦想，这体现了你对自我实现和创造性表达的重视。这个选择显示了你的勇气和对内在声音的倾听。",
                psychology: {
                    title: "心理学分析",
                    content: `
                        <p>从心理学角度来看，你的选择反映了以下特征：</p>
                        <ul>
                            <li><strong>自我实现导向：</strong>你优先考虑个人的成长和自我实现，符合马斯洛需求层次的最高层</li>
                            <li><strong>内在动机驱动：</strong>你更多地受到内在兴趣和热情的驱动，而非外在奖励</li>
                            <li><strong>创造性人格：</strong>你具有开放性、想象力和对新体验的渴望</li>
                            <li><strong>风险承担能力：</strong>你愿意为了理想承担不确定性和风险</li>
                        </ul>
                        <p>在罗杰斯的人本主义理论中，这体现了你对"真实自我"的追求和自我概念的一致性。</p>
                    `
                },
                growth: {
                    title: "成长建议",
                    content: `
                        <p>追求梦想需要智慧和策略：</p>
                        <ul>
                            <li><strong>制定实际计划：</strong>将艺术梦想转化为具体可行的行动计划</li>
                            <li><strong>建立支持网络：</strong>寻找志同道合的艺术家和导师，建立专业网络</li>
                            <li><strong>保持经济平衡：</strong>在追求艺术的同时，确保基本生活需求得到满足</li>
                            <li><strong>持续学习：</strong>不断提升艺术技能和对行业的理解</li>
                            <li><strong>保持韧性：</strong>准备面对挫折和拒绝，保持对梦想的坚持</li>
                        </ul>
                    `
                }
            },
            explore: {
                title: "探索未知世界的选择",
                icon: "🌍",
                description: "你选择了探索未知世界，这体现了你的开放性和对自我发现的渴望。这个选择显示了你的勇气和对成长的追求。",
                psychology: {
                    title: "心理学分析",
                    content: `
                        <p>从心理学角度来看，你的选择反映了以下特征：</p>
                        <ul>
                            <li><strong>探索性人格：</strong>你具有高度的开放性和对新体验的渴望</li>
                            <li><strong>成长心态：</strong>你相信通过经历和学习可以不断发展自己</li>
                            <li><strong>自我发现导向：</strong>你优先考虑了解真实的自我，而非满足外在期望</li>
                            <li><strong>不确定性容忍：</strong>你能够接受和拥抱生活中的不确定性</li>
                        </ul>
                        <p>这种选择在埃里克森的理论中体现了健康的"同一性探索"过程，是形成稳定自我认同的重要步骤。</p>
                    `
                },
                growth: {
                    title: "成长建议",
                    content: `
                        <p>探索之旅需要准备和智慧：</p>
                        <ul>
                            <li><strong>设定探索目标：</strong>明确你希望通过探索获得什么样的成长和发现</li>
                            <li><strong>保持开放心态：</strong>对新的文化、观念和体验保持开放和好奇</li>
                            <li><strong>记录成长过程：</strong>通过日记、博客等方式记录你的体验和感悟</li>
                            <li><strong>建立安全网：</strong>确保有可以依靠的支持系统和后备计划</li>
                            <li><strong>整合经验：</strong>定期反思和整合你的经历，形成对自我的更深理解</li>
                        </ul>
                    `
                }
            }
        };
        
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupChoiceInteractions();
        this.startBackgroundAnimations();
        this.setupKeyboardNavigation();
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
        const introText = document.querySelector('.intro-text');
        
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
        
        if (introText) {
            introText.style.opacity = '0';
            introText.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                introText.style.transition = 'all 1s ease-out 0.6s';
                introText.style.opacity = '1';
                introText.style.transform = 'translateY(0)';
            }, 700);
        }

        // 情境卡片动画
        this.animateScenarioCard();
        
        // 选择卡片动画
        this.animateChoiceCards();
    }

    animateScenarioCard() {
        const scenarioCard = document.querySelector('.scenario-card');
        
        if (scenarioCard) {
            scenarioCard.style.opacity = '0';
            scenarioCard.style.transform = 'translateY(50px) scale(0.9)';
            
            setTimeout(() => {
                scenarioCard.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                scenarioCard.style.opacity = '1';
                scenarioCard.style.transform = 'translateY(0) scale(1)';
            }, 1000);
        }
    }

    animateChoiceCards() {
        const choiceCards = document.querySelectorAll('.choice-card');
        
        choiceCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(80px) scale(0.8)';
            
            setTimeout(() => {
                card.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, 1500 + index * 200);
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
                    
                    // 特殊处理反思问题
                    if (entry.target.classList.contains('question-item')) {
                        this.animateQuestionItem(entry.target);
                    }
                }
            });
        }, observerOptions);

        // 观察需要动画的元素
        const animateElements = document.querySelectorAll('.question-item');
        animateElements.forEach(el => observer.observe(el));
    }

    setupChoiceInteractions() {
        const choiceCards = document.querySelectorAll('.choice-card');
        const choiceBtns = document.querySelectorAll('.choice-btn');
        
        // 卡片悬停效果
        choiceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.highlightChoice(card);
            });
            
            card.addEventListener('mouseleave', () => {
                if (!card.classList.contains('selected')) {
                    this.resetChoice(card);
                }
            });
            
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('choice-btn')) {
                    const btn = card.querySelector('.choice-btn');
                    if (btn) btn.click();
                }
            });
        });
        
        // 选择按钮点击事件
        choiceBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const choice = btn.getAttribute('data-choice');
                this.makeChoice(choice);
            });
        });
    }

    highlightChoice(card) {
        // 添加高亮效果
        const icon = card.querySelector('.choice-icon');
        const traits = card.querySelectorAll('.trait');
        
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        }
        
        traits.forEach(trait => {
            trait.style.transform = 'scale(1.05)';
        });
        
        // 添加光晕效果
        card.style.boxShadow = '0 25px 60px rgba(0,0,0,0.3), 0 0 50px rgba(255,255,255,0.1)';
    }

    resetChoice(card) {
        const icon = card.querySelector('.choice-icon');
        const traits = card.querySelectorAll('.trait');
        
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
        
        traits.forEach(trait => {
            trait.style.transform = 'scale(1)';
        });
        
        card.style.boxShadow = '';
    }

    makeChoice(choice) {
        this.selectedChoice = choice;
        
        // 更新选择状态
        this.updateChoiceSelection(choice);
        
        // 显示选择结果
        setTimeout(() => {
            this.showResult(choice);
        }, 800);
        
        // 添加选择音效（如果需要）
        this.playChoiceSound();
    }

    updateChoiceSelection(selectedChoice) {
        const choiceCards = document.querySelectorAll('.choice-card');
        
        choiceCards.forEach(card => {
            const cardChoice = card.getAttribute('data-choice');
            
            if (cardChoice === selectedChoice) {
                card.classList.add('selected');
                
                // 添加选中动画
                card.style.animation = 'choiceSelected 0.6s ease-out';
                
                // 禁用其他选择
                const otherCards = document.querySelectorAll(`.choice-card:not([data-choice="${selectedChoice}"])`);
                otherCards.forEach(otherCard => {
                    otherCard.style.opacity = '0.5';
                    otherCard.style.pointerEvents = 'none';
                    otherCard.style.transform = 'scale(0.95)';
                });
            }
        });
    }

    showResult(choice) {
        const resultSection = document.getElementById('resultSection');
        const resultIcon = document.getElementById('resultIcon');
        const resultTitle = document.getElementById('resultTitle');
        const resultDescription = document.getElementById('resultDescription');
        const psychologyInsight = document.getElementById('psychologyInsight');
        const growthAdvice = document.getElementById('growthAdvice');
        
        const data = this.choiceData[choice];
        
        if (resultSection && data) {
            // 更新内容
            if (resultIcon) resultIcon.textContent = data.icon;
            if (resultTitle) resultTitle.textContent = data.title;
            if (resultDescription) resultDescription.textContent = data.description;
            if (psychologyInsight) psychologyInsight.innerHTML = data.psychology.content;
            if (growthAdvice) growthAdvice.innerHTML = data.growth.content;
            
            // 显示结果区域
            resultSection.style.display = 'block';
            
            // 滚动到结果区域
            setTimeout(() => {
                resultSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 300);
            
            // 添加打字机效果
            this.typewriterEffect(resultDescription, data.description);
        }
    }

    typewriterEffect(element, text) {
        if (!element) return;
        
        element.textContent = '';
        let index = 0;
        
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 30);
    }

    animateQuestionItem(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100);
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (this.selectedChoice) return; // 已经做出选择后禁用键盘导航
            
            switch(e.key) {
                case '1':
                    this.makeChoice('family');
                    break;
                case '2':
                    this.makeChoice('dream');
                    break;
                case '3':
                    this.makeChoice('explore');
                    break;
            }
        });
    }

    playChoiceSound() {
        // 创建音频上下文（如果浏览器支持）
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            try {
                const audioContext = new (AudioContext || webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);
                
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            } catch (e) {
                // 静默处理音频错误
                console.log('Audio not supported');
            }
        }
    }

    startBackgroundAnimations() {
        // 启动背景SVG动画
        this.animateStartPoint();
        this.animatePathDecorations();
    }

    animateStartPoint() {
        const startPoint = document.querySelector('.start-point');
        
        if (startPoint) {
            setInterval(() => {
                const randomScale = Math.random() * 0.5 + 0.8;
                const randomOpacity = Math.random() * 0.4 + 0.6;
                
                startPoint.style.transform = `scale(${randomScale})`;
                startPoint.style.opacity = randomOpacity;
            }, 2000);
        }
    }

    animatePathDecorations() {
        const decorations = document.querySelectorAll('.decoration');
        
        decorations.forEach((decoration, index) => {
            setInterval(() => {
                const randomY = Math.random() * 40 - 20;
                const randomOpacity = Math.random() * 0.6 + 0.4;
                
                decoration.style.transform = `translateY(${randomY}px)`;
                decoration.style.opacity = randomOpacity;
            }, 3000 + index * 600);
        });
    }
}

// 全局函数供HTML调用
function resetChoice() {
    // 重置所有选择状态
    const choiceCards = document.querySelectorAll('.choice-card');
    const resultSection = document.getElementById('resultSection');
    
    choiceCards.forEach(card => {
        card.classList.remove('selected');
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
        card.style.transform = 'scale(1)';
        card.style.animation = '';
    });
    
    if (resultSection) {
        resultSection.style.display = 'none';
    }
    
    // 重置控制器状态
    if (window.page7Controller) {
        window.page7Controller.selectedChoice = null;
    }
    
    // 滚动到选择区域
    const choicesSection = document.querySelector('.choices-section');
    if (choicesSection) {
        choicesSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}

function continueJourney() {
    // 继续到下一页
    if (typeof NavigationController !== 'undefined') {
        NavigationController.nextPage();
    }
}

// 添加CSS动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes choiceSelected {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1.02);
        }
    }
    
    .choice-card.selected {
        animation: choiceSelected 0.6s ease-out;
    }
    
    @keyframes resultFadeIn {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .result-section {
        animation: resultFadeIn 0.8s ease-out;
    }
`;
document.head.appendChild(style);

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    window.page7Controller = new Page7Controller();
});

// 导出控制器供其他脚本使用
window.Page7Controller = Page7Controller;