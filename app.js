import { questions, personalityTypes, calculatePersonalityType } from './questions.js';

// DOM 元素
const startButton = document.querySelector('#start-test');
const testContainer = document.createElement('div');
testContainer.className = 'fixed inset-0 bg-white z-50 overflow-auto hidden';
document.body.appendChild(testContainer);

// 当前问题索引
let currentQuestionIndex = 0;
// 用户答案
const userAnswers = [];

// 开始测试
function startTest() {
    testContainer.classList.remove('hidden');
    showQuestion(currentQuestionIndex);
}

// 显示问题
function showQuestion(index) {
    const question = questions[index];
    testContainer.innerHTML = `
        <div class="min-h-screen flex flex-col items-center justify-center p-6">
            <div class="w-full max-w-2xl">
                <div class="mb-8">
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-primary h-2 rounded-full transition-all duration-300" 
                             style="width: ${((index + 1) / questions.length) * 100}%"></div>
                    </div>
                    <p class="text-right mt-2 text-gray-500">问题 ${index + 1}/${questions.length}</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg question-transition">
                    <h2 class="text-2xl font-bold mb-8 text-center">${question.text}</h2>
                    <div class="space-y-4">
                        ${question.options.map((option, optionIndex) => `
                            <button 
                                class="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors"
                                onclick="window.handleAnswer('${option.value}')">
                                ${option.text}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 处理答案
window.handleAnswer = function(answer) {
    userAnswers.push(answer);
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

// 显示结果
function showResult() {
    const personalityType = calculatePersonalityType(userAnswers);
    const result = personalityTypes[personalityType];
    
    testContainer.innerHTML = `
        <div class="min-h-screen flex flex-col items-center justify-center p-6">
            <div class="w-full max-w-3xl bg-white rounded-2xl p-8 shadow-lg">
                <h2 class="text-3xl font-bold mb-6 text-center">你的九型人格类型是：${result.name}</h2>
                
                <div class="space-y-8">
                    <div>
                        <h3 class="text-xl font-semibold mb-3">性格描述</h3>
                        <p class="text-gray-600">${result.description}</p>
                    </div>
                    
                    <div>
                        <h3 class="text-xl font-semibold mb-3">主要特征</h3>
                        <ul class="list-disc list-inside text-gray-600 space-y-2">
                            ${result.characteristics.map(char => `<li>${char}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-xl font-semibold mb-3">典型代表人物</h3>
                        <p class="text-gray-600">${result.famousPeople.join('、')}</p>
                    </div>
                    
                    <div>
                        <h3 class="text-xl font-semibold mb-3">恋爱特征</h3>
                        <p class="text-gray-600">${result.loveTraits}</p>
                    </div>
                    
                    <div>
                        <h3 class="text-xl font-semibold mb-3">适合的职业</h3>
                        <p class="text-gray-600">${result.suitableJobs.join('、')}</p>
                    </div>
                    
                    <div>
                        <h3 class="text-xl font-semibold mb-3">常用语</h3>
                        <p class="text-gray-600">${result.catchPhrases.join('、')}</p>
                    </div>
                </div>
                
                <div class="mt-12 flex justify-center space-x-4">
                    <button 
                        onclick="window.location.reload()" 
                        class="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                        重新测试
                    </button>
                    <button 
                        onclick="window.print()" 
                        class="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
                        打印结果
                    </button>
                </div>
            </div>
        </div>
    `;
}

// 添加开始测试按钮事件监听
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.trim() === '开始测试' || 
        button.textContent.trim() === '立即开始测试') {
        button.addEventListener('click', startTest);
    }
});

// 添加滚动动画
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}); 