document.addEventListener('DOMContentLoaded', () => {

  const 显隐元素 = document.querySelectorAll('.显隐');

  显隐元素.forEach(function (显隐内容) {
    // 创建 <br> 元素
    const br = document.createElement('br');

    // 将 <br> 元素插入到 .显隐内容 元素之前
    显隐内容.parentNode.insertBefore(br, 显隐内容);

    // 创建按钮元素
    const 显隐按钮 = document.createElement('button');
    显隐按钮.classList.add('显隐按钮');
    显隐按钮.text = '查看详情';

    // 将按钮插入到 <br> 元素之后
    显隐内容.parentNode.insertBefore(显隐按钮, 显隐内容);

    // 添加点击事件处理函数
    显隐按钮.addEventListener('click', () => {
      显隐按钮.text = 显隐内容.style.display === 'none' ? '隐藏详情' : '查看详情';
      显隐内容.style.display = 显隐内容.style.display === 'none' ? 'block' : 'none';
    });
  });

  const tagData = {
    'GM': {
      type: `术语`,
      value: `Game Master<br>游戏的主持人。`,
    },
    'PL': {
      type: `术语`,
      value: `Player<br>游戏的玩家。`,
    },
    'PC': {
      type: `术语`,
      value: `Player Character<br>游戏玩家扮演的角色。`,
    },
    'NPC': {
      type: `术语`,
      value: `Non-Player Character<br>不由游戏玩家扮演的角色。`,
    },
    'XP': {
      type: `术语`,
      value: `Experience Points<br>经验值。`,
    },
    'LV': {
      type: `术语`,
      value: `Level<br>角色的职业领域等级总和。`,
    },
    'CR': {
      type: `术语`,
      value: `Character Rating<br>角色的阶层，等于人物等级的1/5。`,
    },
    'MR': {
      type: `术语`,
      value: `Maneuver Rating<br>游戏中动作的阶层。`,
    },
    'RE': {
      type: `术语`,
      value: `Recovery<br>动作的回正时间，代表角色连续执行动作的间隔时间。`,
    },
    'STR': {
      type: `术语`,
      value: `Strength<br>体能。角色的能力值之一。`,
    },
    'DEX': {
      type: `术语`,
      value: `Dexterity<br>协调。角色的能力值之一。`,
    },
    'INS': {
      type: `术语`,
      value: `Insight<br>知觉。角色的能力值之一。`,
    },
    'FEL': {
      type: `术语`,
      value: `Feeling<br>感应。角色的能力值之一。`,
    },
    'WIS': {
      type: `术语`,
      value: `Wisdom<br>灵性。角色的能力值之一。`,
    },
    'HR': {
      type: `术语`,
      value: `High Roll<br>检定的高值，代表2D10中较高的骰点。`,
    },
    'LR': {
      type: `术语`,
      value: `Low Roll<br>检定的低值，代表2D10中较低的骰点。`,
    },
    'AAS': {
      type: `术语`,
      value: `Attack Ability Scores<br>攻击检定中使用的能力值。`,
    },
    'ACC': {
      type: `术语`,
      value: `Accuracy<br>被动攻击检定的判定值。`,
    },
    'AB': {
      type: `术语`,
      value: `Attack Bonus<br>攻击检定的修正值总和。`,
    },
    'DAS': {
      type: `术语`,
      value: `Defense Ability Scores<br>防御检定中使用的能力值。`,
    },
    'PRO': {
      type: `术语`,
      value: `Protection<br>被动防御检定的判定值。`,
    },
    'DB': {
      type: `术语`,
      value: `Defense Bonus<br>防御检定的修正值总和。`,
    },
    'PSI': {
      type: `术语`,
      value: `Psionics<br>被动施术检定的判定值。`,
    },
    'PAS': {
      type: `术语`,
      value: `Psychic Ability Scores<br>术源的术法能力值。`,
    },
    'HP': {
      type: `术语`,
      value: `Hit Points<br>压力值。`,
    },
    'EP': {
      type: `术语`,
      value: `Existence Points<br>存在点，存在命刻剩余的进度。`,
    },
    'SP': {
      type: `术语`,
      value: `Stamina Points<br>精力值。`,
    },
    'LP': {
      type: `术语`,
      value: `Link Points<br>连结值。`,
    },
    'WP': {
      type: `术语`,
      value: `Will Power<br>意志力。`,
    },
    'IP': {
      type: `术语`,
      value: `Information Points<br>信息点。`,
    },
    'PP': {
      type: `术语`,
      value: `Psychic Points<br>术法点。`,
    },
    'DP': {
      type: `术语`,
      value: `Damage Points<br>伤害值。`,
    },
    'TP': {
      type: `术语`,
      value: `Tactical Points<br>战术点。`,
    },


    'N': {
      type: `标签`,
      value: `这种稀有度的事物非常普遍。未标注稀有度的元素，稀有度默认为N。`,
    },
    'R': {
      type: `标签`,
      value: `这种稀有度的事物需要特殊的训练或特定文化的背景才有可能接触。<a href=##>分析</a>稀有度为R的事物时，目标值会受到4点加值。`,
    },
    'S': {
      type: `标签`,
      value: `这种稀有度的事物几乎不可能被找到。<a href=##>分析</a>稀有度为S的事物时，目标值会受到8点加值。`,
    },
    'U': {
      type: `标签`,
      value: `这种稀有度的事物是独一无二的。<a href=##>分析</a>稀有度为U的事物时，目标值会受到12点加值。`,
    },


    '附赠': {
      type: `标签`,
      value: `只要角色满足「前置」条件和等级要求，她就会自动习得<a href=##>附赠</a>特技，并且不计入她所能习得的特技总数中。`,
    },
    '血脉': {
      type: `标签`,
      value: `一名角色最多只能习得1项<a href=##>血脉</a>特技。`,
    },
    '原型': {
      type: `标签`,
      value: `这项特技属于一种<b>原型</b>。`,
    },
    '唤醒': {
      type: `标签`,
      value: `一旦习得这种<b>原型</b>的<a href=##>唤醒</a>特技，直到习得至少5个属于该<b>原型</b>的特技 (含<a href=##>唤醒</a>特技) 为止，无法再习得其他的<a href=##>唤醒</a>特技。`,
    },
    '美德': {
      type: `标签`,
      value: `因狂气检定大成功而触发的<a href=##>美德</a>动作，无需在执行时支付代价。<br>
      如果在维持一项<a href=##>美德</a>动作时再次执行<a href=##>美德</a>动作，之前维持的那项<a href=##>美德</a>动作会立即结束。`,
    },


    '架势': {
      type: `时效`,
      value: `这种效果通常只能在冲突场景中使用。效果会持续到角色离开场景、冲突结束、或执行另一个「时效：架势」动作。`,
    },


    '至近': {
      type: `范围`,
      value: `当使用者处于前场时，可以将同样位于前场的角色作为对象。在前场之外的位置执行这种动作，将会导致动作使用失败。`,
    },
    '短距': {
      type: `范围`,
      value: `当使用者处于前场时，可以将位于前场或中场的角色作为对象。如果使用者位于中场，则可以将位于前场的角色作为对象。位于后场时将使用失败。`,
    },
    '中距': {
      type: `范围`,
      value: `当使用者处于前场或中场时，可以将位于前场、中场、后场的角色作为对象。如果使用者位于后场，则可以将位于前场或中场的角色作为对象。`,
    },
    '长距': {
      type: `范围`,
      value: `无论使用者处于哪个位置，都可以将位于前场、中场、后场的角色作为对象。`,
    },

    '微量': {
      type: `量值`,
      value: `等于阶层。`,
    },
    '少量': {
      type: `量值`,
      value: `等于阶层*2。`,
    },
    '中量': {
      type: `量值`,
      value: `等于阶层*5。`,
    },
    '大量': {
      type: `量值`,
      value: `等于阶层*10。`,
    },


    '原生种': {
      type: `标签`,
      value: `原生种的生命是在实境的自然环境下诞生的生命形式。`,
    },
    '畸变种': {
      type: `标签`,
      value: `畸变种的生命是在人工介入的情况下诞生的生命形式。`,
    },
    '精灵种': {
      type: `标签`,
      value: `精灵种的生命诞生自千奇百怪的自然现象。`,
    },
    '鬼神种': {
      type: `标签`,
      value: `鬼神种的生命是从虚境诞生的无实体存在。`,
    },
    '域外种': {
      type: `标签`,
      value: `域外种的生命拥有复杂的起源，可能来自其他的实体位面，甚至是映像或精神位面`,
    },
    '构造体': {
      type: `标签`,
      value: `构造体通常是如机器人、魔像那样的人造生命。构造体的功能和智能则取决于其设计和制造者的技术。`,
    },
    '野兽': {
      type: `标签`,
      value: `野兽是智力相对较低的生命，它们通常不会说话。`,
    },
    '魔兽': {
      type: `标签`,
      value: `魔兽类似于野兽，但魔兽通常拥有更高的智能。`,
    },
    '妖精': {
      type: `标签`,
      value: `。`,
    },
    '魅影': {
      type: `标签`,
      value: `。`,
    },
    '灵神': {
      type: `标签`,
      value: `。`,
    },
    '天神': {
      type: `标签`,
      value: `。`,
    },
    '天族': {
      type: `标签`,
      value: `天族诞生自圣洁的位面。`,
    },
    '魇族': {
      type: `标签`,
      value: `魇族诞生自邪秽的位面。`,
    },
    '奇械': {
      type: `标签`,
      value: `。`,
    },
    '均质': {
      type: `标签`,
      value: `具有均质亚种的生命没有明显的器官分化。`,
    },


    '闲角': {
      type: `标签`,
      value: `闲角级敌人难以对同等级的PC构成威胁，可以被轻松击败。`,
    },
    '配角': {
      type: `标签`,
      value: `配角级敌人实力与同等级的PC相当。`,
    },
    '精英': {
      type: `标签`,
      value: `精英级敌人的实力至少是同等级PC的两倍。`,
    },
    '冠位': {
      type: `标签`,
      value: `冠位级敌人是无比强大的存在，其实力足以载入史册。`,
    },


    '耗材': {
      type: `标签`,
      value: `这种物品会在使用1次后被消耗。`,
    },


    '探索': {
      type: `标签`,
      value: `这种效果无法在冲突场景中使用。`,
    },
    '休整': {
      type: `标签`,
      value: `这种效果只能在休整场景中使用。<br>
      执行非<a href=##>休整</a>动作会打断维持中的<a href=##>休整</a>效果。`,
    },
    '暗骰': {
      type: `标签`,
      value: `GM会暗中投掷这种效果的检定，并且不会将检定的结果公开给其他玩家。`,
    },
    '开放': {
      type: `标签`,
      value: `这种效果进行的检定属于开放检定。`,
    },
    '攻击': {
      type: `标签`,
      value: `这种效果能够让角色发动攻击。「发动攻击」即是指执行<a href=##>攻击</a>动作。`,
    },
    '移动': {
      type: `标签`,
      value: `这种效果能够让角色移动到其他位置。`,
    },
    '操作': {
      type: `标签`,
      value: `这种效果需要角色在物理上操作一件物品或比划手势才能使用。没有合适肢体的角色无法使用这种效果。`,
    },
    '专注': {
      type: `标签`,
      value: `这种效果要求使用者的精神在一定程度上保持集中和自制。<br>
      使用者一旦离开场景，她维持的所有<a href=##>专注</a>效果都会立即结束。`,
    },
    '绝技': {
      type: `标签`,
      value: `一名角色在每个轮次中最多只能宣言1次<a href=##>绝技</a>动作。`,
    },
    '先发': {
      type: `标签`,
      value: `这种效果只能在使用者尚未宣言过标准动作或<a href=##>先发</a>动作的轮次中使用。`,
    },
    '起手': {
      type: `标签`,
      value: `这种效果只能在使用者尚未宣言过<a href=##>攻击</a>或<a href=##>起手</a>动作的轮次中使用。`,
    },
    '收尾': {
      type: `标签`,
      value: `执行这种动作后，直到本轮结束为止，使用者无法执行其他<a href=##>攻击</a>和<a href=##>收尾</a>动作。`,
    },
    '连携': {
      type: `标签`,
      value: `这种效果只能在使用者承受连击减值的情况下使用。`,
    },
    '扫荡': {
      type: `标签`,
      value: `这种效果能令立即将角色无力化，但难以对较为强大的角色产生效果。<br>
      角色的CR每比扫荡效果的MR高1阶，就会在应对扫荡效果的防御检定上获得2点加值。`,
    },
    '要害': {
      type: `标签`,
      value: `这种效果针对对象的要害发挥作用，因此对没有要害的角色无效(例如具有<a href=##>均质</a>亚种的角色)。`,
    },
    '治疗': {
      type: `标签`,
      value: `这种效果能够解除角色生理或心灵上的损伤，或是助其脱离有害的处境。`,
    },
    '疾病': {
      type: `标签`,
      value: `这种效果会造成疾病。`,
    },
    '睡眠': {
      type: `标签`,
      value: `这种效果能让角色陷入沉睡或变得疲倦。`,
    },
    '心灵': {
      type: `标签`,
      value: `这种效果会干涉心智。<a href=##>心灵</a>效果对<a href=##>无意识</a>的角色无效。`,
    },
    '情绪': {
      type: `标签`,
      value: `这种效果会改变情绪。具有该标签的效果同时视为具有<a href=##>心灵</a>标签。`,
    },
    '恐惧': {
      type: `标签`,
      value: `这种效果会唤起恐惧的情绪。具有该标签的效果同时视为具有<a href=##>情绪</a>标签。`,
    },
    '理解': {
      type: `标签`,
      value: `这种效果需要对象能够理解使用者表达的信息才能发挥作用。`,
    },
    '光影': {
      type: `标签`,
      value: `这种效果通过影响明与暗而发挥作用。`,
    },
    '视觉': {
      type: `标签`,
      value: `这种效果中与视觉相关的部分，只会影响看到的角色。具体由GM判断。`,
    },
    '听觉': {
      type: `标签`,
      value: `这种效果中与听觉相关的部分，只会影响听到的角色。具体由GM判断。`,
    },
    '嗅觉': {
      type: `标签`,
      value: `这种效果中与嗅觉相关的部分，只会影响闻到的角色。具体由GM判断。`,
    },


    '律令': {
      type: `标签`,
      value: `律令系术法的核心理论在于「支配」。`,
    },
    '契绊': {
      type: `标签`,
      value: `契绊系术法的核心理论在于「引导」。`,
    },
    '炼成': {
      type: `标签`,
      value: `炼成系术法的核心理论在于「转变」。`,
    },
    '相变': {
      type: `标签`,
      value: `这种效果能够对现实进行扭曲和变化，使其符合使用者的期望和意图。`,
    },
    '幻惑': {
      type: `标签`,
      value: `这种效果能够欺骗生命体的感官和心灵，或赋予野兽和无机物灵智。`,
    },
    '感测': {
      type: `标签`,
      value: `这种效果能够赋予使用者超越常规感官的知觉，增强对环境或情感的理解力。`,
    },
    '具现': {
      type: `标签`,
      value: `这种效果能够凭空创造现实中不存在的幻想产物，形成具象的实体或现象。`,
    },
    '破灭': {
      type: `标签`,
      value: `这种效果能够毁坏或削弱对象事物的存在，将其彻底抹消。`,
    },
    '化身': {
      type: `标签`,
      value: `这是化身。`,
    },


    '真名': {
      type: `标签`,
      value: `事物的真名是其独有的波动，凝聚了它在灵界的本质和属性。<br>
      具有超自然属性的事物会持续释放自身的真名，这种波动只能被特殊手段侦测。`,
    },
    '探知': {
      type: `标签`,
      value: `这种效果能够访问某一事物或真名的存在或方位，或是令角色能够通过他人的感官收集信息。`,
    },
    '预见': {
      type: `标签`,
      value: `这种效果能够决定在近未来可能发生的事件。`,
    },
    '揭示': {
      type: `标签`,
      value: `这种效果能够展现事物真实的样子。`,
    },


    '延展': {
      type: `标签`,
      value: `这种效果能够改变术法的作用。每次施术只能应用1项<a href=##>延展</a>。<br>
      <a href=##>延展</a>强度加上术法的前置专研级别，不能超过术源在相应秘仪上的专研级别。<br>
      应用强度为<b>X</b>的<a href=##>延展</a>时，需要角色同时指定具体的强度。`,
    },
    '命运': {
      type: `标签`,
      value: `这种效果能够修改命运。如果一个项目同时受到多个<a href=##>命运</a>效果，新的效果必须成功反制现有效果才能生效。`,
    },
    '塑体': {
      type: `标签`,
      value: `这种效果能够细微改变角色的外形。如果一名角色同时受到多个影响同一部位的塑体效果，新的效果必须成功反制现有效果才能生效。如果这些效果会影响不同的部位，则可以同时生效。`,
    },
    '变形': {
      type: `标签`,
      value: `这种效果能够完全改变角色的外形。如果一名角色同时受到多个变形效果，或同时受到变形与塑体效果，新的效果必须成功反制现有效果才能生效。<br>
      变形效果通常无法令角色变成特定的个体，只能是一类的普通一员。`,
    },
    '维度': {
      type: `标签`,
      value: `这种效果会改变事物所处的维度。同一事物最多只会同时受到一个维度效果影响。新的效果必须成功反制现有效果才能生效。`,
    },
    '结界': {
      type: `标签`,
      value: `结界会在特定时间内影响一个区域。同一区域最多只会同时受到一个结界影响。新的结界必须成功反制现有结界才能生效。`,
    },
    '诅咒': {
      type: `标签`,
      value: `诅咒是一种会持续造成负面影响的超自然效果。只有专门针对诅咒的效果才能解除它。`,
    },
    '即死': {
      type: `标签`,
      value: `即死效果可能会绕过HP使角色直接失去EP。`,
    },


    '物理': {
      type: `伤害类型`,
      value: `这种效果通过由运动产生的力量粉碎、撕裂、贯穿目标。`,
    },
    '生理': {
      type: `伤害类型`,
      value: `这种效果通过生命体内外因素引起生理机能的异常。`,
    },
    '灼烧': {
      type: `伤害类型`,
      value: `这种效果通过高温或化学物质造成烧伤。`,
    },
    '冷冻': {
      type: `伤害类型`,
      value: `这种效果通过极低的温度引起冻伤。`,
    },
    '侵蚀': {
      type: `伤害类型`,
      value: `这种效果通过腐蚀或解离造成伤害。`,
    },
    '疲劳': {
      type: `伤害类型`,
      value: `这种效果会造成肉体或精神上的劳累。`,
    },
    '疼痛': {
      type: `伤害类型`,
      value: `这种效果会造成生理和心理上的疼痛感觉。`,
    },
    '欣快': {
      type: `伤害类型`,
      value: `这种效果会造成积极、愉悦和兴奋的情绪。`,
    },
    '屈服': {
      type: `伤害类型`,
      value: `这种效果会造成心理上的压抑、担忧、焦虑、不安和无助感。`,
    },
    '错乱': {
      type: `伤害类型`,
      value: `这种效果会造成严重的思维和认知障碍。`,
    },


    '电流': {
      type: `标签`,
      value: `这种效果会引发电击，并可能能够召唤或操作闪电。`,
    },
    '热能': {
      type: `标签`,
      value: `这种效果涉及对热能的转换。`,
    },
    '火焰': {
      type: `标签`,
      value: `这种效果会造成烧伤，并可以反制<a href=##>冰霜</a>效果。`,
    },
    '冰霜': {
      type: `标签`,
      value: `这种效果会造成冻伤，并可以反制<a href=##>火焰</a>效果。`,
    },
    '强酸': {
      type: `标签`,
      value: `这种效果会造成腐蚀。`,
    },
    '失血': {
      type: `标签`,
      value: `这种效果会导致血液的缺失。没有血液的个体免疫<a href=##>失血</a>效果。`,
    },
    '毒素': {
      type: `标签`,
      value: `这种效果会导致中毒。`,
    },


    '肉体': {
      type: `标签`,
      value: `这种物品是角色身体的一部分，无法被【缴械】。`,
    },
    '格斗': {
      type: `武器类别`,
      value: `这种武器着重于近身缠斗，主要通过猛击和施加压力造成伤害。`,
    },
    '白刃': {
      type: `武器类别`,
      value: `这种武器以锋利的刀刃或尖刺作为主要攻击部件。`,
    },
    '软兵': {
      type: `武器类别`,
      value: `这种武器使用柔软材料制作，主要通过摆动和甩打进行攻击。`,
    },
    '毒剂': {
      type: `武器类别`,
      value: `这种武器利用有毒物质作为攻击手段。`,
    },
    '暗器': {
      type: `武器类别`,
      value: `这种武器小巧隐秘，方便携带和使用。`,
    },
    '弓弩': {
      type: `武器类别`,
      value: `这种武器利用弹力发射子弹。`,
    },
    '铳械': {
      type: `武器类别`,
      value: `这种武器利用推力发射子弹。`,
    },
    '爆破': {
      type: `武器类别`,
      value: `这种武器会产生剧烈的爆炸。`,
    },
    '奇门': {
      type: `武器类别`,
      value: `每件奇门武器都视为单独的一种武器类别。`,
    },
    '近战': {
      type: `标签`,
      value: `这种武器只能用来发动近战攻击。`,
    },
    '远程': {
      type: `标签`,
      value: `这种武器只能用来发动远程攻击。`,
    },
    '两用': {
      type: `标签`,
      value: `这种武器既可以用来发动近战武器，也可以用来发动远程攻击。<a href=##>两用</a>武器同时视为<a href=##>近战</a>武器与<a href=##>远程</a>武器。<br>
      在视为不同类型的武器时也会使用不同的范围。视为<a href=##>近战</a>武器时只能使用近战范围，视为<a href=##>远程</a>武器时只能使用远程范围。`,
    },
    '轻型': {
      type: `标签`,
      value: `这种武器产生的连击减值将获得1点减值。`,
    },
    '重型': {
      type: `标签`,
      value: `这种武器产生的连击减值将受到1点加值。`,
    },
    '装填': {
      type: `标签`,
      value: `这种武器每刻只能使用1次。`,
    },
    '弹药': {
      type: `标签`,
      value: `每次使用这种武器发动1次攻击，都会消耗1发弹药。如果弹药耗尽，则无法再使用这件武器发动攻击。作为一个具有<a href=##>操作</a>标签的【交互】，角色可以重装1件武器的所有弹药。`,
    },


    '前进': {
      type: `移动`,
      value: `对象从后场移动至中场，或从中场移动至前场。位于前场的对象不会因<a href=##>前进</a>改变位置。`,
    },
    '后退': {
      type: `移动`,
      value: `对象从前场移动至中场，或从中场移动至后场。位于后场的对象不会因<a href=##>后退</a>改变位置。`,
    },
    '随机移动': {
      type: `移动`,
      value: `对象随机移动至任何位置，这也可能会令对象未能改变位置。`,
    },


    '解体': {
      type: `处境`,
      value: `角色失去了自己的尘世肉体，因此无法采取任何与之相关的行为。大部分角色的思维也会随之消散。`,
    },
    '狂乱': {
      type: `处境`,
      value: `狂乱。`,
    },
    '堕落': {
      type: `处境`,
      value: `堕落。`,
    },
    '持续伤害': {
      type: `处境`,
      value: `将受到持续伤害时的刻度视为第0刻，每当6的倍数份刻度被填充时，角色就会承受1次损伤，随后将持续伤害的强度减半。场景结束时，所有持续伤害都会自动解除。`,
    },
    '苦难': {
      type: `处境`,
      value: `这种处境代表那些不会立即出现，而是在一段时间过后才会发生的情况。由GM根据情景决定角色是否会承受苦难。`,
    },
    'BS': {
      type: `处境`,
      value: `BS会令角色在特定的能力值上承受等于强度的状态减值。`,
    },
    '缓慢': {
      type: `处境`,
      value: `在冲突命刻的每 <code>强度</code> 刻内，角色只能宣言1个标准动作，并且这个动作会额外产生4点《|RE|》。<br>
      如果角色受到增加标准动作宣言次数的效果，则这些必须成功反制造成<a href=##>缓慢</a>处境的效果才能生效。`,
    },
    '脆弱': {
      type: `处境`,
      value: `角色每失去1点<a href=##>EP</a>，都会使HP上限额外减少等于强度的数值。`,
    },
    '破绽': {
      type: `处境`,
      value: `角色特定防御类型的防御检定会受到2点减值。`,
    },
    '禁足': {
      type: `处境`,
      value: `角色无法执行<a href=##>移动</a>动作，并且任何维持中的<a href=##>移动</a>动作都会立即结束。<br>
      尝试改变角色位置的<a href=##>移动</a>动作必须成功反制造成<a href=##>禁足</a>处境的效果才能生效。`,
    },
    '昏迷': {
      type: `处境`,
      value: `角色无法主动采取任何需要身体运动的行为，也无法感知周围的环境。<br>
      角色会自动放弃应对外来效果的防御检定，任何挑战这些防御的攻击都可以不进行检定，直接造成大成功的结果 (由攻击者决定)。<br>
      如果角色自愿陷入昏迷 (例如休眠)，则不会自动放弃使用知觉、感应、灵性的防御检定，挑战这些防御的攻击也不能直接造成大成功的结果。`,
    },


    'GS': {
      type: `处境`,
      value: `GS会令角色在特定的能力值上获得等于强度的状态加值。`,
    },
    '迅捷': {
      type: `处境`,
      value: `在冲突命刻的每 <code>强度</code> 刻内仅1次，角色可以宣言1个额外的标准动作，并且这个动作产生的《|RE|》会减少4点。<br>
      如果角色受到减少标准动作宣言次数的效果，则这些必须成功反制造成<a href=##>迅捷</a>处境的效果才能生效。`,
    },
    '飞行': {
      type: `处境`,
      value: `角色不会成为近战攻击的有效对象。`,
    },


    '无力化': {
      type: `处境`,
      value: `无力化的角色不会被视为处于冲突场景中，因此通常无法被选为效果的对象，尽管她的物理位置可能并没有发生变化。`,
    },
    '指示物': {
      type: `处境`,
      value: `指示物本身没有任何效果，其作用取决于施加指示物的效果。`,
    },
  };

  function replaceText() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const regex = /《([^|]*)\|([^|]+)\|([^》]*)》/g;
    let node;
    while (node = walker.nextNode()) {
      // 检查文本内容是否匹配正则表达式
      const matches = [...node.nodeValue.matchAll(regex)];
      // 如果没有匹配项，则继续
      if (matches.length === 0) continue;
      // 替换收集到的节点中的文本
      let tagHtml = node.nodeValue;
      matches.forEach(match => {
        const [fullMatch, textL, textK, textR] = match;
        const tagInfo = tagData[textK]; // 根据 textK 获取 tag 信息
        const replacement = `<span class="CMT"><a href="##">${textL || ''}${textK}${textR || ''}</a><span class="show">
        <table style="width: 100%">
          <tr><th><table style="width: 100%; font-size: 15px">
            <tr style="border-bottom: 0.5px solid white">
              <td style="width: 75%">◢ ${textK}</td>
              <td style="width: 25%; text-align: center">${tagInfo.type}</td>
            </tr>
          </table></th></tr>
          <tr><td>${tagInfo.value}</td></tr>
        </table></span></span>`;
        // 用替换内容更新 tagHtml
        tagHtml = tagHtml.replace(fullMatch, replacement);
      });
      const tagSpan = document.createElement('span');
      tagSpan.innerHTML = tagHtml;
      node.parentNode.replaceChild(tagSpan, node);
      // 更新 walker 的当前节点为新创建的 span
      walker.currentNode = tagSpan;
    }
  }
  // 执行替换操作
  replaceText();


  const dataRemove = [];

  // 处理 TIP 元素
  const tipEl = document.querySelectorAll('.TIP');
  tipEl.forEach(el => {
    const tip = el.childNodes[0].nodeValue;
    const tipText = el.querySelector('span').textContent;
    const commentHtml = `
      <span class="CMT">
        <a href="##">${tip}</a>
        <span class="show">${tipText}</span>
      </span>`;
    el.insertAdjacentHTML('afterend', commentHtml);
    dataRemove.push(el);
  });

  dataRemove.forEach(el => el.remove());

  // 添加鼠标事件处理
  document.querySelectorAll('.CMT').forEach(cmt => {
    let timeout;

    cmt.addEventListener('mouseenter', () => {
      clearTimeout(timeout); // 清除任何现存的超时
      const showElement = cmt.querySelector('.show');
      showElement.style.display = 'block'; // 显示提示窗
      showElement.style.opacity = '1'; // 确保透明度为1
    });

    cmt.addEventListener('mouseleave', () => {
      const showElement = cmt.querySelector('.show');
      showElement.style.opacity = '0'; // 设置透明度为0以开始渐变消失
      timeout = setTimeout(() => {
        showElement.style.display = 'none'; // 在透明度变为0后隐藏提示窗
      }, 250); // 设置延迟时间
    });
  });
});
