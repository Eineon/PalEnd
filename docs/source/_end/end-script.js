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
    '————': `——————————————————————————————————————————————————`,
    'GM': `
      Game Master<br>游戏的主持人。`,
    'PL': `
      Player<br>游戏的玩家。`,
    'PC': `
      Player Character<br>游戏玩家扮演的角色。`,
    'NPC': `
      Non-Player Character<br>不由游戏玩家扮演的角色。`,
    'LV': `
      Level<br>角色的人物等级。`,
    'CR': `
      Character Rating<br>角色的阶层，等于人物等级的1/5。`,
    'MR': `
      Maneuver Rating<br>游戏中动作的阶层。`,
    'RE': `
      Recovery<br>动作的回正时间，代表角色连续执行动作的间隔时间。`,
    'STR': `
      Strength<br>体能。角色的能力值之一。`,
    'DEX': `
      Dexterity<br>协调。角色的能力值之一。`,
    'INS': `
      Insight<br>聪颖。角色的能力值之一。`,
    'EMP': `
      Empathy<br>感性。角色的能力值之一。`,
    'GNO': `
      Gnosis<br>灵知。角色的能力值之一。`,
    'HR': `
      High Roll<br>检定的高值，代表2D10中较高的骰点。`,
    'LR': `
      Low Roll<br>检定的低值，代表2D10中较低的骰点。`,
    'AAS': `
      Attack Ability Scores<br>攻击检定中使用的能力值。`,
    'ACC': `
      Accuracy<br>被动攻击检定的判定值。`,
    'AB': `
      Attack Bonus<br>攻击检定的修正值总和。`,
    'DAS': `
      Defense Ability Scores<br>防御检定中使用的能力值。`,
    'PSI': `
      Psionics<br>被动施术检定的判定值。`,
    'PAS': `
      Psychic Ability Scores<br>术源的术法能力值。`,
    'HG': `
      Hit Gauge<br>生命量谱。`,
    'HP': `
      Hit Points<br>生命值。`,
    'SG': `
      Stamina Gauge<br>精力量谱。`,
    'SP': `
      Stamina Points<br>精力值。`,
    'LG': `
      Link Gauge<br>连结量谱。`,
    'LP': `
      Link Points<br>连结值。`,
    'WP': `
      Will Power<br>意志力。`,
    'SAN': `
      Sanity<br>理智。`,
    'IP': `
      Information Points<br>信息点。`,
    'PP': `
      Psychic Points<br>术法点。`,
    'DP': `
      Damage Points<br>伤害值。`,
    'TP': `
      Tactical Points<br>战术点。`,
    '————': `——————————————————————————————————————————————————`,
    'N': `
      这种稀有度的事物非常普遍。未标注稀有度的元素，稀有度默认为N。`,
    'R': `
      这种稀有度的事物需要特殊的训练或特定文化的背景才有可能接触。<a href="##">分析</a>稀有度为R的事物时，达成度会受到4点减值。`,
    'S': `
      这种稀有度的事物几乎不可能被找到。<a href="##">分析</a>稀有度为S的事物时，达成度会受到8点减值。`,
    'U': `
      这种稀有度的事物是独一无二的。<a href="##">分析</a>稀有度为U的事物时，达成度会受到12点减值。`,
    '————': `——————————————————————————————————————————————————`,
    '附赠': `
      只要角色满足「前置」条件和等级要求，她就会自动习得<a href="##">附赠</a>特技，并且不计入她所能习得的特技总数中。`,
    '血脉': `
      一名角色最多只能习得1项<a href="##">血脉</a>特技。`,
    '原型': `
      这项特技属于一种<b>原型</b>。`,
    '唤醒': `
      一旦习得某种<b>原型</b>的<a href="##">唤醒</a>特技，直到习得至少5个属于该<b>原型</b>的特技 (含<a href="##">唤醒</a>特技) 为止，无法再习得其他的<a href="##">唤醒</a>特技。`,
    '————': `——————————————————————————————————————————————————`,
    '至近': `
      当使用者位于前场时，可以将同样位于前场的角色作为对象。在前场之外的位置执行这种动作，将会导致动作使用失败。`,
    '近距': `
      当使用者位于前场时，可以将位于前场或中场的角色作为对象。如果使用者位于中场，则可以将位于前场的角色作为对象。位于后场时将使用失败。`,
    '中距': `
      当使用者位于前场或中场时，可以将位于前场、中场、后场的角色作为对象。如果使用者位于后场，则可以将位于前场或中场的角色作为对象。`,
    '远距': `
      无论使用者处于哪个位置，都可以将位于前场、中场、后场的角色作为对象。`,
    '————': `——————————————————————————————————————————————————`,
    '原生种': `
      原生种的生命是在实境的自然环境下诞生的生命形式。`,
    '畸变种': `
      畸变种的生命具有能够让自己呈现出一种或多种形态的超自然能力。`,
    '妖精种': `
      妖精种的生命诞生自千奇百怪的自然现象。`,
    '鬼神种': `
      鬼神种的生命是从虚境诞生的无实体存在。`,
    '域外种': `
      域外种的生命拥有复杂的起源，可能来自其他的实体位面，甚至是映像或精神位面`,
    '构造体': `
      构造体通常是如机器人、魔像等个体那样的人造生命。构造体的功能和智能则取决于其设计和制造者的技术。`,
    '野兽': `
      野兽是智力相对较低的生命，它们通常不会说话。`,
    '怪兽': `
      怪兽类似于野兽，但怪兽通常拥有更高的智能。`,
    '天族': `
      天族诞生自圣洁的位面。`,
    '魔族': `
      魔族诞生自邪秽的位面。`,
    '均质': `
      具有均质亚种的生命没有明显的器官分化。`,
    '————': `——————————————————————————————————————————————————`,
    '闲角': `
      闲角级敌人难以对同等级的PC构成威胁，可以被轻松击败。`,
    '配角': `
      配角级敌人实力与同等级的PC相当。`,
    '领袖': `
      领袖级敌人的实力至少是同等级PC的两倍。`,
    '冠位': `
      冠位级敌人是无比强大的存在，其实力足以载入史册。`,
    '————': `——————————————————————————————————————————————————`,
    '探索': `
      这种效果无法在冲突场景中使用。`,
    '休整': `
      这种效果只能在休整场景，或是角色未登场的场景中使用。<br>
      执行非<a href="##">休整</a>动作会打断维持中的<a href="##">休整</a>效果。`,
    '暗骰': `
      GM会暗中投掷这种效果的检定，并且不会将检定的结果公开给其他玩家。`,
    '开放': `
      这种效果进行的检定属于开放检定。`,
    '攻击': `
      这种效果能够让角色发起一次攻击。`,
    '移动': `
      这种效果能够让角色移动到其他位置。`,
    '操作': `
      角色必须物理上操作一件物品或比划手势才能使用这种效果。<br>
      没有合适肢体的角色无法使用这种效果。`,
    '专注': `
      这种效果要求使用者的精神在一定程度上保持集中和自制。<br>
      使用者一旦离开场景，她维持的所有<a href="##">专注</a>效果都会立即结束。`,
    '绝技': `
      一名角色在每个轮次中最多只能宣言1次<a href="##">绝技</a>动作。`,
    '先发': `
      这种效果只能在使用者尚未宣言过标准动作或<a href="##">先发</a>动作的轮次中使用。`,
    '起手': `
      这种效果只能在使用者尚未宣言过<a href="##">攻击</a>或<a href="##">起手</a>动作的轮次中使用。`,
    '收尾': `
      执行这种动作后，直到本轮结束为止，使用者无法执行其他<a href="##">攻击</a>和<a href="##">收尾</a>动作。`,
    '连携': `
      这种效果只能在使用者承受连击减值的情况下使用。`,
    '扫荡': `
      这种效果能令立即将角色无力化，但难以对较为强大的角色产生效果。<br>
      角色的CR每比扫荡效果的MR高1阶，就会在应对扫荡效果的防御检定上获得2点加值。`,
    '处决': `
      这种效果针对对象的要害发挥作用，因此对没有要害的角色无效 (例如具有<a href="##">均质</a>亚种的角色)。`,
    '治疗': `
      这种效果能够解除角色生理或心灵上的损伤，或是助其脱离有害的处境。`,
    '疾病': `
      这种效果会造成疾病。`,
    '睡眠': `
      这种效果能让角色陷入沉睡或变得疲倦。`,
    '心灵': `
      这种效果会干涉心智。<a href="##">心灵</a>效果对<a href="##">无意识</a>的角色无效。`,
    '情绪': `
      这种效果会改变情绪。具有该标签的效果同时视为具有<a href="##">心灵</a>标签。`,
    '恐惧': `
      这种效果会唤起恐惧的情绪。具有该标签的效果同时视为具有<a href="##">情绪</a>标签。`,
    '理解': `
      这种效果需要对象能够理解使用者表达的信息才能发挥作用。`,
    '光影': `
      这种效果通过影响明与暗而发挥作用。`,
    '视觉': `
      这种效果中与视觉相关的部分，只会影响看到的角色。具体由GM判断。`,
    '听觉': `
      这种效果中与听觉相关的部分，只会影响听到的角色。具体由GM判断。`,
    '嗅觉': `
      这种效果中与嗅觉相关的部分，只会影响闻到的角色。具体由GM判断。`,
    '————': `——————————————————————————————————————————————————`,
    '律令': `
      律令系术法的核心理论在于「支配」。`,
    '契绊': `
      契绊系术法的核心理论在于「引导」。`,
    '炼成': `
      炼成系术法的核心理论在于「转变」。`,
    '相变': `
      这种效果能够对现实进行扭曲和变化，使其符合使用者的期望和意图。`,
    '幻惑': `
      这种效果能够欺骗生命体的感官和心灵，或赋予野兽和无机物灵智。`,
    '感测': `
      这种效果能够赋予使用者超越常规感官的知觉，增强对环境或情感的理解力。`,
    '具现': `
      这种效果能够凭空创造现实中不存在的幻想产物，形成具象的实体或现象。`,
    '破灭': `
      这种效果能够毁坏或削弱对象事物的存在，将其彻底抹消。`,
    '化身': `
      这是化身。`,
    '————': `——————————————————————————————————————————————————`,
    '真名': `
      事物的真名是其独有的波动，凝聚了它在灵界的本质和属性。<br>
      具有超自然属性的事物会持续释放自身的真名，这种波动只能被特殊手段侦测。`,
    '探知': `
      这种效果能够访问某一事物或真名的存在或方位，或是令角色能够通过他人的感官收集信息。`,
    '预见': `
      这种效果能够决定在近未来可能发生的事件。`,
    '揭示': `
      这种效果能够展现事物真实的样子。`,
    '————': `——————————————————————————————————————————————————`,
    '延展': `
      这种效果能够改变术法的作用。每次施术只能应用1项<a href="##">延展</a>。<br>
      <a href="##">延展</a>强度加上术法的前置专研级别，不能超过术源在相应秘仪上的专研级别。<br>
      应用强度为<b>X</b>的<a href="##">延展</a>时，需要角色同时指定具体的强度。`,
    '命运': `
      这种效果能够修改命运。如果一个项目同时受到多个<a href="##">命运</a>效果，新的效果必须成功反制现有效果才能生效。`,
    '塑体': `
      这种效果能够细微改变角色的外形。如果一名角色同时受到多个影响同一部位的塑体效果，新的效果必须成功反制现有效果才能生效。如果这些效果会影响不同的部位，则可以同时生效。`,
    '变形': `
      这种效果能够完全改变角色的外形。如果一名角色同时受到多个变形效果，或同时受到变形与塑体效果，新的效果必须成功反制现有效果才能生效。<br>
      变形效果通常无法令角色变成特定的个体，只能是一类的普通一员。`,
    '维度': `
      这种效果会改变事物所处的维度。同一事物最多只会同时受到一个维度效果影响。新的效果必须成功反制现有效果才能生效。`,
    '结界': `
      结界会在特定时间内影响一个区域。同一区域最多只会同时受到一个结界影响。新的结界必须成功反制现有结界才能生效。`,
    '诅咒': `
      诅咒是一种会持续造成负面影响的超自然效果。只有专门针对诅咒的效果才能解除它。`,
    '即死': `
      在即死效果造成的伤害结算后，所有受其损伤的HG都会被立即击破。部分即死效果可以在不造成损伤的情况下直接致死。`,
    '————': `——————————————————————————————————————————————————`,
    '物理': `
      这种效果通过由运动产生的力量粉碎、撕裂、贯穿目标。`,
    '生理': `
      这种效果通过生命体内外因素引起生理机能的异常。`,
    '灼烧': `
      这种效果通过高温或化学物质造成烧伤。`,
    '冷冻': `
      这种效果通过极低的温度引起冻伤。`,
    '侵蚀': `
      这种效果通过腐蚀或解离造成伤害。`,
    '疲劳': `
      这种效果会造成肉体或精神上的劳累。`,
    '疼痛': `
      这种效果会造成生理和心理上的疼痛感觉。`,
    '欣快': `
      这种效果会造成积极、愉悦和兴奋的情绪。`,
    '屈服': `
      这种效果会造成心理上的压抑、担忧、焦虑、不安和无助感。`,
    '错乱': `
      这种效果会造成严重的思维和认知障碍。`,
    '————': `——————————————————————————————————————————————————`,
    '电流': `
      这种效果会引发电击，并可能能够召唤或操作闪电。`,
    '热能': `
      这种效果涉及对热能的转换。`,
    '火焰': `
      这种效果会造成烧伤，并可以反制<a href="##">冰霜</a>效果。`,
    '冰霜': `
      这种效果会造成冻伤，并可以反制<a href="##">火焰</a>效果。`,
    '失血': `
      这种效果会导致血液的缺失。没有血液的生物免疫<a href="##">失血</a>效果。`,
    '————': `——————————————————————————————————————————————————`,
    '肉体': `
      这种物品是角色身体的一部分，无法被【缴械】。`,
    '搏击': `
      这种武器着重于近身缠斗，主要通过猛击和施加压力造成伤害。`,
    '白刃': `
      这种武器以锋利的刀刃或尖刺作为主要攻击部件。`,
    '软兵': `
      这种武器使用柔软材料制作，主要通过摆动和甩打进行攻击。`,
    '毒剂': `
      这种武器利用有毒物质作为攻击手段。`,
    '暗器': `
      这种武器小巧隐秘，方便携带和使用。`,
    '弓弩': `
      这种武器利用弹力发射弹药。`,
    '铳械': `
      这种武器利用推力发射弹药。`,
    '爆破': `
      这种武器会产生剧烈的爆炸。`,
    '奇门': `
      每件奇门武器都视为单独的一种武器类别。`,
    '近战': `
      这种武器只能用来发动近战攻击。`,
    '远程': `
      这种武器只能用来发动远程攻击。`,
    '两用': `
      这种武器既可以用来发动近战武器，也可以用来发动远程攻击。<br>
      <a href="##">两用</a>武器同时视为<a href="##">近战</a>武器与<a href="##">远程</a>武器。<br>
      这类武器通常会列出2个范围，视为<a href="##">近战</a>武器时只能使用近战范围，视为<a href="##">远程</a>武器时只能使用远程范围。`,
    '轻型': `
      这种武器产生的连击减值将获得1点减值。`,
    '重型': `
      这种武器产生的连击减值将受到1点加值。`,
    '装填': `
      这种武器每刻只能使用1次。`,
    '弹药': `
      每次使用这种物品都会消耗1发弹药。如果弹药耗尽，则无法再次使用这件物品。角色可以通过【交互】重装1件物品的所有弹药。`,
    '————': `——————————————————————————————————————————————————`,
    '前进': `
      对象从后场移动至中场，或从中场移动至前场。<br>
      位于前场的对象不会因<a href="##">前进</a>改变位置。`,
    '后退': `
      对象从前场移动至中场，或从中场移动至后场。<br>
      位于后场的对象不会因<a href="##">后退</a>改变位置。`,
    '扰乱': `
      对象随机移动至任何位置，这也可能会令对象未能改变位置。`,
    '架势': `
      这种效果通常只能在冲突场景中使用。效果会持续到角色离开场景、冲突结束、或执行另一个「时效：架势」动作。`,
    '————': `——————————————————————————————————————————————————`,
    'BS': `
      BS会令角色在特定的能力值上承受等于强度的状态减值。`,
    '缓慢': `
      角色每轮的待机值最多可以增加等于强度的数值。<br>
      由施加者在待机值每次增加时决定是否增加。<br>
      造成<a href="##">缓慢</a>处境的效果必须成功反制赋予<a href="##">迅捷</a>处境的效果才能生效。`,
    '破绽': `
      角色特定防御类型的防御检定会受到2点减值。`,
    '禁足': `
      角色无法执行<a href="##">移动</a>动作。<br>
      尝试改变角色位置的<a href="##">移动</a>动作必须成功反制造成<a href="##">禁足</a>处境的效果才能生效。`,
    '昏迷': `
      角色无法主动执行任何动作。`,
    '发狂': `
      每失去1点SAN，角色就会承受1项随机的疯狂效应。`,
    '持续伤害': `
      每轮结束时，受到持续伤害的角色会根据伤害类型，在HP或SP上承受损伤，如同受到一次威力与强度相当的伤害。场景结束时，所有持续伤害都会自动解除。`,
    '————': `——————————————————————————————————————————————————`,
    'GS': `
      GS会令角色在特定的能力值上获得等于强度的状态加值。`,
    '迅捷': `
      角色每轮的待机值最多可以降低等于强度的数值。<br>
      由角色自身在待机值每次增加时决定是否降低。<br>赋予<a href="##">迅捷</a>处境的效果必须成功反制造成<a href="##">缓慢</a>处境的效果才能生效。`,
    '飞行': `
      角色不会成为近战攻击的有效对象。`,
    '————': `——————————————————————————————————————————————————`,
    '指示物': `
      指示物本身没有任何效果，其作用取决于施加指示物的效果。`,
    '————': `——————————————————————————————————————————————————`,
  };

  function replaceText() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const regex = /《([^|]*)\|([^|]+)\|([^》]*)》/g;
    let nodesToReplace = [];
    let node;
    while (node = walker.nextNode()) {
      // 检查当前节点是否包含需要替换的文本
      if (regex.test(node.nodeValue)) {
        nodesToReplace.push(node);
      }
    }
    // 遍历需要替换的节点并进行替换
    nodesToReplace.forEach(node => {
      const newHTML = node.nodeValue.replace(regex, (_, textL, textK, textR) => {
        const value = tagData[textK] || ''; // 使用 textK 查找对应的值
        return `
          <span class="CMT">
            <a href="##">${textL || ''}${textK}${textR || ''}</a>
            <span class="show">
              <span>◆ ${textK}</span>
              <hr>
              ${value}
            </span>
          </span>`;
      });
      // 仅在 newHTML 不等于原节点值时进行替换
      if (newHTML !== node.nodeValue) {
        // 创建一个新的 span 元素并将新 HTML 插入其中
        const span = document.createElement('span');
        span.innerHTML = newHTML; // 将新 HTML 插入到 span 中

        // 替换原节点
        node.parentNode.replaceChild(span, node);
      }
    });
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
