from flask import Blueprint, jsonify, request

user_bp = Blueprint('user', __name__)

# 模拟用户数据
users = {
    1: {
        'id': 1,
        'username': 'demo_user',
        'email': 'demo@example.com',
        'profile': {
            'name': '示例用户',
            'bio': '自我养育项目的探索者',
            'joined_date': '2025-05-01'
        }
    }
}

# 获取当前用户信息
@user_bp.route('/profile', methods=['GET'])
def get_user_profile():
    # 在实际应用中，这里应该从认证信息中获取用户ID
    # 这里简化为返回示例用户
    user = users[1]
    return jsonify({
        'status': 'success',
        'data': user
    })

# 更新用户信息
@user_bp.route('/profile', methods=['PUT'])
def update_user_profile():
    data = request.json
    
    # 在实际应用中，这里应该验证用户身份
    user_id = 1
    
    if user_id not in users:
        return jsonify({
            'status': 'error',
            'message': '用户不存在'
        }), 404
    
    # 更新用户资料
    if 'profile' in data:
        users[user_id]['profile'].update(data['profile'])
    
    return jsonify({
        'status': 'success',
        'message': '用户资料已更新',
        'data': users[user_id]
    })

# 获取用户设置
@user_bp.route('/settings', methods=['GET'])
def get_user_settings():
    # 模拟用户设置
    settings = {
        'theme': 'light',
        'notifications': True,
        'privacy': {
            'profile_visibility': 'public',
            'activity_tracking': True
        }
    }
    
    return jsonify({
        'status': 'success',
        'data': settings
    })

# 更新用户设置
@user_bp.route('/settings', methods=['PUT'])
def update_user_settings():
    data = request.json
    
    # 模拟更新设置
    # 在实际应用中，这里应该将设置保存到数据库
    
    return jsonify({
        'status': 'success',
        'message': '设置已更新',
        'data': data
    })
