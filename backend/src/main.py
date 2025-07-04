import sys
import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(__file__)) + "/..")


from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from fpdf import FPDF

# 初始化Flask应用
app = Flask(__name__)
CORS(app)  # 启用CORS支持跨域请求

# 导入路由
from src.routes.user import user_bp
from src.routes.knowledge import knowledge_bp
from src.routes.exploration import exploration_bp
from src.routes.resources import resources_bp

# 注册蓝图
app.register_blueprint(user_bp, url_prefix='/api/user')
app.register_blueprint(knowledge_bp, url_prefix='/api/knowledge')
app.register_blueprint(exploration_bp, url_prefix='/api/exploration')
app.register_blueprint(resources_bp, url_prefix='/api/resources')

# 健康检查路由
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'success',
        'message': '自我养育项目API服务正常运行'
    })

# 错误处理
@app.errorhandler(404)
def not_found(error):
    return jsonify({
        'status': 'error',
        'message': '请求的资源不存在'
    }), 404

@app.errorhandler(500)
def server_error(error):
    return jsonify({
        'status': 'error',
        'message': '服务器内部错误'
    }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
