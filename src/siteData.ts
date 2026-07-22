export const site = {
  name: '刘旭',
  url: 'https://ailiuxu.com',
  email: 'vencent_2008@126.com',
  wechat: 'Seele_u',
  contentBrand: '一念既出',
  title: '刘旭｜把 AI、数据和流程用进真实工作',
  description:
    '刘旭关注 AI、数据与流程在真实工作中的落地：从具体问题出发，用小型验证判断一件事是否值得继续。',
} as const;

export const navigation = [
  { label: '首页', href: '/' },
  { label: '案例', href: '/cases/' },
  { label: '合作方式', href: '/work-with-me/' },
  { label: '文章', href: '/writing/' },
  { label: '关于', href: '/about/' },
] as const;

export const problems = [
  {
    number: '01',
    title: '信息散',
    description:
      '客户、报价、订单和跟进散在微信、文档和表格里，想查一件事要问好几个人。',
  },
  {
    number: '02',
    title: '重复劳动多',
    description:
      '团队每天反复整理、催办和核对，流程依赖某个熟练员工。',
  },
  {
    number: '03',
    title: '数据有了但不会用',
    description:
      '表格和系统积累了很多数据，却不知道哪里最值得优化或自动化。',
  },
  {
    number: '04',
    title: '想用 AI 又怕踩坑',
    description:
      '担心买错系统、数据泄露、员工用不起来，最后只剩一个演示。',
  },
] as const;

export const processSteps = [
  {
    number: '01',
    title: '诊断',
    description: '访谈实际参与者，画清当前流程、重复劳动和关键损耗。',
  },
  {
    number: '02',
    title: '排序',
    description: '按业务价值、数据条件和实施成本，找出最值得先试的场景。',
  },
  {
    number: '03',
    title: '验证',
    description: '使用脱敏样例完成一个小型可用原型，不先投入一套大系统。',
  },
  {
    number: '04',
    title: '交付',
    description: '上线、培训、留文档，并根据真实结果决定继续、调整或停止。',
  },
] as const;

export type CaseStudy = {
  slug: string;
  kind: '案例' | '能力证明';
  title: string;
  shortTitle: string;
  summary: string;
  tags: readonly string[];
  date: string;
  context: string;
  challenge: string;
  approach: readonly string[];
  outcome: readonly string[];
  boundary: string;
  evidenceUrl: string;
  evidenceLabel: string;
  metaDescription: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: 'beijing-sport-university-ai-workshop',
    kind: '案例',
    shortTitle: '北体 AI 实践工作坊',
    title: '120 分钟，让体育教师和学生把业务想法做成第一版原型',
    summary:
      '面对多数没有编程经验的体育教师和学生，我们没有从模型原理讲起，而是先把真实问题说清楚。',
    tags: ['北京体育大学场景', '120 分钟实操', '参与者原型'],
    date: '2026-04-28',
    context:
      '一场面向体育教师和学生的 AI 实践工作坊。参与者平时忙于上课、备课、带队和比赛，多数没有编程经验。',
    challenge:
      '“AI 跟我的工作有什么关系”比“该学哪个工具”更先出现。真正的难点，是把一个模糊想法缩小成当天可以开始验证的任务。',
    approach: [
      '先回答四个问题：谁会使用、它做什么、明确不做什么、什么样算完成。',
      '用十五分钟澄清问题，再让参与者直接完成第一版，而不是先学一整套技术。',
      '让每个人围绕自己的体育场景动手，刘旭负责提问、拆解与现场支持。',
    ],
    outcome: [
      '参与者尝试了篮球赛事数据页、体育 IP 共创平台、体操评分等多个方向。',
      '实操从下午一点半开始，120 分钟后停手分享。',
      '这个案例证明的是“让非技术人员开始做”的培训方法，不是刘旭个人在两小时内交付了一个篮协系统。',
    ],
    boundary:
      '文章阅读量属于内容传播数据，不属于项目成效；参与者完成的原型也不归为刘旭个人交付。',
    evidenceUrl: 'https://mp.weixin.qq.com/s/Kin-PjZVj6gLASDUbf7Jsg',
    evidenceLabel: '查看 2026-04-28 原始文章',
    metaDescription:
      '刘旭在北京体育大学相关场景中，用 120 分钟实践工作坊帮助体育教师和学生把真实业务想法做成第一版原型。',
  },
  {
    slug: 'basketball-registration-minimum-solution',
    kind: '案例',
    shortTitle: '篮协报名流程',
    title: '先别造大系统：十分钟验证一场篮球赛的报名流程',
    summary:
      '对方最初提出“想要一个报名系统”。继续追问后，核心需求其实是一张能收集、查看和导出信息的表。',
    tags: ['真实需求访谈', '十分钟第一版', '最小方案验证'],
    date: '2026-06-17',
    context:
      '一位篮协老师通过公众号联系，希望为企业杯篮球赛准备报名系统。预计有二十来支队伍陆续报名。',
    challenge:
      '“系统”是对方最先说出的方案，但他真正需要的是：让参赛者填写人员信息，并在一个后台看到全部资料。',
    approach: [
      '先追问队伍、字段、后台和使用方式，没有立即开始定制开发。',
      '用飞书多维表格搭出第一版表单，让对方先扫码填写和验证。',
      '把证件位数、重复信息、后台查看和 Excel 导出放进最小闭环。',
    ],
    outcome: [
      '第一版表单约十分钟完成。',
      '报名信息可以逐行查看、筛选和导出，先替代纸质表的收集与二次录入。',
      '最重要的结果不是“做了一个大系统”，而是找到当下刚刚够用的方案。',
    ],
    boundary:
      '这是一次第一版需求验证，不表述为长期稳定运行的完整赛事平台；所有参赛者个人信息均不在本站公开。',
    evidenceUrl: 'https://mp.weixin.qq.com/s/vVuSbEygW4VBwqxVaTpC9A',
    evidenceLabel: '查看 2026-06-17 原始文章',
    metaDescription:
      '从“做一个报名系统”到十分钟完成一张可验证表单：刘旭怎样通过需求追问找到篮协报名流程的最小方案。',
  },
  {
    slug: 'training-for-non-technical-teams',
    kind: '能力证明',
    shortTitle: '培训与知识转化',
    title: '让非技术人员带着自己的问题，真正开始使用 AI',
    summary:
      '培训不是展示工具，而是把复杂能力拆成练习，让参与者围绕自己的真实任务完成一次闭环。',
    tags: ['得到讲师', '真实任务练习', '非技术人员'],
    date: '2026-01-28',
    context:
      '刘旭曾担任得到讲师，并在得到直播间分享 AI 与教学实践，也持续面向教师和业务人员设计实践内容。',
    challenge:
      '许多参与者会聊天式使用 AI，却很难把它变成一个能完成真实任务的工作方法。',
    approach: [
      '从参与者正在做的事情出发，不用长时间铺陈模型原理。',
      '把需求澄清、样例验证和复盘做成可跟随的练习。',
      '让工具退到方法之后，重点检验参与者能否独立完成任务。',
    ],
    outcome: [
      '形成面向非技术人员的实践型教学方法。',
      '得到讲师和直播分享是可核验的经历证据。',
      '具体企业培训场次与结果将在取得可公开证据后补充，不在这里提前声称。',
    ],
    boundary:
      '本页是能力证明，不冒充某家企业的客户案例，也不使用未核实的学习人数或培训效果数字。',
    evidenceUrl: 'https://mp.weixin.qq.com/s/jE1JiGpOoEI6eX0y-BiPXA',
    evidenceLabel: '查看得到直播分享记录',
    metaDescription:
      '刘旭的实践型 AI 培训方法：让非技术人员围绕真实任务完成一次需求澄清、验证和复盘。',
  },
];

export const services = [
  {
    title: '业务 AI 机会诊断',
    fit: '知道业务里有浪费，但不知道该从哪里开始。',
    deliverable: '问题地图、机会清单、优先级、主要风险，以及哪些事情暂时不值得做。',
  },
  {
    title: '小型验证项目',
    fit: '已经有一个具体流程，也能提供脱敏样例数据。',
    deliverable: '一个能用真实样例跑通的原型、前后对比和继续 / 调整 / 停止的建议。',
  },
  {
    title: '团队培训与共创',
    fit: '希望员工真的把 AI 用进工作，而不是只听一场分享。',
    deliverable: '结合团队场景设计的练习、模板、操作手册和现场共创。',
  },
] as const;

export type SelectedArticle = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  keyPoints: readonly string[];
  sourceUrl: string;
  metaDescription: string;
};

export const selectedArticles: readonly SelectedArticle[] = [
  {
    slug: 'basketball-registration-one-table',
    title: '一个篮协找我做报名系统，最后我只给了他一张表',
    date: '2026-06-17',
    category: '需求与最小验证',
    summary: '“系统”不一定是答案。继续追问使用者、字段和后台需求后，一张表就能完成第一版验证。',
    keyPoints: ['先追问真实任务', '用最小方案验证', '把复杂度留到确有必要时'],
    sourceUrl: 'https://mp.weixin.qq.com/s/vVuSbEygW4VBwqxVaTpC9A',
    metaDescription: '一个篮协提出要报名系统，刘旭通过需求追问，用一张表完成第一版验证。',
  },
  {
    slug: 'sports-ai-workshop-120-minutes',
    title: '体育生 2 小时搓个赛事系统？',
    date: '2026-04-28',
    category: 'AI 培训',
    summary: '一场面向体育教师和学生的实践工作坊：从自己的真实问题出发，在 120 分钟里完成第一版。',
    keyPoints: ['四个问题澄清需求', '非技术人员直接动手', '围绕真实体育场景'],
    sourceUrl: 'https://mp.weixin.qq.com/s/Kin-PjZVj6gLASDUbf7Jsg',
    metaDescription: '北京体育大学相关场景中的 120 分钟 AI 实践工作坊记录。',
  },
  {
    slug: 'six-invoices-one-table',
    title: '6 种发票，一张表搞定：我们是怎么做的',
    date: '2026-04-21',
    category: '流程与单据',
    summary: '从财务人员的实际处理过程出发，把多种发票的识别、字段和汇总放进一张可继续使用的表。',
    keyPoints: ['从真实单据开始', '统一字段与汇总', '把一次演示变成可复用流程'],
    sourceUrl: 'https://mp.weixin.qq.com/s/wuTxEm7NrQoya67bpNDA9w',
    metaDescription: '怎样把 6 种发票的处理过程整理进一张表：刘旭的真实流程实践。',
  },
  {
    slug: 'three-tables-free-crm',
    title: '客户信息散了一地？3 张表搭出一套会自动整理的免费 CRM',
    date: '2026-04-07',
    category: '客户与销售',
    summary: '客户信息、跟进记录和任务提醒不必继续散落；先用三张表把最基本的客户管理关系接起来。',
    keyPoints: ['客户信息集中', '跟进记录关联', '从轻量流程开始'],
    sourceUrl: 'https://mp.weixin.qq.com/s/Cj73EPp9v3lusR803tVMPg',
    metaDescription: '用三张表整理客户信息、跟进记录和提醒的轻量 CRM 实践。',
  },
  {
    slug: 'rfm-customer-segmentation',
    title: '老板坐直了，只为看这一张图',
    date: '2026-04-17',
    category: '数据与决策',
    summary: 'R、F、M 三个数字只有变成可理解的客户分层，才真正接近经营决策。',
    keyPoints: ['从指标到标签', '让图表回答业务问题', '识别值得维护的客户'],
    sourceUrl: 'https://mp.weixin.qq.com/s/BVZobgh10Rzkdzlau_khFg',
    metaDescription: '从 RFM 指标到客户分层图：让数据更接近经营决策。',
  },
  {
    slug: 'what-enterprise-ai-agent-needs',
    title: '一个好的企业 AI Agent，应该具备什么能力',
    date: '2026-06-23',
    category: '企业与 AI',
    summary: '企业 AI 不只要会回答问题，还要尊重业务边界、数据条件、操作过程与最终责任。',
    keyPoints: ['业务边界', '数据与权限', '过程可检查'],
    sourceUrl: 'https://mp.weixin.qq.com/s/X7y4bA4s-TD_Eg17YNgveQ',
    metaDescription: '企业 AI Agent 除了模型能力，还需要业务边界、数据条件和可检查的过程。',
  },
];
