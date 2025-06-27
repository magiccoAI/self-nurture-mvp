import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Tab, Accordion } from 'react-bootstrap';
import ConceptGraph from '../components/knowledge/ConceptGraph';

// 知识库组件
const ConceptMap: React.FC = () => {
  return (
    <ConceptGraph />
  );
};

const TheoryBase: React.FC = () => {
  return (
    <div className="theory-base-section">
      <h2>理论基础</h2>
      <p className="lead">探索支撑自我养育的核心理论体系</p>
      
      <div className="theory-categories mb-4">
        <Tab.Container defaultActiveKey="psychology-basics">
        <Row>
          <Col xs={12} md={3}>
            <Nav variant="pills" className="flex-column mb-3 mb-md-0">
                <Nav.Item>
                  <Nav.Link eventKey="psychology-basics" className="sidebar-nav-link">心理学基础</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="psychoanalysis" className="sidebar-nav-link">精神分析</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="attachment" className="sidebar-nav-link">依恋理论</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="developmental" className="sidebar-nav-link">发展心理学</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="trauma" className="sidebar-nav-link">创伤理论</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="practical-application" className="sidebar-nav-link">精神分析实践应用</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="family-systems" className="sidebar-nav-link">家庭系统</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="psychology-basics">
                  <Card>
                    <Card.Body>
                      <h4>心理学基础</h4>
                      <p>心理学是研究人类心理过程和行为的科学，为理解自我提供了基本框架。</p>
                      
                      <h5>核心分支</h5>
                      <ul>
                        <li><strong>认知心理学</strong>：研究人类如何感知、处理和存储信息</li>
                        <li><strong>行为心理学</strong>：关注可观察行为及其与环境的关系</li>
                        <li><strong>人本主义心理学</strong>：强调个体的自我实现和内在潜能</li>
                        <li><strong>精神分析心理学</strong>：探索无意识过程对思想和行为的影响</li>
                        <li><strong>社会心理学</strong>：研究社会环境如何影响个体行为和思想</li>
                        <li><strong>发展心理学</strong>：研究个体在生命周期中的脑发展过程</li>
                        <li><strong>积极心理学</strong>：关注人类的优势、幸福感和心理健康</li>
                      </ul>
                      
                      <h5>基本概念</h5>
                      <Accordion className="mb-4" alwaysOpen>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <h6 className="mb-0">意识与无意识</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>心理学区分了不同层次的意识状态：</p>
                            <ul>
                              <li><strong>意识</strong>：当前觉察到的思想、感受和感知</li>
                              <li><strong>前意识</strong>：暂时不在意识中但可被唤起的内容</li>
                              <li><strong>无意识</strong>：不易被直接觉察但影响行为的脑内容</li>
                            </ul>
                            <p>无意识过程对我们的行为、情绪和决策有深远影响，通过梦境、失误行为和自由联想等方式表现出来。</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <h6 className="mb-0">认知与情绪</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>认知（思想、信念、解释）与情绪相互影响：</p>
                            <ul>
                              <li><strong>认知评价理论</strong>：我们对事件的解释决定了情绪反应</li>
                              <li><strong>情绪调节</strong>：通过改变认知来调节情绪体验的过程</li>
                              <li><strong>认知偏差</strong>：影响我们思维和判断的系统性错误</li>
                              <li><strong>图式</strong>：组织和解释信息的认知框架</li>
                            </ul>
                            <p>认知行为疗法基于认知与情绪的关系，通过改变不健康的思维模式来改善情绪状态。</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="6">
                          <Accordion.Header>
                            <h6 className="mb-0">人格与自我</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>人格是个体相对稳定的思想、情感和行为模式：</p>
                            <ul>
                              <li><strong>特质理论</strong>：描述构成人格的基本维度（如大五人格：开放性、尽责性、外向性、宜人性、神经质）</li>
                              <li><strong>类型理论</strong>：将人分类为不同人格类型</li>
                              <li><strong>自我概念</strong>：个体对自己的整体认知和评价</li>
                              <li><strong>自我效能感</strong>：个体对自己完成特定任务能力的信念</li>
                              <li><strong>自尊</strong>：个体对自我价值的评价</li>
                            </ul>
                            <p>人格特质有一定的稳定性，但也会随着生活经历和自我成长而发展变化。</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>
                            <h6 className="mb-0">学习与记忆</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>学习是获取新知识和技能的过程，记忆是存储和提取信息的能力：</p>
                            <ul>
                              <li><strong>经典条件反射</strong>：通过刺激关联学习新的反应</li>
                              <li><strong>操作性条件反射</strong>：通过强化和惩罚塑造行为</li>
                              <li><strong>观察学习</strong>：通过观察他人行为及其后果来学习</li>
                              <li><strong>短时记忆与长时记忆</strong>：不同类型的记忆存储系统</li>
                              <li><strong>内隐记忆与外显记忆</strong>：无板和有意识的记忆形式</li>
                            </ul>
                            <p>理解学习和记忆的原理有助于我们更有效地获取新技能和改变习惯。</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>
                            <h6 className="mb-0">动机与需求</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>动机是驱使我们行动的内在力量，需求是我们寻求满足的心理或生理状态：</p>
                            <ul>
                              <li><strong>马斯洛需求层次理论</strong>：从生理需求到自我实现的五层次需求</li>
                              <li><strong>内在动机与外在动机</strong>：源于兴趣和满足感的动机vs源于外部奖励的动机</li>
                              <li><strong>成就动机</strong>：追求成功和避免失败的倾向</li>
                              <li><strong>自我决定理论</strong>：强调自主性、胜任感和关联性的基本心理需求</li>
                            </ul>
                            <p>了解自己的动机和需求有助于设定有意义的目标和维持长期的行为改变。</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      
                      <h5>理论框架</h5>
                      <Accordion className="mb-4">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <h6 className="mb-0">皮亚杰认知发展理论</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>皮亚杰理论关注儿童如何通过与环境互动构建知识：</p>
                            <ul>
                              <li><strong>感知运动阶段(0-2岁)</strong>：通过感官和动作探索世界</li>
                              <li><strong>前运算阶段(2-7岁)</strong>：发展符号思维但缺乏逻辑</li>
                              <li><strong>具体运算阶段(7-11岁)</strong>：发展逻辑思维但限于具体事物</li>
                              <li><strong>形式运算阶段(11岁以上)</strong>：发展抽象和假设思维能力</li>
                            </ul>
                            <p>核心概念：图式、同化、顺应、平衡</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <h6 className="mb-0">心理动力学理论</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>源于弗洛伊德的精神分析，强调无意识动机和早期经历的重要性：</p>
                            <ul>
                              <li>强调早期童年经历对成人人格的影响</li>
                              <li>关注内在冲突和防御机制</li>
                              <li>探索无意识动机对行为的影响</li>
                            </ul>
                            <p>代表人物：弗洛伊德、荣格、阿德勒、克莱因、科胡特</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            <h6 className="mb-0">行为主义理论</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>关注可观察行为和环境因素，强调学习和条件反射的作用：</p>
                            <ul>
                              <li>强调环境对行为的塑造作用</li>
                              <li>通过强化和惩罚解释行为的获得和维持</li>
                              <li>关注客观可测量的行为而非内在心理过程</li>
                            </ul>
                            <p>代表人物：华生、斯金纳、班杜拉、帕夫洛夫</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="6">
                          <Accordion.Header>
                            <h6 className="mb-0">认知理论</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>研究人类如何感知、处理、存储和使用信息：</p>
                            <ul>
                              <li>强调思维过程对行为和情绪的影响</li>
                              <li>关注信息处理、问题解决和决策</li>
                              <li>探索认知图式和信念系统</li>
                            </ul>
                            <p>代表人物：皮亚杰、贝克、埃利斯</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>
                            <h6 className="mb-0">人本主义理论</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>强调个体的自我实现和内在成长潜能：</p>
                            <ul>
                              <li>关注个体的主观体验和自我实现</li>
                              <li>强调人的自由意志和选择能力</li>
                              <li>重视个人成长和自我接纳</li>
                            </ul>
                            <p>代表人物：罗杰斯、马斯洛</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>
                            <h6 className="mb-0">社会文化理论</h6>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>探索社会、文化和人际关系对个体发展的影响：</p>
                            <ul>
                              <li>强调社会互动和文化背景的重要性</li>
                              <li>关注社会规范、角色和群体影响</li>
                              <li>探索文化差异对脑过程的影响</li>
                            </ul>
                            <p>代表人物：维果茨基、布朗芬布伦纳</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      
                      <h5>对自我养育的意义</h5>
                      <p>心理学基础知识帮助我们：</p>
                      <ul>
                        <li>理解脑运作的基本原理，为自我认知提供科学框架</li>
                        <li>识别和改变不健康的思维和行为模式</li>
                        <li>了解情绪的来源和调节方法</li>
                        <li>认识到早期经历对当前行为和关系的影响</li>
                        <li>发展自我同理心和自我接纳</li>
                        <li>建立更健康的自我概念和人际关系</li>
                      </ul>
                      <p>通过掌握心理学基础知识，我们能够更深入地理解自己的内在世界，为自我养育和个人成长奠定坚实的理论基础。</p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="psychoanalysis">
                  <Card>
                    <Card.Body>
                      <h4>精神分析理论</h4>
                      <p>精神分析探索无意识脑过程和早期经历如何影响成人行为和心理健康。</p>
                      
                      <Accordion className="mb-4">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <h5 className="mb-0">弗洛伊德理论</h5>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>西格蒙德·弗洛伊德是精神分析的创始人，他的理论对心理学产生了深远影响。</p>
                            
                            <h6>核心概念</h6>
                            <ul>
                              <li><strong>心理结构</strong>：本我（原始冲动）、自我（现实原则）、超我（道德与理想）</li>
                              <li><strong>精神性发展阶段</strong>：口欲期、肛欲期、性器期、潜伏期、生殖期</li>
                              <li><strong>防御机制</strong>：压抑、投射、否认、合理化等保护自我的脑策略</li>
                              <li><strong>俄狄浦斯情结</strong>：儿童对异性父母的依恋和对同性父母的竞争</li>
                            </ul>
                            
                            <h6>理论局限性</h6>
                            <ul>
                              <li>过度强调性本能和攻击性驱力</li>
                              <li>理论建立在19世纪维多利亚时代的社会背景上</li>
                              <li>缺乏科学实证支持，难以通过实验验证</li>
                              <li>对女性脑发展的解释存在性别偏见</li>
                              <li>忽视社会文化因素对脑发展的影响</li>
                              <li>过度简化复杂的脑现象</li>
                            </ul>
                            
                            <p>尽管存在局限性，弗洛伊德的理论仍为理解无意识过程、防御机制和早期经历的重要性奠定了基础。</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>
                            <h5 className="mb-0">克莱因学派理论</h5>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>梅兰妮·克莱因发展了对象关系理论，关注婴儿早期内在世界的发展。</p>
                            
                            <h6>核心概念</h6>
                            <ul>
                              <li><strong>位置</strong>：偏执-分裂位置和抑郁位置，描述脑组织的不同模式</li>
                              <li><strong>内在客体</strong>：内化的他人脑表征，影响脑感人和关系模式</li>
                              <li><strong>投射性认同</strong>：将不想要的部分投射到他人身上并试图控制</li>
                              <li><strong>嫉妒与感恩</strong>：原始情感影响客体关系的发展</li>
                            </ul>
                            
                            <h6>比昂的"克莱因-比昂学派"理论</h6>
                            <p>威尔弗雷德·比昂在克莱因理论基础上发展了思维理论：</p>
                            <ul>
                              <li><strong>容器-容纳功能</strong>：照顾者接收、处理并回馈婴儿难以承受的情感体验</li>
                              <li><strong>α功能</strong>：将原始感官印象（β元素）转化为可思考的α元素</li>
                              <li><strong>思维的发展</strong>：从原始情感体验到抽象思维的发展过程</li>
                              <li><strong>基本假设</strong>：群体中的无意识动力学</li>
                            </ul>
                            
                            <h6>学习模式</h6>
                            <p>比昂描述了三种学习和思考模式：</p>
                            <ul>
                              <li><strong>-K</strong>：逃避知识，拒绝学习和理解</li>
                              <li><strong>+K</strong>：追求知识，愿意面对现实和真相</li>
                              <li><strong>H</strong>：仇恨知识，积极破坏理解和意义</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            <h5 className="mb-0">荣格的分析心理学</h5>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>卡尔·荣格发展了分析心理学，强调集体无意识与个体化过程。</p>
                            
                            <h6>核心概念</h6>
                            <ul>
                              <li><strong>集体无意识</strong>：人类共享的原始意象和经验储存库</li>
                              <li><strong>原型</strong>：集体无意识中的普遍意象和模式（如阴影、阿尼玛/阿尼姆斯、自性）</li>
                              <li><strong>个体化</strong>：整合人格各项方面，实现自我完整的过程</li>
                              <li><strong>人格面具</strong>：在社会中展现的公共面孔，可能与真实自我不同</li>
                              <li><strong>阴影</strong>：被压抑的、不被接受的人格方面</li>
                            </ul>
                            
                            <h6>个体化过程</h6>
                            <p>荣格视个体化为人生的核心任务，包括：</p>
                            <ul>
                              <li>面对并整合阴影</li>
                              <li>认识并平衡内在的阴阳面（阿尼玛/阿尼姆斯）</li>
                              <li>与更深层的自性连接</li>
                              <li>发展真实而完整的自我</li>
                            </ul>
                            
                            <h6>象征与梦</h6>
                            <p>荣格强调象征和梦在脑发展中的重要性：</p>
                            <ul>
                              <li>梦是无意识的自然表达</li>
                              <li>象征连接意识与无意识</li>
                              <li>积极想象作为探索无意识的方法</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>
                            <h5 className="mb-0">科胡特的自体心理学</h5>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>海因茨·科胡特发展了自体心理学，关注自恋发展和自体的形成。</p>
                            
                            <h6>核心概念</h6>
                            <ul>
                              <li><strong>自体</strong>：个体经验的中心，整合的自我感</li>
                              <li><strong>自体客体</strong>：满足脑需求的他人，帮助维持自体凝聚感</li>
                              <li><strong>镜映</strong>：被看见、肯定和欣赏的需求</li>
                              <li><strong>理想化</strong>：依靠和崇拜强大他人的需求</li>
                              <li><strong>双生关系</strong>：与相似他人连接的需求</li>
                            </ul>
                            
                            <h6>自恋发展</h6>
                            <p>科胡特认为健康自恋的发展对心理健康至关重要：</p>
                            <ul>
                              <li>从原始自恋到成熟自恋的发展</li>
                              <li>自体客体需求的适当满足</li>
                              <li>自体凝聚感的发展</li>
                              <li>自恋脆弱性与自体碎裂</li>
                            </ul>
                            
                            <h6>移情与治疗</h6>
                            <p>科胡特描述了三种主要的自体客体移情：</p>
                            <ul>
                              <li>镜映移情：寻求肯定和认可</li>
                              <li>理想化移情：寻求依靠和崇拜</li>
                              <li>双生移情：寻求相似性和归属感</li>
                            </ul>
                            <p>治疗目标是通过共情理解和适当回应这些需求，促进自体的修复和整合。</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      
                      <h5>对自我养育的意义</h5>
                      <p>精神分析理论帮助我们理解潜意识模式如何影响自我关系，识别童年经历如何塑造成人行为，以及如何通过意识觉察来改变不健康的模式。不同流派的理论提供了多角度理解内在世界的框架，为自我成长提供了丰富的视角。</p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="attachment">
                  <Card>
                    <Card.Body>
                      <h4>依恋理论</h4>
                      <p>由约翰·鲍尔比和玛丽·艾因斯沃思发展，研究早期照顾者关系如何影响终身关系模式。</p>
                      
                      <h5>核心概念</h5>
                      <ul>
                        <li><strong>依恋类型</strong>：安全型、焦虑型、回避型、混乱型</li>
                        <li><strong>内部工作模型</strong>：关于自我和他人的脑表征</li>
                        <li><strong>安全基地</strong>：提供安全感和支持的关系基础</li>
                        <li><strong>分离焦虑</strong>：与依恋对象分离时的不安全感</li>
                      </ul>
                      
                      <h5>对自我养育的意义</h5>
                      <p>依恋理论可以帮助理解自己的关系模式，识别不安全依恋的影响，并学习如何为自己提供安全基地，培养内在安全感。</p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="developmental">
                  <Card>
                    <Card.Body>
                      <h4>发展心理学</h4>
                      <p>研究人类在生命周期中的脑发展过程和阶段。</p>
                      
                      <h5>核心概念</h5>
                      <ul>
                        <li><strong>发展阶段</strong>：从婴儿期到老年的不同发展任务和挑战</li>
                        <li><strong>关键期</strong>：特定能力发展的最佳时期</li>
                        <li><strong>认知发展</strong>：思维和理解能力的发展</li>
                        <li><strong>社会情感发展</strong>：情感调节和社交能力的发展</li>
                      </ul>
                      
                      <h5>对自我养育的意义</h5>
                      <p>发展心理学可以帮助理解不同年龄阶段的心智需求，识别发展中的缺失或中断，并提供弥补这些缺失的方法。</p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="trauma">
                  <Card>
                    <Card.Body>
                      <h4>创伤理论</h4>
                      <p>研究创伤经历如何影响心理健康和功能。</p>
                      
                      <h5>核心概念</h5>
                      <ul>
                        <li><strong>创伤反应</strong>：对威胁性事件的生理和心理反应</li>
                        <li><strong>发展性创伤</strong>：童年期持续的不良经历造成的影响</li>
                        <li><strong>创伤后应激障碍</strong>：创伤后的一系列症状</li>
                        <li><strong>创伤后成长</strong>：从创伤中恢复并获得积极变化</li>
                      </ul>
                      
                      <h5>对自我养育的意义</h5>
                      <p>创伤理论可以帮助理解过去经历的影响，识别创伤反应，并学习如何安全地处理和整合这些经历，促进愈合和成长。</p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="practical-application">
                  <Card>
                    <Card.Body>
                      <h4>精神分析理论的实践应用</h4>
                      <p>探索如何将精神分析理论应用于自我理解和成长。</p>
                      
                      <h5>自我反思与觉察</h5>
                      <div className="mb-3">
                        <p>精神分析强调自我觉察的重要性：</p>
                        <ul>
                          <li><strong>自由联想</strong>：允许思想自由流动，不加审查</li>
                          <li><strong>梦的分析</strong>：探索梦境中的象征和潜在意义</li>
                          <li><strong>日记写作</strong>：记录和反思内在体验</li>
                          <li><strong>冥想练习</strong>：培养对内在状态的觉察</li>
                        </ul>
                      </div>
                      
                      <h5>识别防御机制</h5>
                      <div className="mb-3">
                        <p>学习识别自己的脑防御：</p>
                        <ul>
                          <li>注意情绪反应与行为模式</li>
                          <li>探索触发强烈情绪的情境</li>
                          <li>识别重复出现的关系模式</li>
                          <li>觉察自我保护的习惯性方式</li>
                        </ul>
                      </div>
                      
                      <h5>内在小孩工作</h5>
                      <div className="mb-3">
                        <p>与内在小孩建立联系的方法：</p>
                        <ul>
                          <li>想象对话：与内在小孩进行想象中的对话</li>
                          <li>写信练习：给内在小孩写信或从内在小孩的视角写信</li>
                          <li>情感验证：承认和接纳童年的情感需求</li>
                          <li>重新养育：为内在小孩提供未得到的关怀和支持</li>
                        </ul>
                      </div>
                      
                      <h5>转化关系模式</h5>
                      <div className="mb-3">
                        <p>改变不健康的关系模式：</p>
                        <ul>
                          <li>识别早期依恋模式的影响</li>
                          <li>觉察投射和移情反应</li>
                          <li>发展更安全的内部工作模型</li>
                          <li>练习新的关系互动方式</li>
                        </ul>
                      </div>
                      
                      <h5>实践工具与练习</h5>
                      <div className="mb-3">
                        <Row>
                          <Col md={6} className="mb-3">
                            <Card className="h-100">
                              <Card.Body>
                                <h6>自我对话练习</h6>
                                <p>探索内在不同部分之间的对话：</p>
                                <ol>
                                  <li>识别内在的不同声音（如批判者、保护者）</li>
                                  <li>允许每个部分表达其观点和需求</li>
                                  <li>促进内在部分之间的理解和整合</li>
                                </ol>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={6} className="mb-3">
                            <Card className="h-100">
                              <Card.Body>
                                <h6>象征性工作</h6>
                                <p>使用象征和隐喻探索内在世界：</p>
                                <ol>
                                  <li>创作或选择代表内在状态的图像或物品</li>
                                  <li>探索这些象征的意义和情感联结</li>
                                  <li>通过改变象征来促进脑变化</li>
                                </ol>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                      
                      <h5>日常应用建议</h5>
                      <p>将精神分析见解融入日常生活：</p>
                      <ul>
                        <li>培养对情绪和身体感受的觉察</li>
                        <li>注意重复出现的思维和行为模式</li>
                        <li>探索强烈情绪反应背后的早期经历</li>
                        <li>在关系中觉察投射和移情</li>
                        <li>定期进行自我反思和内在对话</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="family-systems">
                  <Card>
                    <Card.Body>
                      <h4>家庭系统</h4>
                      <p>了解家庭动力和原生家庭对个人发展的影响</p>

                      <h5>家庭系统理论的起源</h5>
                      <p>家庭系统理论起源于20世纪中期，是由多个领域的理论整合而成的。其中最具影响力的是：</p>
                      <ul>
                        <li><strong>穆瑞·鲍恩（Murray Bowen）的家庭系统理论</strong>：他将家庭视为一个情感单位，强调家庭成员之间的相互依存关系。</li>
                        <li><strong>萨尔瓦多·米纽钦（Salvador Minuchin）的结构家庭治疗</strong>：关注家庭结构、界限和子系统。</li>
                        <li><strong>弗吉尼亚·萨提尔（Virginia Satir）的沟通理论</strong>：强调家庭沟通模式对成员心理健康的影响。</li>
                        <li><strong>一般系统理论</strong>：由生物学家路德维希·冯·贝塔朗菲（Ludwig von Bertalanffy）提出，认为系统是相互关联的部分组成的整体，整体大于部分之和。</li>
                      </ul>
                      <p>家庭系统理论将家庭视为一个复杂的互动系统，而不仅仅是个体的集合。这一理论框架帮助我们理解家庭成员如何相互影响，以及家庭模式如何代代相传。</p>

                      <h5>核心概念</h5>
                      <h6>家庭作为情感系统</h6>
                      <p>家庭是一个情感系统，其中每个成员都通过情感纽带相互连接。这些情感连接形成了家庭的基本结构，影响着每个成员的思想、感受和行为。在这个系统中：</p>
                      <ul>
                        <li>成员之间的情感反应是相互关联的</li>
                        <li>一个成员的变化会影响整个系统</li>
                        <li>家庭倾向于维持稳定状态（平衡），即使这种平衡是不健康的</li>
                      </ul>

                      <h6>分化与融合</h6>
                      <p>分化是指一个人在保持与家庭情感连接的同时，能够发展独立的自我认同和自主性的能力。高度分化的个体能够：</p>
                      <ul>
                        <li>区分思想和情感</li>
                        <li>在亲密关系中保持自我</li>
                        <li>不受家庭情绪过程的过度影响</li>
                      </ul>
                      <p>相反，融合是指个体与家庭系统高度纠缠，难以发展独立的自我。低分化的个体往往：</p>
                      <ul>
                        <li>情绪反应强烈</li>
                        <li>难以在关系中保持自我</li>
                        <li>容易受到家庭情绪的影响</li>
                      </ul>

                      <h6>三角关系</h6>
                      <p>三角关系是家庭系统中最小的稳定情感单位，由三个人组成。当两个人之间的关系紧张时，他们往往会将第三方拉入，以减轻紧张。这种模式可能表现为：</p>
                      <ul>
                        <li>父母将孩子卷入他们的冲突</li>
                        <li>一方与外部人员结盟来对抗配偶</li>
                        <li>将注意力转移到孩子的问题上，以避免处理夫妻关系</li>
                      </ul>

                      <h5>家庭角色与模式</h5>
                      <h6>家庭角色</h6>
                      <p>在家庭系统中，成员往往会承担特定的角色，这些角色有助于维持家庭的功能和平衡。常见的家庭角色包括：</p>
                      <ul>
                        <li><strong>英雄/成功者</strong>：通过成就为家庭带来荣誉，分散对家庭问题的注意力</li>
                        <li><strong>替罪羊</strong>：承担家庭问题的责任，成为家庭冲突的焦点</li>
                        <li><strong>失踪者</strong>：通过情感或物理上的退缩来逃避家庭冲突</li>
                        <li><strong>小丑/开心果</strong>：通过幽默和娱乐来缓解家庭紧张</li>
                        <li><strong>照顾者</strong>：承担照顾他人情感需求的责任</li>
                      </ul>
                      <p>这些角色往往在童年形成，并可能延续到成年生活中，影响个体的自我认知和人际关系模式。</p>

                      <h6>家庭规则与界限</h6>
                      <p>每个家庭都有明确或隐含的规则，定义了什么是可接受的行为和沟通方式。家庭界限则定义了系统内外的信息和情感流动：</p>
                      <ul>
                        <li><strong>刚性界限</strong>：过于严格，限制了情感交流和支持</li>
                        <li><strong>弥散界限</strong>：过于松散，导致角色混淆和过度卷入</li>
                        <li><strong>清晰界限</strong>：平衡了亲密和自主，允许健康的情感交流</li>
                      </ul>

                      <h6>家庭互动模式</h6>
                      <p>家庭成员之间的互动形成了可预测的模式，这些模式往往是循环的，并且会自我强化。常见的不健康互动模式包括：</p>
                      <ul>
                        <li><strong>追逐-逃避模式</strong>：一方寻求亲密，另一方退缩，导致循环加剧</li>
                        <li><strong>批评-防御模式</strong>：一方批评，另一方防御，导致沟通障碍</li>
                        <li><strong>过度保护模式</strong>：阻止家庭成员面对挑战和发展能力</li>
                        <li><strong>控制-反抗模式</strong>：权力斗争导致持续冲突</li>
                      </ul>

                      <h5>代际传递</h5>
                      <h6>多代传递过程</h6>
                      <p>家庭模式、信念和行为往往会通过代际传递影响多代人。这种传递可能通过以下方式发生：</p>
                      <ul>
                        <li><strong>建模和模仿</strong>：子女通过观察父母的行为学习关系模式</li>
                        <li><strong>情感教导</strong>：父母直接或间接教导子女如何体验和表达情感</li>
                        <li><strong>家庭叙事和神话</strong>：关于家庭历史和身份的故事塑造自我认知</li>
                        <li><strong>未解决的情感问题</strong>：上一代未处理的创伤和冲突会投射到下一代</li>
                      </ul>

                      <h6>家庭创伤的传递</h6>
                      <p>创伤经历可以跨代传递，影响后代的心理健康和关系模式。这种传递可能通过以下机制发生：</p>
                      <ul>
                        <li><strong>直接传递</strong>：通过虐待或忽视的循环</li>
                        <li><strong>间接传递</strong>：通过父母因创伤导致的养育方式问题</li>
                        <li><strong>沉默和秘密</strong>：未被承认的家庭创伤仍会影响家庭动力</li>
                        <li><strong>生物学机制</strong>：研究表明创伤可能通过表观遗传变化影响后代</li>
                      </ul>

                      <h6>打破代际循环</h6>
                      <p>打破不健康的代际模式需要觉察、理解和有意识的改变。关键步骤包括：</p>
                      <ul>
                        <li>识别家庭中的重复模式</li>
                        <li>理解这些模式的起源和功能</li>
                        <li>发展自我觉察和情绪调节能力</li>
                        <li>建立新的、更健康的关系模式</li>
                        <li>在必要时寻求专业支持</li>
                      </ul>

                      <h5>家庭重构</h5>
                      <h6>重新评估原生家庭</h6>
                      <p>重新评估原生家庭的影响是个人成长的重要部分。这个过程包括：</p>
                      <ul>
                        <li>以成人视角审视童年经历</li>
                        <li>理解父母作为有缺陷的人类，而非理想化或妖魔化他们</li>
                        <li>识别家庭中的健康和不健康模式</li>
                        <li>承认家庭经历对自己的影响，同时不将自己定义为受害者</li>
                      </ul>

                      <h6>建立健康界限</h6>
                      <p>与原生家庭建立健康界限是个人分化的重要部分：</p>
                      <ul>
                        <li>明确自己的需求和限制</li>
                        <li>学会说"不"而不感到内疚</li>
                        <li>在保持联系的同时维护自主性</li>
                        <li>根据当前关系的健康程度调整互动方式</li>
                      </ul>

                      <h6>创造新的家庭叙事</h6>
                      <p>重写自己的家庭故事可以帮助整合过去的经历并创造新的意义：</p>
                      <ul>
                        <li>识别家庭叙事中的限制性信念</li>
                        <li>发展更加平衡和富有同情心的理解</li>
                        <li>承认困难的同时也认可韧性和成长</li>
                        <li>创造包含希望和可能性的新叙事</li>
                      </ul>

                      <h6>发展新的关系模式</h6>
                      <p>基于对家庭模式的理解，有意识地发展新的关系方式：</p>
                      <ul>
                        <li>识别自己在关系中的模式和触发点</li>
                        <li>练习新的沟通和冲突解决技巧</li>
                        <li>培养情感觉察和表达能力</li>
                        <li>在当前关系中建立健康的互动循环</li>
                      </ul>

                      <h5>实践方法</h5>
                      <h6>家庭图谱（家谱图）</h6>
                      <p>绘制家庭图谱是理解家庭系统的有力工具，它可以帮助：</p>
                      <ul>
                        <li>可视化家庭结构和关系模式</li>
                        <li>识别跨代重复的模式</li>
                        <li>发现家庭中的三角关系</li>
                        <li>理解重大生活事件和转变的影响</li>
                      </ul>
                      <p>家庭图谱使用特定符号表示家庭成员、关系类型和重要事件，通常覆盖至少三代人。</p>

                      <h6>家庭雕塑</h6>
                      <p>家庭雕塑是一种体验式技术，通过摆放人物位置来表现家庭关系：</p>
                      <ul>
                        <li>使用实物（如玩偶或椅子）代表家庭成员</li>
                        <li>根据情感距离和权力关系摆放位置</li>
                        <li>观察自己对不同摆放的情感反应</li>
                        <li>尝试不同的排列，体验可能的变化</li>
                      </ul>

                      <h6>角色扮演和空椅技术</h6>
                      <p>这些技术可以帮助探索和转化家庭关系：</p>
                      <ul>
                        <li>与"想象中的家人"对话，表达未说出的感受</li>
                        <li>扮演不同家庭成员的角色，发展同理心</li>
                        <li>通过角色转换，体验不同的互动方式</li>
                        <li>练习新的沟通模式和回应方式</li>
                      </ul>

                      <h6>家庭日记和反思</h6>
                      <p>持续的反思和记录可以深化对家庭系统的理解：</p>
                      <ul>
                        <li>记录家庭互动中的模式和触发点</li>
                        <li>探索自己的情感反应和内在体验</li>
                        <li>识别自己在家庭系统中的角色和贡献</li>
                        <li>追踪随时间推移的变化和成长</li>
                      </ul>

                      <h5>延伸资源</h5>
                      <h6>推荐书籍</h6>
                      <ul>
                        <li>《家庭如何塑造人》（Families and How to Survive Them）- 罗宾·斯凯纳（Robin Skynner）和约翰·克里斯（John Cleese）</li>
                        <li>《走出原生家庭》（Toxic Parents）- 苏珊·福沃德（Susan Forward）</li>
                        <li>《不完美的父母：如何摆脱原生家庭的阴影》- 林德赛·吉布森（Lindsay C. Gibson）</li>
                        <li>《家庭治疗的八大概念》（Eight Concepts）- 罗比·肯特（Robbie Kentor）</li>
                        <li>《亲密关系中的舞蹈》（Dance of Intimacy）- 哈丽特·勒纳（Harriet Lerner）</li>
                      </ul>

                      <h6>在线资源</h6>
                      <ul>
                        <li>家庭系统理论在线课程和讲座</li>
                        <li>家庭图谱绘制工具和指南</li>
                        <li>家庭系统治疗师目录</li>
                        <li>原生家庭议题支持小组</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

const ResourceLibrary: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = React.useState('全部');
  const [selectedType, setSelectedType] = React.useState('全部');
  return (
    <div className="resource-library-section">
      <h2>资源推荐</h2>
      <p className="lead">精选的书籍、文章和视频，帮助深入学习自我养育与心理学</p>
      
      <div className="resource-filters mb-4">
        <h5>按主题筛选</h5>
        <div className="d-flex flex-wrap">
          <button className="btn btn-outline-primary me-2 mb-2 active">全部</button>
          <button className="btn btn-outline-secondary me-2 mb-2">精神分析</button>
          <button className="btn btn-outline-secondary me-2 mb-2">依恋理论</button>
          <button className="btn btn-outline-secondary me-2 mb-2">创伤疗愈</button>
          <button className="btn btn-outline-secondary me-2 mb-2">内在小孩</button>
          <button className="btn btn-outline-secondary me-2 mb-2">发展心理学</button>
        </div>
        
        <h5 className="mt-3">按类型筛选</h5>
        <div className="d-flex flex-wrap">
          <button className="btn btn-outline-secondary me-2 mb-2">书籍</button>
          <button className="btn btn-outline-secondary me-2 mb-2">文章</button>
          <button className="btn btn-outline-secondary me-2 mb-2">视频</button>
          <button className="btn btn-outline-secondary me-2 mb-2">播客</button>
          <button className="btn btn-outline-secondary me-2 mb-2">练习工具</button>
        </div>
      </div>
      
      <div className="resources-list">
        <div className="category-section mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>精神分析经典</h4>
            <a href="#" className="btn btn-sm btn-link">查看全部</a>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-primary mb-2">书籍</span>
                    <span className="text-warning">★★★★☆</span>
                  </div>
                  <h5>《自我与防御机制》</h5>
                  <p className="text-muted">安娜·弗洛伊德</p>
                  <p className="mb-3">深入解析脑防御机制的运作方式及其在自我发展中的作用。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">页数: 320</span>
                    <button className="btn btn-sm btn-outline-primary">阅读笔记</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-info mb-2">文章</span>
                    <span className="text-warning">★★★★★</span>
                  </div>
                  <h5>当代精神分析的核心概念</h5>
                  <p className="text-muted">国际精神分析期刊</p>
                  <p className="mb-3">概述科胡特、比昂等理论家的核心贡献及其临床应用。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">阅读时间: 25分钟</span>
                    <button className="btn btn-sm btn-outline-primary">在线阅读</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-success mb-2">视频课程</span>
                    <span className="text-warning">★★★★☆</span>
                  </div>
                  <h5>荣格分析心理学入门</h5>
                  <p className="text-muted">Dr. Murray Stein</p>
                  <p className="mb-3">12节系列课程，涵盖原型、个体化过程、阴影工作等核心概念。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">时长: 8小时</span>
                    <button className="btn btn-sm btn-outline-primary">免费试看</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        
        <div className="category-section mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>依恋与关系模式</h4>
            <a href="#" className="btn btn-sm btn-link">查看全部</a>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-primary mb-2">书籍</span>
                    <span className="text-warning">★★★★★</span>
                  </div>
                  <h5>《依恋的修复》</h5>
                  <p className="text-muted">Daniel A. Hughes</p>
                  <p className="mb-3">基于依恋理论的心理治疗指南，帮助修复早期关系创伤。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">页数: 280</span>
                    <button className="btn btn-sm btn-outline-primary">阅读笔记</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-success mb-2">视频</span>
                    <span className="text-warning">★★★★☆</span>
                  </div>
                  <h5>安全依恋的自我培养</h5>
                  <p className="text-muted">Dr. Diane Poole Heller</p>
                  <p className="mb-3">实用练习指导，帮助成年人发展更安全的内部工作模型。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">时长: 45分钟</span>
                    <button className="btn btn-sm btn-outline-primary">观看</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-secondary mb-2">工具包</span>
                    <span className="text-warning">★★★★☆</span>
                  </div>
                  <h5>依恋类型自测与指南</h5>
                  <p className="text-muted">自我养育实验室</p>
                  <p className="mb-3">包含自测量表、关系模式分析工具和改善建议。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">包含: 5个练习</span>
                    <button className="btn btn-sm btn-outline-primary">下载</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        
        <div className="category-section mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>创伤理论与疗愈</h4>
            <a href="#" className="btn btn-sm btn-link">查看全部</a>
          </div>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-primary mb-2">书籍</span>
                    <span className="text-warning">★★★★★</span>
                  </div>
                  <h5>《身体从未忘记》</h5>
                  <p className="text-muted">Bessel van der Kolk</p>
                  <p className="mb-3">创伤如何影响身心，以及创新疗法的科学基础。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">页数: 464</span>
                    <button className="btn btn-sm btn-outline-primary">阅读笔记</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-info mb-2">文章</span>
                    <span className="text-warning">★★★★☆</span>
                  </div>
                  <h5>复杂性创伤后应激障碍(CPTSD)的识别</h5>
                  <p className="text-muted">Pete Walker</p>
                  <p className="mb-3">区分C-PTSD与传统PTSD，并提供自我疗愈策略。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">阅读时间: 20分钟</span>
                    <button className="btn btn-sm btn-outline-primary">在线阅读</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        
        <div className="category-section mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>内在小孩工作</h4>
            <a href="#" className="btn btn-sm btn-link">查看全部</a>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-primary mb-2">书籍</span>
                    <span className="text-warning">★★★★☆</span>
                  </div>
                  <h5>《拥抱你的内在小孩》</h5>
                  <p className="text-muted">John Bradshaw</p>
                  <p className="mb-3">经典的内在小孩疗愈指南，包含实用练习和案例。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">页数: 352</span>
                    <button className="btn btn-sm btn-outline-primary">阅读笔记</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-success mb-2">冥想</span>
                    <span className="text-warning">★★★★★</span>
                  </div>
                  <h5>内在小孩对话引导</h5>
                  <p className="text-muted">Dr. Nicole LePera</p>
                  <p className="mb-3">引导式冥想，建立与内在小孩的疗愈性对话。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">时长: 30分钟</span>
                    <button className="btn btn-sm btn-outline-primary">收听</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-warning text-dark mb-2">练习册</span>
                    <span className="text-warning">★★★★☆</span>
                  </div>
                  <h5>内在小孩疗愈30天</h5>
                  <p className="text-muted">自我养育工作坊</p>
                  <p className="mb-3">每日练习指南，包含日记提示和创造性表达练习。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">页数: 120</span>
                    <button className="btn btn-sm btn-outline-primary">下载</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        
        <div className="category-section">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>发展心理学与应用</h4>
            <a href="#" className="btn btn-sm btn-link">查看全部</a>
          </div>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-primary mb-2">书籍</span>
                    <span className="text-warning">★★★★★</span>
                  </div>
                  <h5>《发展的自我》</h5>
                  <p className="text-muted">Daniel N. Stern</p>
                  <p className="mb-3">婴儿如何建立自我感，及其对成人自我发展的启示。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">页数: 288</span>
                    <button className="btn btn-sm btn-outline-primary">阅读笔记</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="badge bg-info mb-2">研究报告</span>
                    <span className="text-warning">★★★★☆</span>
                  </div>
                  <h5>成人发展中的关键转折点</h5>
                  <p className="text-muted">哈佛成人发展研究</p>
                  <p className="mb-3">75年纵向研究揭示脑发展的关键因素和模式。</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">阅读时间: 35分钟</span>
                    <button className="btn btn-sm btn-outline-primary">下载PDF</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg">
            <i className="bi bi-arrow-repeat me-2"></i>
            加载更多资源
          </button>
        </div>
      </div>
    </div>
  );
};

const Glossary: React.FC = () => {
  return (
    <div className="glossary-section">
      <h2>术语词典</h2>
      <p className="lead">心理学与精神分析的核心术语解释</p>
      
      <div className="glossary-search mb-4">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="搜索术语..." />
          <button className="btn btn-primary">搜索</button>
        </div>
      </div>
      
      <div className="glossary-categories mb-4">
        <div className="d-flex flex-wrap">
          <button className="btn btn-outline-primary me-2 mb-2">全部</button>
          <button className="btn btn-outline-secondary me-2 mb-2">A-C</button>
          <button className="btn btn-outline-secondary me-2 mb-2">D-F</button>
          <button className="btn btn-outline-secondary me-2 mb-2">G-I</button>
          <button className="btn btn-outline-secondary me-2 mb-2">J-L</button>
          <button className="btn btn-outline-secondary me-2 mb-2">M-O</button>
          <button className="btn btn-outline-secondary me-2 mb-2">P-R</button>
          <button className="btn btn-outline-secondary me-2 mb-2">S-U</button>
          <button className="btn btn-outline-secondary me-2 mb-2">V-Z</button>
        </div>
      </div>
      
      <div className="glossary-list">
        <Card className="mb-3">
          <Card.Body>
            <h5 id="attachment">依恋 (Attachment)</h5>
            <p>人与特定他人之间的情感联结，最初在婴儿与照顾者之间形成。依恋关系的质量影响个体的情感发展、关系模式和心理健康。</p>
            <p><strong>相关术语：</strong> 安全型依恋、焦虑型依恋、回避型依恋、混乱型</p>
          </Card.Body>
        </Card>
        
        <Card className="mb-3">
          <Card.Body>
            <h5 id="inner-child">内在小孩 (Inner Child)</h5>
            <p>人格中保留的童年自我部分，包含童年的情感、需求、记忆和经历。与内在小孩建立联系可以帮助疗愈童年创伤，满足未被满足的需求。</p>
            <p><strong>相关术语：</strong> 内在批判者、内在父母、自我养育</p>
          </Card.Body>
        </Card>
        
        <Card className="mb-3">
          <Card.Body>
            <h5 id="projection">投射 (Projection)</h5>
            <p>一种防御机制，将自己不能接受的想法、情感或特质归因于他人。投射帮助个体避免面对自己内在的冲突或不适。</p>
            <p><strong>相关术语：</strong> 防御机制、否认、合理化</p>
          </Card.Body>
        </Card>
        
        <Card className="mb-3">
          <Card.Body>
            <h5 id="self-compassion">自我关怀 (Self-Compassion)</h5>
            <p>以友善、接纳和理解的态度对待自己，特别是在面对困难、失败或痛苦时。自我关怀包括自我友善、共通人性和正念三个要素。</p>
            <p><strong>相关术语：</strong> 自我批判、自我接纳、正念</p>
          </Card.Body>
        </Card>
        
        <Card className="mb-3">
          <Card.Body>
            <h5 id="transference">移情 (Transference)</h5>
            <p>将过去关系中的感受、期望和反应模式无意识地转移到当前关系中。移情可以帮助理解个体的关系模式和未解决的冲突。</p>
            <p><strong>相关术语：</strong> 反移情、重复强迫、关系模式</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

// 知识库主页面
const KnowledgeBase: React.FC = () => {
  return (
    <Container className="py-4">
      <div className="page-header mb-4">
        <h1>知识库</h1>
        <p className="lead">探索心理学与精神分析的核心概念，建立个人成长的理论基础</p>
      </div>

      <Tab.Container id="knowledge-tabs" defaultActiveKey="concept-map">
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column mb-4">
              <Nav.Item>
                <Nav.Link eventKey="concept-map">概念图谱</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="theory-base">理论基础</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="resource-library">资源推荐</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="glossary">术语词典</Nav.Link>
              </Nav.Item>
            </Nav>
            <Card className="knowledge-sidebar-card">
              <Card.Body>
                <h5>为什么需要理论基础？</h5>
                <p>系统的理论知识能帮助我们理解内心世界的复杂性，为自我探索提供框架和语言。</p>
                <Link to="/self-exploration" className="btn btn-sm btn-outline-primary">前往自我探索</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="concept-map">
                <ConceptMap />
              </Tab.Pane>
              <Tab.Pane eventKey="theory-base">
                <TheoryBase />
              </Tab.Pane>
              <Tab.Pane eventKey="resource-library">
                <ResourceLibrary />
              </Tab.Pane>
              <Tab.Pane eventKey="glossary">
                <Glossary />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default KnowledgeBase;
                        
                          