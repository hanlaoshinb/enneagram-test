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
    {
        id: 7,
        text: "在团队合作中，你通常会：",
        options: [
            { text: "主动承担领导角色", value: "8,3" },
            { text: "做好自己的部分，配合他人", value: "9,6" }
        ]
    },
    {
        id: 8,
        text: "面对批评时，你的第一反应是：",
        options: [
            { text: "认真思考如何改进", value: "1,3" },
            { text: "感到受伤和不安", value: "4,2" }
        ]
    },
    {
        id: 9,
        text: "在休闲时间，你更喜欢：",
        options: [
            { text: "参加社交活动，结识新朋友", value: "7,2" },
            { text: "独处，享受安静的时光", value: "5,4" }
        ]
    },
    {
        id: 10,
        text: "对于规则和制度，你的态度是：",
        options: [
            { text: "严格遵守，追求秩序", value: "1,6" },
            { text: "灵活变通，根据情况调整", value: "7,9" }
        ]
    },
    {
        id: 11,
        text: "在处理问题时，你更注重：",
        options: [
            { text: "实际效果和结果", value: "3,8" },
            { text: "过程的完整性和细节", value: "1,6" }
        ]
    },
    {
        id: 12,
        text: "当他人需要帮助时，你会：",
        options: [
            { text: "立即伸出援手，积极帮助", value: "2,7" },
            { text: "评估情况后再决定是否帮助", value: "5,1" }
        ]
    },
    {
        id: 13,
        text: "在面对压力时，你通常会：",
        options: [
            { text: "积极寻求解决方案", value: "3,8" },
            { text: "需要时间消化和调整", value: "4,9" }
        ]
    },
    {
        id: 14,
        text: "在人际关系中，你更看重：",
        options: [
            { text: "真诚和深度", value: "4,2" },
            { text: "和谐与平衡", value: "9,6" }
        ]
    },
    {
        id: 15,
        text: "对于未来，你更倾向于：",
        options: [
            { text: "制定详细的计划", value: "1,6" },
            { text: "保持开放和灵活", value: "7,9" }
        ]
    },
    {
        id: 16,
        text: "在工作环境中，你更希望：",
        options: [
            { text: "有明确的目标和方向", value: "3,1" },
            { text: "有发挥创意的空间", value: "4,7" }
        ]
    },
    {
        id: 17,
        text: "面对新的挑战，你会：",
        options: [
            { text: "迎难而上，寻求突破", value: "8,3" },
            { text: "谨慎评估，循序渐进", value: "6,5" }
        ]
    },
    {
        id: 18,
        text: "在表达观点时，你倾向于：",
        options: [
            { text: "直接表达，不绕弯子", value: "8,1" },
            { text: "委婉表达，考虑他人感受", value: "2,9" }
        ]
    },
    {
        id: 19,
        text: "对于生活中的不确定性，你会：",
        options: [
            { text: "努力控制和规划", value: "1,6" },
            { text: "接受并适应变化", value: "9,7" }
        ]
    },
    {
        id: 20,
        text: "在团队中，你更愿意：",
        options: [
            { text: "指导和帮助他人", value: "2,8" },
            { text: "专注于完成自己的任务", value: "5,4" }
        ]
    },
    {
        id: 21,
        text: "面对失败时，你通常会：",
        options: [
            { text: "立即寻找改进的方法", value: "3,1" },
            { text: "需要时间调整心情", value: "4,2" }
        ]
    },
    {
        id: 22,
        text: "在做决策时，你更重视：",
        options: [
            { text: "客观事实和数据", value: "5,6" },
            { text: "直觉和个人感受", value: "4,2" }
        ]
    },
    {
        id: 23,
        text: "在处理矛盾时，你倾向于：",
        options: [
            { text: "直面问题，寻求解决", value: "8,3" },
            { text: "寻求和解，避免冲突", value: "9,2" }
        ]
    },
    {
        id: 24,
        text: "对于规则的态度：",
        options: [
            { text: "严格遵守既定规则", value: "1,6" },
            { text: "根据情况灵活处理", value: "7,3" }
        ]
    },
    {
        id: 25,
        text: "在社交场合，你通常：",
        options: [
            { text: "容易成为注意的焦点", value: "7,8" },
            { text: "倾向于低调行事", value: "5,4" }
        ]
    },
    {
        id: 26,
        text: "面对批评建议，你会：",
        options: [
            { text: "认真分析并改进", value: "1,3" },
            { text: "先考虑对方的动机", value: "6,4" }
        ]
    },
    {
        id: 27,
        text: "在工作中，你更注重：",
        options: [
            { text: "任务的完成质量", value: "1,6" },
            { text: "与同事的关系", value: "2,9" }
        ]
    },
    {
        id: 28,
        text: "面对压力时，你会：",
        options: [
            { text: "积极寻求解决方案", value: "3,8" },
            { text: "寻求他人的支持", value: "2,6" }
        ]
    },
    {
        id: 29,
        text: "在生活中，你更看重：",
        options: [
            { text: "成就和认可", value: "3,1" },
            { text: "平和与满足", value: "9,4" }
        ]
    },
    {
        id: 30,
        text: "对于新事物，你通常：",
        options: [
            { text: "充满好奇和热情", value: "7,8" },
            { text: "保持谨慎和观察", value: "5,6" }
        ]
    },
    {
        id: 31,
        text: "在人际交往中，你更倾向于：",
        options: [
            { text: "表达自己的想法", value: "8,3" },
            { text: "倾听他人的观点", value: "2,9" }
        ]
    },
    {
        id: 32,
        text: "处理问题时，你更喜欢：",
        options: [
            { text: "按部就班，循序渐进", value: "1,6" },
            { text: "快速行动，及时调整", value: "7,8" }
        ]
    },
    {
        id: 33,
        text: "在团队合作中，你更重视：",
        options: [
            { text: "效率和成果", value: "3,8" },
            { text: "过程和体验", value: "2,4" }
        ]
    },
    {
        id: 34,
        text: "面对冲突时，你会：",
        options: [
            { text: "直接面对并解决", value: "8,1" },
            { text: "寻求和平的方式", value: "9,2" }
        ]
    },
    {
        id: 35,
        text: "对于目标，你更倾向于：",
        options: [
            { text: "设定高标准严格执行", value: "1,3" },
            { text: "灵活调整随机应变", value: "7,9" }
        ]
    },
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
    3: {
        name: "成就者",
        description: "追求成功，高效务实",
        characteristics: [
            "目标导向",
            "高效率",
            "自信",
            "好胜心强"
        ],
        famousPeople: ["乔布斯", "马云"],
        loveTraits: "在感情中注重效率和成果，可能缺乏耐心",
        suitableJobs: ["企业家", "营销人员", "项目经理", "销售"],
        catchPhrases: ["完成它", "效率最重要", "我能做到"]
    },
    4: {
        name: "个人主义者",
        description: "敏感独特，追求自我表达",
        characteristics: [
            "情感丰富",
            "追求独特性",
            "有创造力",
            "自我意识强"
        ],
        famousPeople: ["梵高", "王尔德"],
        loveTraits: "在感情中追求深度和真实，渴望被理解",
        suitableJobs: ["艺术家", "作家", "设计师", "心理治疗师"],
        catchPhrases: ["没人理解我", "这不够特别", "我感觉..."]
    },
    5: {
        name: "观察者",
        description: "理性客观，追求知识",
        characteristics: [
            "分析能力强",
            "独立",
            "喜欢观察",
            "追求知识"
        ],
        famousPeople: ["爱因斯坦", "比尔·盖茨"],
        loveTraits: "在感情中保持距离，需要个人空间",
        suitableJobs: ["研究员", "分析师", "程序员", "工程师"],
        catchPhrases: ["让我思考一下", "我需要更多信息", "很有趣"]
    },
    6: {
        name: "忠诚者",
        description: "谨慎忠诚，注重安全感",
        characteristics: [
            "责任感强",
            "忠诚",
            "谨慎",
            "防备心理"
        ],
        famousPeople: ["丘吉尔", "林肯"],
        loveTraits: "在感情中寻求安全感，忠诚且担心被抛弃",
        suitableJobs: ["安全顾问", "风险评估", "审计", "行政管理"],
        catchPhrases: ["安全第一", "要小心", "这可靠吗"]
    },
    7: {
        name: "活跃者",
        description: "乐观积极，追求多样体验",
        characteristics: [
            "乐观",
            "活力充沛",
            "灵活多变",
            "避免痛苦"
        ],
        famousPeople: ["莫扎特", "罗宾·威廉姆斯"],
        loveTraits: "在感情中追求刺激和新鲜感，害怕束缚",
        suitableJobs: ["旅行家", "创意总监", "市场策划", "活动策划"],
        catchPhrases: ["太有趣了", "下一个是什么", "有无限可能"]
    },
    8: {
        name: "挑战者",
        description: "强势自信，追求控制权",
        characteristics: [
            "自信",
            "强势",
            "决断力强",
            "保护弱者"
        ],
        famousPeople: ["拿破仑", "史蒂夫·乔布斯"],
        loveTraits: "在感情中占主导地位，直接且强势",
        suitableJobs: ["企业领导", "军事指挥", "政治家", "企业家"],
        catchPhrases: ["我说了算", "直接面对", "强者生存"]
    },
    9: {
        name: "调停者",
        description: "平和包容，追求和谐",
        characteristics: [
            "包容",
            "善解人意",
            "平和",
            "避免冲突"
        ],
        famousPeople: ["达赖喇嘛", "甘地"],
        loveTraits: "在感情中寻求和谐，避免冲突和争执",
        suitableJobs: ["调解员", "顾问", "人力资源", "辅导员"],
        catchPhrases: ["没关系", "随你便", "和平最重要"]
    }
};

// 计算得分函数
function calculatePersonalityType(answers) {
    console.log("计算九型人格类型，答案:", answers);
    
    const scores = {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
        6: 0, 7: 0, 8: 0, 9: 0
    };
    
    answers.forEach(answer => {
        const values = answer.split(',');
        values.forEach(value => {
            // 确保只使用有效的值
            if (value && !isNaN(parseInt(value))) {
                scores[value] = (scores[value] || 0) + 1;
            }
        });
    });
    
    console.log("各类型得分:", scores);
    
    // 找出得分最高的类型
    let maxScore = 0;
    let personalityType = 1;
    
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            personalityType = parseInt(type);
        }
    }
    
    console.log("最终类型:", personalityType);
    return personalityType;
}

// 移除 export 语句 