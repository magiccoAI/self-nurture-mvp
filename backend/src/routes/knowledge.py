from flask import Blueprint, jsonify, request

knowledge_bp = Blueprint('knowledge', __name__)

# 模拟知识库数据
concepts = [
    {
        'id': 1,
        'name': '内在小孩',
        'description': '人格中保留的童年自我部分，包含童年的情感、需求、记忆和经历。',
        'related_concepts': [2, 5],
        'category': '精神分析'
    },
    {
        'id': 2,
        'name': '自我养育',
        'description': '通过满足内在小孩的需求，培养健康的自我关系的过程。',
        'related_concepts': [1, 3],
        'category': '个人成长'
    },
    {
        'id': 3,
        'name': '依恋理论',
        'description': '研究早期照顾者关系如何影响终身关系模式的理论。',
        'related_concepts': [4],
        'category': '心理学'
    },
    {
        'id': 4,
        'name': '安全型依恋',
        'description': '一种健康的依恋类型，表现为对自己和他人都有积极的看法。',
        'related_concepts': [3],
        'category': '心理学'
    },
    {
        'id': 5,
        'name': '自我关怀',
        'description': '以友善、接纳和理解的态度对待自己，特别是在面对困难时。',
        'related_concepts': [2],
        'category': '个人成长'
    }
]

theories = [
    {
        'id': 1,
        'name': '精神分析理论',
        'founder': '弗洛伊德',
        'description': '关注潜意识过程如何影响思想、情感和行为。',
        'key_concepts': ['潜意识', '心理结构', '防御机制', '移情'],
        'category': '精神分析'
    },
    {
        'id': 2,
        'name': '依恋理论',
        'founder': '约翰·鲍尔比',
        'description': '研究早期照顾者关系如何影响终身关系模式。',
        'key_concepts': ['依恋类型', '内部工作模型', '安全基地', '分离焦虑'],
        'category': '心理学'
    },
    {
        'id': 3,
        'name': '自我关怀理论',
        'founder': '克里斯汀·内夫',
        'description': '研究如何以友善和接纳的态度对待自己。',
        'key_concepts': ['自我友善', '共通人性', '正念'],
        'category': '个人成长'
    }
]

resources = [
    {
        'id': 1,
        'title': '《内在的小孩》',
        'author': '约翰·布雷萧',
        'type': '书籍',
        'description': '探索如何识别、连接和疗愈内在小孩，处理童年创伤。',
        'difficulty': '中级',
        'category': '精神分析'
    },
    {
        'id': 2,
        'title': '内在小孩工作入门',
        'author': 'Sarah Wilson',
        'type': '视频',
        'description': '30分钟的指导视频，介绍如何开始与内在小孩建立联系。',
        'difficulty': '初级',
        'category': '个人成长'
    },
    {
        'id': 3,
        'title': '《依恋：亲密关系的科学》',
        'author': 'Amir Levine & Rachel Heller',
        'type': '书籍',
        'description': '探索依恋理论如何影响成人关系，以及如何发展更安全的依恋模式。',
        'difficulty': '中级',
        'category': '心理学'
    }
]

glossary = [
    {
        'id': 1,
        'term': '依恋',
        'definition': '人与特定他人之间的情感联结，最初在婴儿与照顾者之间形成。',
        'related_terms': ['安全型依恋', '焦虑型依恋', '回避型依恋'],
        'category': '心理学'
    },
    {
        'id': 2,
        'term': '内在小孩',
        'definition': '人格中保留的童年自我部分，包含童年的情感、需求、记忆和经历。',
        'related_terms': ['内在批判者', '内在父母', '自我养育'],
        'category': '精神分析'
    },
    {
        'id': 3,
        'term': '投射',
        'definition': '一种防御机制，将自己不能接受的想法、情感或特质归因于他人。',
        'related_terms': ['防御机制', '否认', '合理化'],
        'category': '精神分析'
    }
]

# 获取概念图谱
@knowledge_bp.route('/concepts', methods=['GET'])
def get_concepts():
    # 可以添加过滤和分页逻辑
    category = request.args.get('category')
    
    if category:
        filtered_concepts = [c for c in concepts if c['category'] == category]
        return jsonify({
            'status': 'success',
            'data': filtered_concepts
        })
    
    return jsonify({
        'status': 'success',
        'data': concepts
    })

# 获取单个概念详情
@knowledge_bp.route('/concepts/<int:concept_id>', methods=['GET'])
def get_concept(concept_id):
    concept = next((c for c in concepts if c['id'] == concept_id), None)
    
    if not concept:
        return jsonify({
            'status': 'error',
            'message': '概念不存在'
        }), 404
    
    # 获取相关概念的完整信息
    related_concepts_data = [next((c for c in concepts if c['id'] == related_id), None) 
                            for related_id in concept['related_concepts']]
    
    # 移除None值（如果有）
    related_concepts_data = [c for c in related_concepts_data if c]
    
    # 构建响应
    response_data = {**concept, 'related_concepts_data': related_concepts_data}
    
    return jsonify({
        'status': 'success',
        'data': response_data
    })

# 获取理论基础
@knowledge_bp.route('/theories', methods=['GET'])
def get_theories():
    category = request.args.get('category')
    
    if category:
        filtered_theories = [t for t in theories if t['category'] == category]
        return jsonify({
            'status': 'success',
            'data': filtered_theories
        })
    
    return jsonify({
        'status': 'success',
        'data': theories
    })

# 获取单个理论详情
@knowledge_bp.route('/theories/<int:theory_id>', methods=['GET'])
def get_theory(theory_id):
    theory = next((t for t in theories if t['id'] == theory_id), None)
    
    if not theory:
        return jsonify({
            'status': 'error',
            'message': '理论不存在'
        }), 404
    
    return jsonify({
        'status': 'success',
        'data': theory
    })

# 获取资源推荐
@knowledge_bp.route('/resources', methods=['GET'])
def get_resources():
    resource_type = request.args.get('type')
    category = request.args.get('category')
    
    filtered_resources = resources
    
    if resource_type:
        filtered_resources = [r for r in filtered_resources if r['type'] == resource_type]
    
    if category:
        filtered_resources = [r for r in filtered_resources if r['category'] == category]
    
    return jsonify({
        'status': 'success',
        'data': filtered_resources
    })

# 获取术语词典
@knowledge_bp.route('/glossary', methods=['GET'])
def get_glossary():
    term = request.args.get('term')
    category = request.args.get('category')
    
    filtered_glossary = glossary
    
    if term:
        filtered_glossary = [g for g in filtered_glossary if term.lower() in g['term'].lower()]
    
    if category:
        filtered_glossary = [g for g in filtered_glossary if g['category'] == category]
    
    return jsonify({
        'status': 'success',
        'data': filtered_glossary
    })

# 搜索知识库
@knowledge_bp.route('/search', methods=['GET'])
def search_knowledge():
    query = request.args.get('q', '')
    
    if not query:
        return jsonify({
            'status': 'error',
            'message': '搜索查询不能为空'
        }), 400
    
    # 搜索概念
    concept_results = [c for c in concepts if query.lower() in c['name'].lower() or query.lower() in c['description'].lower()]
    
    # 搜索理论
    theory_results = [t for t in theories if query.lower() in t['name'].lower() or query.lower() in t['description'].lower()]
    
    # 搜索资源
    resource_results = [r for r in resources if query.lower() in r['title'].lower() or query.lower() in r['description'].lower()]
    
    # 搜索术语
    glossary_results = [g for g in glossary if query.lower() in g['term'].lower() or query.lower() in g['definition'].lower()]
    
    return jsonify({
        'status': 'success',
        'data': {
            'concepts': concept_results,
            'theories': theory_results,
            'resources': resource_results,
            'glossary': glossary_results
        }
    })
