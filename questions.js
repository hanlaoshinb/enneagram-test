const questions = [
    {
        id: 1,
        text: "在社交场合中，你更倾向于：",
        options: [
            { text: "主动与他人交谈，成为人群的焦点", value: "7,8" },
            { text: "安静观察，等待他人来与你交谈", value: "4,5" }
        ]
    },
    {
        id: 2,
        text: "面对困难时，你通常会：",
        options: [
            { text: "积极寻找解决方案，相信自己能够克服", value: "3,8" },
            { text: "仔细分析情况，谨慎行动", value: "5,6" }
        ]
    },
    {
        id: 3,
        text: "在工作中，你更看重：",
        options: [
            { text: "效率和成果", value: "3,1" },
            { text: "过程的完美和细节", value: "1,6" }
        ]
    },
    {
        id: 4,
        text: "当与他人发生冲突时，你倾向于：",
        options: [
            { text: "直接表达不满，寻求解决", value: "8,1" },
            { text: "避免正面冲突，寻找和谐方式", value: "9,2" }
        ]
    },
    {
        id: 5,
        text: "在做决定时，你更依赖：",
        options: [
            { text: "直觉和感受", value: "4,2" },
            { text: "逻辑和分析", value: "5,6" }
        ]
    },
    {
        id: 6,
        text: "你认为生活中最重要的是：",
        options: [
            { text: "追求成功和成就", value: "3,1" },
            { text: "寻找内心的平和与满足", value: "9,4" }
        ]
    },
    // ... 继续添加更多问题 ...
    {
        id: 36,
        text: "你更喜欢的工作环境是：",
        options: [
            { text: "充满挑战和竞争的环境", value: "3,8" },
            { text: "和谐稳定的环境", value: "9,2" }
        ]
    }
];

// 九型人格类型描述
const personalityTypes = {
    1: {
        name: "完美主义者",
        description: "追求完美，注重原则和规范",
        characteristics: [
            "追求完美和正确",
            "有强烈的是非观",
            "自律性强",
            "注重细节"
        ],
        famousPeople: ["孔子", "达芬奇"],
        loveTraits: "在感情中追求完美，期待伴侣也能达到高标准",
        suitableJobs: ["教师", "质量控制", "编辑", "法律工作者"],
        catchPhrases: ["应该", "必须", "这是正确的方式"]
    },
    2: {
        name: "助人者",
        description: "富有同情心，乐于助人",
        characteristics: [
            "热心助人",
            "重视人际关系",
            "情感丰富",
            "善解人意"
        ],
        famousPeople: ["德兰修女", "南丁格尔"],
        loveTraits: "在感情中很照顾对方，可能过分付出",
        suitableJobs: ["护士", "社工", "心理咨询师", "人力资源"],
        catchPhrases: ["让我帮你", "需要帮助吗", "我很关心你"]
    },
    // ... 其他类型描述 ...
};

// 计算得分函数
function calculatePersonalityType(answers) {
    const scores = {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
        6: 0, 7: 0, 8: 0, 9: 0
    };
    
    answers.forEach(answer => {
        const values = answer.split(',');
        values.forEach(value => {
            scores[value] += 1;
        });
    });
    
    // 找出得分最高的类型
    let maxScore = 0;
    let personalityType = 1;
    
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            personalityType = parseInt(type);
        }
    }
    
    return personalityType;
}

// 导出模块
export { questions, personalityTypes, calculatePersonalityType }; 