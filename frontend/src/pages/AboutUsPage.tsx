import React from 'react';
import { Container } from 'react-bootstrap';

const AboutUsPage: React.FC = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">关于我们</h2>
      <p>欢迎来到“自我养育”项目！</p>
      <p>我们致力于帮助您通过系统化的自我反思和知识积累，培养更加独立、成熟的自我。本项目基于React和Flask构建，旨在提供一个集知识库、自我探索、成长追踪、资源收集和实践指南于一体的Web应用。</p>
      <h4 className="mt-4">关于本网站内容生成说明：</h4>
      <p>本网站‘自我养育’项目旨在探索和实践个人成长。 所有知识库内容、理论阐述、练习指南等均由AI模型生成。</p>
      <p>它们是基于大量数据训练的结果，旨在为您提供一个系统化、多角度的参考与启发。</p>
      <h5 className="mt-4">重要提示：</h5>
      <ul>
        <li><strong>AI内容仅供参考：</strong> 本站内容不构成专业的心理咨询、医疗建议或诊断。在做出任何重要决定或处理心理健康问题时，请务必咨询合格的专业人士。</li>
        <li><strong>呼吁理性思考：</strong> 我们鼓励用户在使用本站内容时保持批判性思维，结合自身实际情况进行判断和实践。</li>
        <li><strong>数据隐私：</strong> 本网站主要为展示性网站，不收集任何个人用户数据，请放心浏览。</li>
        <li><strong>项目探索性质：</strong> 本网站是一个MVP（最小可行产品）原型，旨在探索AI在自我成长领域的应用潜力，并抛砖引玉，希望能引发大家对自我养育的关注和讨论。 我们非常欢迎您的反馈和建议，共同完善这个项目。</li>
      </ul>
    </Container>
  );
};

export default AboutUsPage;