from flask import Blueprint, jsonify, request

resources_bp = Blueprint('resources', __name__)

# 模拟资源收集数据
resource_collections = [
    {
        'id': 1,
        'user_id': 1,
        'name': '心理学书籍',
        'description': '精神分析和心理学相关的重要书籍',
        'item_count': 3,
        'last_update': '2025-05-15'
    },
    {
        'id': 2,
        'user_id': 1,
        'name': '自我养育视频',
        'description': '关于内在小孩工作和自我养育的视频资源',
        'item_count': 2,
        'last_update': '2025-05-20'
    },
    {
        'id': 3,
        'user_id': 1,
        'name': '冥想与正念资源',
        'description': '帮助培养正念和自我觉察的音频和指南',
        'item_count': 1,
        'last_update': '2025-05-22'
    }
]

# 模拟资源项目数据
resource_items = [
    {
        'id': 1,
        'user_id': 1,
        'collection_id': 1,
        'title': '《内在的小孩》',
        'type': '书籍',
        'author': '约翰·布雷萧',
        'url': 'https://example.com/books/inner-child',
        'notes': '这本书深入探讨了内在小孩的概念，以及如何与内在小孩建立联系和疗愈童年创伤。',
        'add_date': '2025-05-24'
    },
    {
        'id': 2,
        'user_id': 1,
        'collection_id': 3,
        'title': '自我关怀冥想',
        'type': '音频',
        'author': 'Sarah Wilson',
        'url': 'https://example.com/meditations/self-compassion',
        'notes': '20分钟的引导冥想，帮助培养对自己的友善和接纳态度。',
        'add_date': '2025-05-23'
    },
    {
        'id': 3,
        'user_id': 1,
        'collection_id': 2,
        'title': '理解你的依恋类型',
        'type': '视频',
        'author': 'Dr. Lisa Chen',
        'url': 'https://example.com/videos/attachment-types',
        'notes': '详细解释了不同的依恋类型及其对成人关系的影响，包含自我评估指南。',
        'add_date': '2025-05-22'
    },
    {
        'id': 4,
        'user_id': 1,
        'collection_id': 1,
        'title': '《依恋：亲密关系的科学》',
        'type': '书籍',
        'author': 'Amir Levine & Rachel Heller',
        'url': 'https://example.com/books/attached',
        'notes': '探索依恋理论如何影响成人关系，以及如何发展更安全的依恋模式。',
        'add_date': '2025-05-20'
    },
    {
        'id': 5,
        'user_id': 1,
        'collection_id': 1,
        'title': '《自我关怀的力量》',
        'type': '书籍',
        'author': '克里斯汀·内夫',
        'url': 'https://example.com/books/self-compassion',
        'notes': '介绍自我关怀的概念和实践方法，包含多种练习和科学研究。',
        'add_date': '2025-05-18'
    },
    {
        'id': 6,
        'user_id': 1,
        'collection_id': 2,
        'title': '内在小孩工作入门',
        'type': '视频',
        'author': 'Sarah Wilson',
        'url': 'https://example.com/videos/inner-child-intro',
        'notes': '30分钟的指导视频，介绍如何开始与内在小孩建立联系。',
        'add_date': '2025-05-15'
    }
]

# 获取用户的资源收集
@resources_bp.route('/collections', methods=['GET'])
def get_collections():
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    user_collections = [c for c in resource_collections if c['user_id'] == user_id]
    
    return jsonify({
        'status': 'success',
        'data': user_collections
    })

# 创建新的资源收集
@resources_bp.route('/collections', methods=['POST'])
def create_collection():
    data = request.json
    
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    # 验证必要字段
    required_fields = ['name', 'description']
    for field in required_fields:
        if field not in data:
            return jsonify({
                'status': 'error',
                'message': f'缺少必要字段: {field}'
            }), 400
    
    # 创建新收集
    new_collection = {
        'id': len(resource_collections) + 1,
        'user_id': user_id,
        'name': data['name'],
        'description': data['description'],
        'item_count': 0,
        'last_update': '2025-05-28'  # 在实际应用中，应该使用当前日期
    }
    
    # 添加到集合
    resource_collections.append(new_collection)
    
    return jsonify({
        'status': 'success',
        'message': '资源收集已创建',
        'data': new_collection
    }), 201

# 获取特定收集的详情
@resources_bp.route('/collections/<int:collection_id>', methods=['GET'])
def get_collection(collection_id):
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    # 查找收集
    collection = next((c for c in resource_collections if c['id'] == collection_id and c['user_id'] == user_id), None)
    
    if not collection:
        return jsonify({
            'status': 'error',
            'message': '资源收集不存在或无权访问'
        }), 404
    
    # 获取该收集中的资源项目
    collection_items = [item for item in resource_items if item['collection_id'] == collection_id and item['user_id'] == user_id]
    
    # 构建响应
    response_data = {**collection, 'items': collection_items}
    
    return jsonify({
        'status': 'success',
        'data': response_data
    })

# 获取用户的所有资源项目
@resources_bp.route('/items', methods=['GET'])
def get_resource_items():
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    collection_id = request.args.get('collection_id', type=int)
    resource_type = request.args.get('type')
    
    # 过滤用户的资源
    user_items = [item for item in resource_items if item['user_id'] == user_id]
    
    # 应用过滤条件
    if collection_id:
        user_items = [item for item in user_items if item['collection_id'] == collection_id]
    
    if resource_type:
        user_items = [item for item in user_items if item['type'] == resource_type]
    
    return jsonify({
        'status': 'success',
        'data': user_items
    })

# 添加新的资源项目
@resources_bp.route('/items', methods=['POST'])
def add_resource_item():
    data = request.json
    
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    # 验证必要字段
    required_fields = ['collection_id', 'title', 'type', 'author', 'notes']
    for field in required_fields:
        if field not in data:
            return jsonify({
                'status': 'error',
                'message': f'缺少必要字段: {field}'
            }), 400
    
    # 验证收集是否存在
    collection = next((c for c in resource_collections if c['id'] == data['collection_id'] and c['user_id'] == user_id), None)
    
    if not collection:
        return jsonify({
            'status': 'error',
            'message': '资源收集不存在或无权访问'
        }), 404
    
    # 创建新资源项目
    new_item = {
        'id': len(resource_items) + 1,
        'user_id': user_id,
        'collection_id': data['collection_id'],
        'title': data['title'],
        'type': data['type'],
        'author': data['author'],
        'url': data.get('url', ''),
        'notes': data['notes'],
        'add_date': '2025-05-28'  # 在实际应用中，应该使用当前日期
    }
    
    # 添加到集合
    resource_items.append(new_item)
    
    # 更新收集的项目计数和最后更新日期
    for c in resource_collections:
        if c['id'] == data['collection_id']:
            c['item_count'] += 1
            c['last_update'] = '2025-05-28'  # 在实际应用中，应该使用当前日期
    
    return jsonify({
        'status': 'success',
        'message': '资源项目已添加',
        'data': new_item
    }), 201

# 获取最近添加的资源
@resources_bp.route('/recent', methods=['GET'])
def get_recent_resources():
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    limit = request.args.get('limit', default=5, type=int)
    
    # 获取用户的资源并按添加日期排序
    user_items = [item for item in resource_items if item['user_id'] == user_id]
    recent_items = sorted(user_items, key=lambda x: x['add_date'], reverse=True)[:limit]
    
    return jsonify({
        'status': 'success',
        'data': recent_items
    })

# 搜索资源
@resources_bp.route('/search', methods=['GET'])
def search_resources():
    # 在实际应用中，应该根据认证信息获取用户ID
    user_id = 1
    
    query = request.args.get('q', '')
    
    if not query:
        return jsonify({
            'status': 'error',
            'message': '搜索查询不能为空'
        }), 400
    
    # 获取用户的资源
    user_items = [item for item in resource_items if item['user_id'] == user_id]
    
    # 搜索标题、作者和笔记
    search_results = [
        item for item in user_items 
        if query.lower() in item['title'].lower() 
        or query.lower() in item['author'].lower() 
        or query.lower() in item['notes'].lower()
    ]
    
    return jsonify({
        'status': 'success',
        'data': search_results
    })
