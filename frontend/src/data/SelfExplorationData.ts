export const lifeTimelineEvents = [
  {
    id: 1,
    age: '0-6岁',
    title: '早期依恋与安全感',
    description: '描述你与主要抚养人的关系，以及你如何感受到爱、安全或不安全。这可能影响你成年后的依恋模式。',
    impact: '影响了对亲密关系的看法，以及在压力下的应对方式。',
    emotions: ['安全', '焦虑', '被爱']
  },
  {
    id: 2,
    age: '7-12岁',
    title: '自我认知与社交发展',
    description: '描述你在学校或同伴群体中的经历，你如何看待自己，以及你如何与他人互动。这可能影响你的自尊和社交能力。',
    impact: '塑造了自我价值感，以及在集体中的归属感。',
    emotions: ['好奇', '害羞', '兴奋']
  },
  {
    id: 3,
    age: '13-18岁',
    title: '身份认同与独立性',
    description: '描述你在青少年时期对自我身份的探索，以及你如何开始寻求独立。这可能涉及反叛、寻找榜样或确立个人价值观。',
    impact: '确立了初步的个人价值观和对未来的展望。',
    emotions: ['迷茫', '叛逆', '渴望']
  },
  {
    id: 4,
    age: '19-25岁',
    title: '职业与亲密关系',
    description: '描述你在成年早期在职业发展和亲密关系方面的经历。这可能包括第一次认真恋爱、选择大学专业或开始第一份工作。',
    impact: '影响了对职业的规划和对亲密关系的期待。',
    emotions: ['激情', '挫折', '成长']
  },
  {
    id: 5,
    age: '26-35岁',
    title: '责任与成熟',
    description: '描述你在这一阶段承担的更多责任，例如组建家庭、事业发展或应对生活中的重大挑战。这可能影响你的成熟度和应对压力的能力。',
    impact: '提升了责任感和解决问题的能力。',
    emotions: ['压力', '满足', '平衡']
  },
  {
    id: 6,
    age: '36岁及以上',
    title: '人生回顾与意义',
    description: '描述你对过去经历的整合，以及你如何看待人生的意义和目的。这可能涉及对价值观的重新评估、追求个人成长或回馈社会。',
    impact: '深化了对生命意义的理解，并找到了新的方向。',
    emotions: ['平静', '智慧', '感恩']
  }
];

export const introGuide = {
  title: '如何梳理成长历程',
  paragraphs: [
    '此模板旨在帮助您回顾生命中的重要经历和转折点。每个人的成长历程都是独特的，',
    '请根据您的实际情况进行调整。通过梳理这些事件，您可以：'
  ],
  listItems: [
    '识别影响您当前思维和行为模式的关键经历',
    '理解这些经历如何塑造了您的情绪反应和人际关系模式',
    '发现未被充分处理的情绪和需求'
  ],
  tip: '这是参考模板，您的真实经历可能与示例不同。请自由添加、修改或删除事件，专注于那些对您个人有重要意义的经历。'
};

export const selfAssessmentIntro = {
  title: '自我评估工具',
  lead: '了解自己的心理特质、模式和需求',
  professionalTip: {
    variant: 'info',
    strong: '温馨提示：',
    text: '本页面评估内容由AI生成，仅作效果展示。AI生成的评估结果仅供参考，不能替代专业医疗诊断。如需专业心理评估，请咨询持证心理健康专业人士。'
  }
};

export const assessmentTips = {
  title: '评估提示',
  listItems: [
    '选择最符合你真实感受的答案',
    '无需过度思考，第一反应最准确',
    '评估结果会随时间变化是正常的'
  ]
};

export const defenseMechanisms = [
  { id: 1, name: '否认', description: '拒绝接受现实或事实' },
  { id: 2, name: '投射', description: '将自己不接受的感受归因于他人' },
  { id: 3, name: '合理化', description: '为不可接受的行为找合理借口' },
  { id: 4, name: '退行', description: '面对压力时表现出不成熟的幼稚行为' },
  { id: 5, name: '升华', description: '将负面冲动转化为社会接受的行为' },
  { id: 6, name: '压抑', description: '将痛苦记忆推入无意识中' }
];

export const attachmentAssessment = {
  title: '依恋类型评估',
  questionCount: '10个问题',
  disclaimer: {
    variant: 'warning',
    strong: '免责声明：',
    text: '此评估基于成人依恋理论，但AI生成的评估结果仅供参考，不能作为临床诊断依据。如需专业评估，请咨询心理治疗师。'
  },
  description: '依恋类型影响我们如何看待自己和他人，以及如何在关系中行动。了解你的依恋类型可以帮助你理解自己的关系模式。',
  questionIntro: '请根据你的真实感受回答以下问题:',
  questions: [
    {
      id: 'q1',
      text: '我担心亲密关系中的伴侣不像我关心他们那样关心我。'
    },
    {
      id: 'q2',
      text: '我发现很难完全依赖他人。'
    },
    {
      id: 'q3',
      text: '我感到舒适与他人建立亲密关系。'
    }
    // 更多问题将从 attachmentQuestions.json 加载
  ],
  completionTip: '* 完成所有问题可查看完整评估报告'
};

export const innerChildAssessment = {
  title: '内在小孩需求评估',
  questionCount: '8个问题',
  disclaimer: {
    variant: 'warning',
    strong: '免责声明：',
    text: '此评估基于内在小孩理论，但结果仅供参考。童年创伤等深层问题需要专业心理治疗师协助处理。'
  },
  contentTitle: '内在小孩需求评估',
  contentDescription: '此评估帮助你识别内在小孩未被满足的需求',
  startButton: '开始评估',
  questionIntro: '请根据你的真实感受回答以下问题:',
  questions: [
    {
      id: 'ic1',
      text: '我经常感到内心有一部分需要被关注和照顾。'
    },
    {
      id: 'ic2',
      text: '在面对压力时，我会不自觉地表现出孩子气的行为。'
    },
    {
      id: 'ic3',
      text: '我渴望得到他人的认可和肯定。'
    }
  ]
};

export const defenseAssessment = {
  title: '防御机制识别',
  questionCount: '12个问题',
  disclaimer: {
    variant: 'warning',
    strong: '免责声明：',
    text: '防御机制是普遍的心理现象，此评估基于心理学理论，但AI生成的评估结果仅供参考，不能作为临床诊断依据。如需专业评估，请咨询治疗师。'
  },
  description: '防御机制是我们在面对压力、冲突或威胁时，无意识地保护自己的心理策略。了解你的主要防御机制可以帮助你更好地理解自己的应对模式。',
  questionIntro: '请根据你的真实感受回答以下问题:',
  completionTip: '* 完成所有问题可查看完整评估报告',
  questions: [
    {
      id: 'd1',
      text: '当面对困难时，我倾向于回避或否认问题的存在。'
    },
    {
      id: 'd2',
      text: '我经常把自己不喜欢的特质看到别人身上。'
    },
    {
      id: 'd3',
      text: '我会为自己的错误找各种合理的解释。'
    }
  ]
};

export const personalityAssessment = {
  title: '人格特质分析',
  questionCount: '15个问题',
  disclaimer: {
    variant: 'warning',
    strong: '免责声明：',
    text: '此评估基于主流人格理论，但AI生成的评估结果仅供参考，不能作为临床诊断依据。人格是复杂的，专业评估需要心理学专家进行。'
  },
  contentTitle: '人格特质分析',
  contentDescription: '此评估将帮助你了解自己的人格倾向和核心特质。',
  startButton: '开始评估',
  questionIntro: '请根据你的真实感受回答以下问题:',
  questions: [
    {
      id: 'p1',
      text: '我喜欢尝试新事物和新体验。',
      options: ['非常不符合', '比较不符合', '一般', '比较符合', '非常符合']
    },
    {
      id: 'p2',
      text: '我是一个有条理、负责任的人。',
      options: ['非常不符合', '比较不符合', '一般', '比较符合', '非常符合']
    },
    {
      id: 'p3',
      text: '我喜欢与他人交往，经常参加社交活动。',
      options: ['非常不符合', '比较不符合', '一般', '比较符合', '非常符合']
    }
  ]
};