import React, { useEffect } from 'react';
// 导入d3类型声明文件
import * as d3 from 'd3';
// 如果上述导入仍有类型错误，请运行: npm install --save-dev @types/d3
import './ConceptGraph.css';

interface ConceptGraphProps {
  width?: number;
  height?: number;
}

const ConceptGraph: React.FC<ConceptGraphProps> = ({ width = 800, height = 500 }) => {
  useEffect(() => {
    // 概念数据
    const graphData = {
      "nodes": [
        {"id": "精神分析", "group": "理论", "description": "探索无意识对行为和人格的影响，如弗洛伊德理论。"},
        {"id": "自我结构", "group": "精神分析", "description": "人格的组成部分：本我、自我、超我。"},
        {"id": "本我", "group": "精神分析", "description": "原始冲动与欲望的本能部分。"},
        {"id": "自我", "group": "精神分析", "description": "现实原则与执行功能，处理本我与超我之间的冲突。"},
        {"id": "超我", "group": "精神分析", "description": "道德与理想，代表社会规范和良心。"},
        {"id": "防御机制", "group": "精神分析", "description": "应对冲突和焦虑的无意识心理策略，如压抑、投射。"},

        {"id": "依恋理论", "group": "理论", "description": "鲍尔比和安斯沃斯理论，解释早期亲密关系模式如何影响成年依恋风格。"},
        {"id": "安全型依恋", "group": "依恋理论", "description": "信任、舒适的亲密关系，源于可靠的照护。"},
        {"id": "焦虑型依恋", "group": "依恋理论", "description": "对被抛弃的担忧，寻求过度亲密，源于不稳定的照护。"},
        {"id": "回避型依恋", "group": "依恋理论", "description": "对亲密感到不适，倾向独立，源于疏离的照护。"},
        {"id": "混乱型依恋", "group": "依恋理论", "description": "行为矛盾，既渴望又害怕亲密，通常与创伤性照护相关。"},

        {"id": "发展心理学", "group": "理论", "description": "研究人从出生到死亡的心理发展过程，如埃里克森的发展阶段。"},
        {"id": "成长阶段", "group": "发展心理学", "description": "埃里克森理论中的人生八个发展阶段，每个阶段有特定任务。"},
        {"id": "发展危机", "group": "发展心理学", "description": "每个成长阶段面临的心理社会挑战，处理好则促进成长。"},

        {"id": "创伤理论", "group": "理论", "description": "探讨心理创伤的形成、影响及治愈过程。"},
        {"id": "创伤反应", "group": "创伤理论", "description": "个体经历创伤后可能出现的生理和心理应激反应。"},
        {"id": "PTSD", "group": "创伤理论", "description": "创伤后应激障碍，是创伤反应的严重形式。"},
        {"id": "复杂性创伤", "group": "创伤理论", "description": "长期、反复或持续的创伤经历导致的身心影响。"},

        {"id": "内在小孩", "group": "概念", "description": "人格中保留的童年自我部分，受童年经历影响。"},
        {"id": "受伤的内在小孩", "group": "内在小孩", "description": "童年创伤、需求未被满足等留下的心理创伤和情绪模式。"},
        {"id": "自然的内在小孩", "group": "内在小孩", "description": "纯真、创造力、自由、好奇、快乐的原始自我。"},

        {"id": "共情", "group": "心理学基础", "description": "理解并感受他人情绪的能力，人际关系的关键。"},
        {"id": "边界", "group": "心理学基础", "description": "个人心理空间和限制，区分自我与他人，维护自我完整性。"}
      ],
      "links": [
        {"source": "精神分析", "target": "自我结构", "type": "包含"},
        {"source": "自我结构", "target": "本我", "type": "构成"},
        {"source": "自我结构", "target": "自我", "type": "构成"},
        {"source": "自我结构", "target": "超我", "type": "构成"},
        {"source": "精神分析", "target": "防御机制", "type": "相关"},

        {"source": "依恋理论", "target": "安全型依恋", "type": "类型"},
        {"source": "依恋理论", "target": "焦虑型依恋", "type": "类型"},
        {"source": "依恋理论", "target": "回避型依恋", "type": "类型"},
        {"source": "依恋理论", "target": "混乱型依恋", "type": "类型"},
        {"source": "依恋理论", "target": "内在小孩", "type": "影响"},

        {"source": "发展心理学", "target": "成长阶段", "type": "包含"},
        {"source": "发展心理学", "target": "发展危机", "type": "包含"},
        {"source": "发展心理学", "target": "内在小孩", "type": "影响"},

        {"source": "创伤理论", "target": "创伤反应", "type": "包含"},
        {"source": "创伤理论", "target": "PTSD", "type": "包含"},
        {"source": "创伤理论", "target": "复杂性创伤", "type": "包含"},
        {"source": "创伤理论", "target": "受伤的内在小孩", "type": "相关"},

        {"source": "内在小孩", "target": "受伤的内在小孩", "type": "包含"},
        {"source": "内在小孩", "target": "自然的内在小孩", "type": "包含"},

        {"source": "自我", "target": "防御机制", "type": "使用"},
        {"source": "依恋理论", "target": "共情", "type": "相关"},
        {"source": "自我", "target": "边界", "type": "建立"}
      ]
    };

    // 创建SVG容器
    const svg = d3.select('#concept-graph')
      .attr('width', width)
      .attr('height', height);

    // 清除旧的图谱
    svg.selectAll('*').remove();

    // 创建组用于缩放和平移
    const g = svg.append('g');

    // 定义颜色比例尺
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // 力模拟器
    const simulation = d3.forceSimulation(graphData.nodes as d3.SimulationNodeDatum[])
      .force('link', d3.forceLink(graphData.links).id((d: any) => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    // 绘制链接
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(graphData.links)
      .join('line')
      .attr('class', 'link')
      .attr('stroke-width', 1.5);

    // 绘制节点
    const node = g.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(graphData.nodes)
      .join('circle')
      .attr('r', 10)
      .attr('fill', (d: any) => color(d.group))
      .attr('class', 'node-circle')
      .call(drag(simulation) as any);

    // 添加节点文本标签
    const labels = g.append('g')
      .attr('class', 'labels')
      .selectAll('text')
      .data(graphData.nodes)
      .join('text')
      .text((d: any) => d.id)
      .attr('class', 'node-label')
      .attr('dx', 12)
      .attr('dy', 4);

    // 工具提示
    const tooltip = d3.select('#concept-tooltip');

    node.on('mouseover', function(event: any, d: any) {
      tooltip.transition()
        .duration(200)
        .style('opacity', 0.9);
      tooltip.html(`<strong>${d.id}</strong><br/>${d.description || '无描述'}`)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 28) + 'px');
    })
    .on('mouseout', function() {
      tooltip.transition()
        .duration(500)
        .style('opacity', 0);
    });

    // 更新位置函数
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);

      labels
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    });

    // 拖拽函数
    function drag(simulation: any) {
      function dragstarted(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event: any, d: any) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }

    // 缩放和平移功能
    const zoom = d3.zoom()
      .scaleExtent([0.5, 8])
      .on('zoom', (event: any) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom as any);

    return () => {
      simulation.stop();
    };
  }, [width, height]);

  return (
    <div className="concept-map-section">
      <h2>概念图谱</h2>
      <p>探索精神心理学与精神分析的核心概念及其关联</p>
      
      <div className="controls mb-3">
        <label htmlFor="theory-filter">筛选理论:</label>
        <select id="theory-filter" className="form-select">
          <option value="all">所有概念</option>
          <option value="精神分析">精神分析</option>
          <option value="依恋理论">依恋理论</option>
          <option value="发展心理学">发展心理学</option>
          <option value="创伤理论">创伤理论</option>
          <option value="内在小孩">内在小孩</option>
        </select>
      </div>
      
      <div id="concept-graph-container">
        <svg id="concept-graph" width={width} height={height}></svg>
        <div id="concept-tooltip" className="tooltip" style={{ opacity: 0 }}></div>
      </div>
      
      <div className="ai-disclaimer mt-3">
        <p><strong>重要提示：</strong>本概念图谱中的所有概念解释及关系推导均由AI模型生成，仅供参考。请结合个人情况理性判断，并在需要时咨询专业人士。</p>
      </div>
    </div>
  );
};

export default ConceptGraph;