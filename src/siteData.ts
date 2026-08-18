export type Identity = {
  name: string;
  brand: string;
  url: string;
  email: string;
  title: string;
  description: string;
  lastReviewed: string;
};

export const site: Identity = {
  name: '刘旭',
  brand: '边牧AI',
  url: 'https://ailiuxu.com',
  email: 'vencent_2008@126.com',
  title: '刘旭｜企业 AI 实训与真实工作应用',
  description:
    '刘旭，边牧AI主理人。以真实任务为起点，为非技术团队设计企业 AI 实训，并将值得继续的问题做成小型工作流或工具。',
  lastReviewed: '2026-08-19',
} as const;

export const navigation = [
  { label: '首页', href: '/' },
  { label: '项目', href: '/projects/' },
  { label: '文章', href: '/writing/' },
  { label: '介绍资料', href: '/intro/' },
] as const;

export const trustFacts = [
  {
    label: '公开经历',
    value: '得到 AI 学习圈讲师',
    href: 'https://mp.weixin.qq.com/s/0VOPrPbZ0HO_1fyG2Sz6kg',
  },
  {
    label: '课程记录',
    value: '累计 50,000 学习人次',
    href: '/intro/#public-records',
  },
  {
    label: '写作',
    value: '《飞书多维表格实战》作者 · 出版流程中',
    href: '/intro/#author-intro',
  },
] as const;

export const evidenceTrack = [
  { number: '01', title: '原始资料', description: '先读表格、问卷、流程和现场说明，不从工具清单开始。' },
  { number: '02', title: '真实任务', description: '把“想学 AI”改成团队正在处理、可以检查的工作。' },
  { number: '03', title: '实训练习', description: '参与者围绕自己的任务动手，过程保留事实、口径和证据。' },
  { number: '04', title: '管理判断', description: '让分析回答先查什么、为什么，以及下一步由谁确认。' },
  { number: '05', title: '继续验证', description: '只有值得继续的问题，才进入小型工作流或工具验证。' },
] as const;

export type Offering = {
  number: string;
  title: string;
  summary: string;
  suitableFor: string;
  clientProvides: readonly string[];
  deliverables: readonly string[];
  nextStep: string;
};

export const offerings: readonly Offering[] = [
  {
    number: '01',
    title: '企业 AI 实训',
    summary: '从团队正在处理的真实任务出发，让非技术人员完成一次能动手、能判断的 AI 实践。',
    suitableFor: '团队已经在使用 AI，但方法停留在零散对话、工具演示或个人经验。',
    clientProvides: ['希望改善的真实任务', '能够用于课堂练习的样例资料', '实际参与任务的业务人员'],
    deliverables: ['围绕业务场景设计的练习', '可复用的工作方法与模板', '值得继续验证的问题清单'],
    nextStep: '选出一个真实任务与样例，先确认实训目标和参与人员。',
  },
  {
    number: '02',
    title: '小型验证项目',
    summary: '只为已经证明值得继续的问题制作第一版，不把一次验证包装成完整系统建设。',
    suitableFor: '实训或访谈后已经形成一个边界清楚、能够提供样例的具体问题。',
    clientProvides: ['明确的使用者与任务', '可以验证结果的样例', '负责最终判断的业务人员'],
    deliverables: ['一版可以运行的工作流或工具', '输入、输出与使用边界说明', '继续、调整或停止的判断依据'],
    nextStep: '用一组代表性样例定义完成标准，再决定第一版范围。',
  },
] as const;

export type ProjectKind = 'case' | 'prototype' | 'public-practice';
export type ProjectVisibility = 'public' | 'draft' | 'private';

export type ProjectRecord = {
  slug: string;
  kind: ProjectKind;
  visibility: ProjectVisibility;
  date: string;
  shortTitle: string;
  title: string;
  visitorSummary: string;
  problem: string;
  role: string;
  work: readonly string[];
  deliverables: readonly string[];
  verifiedFacts: readonly string[];
  currentScope: string;
  tags: readonly string[];
  image?: string;
  imageAlt?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  externalUrl?: string;
  externalLabel?: string;
  featured?: boolean;
  metaDescription: string;
};

export const projectKindLabels: Record<ProjectKind, string> = {
  case: '完整案例',
  prototype: '可运行原型',
  'public-practice': '公开实践',
};

export const projects: readonly ProjectRecord[] = [
  {
    slug: 'enterprise-ai-data-training',
    kind: 'case',
    visibility: 'public',
    date: '2026-08-17',
    shortTitle: '企业 AI 数据实训',
    title: '从原始数据到管理判断',
    visitorSummary: '课程没有停在工具演示，而是让业务人员沿着“找异常、算影响、做判断”的路径处理数据。',
    problem: '团队已经积累表格、问卷和业务记录，但分析常常停在汇总数字，难以回答先看哪里、口径是否一致，以及下一步该由谁确认。',
    role: '刘旭负责课程重构、案例与练习设计、数据分析演示、工作方法讲解及现场问题拆解。',
    work: [
      '从原始表格出发，先检查缺失、重复、异常和计算口径。',
      '用示例数据练习从异常信号回到原始单元格，不让结论脱离证据。',
      '把分析结果压缩为事实、证据和下一步，帮助管理者继续核查。',
      '将可迁移的方法整理为练习、提示模板、分析页面和讲义。',
    ],
    deliverables: [
      'AI 辅助数据分析课程与逐页讲义',
      '可复用的数据检查与业务分析练习',
      '异常说明、领导速览和交互式分析页面',
      '从真实任务中筛选后续验证方向的方法',
    ],
    verifiedFacts: [
      '课程材料、练习数据、分析页面和演示文稿均已形成文件。',
      '最终演示文稿包含 22 页，并完成结构、媒体和二维码检查。',
      '案例使用可复核的示例材料呈现数据检查与管理判断方法。',
    ],
    currentScope: '现有证据覆盖课程设计、交付物与文件验收；效率、收益和满意度需要通过前后测另行验证。',
    tags: ['企业实训', '数据分析', '管理判断', '非技术团队'],
    image: '/work/enterprise-data-training.jpg',
    imageAlt: 'AI 辅助数据分析课程封面，主题为从冰冷数据到真正的业务判断',
    secondaryImage: '/work/data-traceability-method.jpg',
    secondaryImageAlt: '课程页面展示同一问题在不同计算口径下得到不同结果，并强调数字可追溯',
    featured: true,
    metaDescription: '刘旭如何从原始表格和真实任务出发，设计一场面向非技术团队的企业 AI 数据实训。',
  },
  {
    slug: 'job-training-prototype',
    kind: 'prototype',
    visibility: 'public',
    date: '2026-08-17',
    shortTitle: '岗位训练原型',
    title: '一张加工资料，变成岗位训练原型',
    visitorSummary: '把静态加工资料重组为“看实物、学流程、核标准、做练习”的离线网页。',
    problem: '原始资料可以查阅，却不适合新人按对象逐个认识、按步骤学习并反复练习。',
    role: '刘旭负责信息结构、训练路径、交互设计、前端实现和桌面端与手机端验收。',
    work: [
      '按“实物图、名称、加工流程、成品标准、包装规格”重新组织资料。',
      '为 18 种菜品建立搜索、分类、步骤学习和进度记录。',
      '增加随机看图练习，以及答对、已答和连续答对统计。',
      '保持离线可用，不依赖外部内容分发网络或账号系统。',
    ],
    deliverables: ['单页离线训练网页', '18 种菜品与加工标准', '看图练习与学习进度', '桌面端与手机端验收记录'],
    verifiedFacts: [
      '页面包含 18 个训练对象。',
      '搜索、分类、步骤学习、进度保存和练习功能已通过本地自动检查。',
      '1440 像素桌面端与 390 像素手机端检查未发现横向溢出。',
    ],
    currentScope: '这是一版经过功能验证的岗位训练原型，下一步是进入真实岗位试用并验证学习效果。',
    tags: ['岗位训练', '离线网页', '移动端', '可运行原型'],
    image: '/work/job-training-prototype.jpg',
    imageAlt: '净菜加工新人训练站桌面端长页，包含 18 种菜品卡片和看图练习',
    secondaryImage: '/work/job-training-mobile.jpg',
    secondaryImageAlt: '净菜加工新人训练站手机端首页',
    metaDescription: '把一张加工资料重组为手机上能看、能学、能练的离线岗位训练原型。',
  },
  {
    slug: 'print-dpi-inspector',
    kind: 'prototype',
    visibility: 'public',
    date: '2026-08-13',
    shortTitle: '印刷图片 DPI 质检',
    title: '浏览器里的印刷图片批量质检',
    visitorSummary: '围绕书稿图片的印刷要求制作本地网页，检查像素、版面尺寸和有效 DPI，并给出处理建议。',
    problem: '书稿图片数量多，仅凭肉眼或文件大小难以判断放进版面后是否满足印刷清晰度。',
    role: '刘旭从真实出版流程提出需求，参与定义检查口径，并完成工具的功能验证与使用。',
    work: [
      '读取图片像素信息并结合目标版面尺寸计算有效 DPI。',
      '支持图片与 Word 文档中的图片检查。',
      '按通过、提醒和不满足要求分类，减少逐张换算。',
      '全部处理在浏览器本地完成，不上传书稿图片。',
    ],
    deliverables: ['单文件本地网页', '图片与 Word 检查模式', '有效 DPI 判断', '问题筛选与处理建议'],
    verifiedFacts: [
      '工具文件可以在浏览器本地运行。',
      '页面同时包含图片模式和 Word 文档模式。',
      '检查结果包含像素、版面尺寸、有效 DPI、状态和建议。',
    ],
    currentScope: '这是出版工作流中的辅助检查工具，最终印刷判断仍以出版社和印厂规范为准。',
    tags: ['出版流程', '本地工具', 'DPI', '批量检查'],
    metaDescription: '刘旭为真实出版流程制作的印刷图片 DPI 质检工具，帮助批量检查图片清晰度。',
  },
  {
    slug: 'sports-data-workbench',
    kind: 'prototype',
    visibility: 'public',
    date: '2026-08-18',
    shortTitle: '体育数据工作台',
    title: '体育数据工作台',
    visitorSummary: '将分散的训练评分和不完整比赛记录组织为复核队列、证据入口和行动记录。',
    problem: '记录已经存在，但数据口径、覆盖范围和下一步复核动作没有被放在同一个界面中。',
    role: '刘旭负责源数据审查、规则边界、信息结构、交互设计和单文件网页实现。',
    work: [
      '先保留训练评分和比赛记录各自的数据边界，不把不完整记录包装成官方统计。',
      '用固定规则缩小优先复核范围，并保留触发原因。',
      '让教练记录沟通、调整和暂不处理等后续动作。',
      '支持导出复核记录，方便继续追踪。',
    ],
    deliverables: ['单文件数据工作台', '训练复核队列', '比赛证据入口', '行动记录与导出'],
    verifiedFacts: [
      '工作台已经形成可在浏览器运行的单文件页面。',
      '页面包含数据边界说明、固定复核规则和本地行动记录。',
      '工作台围绕复核队列、证据入口和行动记录组织信息。',
    ],
    currentScope: '当前作为数据工作台原型展示，不替代教练判断、医学评估或官方技术统计。',
    tags: ['体育数据', '复核工作流', '数据边界', '可运行原型'],
    metaDescription: '训练与比赛数据工作台原型：帮助教练缩小复核范围、找到证据并记录行动。',
  },
  {
    slug: 'sports-ai-workshop',
    kind: 'public-practice',
    visibility: 'public',
    date: '2026-04-28',
    shortTitle: '体育 AI 实践工作坊',
    title: '120 分钟的体育 AI 实践工作坊',
    visitorSummary: '参与者没有先听一整套模型原理，而是先说清使用者、任务、边界和完成标准。',
    problem: '多数参与者没有编程经验，也不确定 AI 与自己的教学、训练和赛事工作有什么关系。',
    role: '刘旭负责问题澄清、实操路径、现场支持与成果分享组织。',
    work: [
      '先用四个问题缩小需求：谁使用、做什么、不做什么、什么算完成。',
      '让参与者围绕自己的体育场景直接动手。',
      '在限定时间结束后停手分享，区分参与者成果和讲师支持。',
    ],
    deliverables: ['120 分钟实践工作坊', '需求澄清方法', '参与者第一版原型与分享'],
    verifiedFacts: [
      '活动过程已经通过公开文章记录。',
      '参与者尝试了篮球赛事、体育 IP 和体操评分等方向。',
      '刘旭负责实训设计与现场支持，参与者围绕各自问题完成第一版原型。',
    ],
    currentScope: '这项公开实践证明的是面向非技术人员的实训方法，不代表在两小时内完成正式业务系统。',
    tags: ['公开实践', 'AI 实训', '体育教育', '需求澄清'],
    externalUrl: 'https://mp.weixin.qq.com/s/Kin-PjZVj6gLASDUbf7Jsg',
    externalLabel: '查看公开活动记录',
    metaDescription: '刘旭在体育教育场景中，用 120 分钟帮助教师和学生围绕真实问题完成第一版原型。',
  },
];

export const publicProjects = projects.filter((project) => project.visibility === 'public');
export const featuredProject = publicProjects.find((project) => project.featured)!;

export type IntroVariant = {
  id: 'business' | 'speaker' | 'author' | 'project';
  label: string;
  useFor: string;
  text: string;
};

export const introVariants: readonly IntroVariant[] = [
  {
    id: 'business',
    label: '商务短介绍',
    useFor: '初次认识、朋友转介绍、微信发送',
    text: '刘旭，边牧AI主理人，帮助非技术团队把 AI 用进真实工作。',
  },
  {
    id: 'speaker',
    label: '讲师介绍',
    useFor: '活动海报、课程介绍、主持人口播',
    text: '刘旭，边牧AI主理人、得到 AI 学习圈讲师，专注企业 AI 实训与真实工作应用。他从团队正在处理的数据、资料和流程出发设计课程，让非技术人员围绕自己的任务完成一次能动手、能判断的 AI 实践。',
  },
  {
    id: 'author',
    label: '作者介绍',
    useFor: '出版、媒体、内容合作',
    text: '刘旭，边牧AI主理人、《飞书多维表格实战》作者，现处于出版流程中。他长期关注 AI、数据和轻量工具如何进入真实工作，持续记录飞书多维表格、企业数据分析、工作流设计与非技术团队实践。曾担任得到 AI 学习圈讲师，并参与教育主题公开分享。',
  },
  {
    id: 'project',
    label: '项目合作说明',
    useFor: '项目介绍、商务转发、合作沟通',
    text: '边牧AI以企业实训为入口，帮助团队围绕真实数据和任务完成一次可验证的 AI 实践。实训中发现的高价值问题，可以继续拆解为边界明确的小型工作流或工具；涉及长期系统建设、核心系统接入或持续驻场的工作，将在第一版验证后单独评估。',
  },
] as const;

export const speakingTopics = [
  '非技术团队如何把 AI 用进真实工作',
  '从原始数据到管理判断的 AI 数据实训',
  '用 AI 与轻量工具重构重复工作',
  '从一个真实问题做出可以验证的第一版',
] as const;

export const publicRecords = [
  {
    date: '2025-11',
    title: '成为得到 AI 学习圈讲师',
    description: '以公开文章记录成为讲师的过程。',
    href: 'https://mp.weixin.qq.com/s/0VOPrPbZ0HO_1fyG2Sz6kg',
  },
  {
    date: '2026-01',
    title: '参与得到教育沙龙',
    description: '以教育集团内训师身份进入公开活动嘉宾阵容。',
    href: '/evidence/dedao-education-salon-2026.jpg',
  },
  {
    date: '2026-01',
    title: '课程累计 50,000 学习人次',
    description: '得到 AI 学习圈颁发课程学习人数纪念牌。',
    href: '/evidence/dedao-ai-50000-learners.jpg',
  },
  {
    date: '2026-08',
    title: '新书《飞书多维表格实战》',
    description: '书稿及出版相关工作正在推进。',
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
    slug: 'what-enterprise-ai-agent-needs',
    title: '企业 AI Agent 能力清单',
    date: '2026-06-23',
    category: '企业与 AI',
    summary: '企业 AI 不只要会回答问题，还要尊重业务边界、数据条件、操作过程与最终责任。',
    keyPoints: ['业务边界', '数据与权限', '过程可检查'],
    sourceUrl: 'https://mp.weixin.qq.com/s/X7y4bA4s-TD_Eg17YNgveQ',
    metaDescription: '企业 AI Agent 除了模型能力，还需要业务边界、数据条件和可检查的过程。',
  },
  {
    slug: 'basketball-registration-one-table',
    title: '报名系统，最后只用了一张表',
    date: '2026-06-17',
    category: '需求与最小验证',
    summary: '“系统”不一定是答案。继续追问使用者、字段和后台需求后，一张表就能完成第一版验证。',
    keyPoints: ['先追问真实任务', '用最小方案验证', '把复杂度留到确有必要时'],
    sourceUrl: 'https://mp.weixin.qq.com/s/vVuSbEygW4VBwqxVaTpC9A',
    metaDescription: '一个篮协提出要报名系统，刘旭通过需求追问，用一张表完成第一版验证。',
  },
  {
    slug: 'sports-ai-workshop-120-minutes',
    title: '体育生 2 小时做出赛事系统？',
    date: '2026-04-28',
    category: 'AI 实训',
    summary: '一场面向体育教师和学生的实践工作坊：从自己的真实问题出发，在 120 分钟里完成第一版。',
    keyPoints: ['四个问题澄清需求', '非技术人员直接动手', '围绕真实体育场景'],
    sourceUrl: 'https://mp.weixin.qq.com/s/Kin-PjZVj6gLASDUbf7Jsg',
    metaDescription: '体育教育场景中的 120 分钟 AI 实践工作坊记录。',
  },
  {
    slug: 'six-invoices-one-table',
    title: '6 种发票，怎样用一张表处理',
    date: '2026-04-21',
    category: '流程与单据',
    summary: '从财务人员的实际处理过程出发，把多种发票的识别、字段和汇总放进一张可继续使用的表。',
    keyPoints: ['从真实单据开始', '统一字段与汇总', '把一次演示变成可复用流程'],
    sourceUrl: 'https://mp.weixin.qq.com/s/wuTxEm7NrQoya67bpNDA9w',
    metaDescription: '怎样把 6 种发票的处理过程整理进一张表。',
  },
  {
    slug: 'rfm-customer-segmentation',
    title: 'RFM 客户分层与经营判断',
    date: '2026-04-17',
    category: '数据与决策',
    summary: 'R、F、M 三个数字只有变成可理解的客户分层，才真正接近经营决策。',
    keyPoints: ['从指标到标签', '让图表回答业务问题', '识别值得维护的客户'],
    sourceUrl: 'https://mp.weixin.qq.com/s/BVZobgh10Rzkdzlau_khFg',
    metaDescription: '从 RFM 指标到客户分层图，让数据更接近经营决策。',
  },
  {
    slug: 'three-tables-free-crm',
    title: '用 3 张表整理一套轻量 CRM',
    date: '2026-04-07',
    category: '客户与销售',
    summary: '客户信息、跟进记录和任务提醒不必继续散落；先用三张表把最基本的客户管理关系接起来。',
    keyPoints: ['客户信息集中', '跟进记录关联', '从轻量流程开始'],
    sourceUrl: 'https://mp.weixin.qq.com/s/Cj73EPp9v3lusR803tVMPg',
    metaDescription: '用三张表整理客户信息、跟进记录和提醒的轻量 CRM 实践。',
  },
] as const;
