// Page 9 - 整合与成长页交互功能

class Page9Controller {
    constructor() {
        this.animationObserver = null;
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupNodeInteractions();
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

        // 时间线动画
        this.animateTimeline();
    }

    // 时间线动画
    animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 1200 + index * 300);
        });
    }

    // 滚动触发动画
    setupScrollAnimations() {
        this.animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    if (element.classList.contains('gain-card')) {
                        this.animateGainCard(element);
                    } else if (element.classList.contains('vision-card')) {
                        this.animateVisionCard(element);
                    } else if (element.classList.contains('gratitude-card')) {
                        this.animateGratitudeCard(element);
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        // 观察所有需要动画的元素
        const elementsToObserve = document.querySelectorAll('.gain-card, .vision-card, .gratitude-card');
        elementsToObserve.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            this.animationObserver.observe(element);
        });
    }

    // 收获卡片动画
    animateGainCard(card) {
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';

        // 内部元素动画
        const icon = card.querySelector('.gain-icon');
        const header = card.querySelector('h4');
        const details = card.querySelectorAll('.detail-item');
        
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

        if (details.length) {
            details.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    item.style.transition = 'all 0.5s ease-out';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 700 + index * 150);
            });
        }
    }

    // 愿景卡片动画
    animateVisionCard(card) {
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';

        // 目标项目逐个显示
        const goalItems = card.querySelectorAll('.goal-item');
        goalItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 300 + index * 200);
        });
    }

    // 感恩卡片动画
    animateGratitudeCard(card) {
        card.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';

        const gratitudeText = card.querySelector('.gratitude-text');
        const quote = card.querySelector('blockquote');
        
        if (gratitudeText) {
            setTimeout(() => {
                gratitudeText.style.opacity = '0';
                gratitudeText.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    gratitudeText.style.transition = 'all 1s ease';
                    gratitudeText.style.opacity = '1';
                    gratitudeText.style.transform = 'scale(1)';
                }, 100);
            }, 500);
        }

        if (quote) {
            setTimeout(() => {
                this.typewriterEffect(quote);
            }, 1000);
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
        }, 30);
    }

    // 悬停效果
    setupHoverEffects() {
        // 时间线标记悬停
        const timelineMarkers = document.querySelectorAll('.timeline-marker');
        timelineMarkers.forEach(marker => {
            marker.addEventListener('mouseenter', () => {
                this.playHoverSound();
                marker.style.transform = 'translateX(-50%) scale(1.3)';
                marker.style.boxShadow = '0 0 20px rgba(255,255,255,0.3)';
            });

            marker.addEventListener('mouseleave', () => {
                marker.style.transform = 'translateX(-50%) scale(1)';
                marker.style.boxShadow = 'none';
            });
        });

        // 收获卡片悬停
        const gainCards = document.querySelectorAll('.gain-card');
        gainCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // 详情项目悬停
        const detailItems = document.querySelectorAll('.detail-item');
        detailItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(10px)';
                item.style.background = 'rgba(44, 62, 80, 0.8)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
                item.style.background = 'rgba(44, 62, 80, 0.5)';
            });
        });

        // 目标项目悬停
        const goalItems = document.querySelectorAll('.goal-item');
        goalItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(10px)';
                item.style.background = 'rgba(52, 73, 94, 0.9)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
                item.style.background = 'rgba(52, 73, 94, 0.6)';
            });
        });
    }

    // 节点交互
    setupNodeInteractions() {
        const growthNodes = document.querySelectorAll('.growth-node');
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        growthNodes.forEach((node, index) => {
            node.addEventListener('click', () => {
                // 播放点击音效
                this.playClickSound();
                
                // 高亮对应的时间线项目
                if (timelineItems[index]) {
                    this.highlightTimelineItem(timelineItems[index]);
                }
                
                // 显示节点信息
                this.showNodeInfo(node, index);
            });
        });
    }

    // 高亮时间线项目
    highlightTimelineItem(item) {
        // 重置所有项目
        const allItems = document.querySelectorAll('.timeline-item');
        allItems.forEach(i => {
            i.style.transform = 'translateY(0)';
            i.style.boxShadow = 'none';
            i.style.zIndex = '1';
        });
        
        // 高亮选中项目
        item.style.transform = 'translateY(-10px)';
        item.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
        item.style.zIndex = '2';
        
        // 滚动到该项目
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // 显示节点信息
    showNodeInfo(node, index) {
        // 创建或更新信息弹窗
        let infoPopup = document.getElementById('node-info-popup');
        if (!infoPopup) {
            infoPopup = document.createElement('div');
            infoPopup.id = 'node-info-popup';
            document.body.appendChild(infoPopup);
        }
        
        // 设置弹窗样式
        infoPopup.style.position = 'fixed';
        infoPopup.style.padding = '1.5rem';
        infoPopup.style.background = 'rgba(44, 62, 80, 0.95)';
        infoPopup.style.borderRadius = '15px';
        infoPopup.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)';
        infoPopup.style.zIndex = '1000';
        infoPopup.style.maxWidth = '300px';
        infoPopup.style.backdropFilter = 'blur(10px)';
        
        // 根据节点索引设置内容
        const nodeInfo = [
            { title: '起点：困境', content: '面临自我同一性撕裂的危机，感到迷茫和困惑。' },
            { title: '过程：探索', content: '开始寻求心理咨询，探索自我，理解问题的根源。' },
            { title: '过程：理解', content: '通过理论框架，深入理解自己的发展阶段和需求。' },
            { title: '过程：转化', content: '开始积极调整认知和行为，建立新的应对模式。' },
            { title: '终点：成长', content: '实现自我整合，建立更加和谐统一的身份认同。' }
        ];
        
        // 设置弹窗内容
        const info = nodeInfo[index] || { title: '成长节点', content: '这是成长历程中的重要节点。' };
        
        // 根据节点类型设置边框颜色
        let borderColor = '#3498db';
        if (node.classList.contains('start-node')) borderColor = '#e74c3c';
        if (node.classList.contains('end-node')) borderColor = '#2ecc71';
        
        infoPopup.style.border = `2px solid ${borderColor}`;
        
        infoPopup.innerHTML = `
            <h4 style="color: ${borderColor}; margin: 0 0 1rem 0; font-size: 1.2rem;">${info.title}</h4>
            <p style="color: #ecf0f1; margin: 0; line-height: 1.5;">${info.content}</p>
            <div style="text-align: center; margin-top: 1rem;">
                <button id="close-popup" style="background: ${borderColor}; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">关闭</button>
            </div>
        `;
        
        // 计算弹窗位置
        const nodeRect = node.getBoundingClientRect();
        const popupWidth = 300;
        const popupHeight = 150;
        
        // 确保弹窗在视口内
        let left = nodeRect.left + nodeRect.width / 2 - popupWidth / 2;
        let top = nodeRect.top - popupHeight - 20;
        
        // 调整如果超出视口
        if (left < 10) left = 10;
        if (left + popupWidth > window.innerWidth - 10) left = window.innerWidth - popupWidth - 10;
        if (top < 10) top = nodeRect.bottom + 20;
        
        infoPopup.style.left = `${left}px`;
        infoPopup.style.top = `${top}px`;
        
        // 添加动画效果
        infoPopup.style.opacity = '0';
        infoPopup.style.transform = 'scale(0.8)';
        infoPopup.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            infoPopup.style.opacity = '1';
            infoPopup.style.transform = 'scale(1)';
        }, 10);
        
        // 添加关闭按钮事件
        setTimeout(() => {
            const closeButton = document.getElementById('close-popup');
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    infoPopup.style.opacity = '0';
                    infoPopup.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        infoPopup.remove();
                    }, 300);
                });
            }
        }, 100);
    }

    // 背景SVG动画
    setupBackgroundAnimations() {
        // 成长节点动画
        const growthNodes = document.querySelectorAll('.growth-node');
        growthNodes.forEach((node, index) => {
            node.style.animationDelay = `${index * 1}s`;
        });

        // 网络线条动画
        const networkLines = document.querySelectorAll('.network-line');
        networkLines.forEach((line, index) => {
            line.style.animationDelay = `${index * 0.5}s`;
        });

        // 智慧点动画
        const wisdomPoints = document.querySelectorAll('.wisdom-point');
        wisdomPoints.forEach((point, index) => {
            point.style.animationDelay = `${index * 0.5}s`;
        });

        // 粒子动画
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            particle.style.animationDelay = `${index * 0.7}s`;
        });

        // 动态智慧中心脉冲
        const wisdomCenter = document.querySelector('.wisdom-center');
        if (wisdomCenter) {
            setInterval(() => {
                wisdomCenter.style.filter = 'drop-shadow(0 0 30px rgba(241, 196, 15, 0.8))';
                setTimeout(() => {
                    wisdomCenter.style.filter = 'drop-shadow(0 0 15px rgba(241, 196, 15, 0.5))';
                }, 500);
            }, 2000);
        }
    }

    // 键盘导航
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 't':
                case 'T':
                    this.animateTimeline();
                    break;
                case 'g':
                case 'G':
                    this.highlightGainCards();
                    break;
                case 'v':
                case 'V':
                    this.highlightVisionCards();
                    break;
                case 'n':
                case 'N':
                    this.highlightNodes();
                    break;
            }
        });
    }

    // 高亮收获卡片
    highlightGainCards() {
        const gainCards = document.querySelectorAll('.gain-card');
        gainCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(-15px) scale(1.05)';
                card.style.boxShadow = '0 25px 60px rgba(0,0,0,0.3)';
                
                setTimeout(() => {
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.boxShadow = 'none';
                }, 800);
            }, index * 200);
        });
    }

    // 高亮愿景卡片
    highlightVisionCards() {
        const visionCards = document.querySelectorAll('.vision-card');
        visionCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(-10px)';
                card.style.borderColor = '#3498db';
                card.style.boxShadow = '0 20px 50px rgba(52, 152, 219, 0.2)';
                
                setTimeout(() => {
                    card.style.transform = 'translateY(0)';
                    card.style.borderColor = 'rgba(52, 152, 219, 0.3)';
                    card.style.boxShadow = 'none';
                }, 800);
            }, index * 200);
        });
    }

    // 高亮成长节点
    highlightNodes() {
        const growthNodes = document.querySelectorAll('.growth-node');
        growthNodes.forEach((node, index) => {
            setTimeout(() => {
                node.style.r = '35';
                node.style.opacity = '1';
                node.style.filter = 'drop-shadow(0 0 20px currentColor)';
                
                setTimeout(() => {
                    node.style.r = '20';
                    node.style.opacity = '0.8';
                    node.style.filter = 'none';
                }, 800);
            }, index * 200);
        });
    }

    // 播放悬停音效（模拟）
    playHoverSound() {
        // 这里可以添加实际的音效播放逻辑
        console.log('🔊 播放悬停音效');
    }

    // 播放点击音效（模拟）
    playClickSound() {
        // 这里可以添加实际的音效播放逻辑
        console.log('🔊 播放点击音效');
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
    const page9Controller = new Page9Controller();
    
    // 页面卸载时清理资源
    window.addEventListener('beforeunload', () => {
        page9Controller.destroy();
    });
});

// 全局函数
window.resetTimelineAnimations = function() {
    const controller = new Page9Controller();
    controller.animateTimeline();
};

window.showGrowthJourney = function() {
    const controller = new Page9Controller();
    controller.highlightNodes();
    setTimeout(() => {
        controller.animateTimeline();
    }, 1000);
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
    
    @keyframes nodeInfoAppear {
        0% { 
            opacity: 0;
            transform: scale(0.8);
        }
        100% { 
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes timelineHighlight {
        0%, 100% { 
            box-shadow: none;
            transform: translateY(0);
        }
        50% { 
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            transform: translateY(-10px);
        }
    }
    
    @keyframes gratitudeReveal {
        0% { 
            opacity: 0;
            transform: scale(0.9);
        }
        100% { 
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);