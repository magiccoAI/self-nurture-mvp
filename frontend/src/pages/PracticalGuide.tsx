import React from 'react';
import { Container, Row, Col, Card, Button, Tab, Nav, ListGroup } from 'react-bootstrap';

const PracticalGuide: React.FC = () => {
  return (
    <Container className="py-4">
      <div className="page-header mb-4">
        <h1>实践指南</h1>
        <p className="lead">将理论知识转化为日常实践，培养健康的自我关系</p>
      </div>

      <Tab.Container id="practice-tabs" defaultActiveKey="self-compassion">
        <Row>
          <Col md={3} xs={12}>
            <Nav variant="pills" className="flex-column mb-4">
              <Nav.Item>
                <Nav.Link eventKey="self-compassion">自我关怀练习</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="emotional-regulation">情绪调节技巧</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="boundary-setting">界限设定指南</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="inner-child-work">内在小孩工作</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="daily-practices">日常实践建议</Nav.Link>
              </Nav.Item>
            </Nav>
            <Card className="practice-sidebar-card">
              <Card.Body>
                <h5>实践小贴士</h5>
                <p>持续的小练习比偶尔的大努力更有效。尝试每天抽出5-10分钟进行实践，逐渐融入日常生活。</p>
                <p>记录你的实践体验和感受，帮助追踪进步和调整方法。</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={9} xs={12}>
            <Tab.Content>
              <Tab.Pane eventKey="self-compassion">
                <div className="self-compassion-section">
                  <h2>自我关怀练习</h2>
                  <p className="lead">学习以友善和理解的态度对待自己</p>
                  
                  <div className="quote-box mb-4">
                    <p className="quote">"自我关怀不是自私，而是自我保护和自我尊重的必要基础。"</p>
                  </div>
                  
                  <h4>什么是自我关怀？</h4>
                  <p>自我关怀是以友善、接纳和理解的态度对待自己，特别是在面对困难、失败或痛苦时。它包含三个核心要素：</p>
                  
                  <Row className="mb-4">
                    <Col md={4} xs={12}>
                      <Card className="h-100">
                        <Card.Body className="text-center">
                          <i className="bi bi-heart module-icon"></i>
                          <h5>自我友善</h5>
                          <p>对自己温柔和理解，而非批判和苛责</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Body className="text-center">
                          <i className="bi bi-people module-icon"></i>
                          <h5>共通人性</h5>
                          <p>认识到痛苦和不完美是人类共同经历</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Body className="text-center">
                          <i className="bi bi-brightness-high module-icon"></i>
                          <h5>正念</h5>
                          <p>以平衡的方式觉察自己的想法和感受</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  
                  <h4>自我关怀练习</h4>
                  
                  <Card className="mb-4">
                    <Card.Body>
                      <h5>练习一：自我关怀冥想</h5>
                      <p>这个简单的冥想练习可以帮助你培养对自己的友善态度。</p>
                      
                      <ol>
                        <li>找一个安静的地方，舒适地坐下或躺下。</li>
                        <li>将一只手放在心口，感受心跳和呼吸。</li>
                        <li>对自己说以下话语（可以默念或轻声说出）：
                          <ul>
                            <li>"愿我安全"</li>
                            <li>"愿我健康"</li>
                            <li>"愿我平静"</li>
                            <li>"愿我活得轻松自在"</li>
                          </ul>
                        </li>
                        <li>在说每一句话时，真诚地希望自己能拥有这些品质。</li>
                        <li>如果感到困难或不自在，这是正常的。只需注意这些感受，继续练习。</li>
                      </ol>
                      
                      <p>建议每天练习5-10分钟，特别是在感到压力或自我批判时。</p>
                      
                      <div className="text-center">
                        <Button variant="outline-primary">下载音频指导</Button>
                      </div>
                    </Card.Body>
                  </Card>
                  
                  <Card className="mb-4">
                    <Card.Body>
                      <h5>练习二：自我关怀信</h5>
                      <p>写一封给自己的信，用你会对亲密朋友说的方式来表达理解和支持。</p>
                      
                      <ol>
                        <li>想象你的一个亲密朋友正经历你现在面临的困难或挑战。</li>
                        <li>思考你会对这个朋友说什么，用什么语气和方式表达关心和支持。</li>
                        <li>现在，写一封信给自己，用同样的语气和方式表达理解、支持和鼓励。</li>
                        <li>读这封信，感受被理解和支持的感觉。</li>
                      </ol>
                      
                      <p>这个练习帮助我们意识到，我们常常对他人比对自己更友善，并学习将这种友善转向自己。</p>
                    </Card.Body>
                  </Card>
                  
                  <Card>
                    <Card.Body>
                      <h5>练习三：自我关怀休息</h5>
                      <p>在日常生活中安排短暂的自我关怀休息，满足自己的需求。</p>
                      
                      <p>每天安排至少一次"自我关怀休息"，可以是5分钟或更长时间，做一些能让你感到舒适、放松或滋养的事情，例如：</p>
                      
                      <Row>
                        <Col md={6} xs={12}>
                          <ul>
                            <li>喝一杯茶，专注地品味</li>
                            <li>进行几次深呼吸</li>
                            <li>伸展身体</li>
                            <li>听一首喜欢的歌</li>
                          </ul>
                        </Col>
                        <Col md={6}>
                          <ul>
                            <li>写下三件感恩的事</li>
                            <li>给自己一个拥抱</li>
                            <li>看窗外的风景</li>
                            <li>使用喜欢的香氛</li>
                          </ul>
                        </Col>
                      </Row>
                      
                      <p>关键是带着意图和觉察来做这些事，将其视为对自己的关怀行为，而不仅仅是休息。</p>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="emotional-regulation">
                <div className="emotional-regulation-section">
                  <h2>情绪调节技巧</h2>
                  <p className="lead">学习识别、理解和健康地表达情绪</p>
                  
                  <h4>情绪调节的重要性</h4>
                  <p>情绪调节是指我们如何体验和管理情绪的过程。健康的情绪调节不是压抑或否认情绪，而是以适应性的方式识别、接纳和表达情绪，同时不被情绪所淹没。</p>
                  
                  <div className="quote-box mb-4">
                    <p className="quote">"情绪既不是好的也不是坏的，它们只是信息。关键在于我们如何理解和回应这些信息。"</p>
                  </div>
                  
                  <h4>情绪调节技巧</h4>
                  
                  <Card className="mb-4">
                    <Card.Body>
                      <h5>技巧一：情绪命名</h5>
                      <p>简单地给情绪命名可以减轻其强度，帮助我们从情绪中获得一定距离。</p>
                      
                      <ol>
                        <li>当你感到情绪波动时，停下来，注意你的身体感受。</li>
                        <li>尝试用具体的词语来描述你的情绪状态，例如"我感到失望"，而不是笼统的"我感觉不好"。</li>
                        <li>如果可能，进一步细化，例如"我感到失望，因为我的期望没有得到满足"。</li>
                      </ol>
                      
                      <p>情绪词汇表可以帮助你更准确地命名情绪：</p>
                      
                      <Row>
                        <Col md={3} xs={12}>
                          <h6>愤怒家族</h6>
                          <ul className="list-unstyled">
                            <li>恼怒</li>

                            <li>愤慨</li>
                            <li>烦躁</li>
                            <li>恼火</li>
                            <li>憎恨</li>
                          </ul>
                        </Col>
                        <Col md={3}>
                          <h6>恐惧家族</h6>
                          <ul className="list-unstyled">
                            <li>焦虑</li>
                            <li>紧张</li>
                            <li>担忧</li>
                            <li>恐慌</li>
                            <li>不安</li>
                          </ul>
                        </Col>
                        <Col md={3}>
                          <h6>悲伤家族</h6>
                          <ul className="list-unstyled">
                            <li>失落</li>
                            <li>沮丧</li>
                            <li>绝望</li>
                            <li>孤独</li>
                            <li>遗憾</li>
                          </ul>
                        </Col>
                        <Col md={3}>
                          <h6>喜悦家族</h6>
                          <ul className="list-unstyled">
                            <li>满足</li>
                            <li>兴奋</li>
                            <li>感激</li>
                            <li>希望</li>
                            <li>平静</li>
                          </ul>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  
                  <Card className="mb-4">
                    <Card.Body>
                      <h5>技巧二：身体接地</h5>
                      <p>当情绪强烈时，接地技巧可以帮助你回到当下，减轻情绪的压力。</p>
                      
                      <h6>5-4-3-2-1技巧</h6>
                      <p>使用你的五感来锚定自己：</p>
                      <ul>
                        <li><strong>看到</strong>5件事物（注意周围环境中的5个物体）</li>
                        <li><strong>触摸</strong>4件事物（感受4种不同的质地）</li>
                        <li><strong>听到</strong>3种声音（注意环境中的3种声音）</li>
                        <li><strong>闻到</strong>2种气味（注意2种不同的气味）</li>
                        <li><strong>尝到</strong>1种味道（注意口中的味道）</li>
                      </ul>
                      
                      <p>这个练习帮助你将注意力从强烈的情绪中转移出来，回到当下的感官体验。</p>
                    </Card.Body>
                  </Card>
                  
                  <Card>
                    <Card.Body>
                      <h5>技巧三：情绪日记</h5>
                      <p>定期记录情绪可以帮助你识别情绪模式，理解情绪触发因素，并发展更健康的应对策略。</p>
                      
                      <p>在日记中记录以下内容：</p>
                      <ol>
                        <li><strong>情绪</strong>：你感受到什么情绪？强度如何（1-10）？</li>
                        <li><strong>情境</strong>：什么情况触发了这种情绪？</li>
                        <li><strong>想法</strong>：当时你的想法是什么？</li>
                        <li><strong>身体感受</strong>：你的身体有什么感受（如心跳加速、肌肉紧张）？</li>
                        <li><strong>行为</strong>：你做了什么或想做什么？</li>
                        <li><strong>替代反应</strong>：有没有更健康的方式来回应这种情况？</li>
                      </ol>
                      
                      <p>每天记录2-3次情绪体验，特别是强烈或重复出现的情绪。随着时间推移，你会开始注意到模式，并能更好地预测和管理情绪反应。</p>
                      
                      <div className="text-center">
                        <Button variant="outline-primary">下载情绪日记模板</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="boundary-setting">
                <div className="boundary-setting-section">
                  <h2>界限设定指南</h2>
                  <p className="lead">学习在关系中建立健康的界限，保护自己的需求和价值</p>
                  
                  <h4>什么是健康界限？</h4>
                  <p>界限是定义你的个人空间、责任和需求的无形边界。健康的界限帮助你保护自己的身心健康，同时尊重他人的界限。</p>
                  
                  <div className="quote-box mb-4">
                    <p className="quote">"设定界限不是自私的行为，而是自我照顾和健康关系的必要条件。"</p>
                  </div>
                  
                  <h4>界限类型</h4>
                  <Row className="mb-4">
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Body>
                          <h5>身体界限</h5>
                          <p>关于你的身体、个人空间和隐私</p>
                          <p><strong>例如：</strong> 决定谁可以触碰你，如何触碰；需要多少个人空间；舒适的身体距离</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Body>
                          <h5>情感界限</h5>
                          <p>关于你的情感和情绪能量</p>
                          <p><strong>例如：</strong> 分离自己和他人的情绪；不为他人的情绪负责；保护自己不受情绪操纵</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Body>
                          <h5>时间和精力界限</h5>
                          <p>关于你如何分配时间和精力</p>
                          <p><strong>例如：</strong> 决定如何使用你的时间；何时说"不"；优先考虑自己的需求和责任</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  
                  <h4>设定界限的步骤</h4>
                  
                  <Card className="mb-4">
                    <Card.Body>
                      <h5>步骤一：识别你的界限需求</h5>
                      <p>首先要了解自己的界限在哪里，以及什么情况会让你感到不舒服或被侵犯。</p>
                      
                      <div className="boundary-exercise p-3 bg-light rounded mb-3">
                        <h6>界限反思练习</h6>
                        <p>回答以下问题，帮助你识别自己的界限需求：</p>
                        <ol>
                          <li>什么情况会让你感到不舒服或被侵犯？</li>
                          <li>你经常为了取悦他人而牺牲自己的需求吗？</li>
                          <li>你是否难以对他人的请求说"不"？</li>
                          <li>你是否经常感到被他人的情绪淹没？</li>
                          <li>你是否有足够的时间和空间来满足自己的需求？</li>
                        </ol>
                      </div>
                      
                      <p>记录你的回答，注意那些让你感到不舒服或耗尽的模式。这些是你需要设定界限的领域。</p>
                    </Card.Body>
                  </Card>
                  
                  <Card className="mb-4">
                    <Card.Body>
                      <h5>步骤二：清晰表达你的界限</h5>
                      <p>一旦你知道自己的界限在哪里，下一步是学习如何清晰、直接地表达它们。</p>
                      
                      <h6>界限表达公式</h6>
                      <ol>
                        <li><strong>陈述具体行为</strong>："当你..."（描述具体行为，不做评判）</li>
                        <li><strong>表达你的感受</strong>："我感到..."（使用"我"陈述，表达你的感受）</li>
                        <li><strong>解释影响</strong>："因为..."（解释这种行为如何影响你）</li>
                        <li><strong>提出请求</strong>："我需要/希望..."（明确表达你的需求或界限）</li>
                      </ol>
                      
                      <div className="boundary-examples mt-3">
                        <h6>表达界限的例子</h6>
                        <ul>
                          <li>"当你在我工作时不断打断我，我感到焦虑，因为这影响了我的专注力。我希望在我工作的这两个小时内，除非紧急情况，否则不要打断我。"</li>
                          <li>"当你提出周末的计划时没有事先咨询我，我感到被忽视，因为这影响了我自己的安排。我需要你在做涉及我的计划前先和我商量。"</li>
                          <li>"当你对我大喊大叫，我感到受伤和不被尊重。如果你生气了，我希望你能用平静的语气表达，或者先冷静下来再交流。"</li>
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                  
                  <Card>
                    <Card.Body>
                      <h5>步骤三：维护你的界限</h5>
                      <p>设定界限只是第一步，更重要的是一致地维护它们，即使面对阻力也是如此。</p>
                      
                      <h6>维护界限的策略</h6>
                      <ul>
                        <li><strong>保持一致</strong>：不要在压力下让步，这会削弱你的界限</li>
                        <li><strong>预设后果</strong>：明确表达越界的后果，并在必要时执行</li>
                        <li><strong>寻求支持</strong>：从朋友、家人或治疗师那里获得支持</li>
                        <li><strong>练习自我关怀</strong>：设定界限可能会引起不适，通过自我关怀来支持自己</li>
                        <li><strong>庆祝进步</strong>：认可并庆祝你在设定和维护界限方面的每一步进步</li>
                      </ul>
                      
                      <div className="boundary-reflection mt-3 p-3 bg-light rounded">
                        <h6>界限日志</h6>
                        <p>保持一个界限日志，记录以下内容：</p>
                        <ol>
                          <li>你设定的界限</li>
                          <li>他人的反应</li>
                          <li>你的感受和想法</li>
                          <li>你如何维护界限</li>
                          <li>从经验中学到的东西</li>
                        </ol>
                        <p>这个日志可以帮助你追踪进步，识别模式，并调整你的界限策略。</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="inner-child-work">
                <div className="inner-child-section">
                  <h2>内在小孩工作</h2>
                  <p className="lead">学习连接、理解和疗愈你的内在小孩</p>
                  
                  <h4>什么是内在小孩？</h4>
                  <p>内在小孩是你人格中保留的童年部分，包含童年的情感、需求、记忆和经历。与内在小孩建立联系可以帮助疗愈童年创伤，满足未被满足的需求，并整合人格的不同部分。</p>
                  
                  <div className="quote-box mb-4">
                    <p className="quote">"你内在的小孩仍然存在，等待被看见、被听见、被理解和被爱。"</p>
                  </div>
                  
                  <h4>内在小孩工作的步骤</h4>
                  
                  <Card className="mb-4">
                    <Card.Body>
                      <h5>步骤一：识别你的内在小孩</h5>
                      <p>首先要认识到内在小孩的存在，并了解它如何影响你的现在生活。</p>
                      
                      <div className="inner-child-exercise p-3 bg-light rounded mb-3">
                        <h6>内在小孩识别练习</h6>
                        <p>找一张你童年的照片（如果没有，可以想象童年的自己），然后回答以下问题：</p>
                        <ol>
                          <li>这个孩子看起来怎么样？有什么情绪或需求？</li>
                          <li>这个孩子在童年时期经历了什么？</li>
                          <li>这个孩子得到了什么样的关注和照顾？</li>
                          <li>这个孩子有哪些未被满足的需求？</li>
                          <li>你现在的哪些情绪反应或行为模式可能源自这个内在小孩？</li>
                        </ol>
                      </div>
                      
                      <p>记录你的回答，这些洞察将帮助你更好地理解内在小孩的需求和影响。</p>
                    </Card.Body>
                  </Card>
                  
                  <Card className="mb-4">
                    <Card.Body>
                      <h5>步骤二：与内在小孩建立联系</h5>
                      <p>一旦你识别了内在小孩，下一步是学习如何与它建立联系和沟通。</p>
                      
                      <h6>内在小孩对话练习</h6>
                      <ol>
                        <li><strong>创造安全空间</strong>：找一个安静、不受打扰的地方，确保你感到舒适和安全。</li>
                        <li><strong>放松身心</strong>：进行几次深呼吸，让身体放松下来。</li>
                        <li><strong>想象内在小孩</strong>：闭上眼睛，想象你的内在小孩站在你面前。注意他/她的外表、表情和姿态。</li>
                        <li><strong>开始对话</strong>：以温柔、接纳的态度向内在小孩问好。你可以问："你好，小朋友。你现在感觉怎么样？有什么想告诉我的吗？"</li>
                        <li><strong>倾听回应</strong>：耐心等待，倾听内在小孩的回应。这可能是语言、情绪、图像或身体感受。</li>
                        <li><strong>表达理解和支持</strong>：向内在小孩表达你的理解、接纳和支持。例如："我理解你感到害怕/孤独/不安全。我在这里陪着你，我会保护你。"</li>
                        <li><strong>结束对话</strong>：当对话自然结束时，感谢内在小孩的分享，并承诺会继续关注和照顾他/她。</li>
                      </ol>
                      
                      <p>建议每周进行2-3次这样的对话，每次10-15分钟。随着练习，你会越来越容易与内在小孩建立联系。</p>
                    </Card.Body>
                  </Card>
                  
                  <Card>
                    <Card.Body>
                      <h5>步骤三：满足内在小孩的需求</h5>
                      <p>通过对话了解内在小孩的需求后，下一步是学习如何满足这些需求，进行自我养育。</p>
                      
                      <h6>常见的内在小孩需求及满足方式</h6>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h6>安全感</h6>
                          <p><strong>表现：</strong>容易感到焦虑、恐惧或不安全</p>
                          <p><strong>满足方式：</strong>创造安全的环境；建立日常规律；学习自我安抚技巧；向内在小孩保证"我会保护你"</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>被看见和被听见</h6>
                          <p><strong>表现：</strong>强烈的被认可需求；害怕被忽视或拒绝</p>
                          <p><strong>满足方式：</strong>定期与内在小孩对话；验证内在小孩的感受和经历；庆祝自己的成就和进步</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>无条件的爱和接纳</h6>
                          <p><strong>表现：</strong>完美主义；自我批判；害怕犯错</p>
                          <p><strong>满足方式：</strong>练习自我关怀；接纳自己的不完美；对自己说"无论如何，我都爱你"</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>表达和创造</h6>
                          <p><strong>表现：</strong>压抑情感；缺乏创造性表达</p>
                          <p><strong>满足方式：</strong>鼓励情感表达；参与创造性活动如绘画、写作、音乐；玩耍和探索</p>
                        </ListGroup.Item>
                      </ListGroup>
                      
                      <div className="inner-child-practice mt-3 p-3 bg-light rounded">
                        <h6>每日内在小孩实践</h6>
                        <p>每天抽出5-10分钟，进行以下实践之一：</p>
                        <ul>
                          <li>写一封给内在小孩的信，表达理解和支持</li>
                          <li>为内在小孩创造一个安全的物理空间（如舒适的角落或特别的物品）</li>
                          <li>进行一项童年喜欢但后来放弃的活动</li>
                          <li>对着镜子，对自己说支持和鼓励的话</li>
                          <li>进行一次内在小孩对话，询问今天的需求</li>
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="daily-practices">
                <div className="daily-practices-section">
                  <h2>日常实践建议</h2>
                  <p className="lead">将自我养育融入日常生活的简单方法</p>
                  
                  <h4>为什么日常实践很重要？</h4>
                  <p>持续的小练习比偶尔的大努力更有效。通过将自我养育实践融入日常生活，你可以逐渐培养新的习惯和模式，实现持久的变化。</p>
                  
                  <div className="quote-box mb-4">
                    <p className="quote">"自我养育不是一次性的事件，而是一种生活方式，一种与自己建立关系的方式。"</p>
                  </div>
                  
                  <h4>日常实践建议</h4>
                  
                  <Card className="mb-4">
                    <Card.Body>
                      <h5>晨间实践（5-10分钟）</h5>
                      <p>在一天开始时设定意图和基调，为自己创造支持性的心态。</p>
                      
                      <div className="practice-routine p-3 bg-light rounded">
                        <h6>晨间自我养育例程</h6>
                        <ol>
                          <li><strong>觉察呼吸</strong>（1分钟）：醒来后，先觉察几次呼吸，感受身体的存在。</li>
                          <li><strong>设定意图</strong>（2分钟）：思考今天如何对自己友善，设定自我养育的意图。</li>
                          <li><strong>身体关怀</strong>（2分钟）：做几个舒展动作，感谢身体的支持。</li>
                          <li><strong>积极肯定</strong>（1分钟）：对自己说一句支持的话，如"今天我会关注自己的需求"。</li>
                        </ol>
                      </div>
                      
                      <p>这个简短的晨间例程可以帮助你以自我关怀的态度开始一天，提醒自己优先考虑自己的需求。</p>
                    </Card.Body>
                  </Card>
                  
                  <Card className="mb-4">
                    <Card.Body>
                      <h5>日间微实践（1-2分钟）</h5>
                      <p>在忙碌的一天中插入短暂的自我养育时刻，帮助你保持觉察和连接。</p>
                      
                      <h6>日间微实践清单</h6>
                      <Row>
                        <Col md={6}>
                          <ul>
                            <li><strong>呼吸空间</strong>：三次深呼吸，回到当下</li>
                            <li><strong>身体扫描</strong>：快速关注身体感受，释放紧张</li>
                            <li><strong>情绪检查</strong>：识别并命名当前情绪</li>
                            <li><strong>需求询问</strong>："现在我需要什么？"</li>
                            <li><strong>感官觉察</strong>：专注于一种感官体验</li>
                          </ul>
                        </Col>
                        <Col md={6}>
                          <ul>
                            <li><strong>感恩时刻</strong>：注意一件感恩的事</li>
                            <li><strong>自我鼓励</strong>：对自己说一句支持的话</li>
                            <li><strong>小小庆祝</strong>：庆祝一个小成就</li>
                            <li><strong>界限检查</strong>：我的界限是否被尊重？</li>
                            <li><strong>内在对话</strong>：简短地问候内在小孩</li>
                          </ul>
                        </Col>
                      </Row>
                      
                      <p>建议在一天中设置2-3个提醒，进行这些微实践。你也可以将它们与日常活动关联，如喝水、上厕所或收到通知时。</p>
                    </Card.Body>
                  </Card>
                  
                  <Card>
                    <Card.Body>
                      <h5>晚间反思（5-10分钟）</h5>
                      <p>在一天结束时回顾和整合，庆祝进步并设定明天的意图。</p>
                      
                      <div className="practice-routine p-3 bg-light rounded">
                        <h6>晚间自我养育例程</h6>
                        <ol>
                          <li><strong>感恩记录</strong>（2分钟）：写下今天三件感恩的事。</li>
                          <li><strong>自我养育回顾</strong>（3分钟）：回顾今天的自我养育实践，注意进步和挑战。</li>
                          <li><strong>自我肯定</strong>（2分钟）：肯定今天的努力，无论结果如何。</li>
                          <li><strong>明日意图</strong>（2分钟）：设定明天的自我养育意图。</li>
                          <li><strong>放松结束</strong>（1分钟）：深呼吸，放松身体，准备休息。</li>
                        </ol>
                      </div>
                      
                      <p>这个晚间例程帮助你培养感恩和自我肯定，同时为第二天设定积极的基调。</p>
                      
                      <div className="text-center mt-3">
                        <Button variant="outline-primary">下载日常实践指南</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default PracticalGuide;
