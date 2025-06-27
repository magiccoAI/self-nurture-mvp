from flask import Blueprint, jsonify, request

exploration_bp = Blueprint('exploration', __name__)

# 模拟用户成长历程数据
timeline_events = [
    {
        'id': 1,
        'user_id': 1,
        'age': '0-3岁',
        'title': '早期依恋形成',
        'description': '与主要照顾者建立依恋关系，形成基本安全感和信任感。',
        'impact': '影响了我对亲密关系的基本态度和期望。',
        'emotions': ['安全', '信任', '依赖'],
        'created_at': '2025-05-10'
    },
    {
        'id': 2,
        'user_id': 1,
        'age': '6岁',
        'title': '入学经历',
        'description': '第一次离开家庭环境，进入学校集体生活。',
        'impact': '学会了适应新环境，但也感到焦虑和不安。',
        'emotions': ['好奇', '焦虑', '兴奋'],
        'created_at': '2025-05-12'
    },
    {
        'id': 3,
        'user_id': 1,
        'age': '12岁',
        'title': '父母冲突加剧',
        'description': '父母之间的矛盾和冲突明显增加，家庭氛围紧张。',
        'impact': '开始压抑自己的需求和情感，尝试扮演和平调解者角色。',
        'emotions': ['恐惧', '无力', '责任'],
        'created_at': '2025-05-15'
    }
]

# 模拟评估结果数据
assessments = [
    {
        'id': 1,
        'user_id': 1,
        'type': '依恋类型评估',
        'result': '焦虑型依恋（中度）',
        'details': {
            'scores': {
                '安全型': 35,
                '焦虑型': 65,
                '回避型': 40,
                '混乱型': 25
            },
            'interpretation': '你的评估结果显示焦虑型依恋特征较为明显。这表明你可能在关系中担心被抛弃或拒绝，倾向于寻求过度的确认和安慰。',
            'recommendations': [
                '练习自我安抚和情绪调节技巧',
                '觉察并挑战关于关系的负面自动思维',
                '建立健康的界限和自我价值感'
            ]
        },
        'created_at': '2025-05-20'
    },
    {
        'id': 2,
        'user_id': 1,
        'type': '内在小孩需求评估',
        'result': '主要未满足需求: 情感验证、安全感',
        'details': {
            'primary_needs': ['情感验证', '安全感'],
            'secondary_needs': ['自主性', '表达'],
            'interpretation': '你的内在小孩主要渴望情感验证和安全感。童年时期，你的情感可能没有得到充分的认可和接纳，安全感也可能不足。',
            'recommendations': [
                '练习自我验证和接纳',
                '创造安全的环境和关系',
                '与内在小孩建立对话，倾听其需求'
            ]
        },
        'created_at': '2025-05-15'
    }
]

# 模拟反思日志数据
journal_entries = [
    {
        'id': 1,
        'user_id': 1,
        'title': '关于童年记忆的反思',
        'content': '今天回想起小时候的一些记忆，特别是父亲工作忙碌时期的感受。我意识到那段时间的孤独感对我现在的关系模式有很大影响。我倾向于过度独立，很少寻求帮助，因为童年时我学会了"不要麻烦别人"。认识到这一点后，我想尝试更多地向亲近的人表达需求。',
        'tags': ['童年记忆', '关系模式', '独立性'],
        'created_at': '2025-05-25'
    },
    {
        'id': 2,
        'user_id': 1,
        'title': '情绪觉察练习',
        'content': '今天尝试了情绪觉察练习，每小时停下来关注当下的情绪。我注意到工作压力下有很多焦虑，但之前并没有真正意识到。这些焦虑在身体中表现为肩膀紧张和浅呼吸。意识到这一点后，我尝试了几次深呼吸，感觉好多了。我想继续这个练习，提高对情绪的觉察能力。',
        'tags': ['情绪觉察', '焦虑', '身体感受'],
        'created_at': '2025-05-22'
    }
]

# 模拟内在对话数据
inner_dialogues = [
    {
        'id': 1,
        'user_id': 1,
        'title': '与内在小孩对话',
        'adult_voice': '你好，小朋友。我注意到最近当我需要在公共场合发言时，你感到非常害怕。能告诉我这是为什么吗？',
        'inner_child_voice': '我害怕别人会笑话我，就像小学时那样。记得那次我在班上回答问题出错，大家都笑了吗？那感觉太糟糕了。',
        'insights': '我意识到我的公众演讲恐惧与童年的羞辱经历有关。我需要安抚内在小孩的恐惧，同时建立新的、更积极的经验。',
        'created_at': '2025-05-18'
    }
]

# 获取成长历程
@exploration_bp.route('/timeline', methods=['GET'])
def get_timeline():
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    # 可以添加过滤和分页逻辑
    user_timeline = [event for event in timeline_events if event['user_id'] == user_id]
    
    return jsonify({
        'status': 'success',
        'data': user_timeline
    })

# 添加成长历程事件
@exploration_bp.route('/timeline', methods=['POST'])
def add_timeline_event():
    data = request.json
    
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    # 验证必要字段
    required_fields = ['age', 'title', 'description', 'impact', 'emotions']
    for field in required_fields:
        if field not in data:
            return jsonify({
                'status': 'error',
                'message': f'缺少必要字段: {field}'
            }), 400
    
    # 创建新事件
    new_event = {
        'id': len(timeline_events) + 1,
        'user_id': user_id,
        'age': data['age'],
        'title': data['title'],
        'description': data['description'],
        'impact': data['impact'],
        'emotions': data['emotions'],
        'created_at': '2025-05-28'  # 在实际应用中，应该使用当前日期
    }
    
    # 添加到集合
    timeline_events.append(new_event)
    
    return jsonify({
        'status': 'success',
        'message': '成长历程事件已添加',
        'data': new_event
    }), 201

# 获取评估结果
@exploration_bp.route('/assessments', methods=['GET'])
def get_assessments():
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    assessment_type = request.args.get('type')
    
    user_assessments = [a for a in assessments if a['user_id'] == user_id]
    
    if assessment_type:
        user_assessments = [a for a in user_assessments if a['type'] == assessment_type]
    
    return jsonify({
        'status': 'success',
        'data': user_assessments
    })

# 添加评估结果
@exploration_bp.route('/assessments', methods=['POST'])
def add_assessment():
    data = request.json
    
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    # 验证必要字段
    required_fields = ['type', 'result', 'details']
    for field in required_fields:
        if field not in data:
            return jsonify({
                'status': 'error',
                'message': f'缺少必要字段: {field}'
            }), 400
    
    # 创建新评估结果
    new_assessment = {
        'id': len(assessments) + 1,
        'user_id': user_id,
        'type': data['type'],
        'result': data['result'],
        'details': data['details'],
        'created_at': '2025-05-28'  # 在实际应用中，应该使用当前日期
    }
    
    # 添加到集合
    assessments.append(new_assessment)
    
    return jsonify({
        'status': 'success',
        'message': '评估结果已添加',
        'data': new_assessment
    }), 201

# 获取反思日志
@exploration_bp.route('/journal', methods=['GET'])
def get_journal_entries():
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    tag = request.args.get('tag')
    
    user_entries = [entry for entry in journal_entries if entry['user_id'] == user_id]
    
    if tag:
        user_entries = [entry for entry in user_entries if tag in entry['tags']]
    
    return jsonify({
        'status': 'success',
        'data': user_entries
    })

# 添加反思日志
@exploration_bp.route('/journal', methods=['POST'])
def add_journal_entry():
    data = request.json
    
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    # 验证必要字段
    required_fields = ['title', 'content', 'tags']
    for field in required_fields:
        if field not in data:
            return jsonify({
                'status': 'error',
                'message': f'缺少必要字段: {field}'
            }), 400
    
    # 创建新日志条目
    new_entry = {
        'id': len(journal_entries) + 1,
        'user_id': user_id,
        'title': data['title'],
        'content': data['content'],
        'tags': data['tags'],
        'created_at': '2025-05-28'  # 在实际应用中，应该使用当前日期
    }
    
    # 添加到集合
    journal_entries.append(new_entry)
    
    return jsonify({
        'status': 'success',
        'message': '反思日志已添加',
        'data': new_entry
    }), 201

# 获取内在对话
@exploration_bp.route('/dialogues', methods=['GET'])
def get_inner_dialogues():
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    user_dialogues = [dialogue for dialogue in inner_dialogues if dialogue['user_id'] == user_id]
    
    return jsonify({
        'status': 'success',
        'data': user_dialogues
    })

# 添加内在对话
@exploration_bp.route('/dialogues', methods=['POST'])
def add_inner_dialogue():
    data = request.json
    
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    # 验证必要字段
    required_fields = ['title', 'adult_voice', 'inner_child_voice', 'insights']
    for field in required_fields:
        if field not in data:
            return jsonify({
                'status': 'error',
                'message': f'缺少必要字段: {field}'
            }), 400
    
    # 创建新对话
    new_dialogue = {
        'id': len(inner_dialogues) + 1,
        'user_id': user_id,
        'title': data['title'],
        'adult_voice': data['adult_voice'],
        'inner_child_voice': data['inner_child_voice'],
        'insights': data['insights'],
        'created_at': '2025-05-28'  # 在实际应用中，应该使用当前日期
    }
    
    # 添加到集合
    inner_dialogues.append(new_dialogue)
    
    return jsonify({
        'status': 'success',
        'message': '内在对话已添加',
        'data': new_dialogue
    }), 201
