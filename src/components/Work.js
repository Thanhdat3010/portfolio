import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import SlideUp from './SlideUp';
import '../stylesheet/Work.css';

const projects = [
  {
    year: '2026',
    track: 'MAIN TRACK',
    rank: 'A*',
    title: 'Anonymous',
    venue: 'Anonymous',
    authors: 'Anonymous',
    description: 'Abstract to be added.',
    tags: ['Low-resource NMT', 'Linguistic'],
    pdfLink: '#'
  },
  {
    year: '2026',
    track: 'Workshop',
    rank: '',
    title: 'Not All Data Augmentation Works: A Typology-Aware Study for Low-Resource Neural Machine Translation in Vietnamese Ethnic Minority Languages',
    venue: 'AAAI-2026 Workshop LM4UC, Singapore',
    authors: 'Long Nguyen, Dat T. Truong, Nhan D. Tran, Quynh Vo, Quy Tran Nguyen, Tho Quan',
    description: 'Neural Machine Translation (NMT) for low-resource and underserved languages remains challenging due to the severe lack of parallel corpora, linguistic tools, and evaluation resources. The issue is evident in Vietnam, where the ethnolinguistic minority languages Tày (Tai–Kadai) and Bahnar (Austroasiatic) hold cultural significance but remain digitally under-represented. Data Augmentation (DA) offers a cost-effective remedy; however, most existing techniques were designed for high-resource analytic languages and are often applied heuristically without assessing their linguistic compatibility. In this work, we present the first systematic study of DA for two minority language pairs, Tày–Vietnamese and Bahnar–Vietnamese, within a three-stage language model pipeline consisting of Vietnamese-based initialization, monolingual adaptation, and supervised fine-tuning. We train two independent encoder–decoder NMT systems to isolate augmentation effects and analyze how linguistic typology shapes augmentation behavior. Our experiments show that meaning-preserving DA methods consistently improve translation adequacy and linguistic faithfulness, whereas several widely used techniques introduce semantic or structural degradation. Through quantitative evaluation and typology-aware linguistic analysis, we derive practical guidelines for selecting DA strategies in extremely low-resource and typologically diverse settings. We additionally release newly digitized high-quality bilingual corpora and trained models to facilitate future research and community-centered NLP development.',
    tags: ['Low-resource NMT', 'Data Augmentation'],
    pdfLink: 'https://openreview.net/forum?id=XziOk4BTfv'
  }
];

const Work = () => {
  return (
    <Container id="productions" fluid>
      <SlideUp>
        <div className="text-center mb-5">
          <h2 className="Xwork">Selected Publications</h2>
          <p className="text" style={{ color: '#aaa' }}>Academic research and recent works</p>
        </div>

        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col xs={12} lg={10} key={index} className="mb-4">
              {/* class 'work-item-pub' phải khớp với CSS */}
              <div className="work-item-pub">
                <Row className="align-items-start w-100 g-0">
                  {/* Cột bên trái: Badge Meta */}
                  <Col xs={12} md={2} className="pub-meta mb-3 mb-md-0">
                    <div className="pub-year">{project.year}</div>
                    <div className="pub-track">{project.track}</div>
                    {project.rank && <div className="pub-rank">{project.rank}</div>}
                  </Col>

                  {/* Cột bên phải: Nội dung chi tiết */}
                  <Col xs={12} md={10} className="pub-info">
                    <h4 className="pub-title-text">{project.title}</h4>
                    <p className="pub-venue">{project.venue}</p>
                    <p className="pub-authors">{project.authors}</p>
                    <p className="pub-desc">{project.description}</p>

                    <div className="pub-footer">
                      <a
                        href={project.pdfLink}
                        className="pub-pdf-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PDF
                      </a>

                      {project.tags.map((tag, tIndex) => (
                        <Badge key={tIndex} pill className="pub-tag">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </SlideUp>
    </Container>
  );
}

export default Work;