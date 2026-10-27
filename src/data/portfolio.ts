export const profile = {
  name: '김경중',
  englishName: 'Kyung-Joong Kim',
  role: 'Graphics Researcher & Technical Artist',
  email: '', // Add a public email to show the contact button.
  github: '', // Add your full GitHub profile URL to show the link.
  introduction: '실제 장면을 3D로 재구성하고, AI 추론과 물리 시뮬레이션을 연결하는 파이프라인을 연구합니다. 데이터 전처리부터 모델 학습·변환, Houdini 시뮬레이션과 Unreal Engine 기반 콘텐츠 구현까지 이어지는 작업 흐름을 설계합니다.',
};

export const projects = [
  {
    slug: '3dgs-fracture', number: '01', category: 'research',
    type: 'M.S. THESIS', title: '재질에 따라 부서지는 3D Gaussian',
    englishTitle: 'Material-aware 3DGS Fracture',
    description: '재질별 균열 가이드, 내부 보강, 조각 운동 전달을 하나의 파이프라인으로 연결한 석사연구.',
    image: 'fracture-sequence.webp',
    alt: '석재 흉상, 도자기와 목재가 충돌에 의해 단계적으로 파괴되는 3DGS 렌더링',
    tags: ['3D Gaussian Splatting', 'Fracture', 'Houdini'],
  },
  {
    slug: 'pbd-deformation', number: '02', category: 'research',
    type: 'RESEARCH', title: '3DGS에 전달하는 유연한 움직임',
    englishTitle: 'PBD-driven Gaussian Deformation',
    description: '프록시 메시의 PBD 시뮬레이션을 Gaussian에 전달해 중력과 충돌에 반응하는 변형을 구현한 별도 연구.',
    image: 'pbd-collision.webp',
    alt: '가방 3DGS 장면에 구체가 충돌하는 여섯 개의 연구 결과 이미지',
    tags: ['Position Based Dynamics', 'Vellum', 'Point Deform'],
  },
  {
    slug: 'mmca-vr', number: '03', category: 'exhibition',
    type: 'EXHIBITION · 2024—2025', title: '시뮬레이션을 관객의 경험으로',
    englishTitle: 'Cinematic VR at MMCA',
    description: '국립현대미술관 《순간이동》 전시의 VR 프로젝트에서 물리 요소 구현과 리소스 최적화에 참여.',
    image: 'vr-paper.webp',
    alt: '석양이 비치는 가상 공간 속 종이 포스터와 건물 외벽, VR 프로젝트 장면',
    tags: ['Unreal Engine', 'VR', 'Technical Art'],
  },
] as const;

export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const publications = [
  { kind: 'M.S. thesis', date: '2026.08', title: '재질 특성을 반영한 가우시안 스플래팅 기반 파괴 시뮬레이션 통합 파이프라인', authors: '김경중 · 지도교수 유태경', venue: '중앙대학교 첨단영상대학원 · 영상학 석사', summary: '재질별 균열 가이드, 내부 보강, 강체 운동 전달과 절단면 기반 프루닝을 통합한 석사학위논문.', href: 'projects/3dgs-fracture/', external: false },
  { kind: 'Journal article', date: '2026.05', title: '3차원 가우시안 스플레팅의 파괴 시뮬레이션을 위한 통합 파이프라인 연구', authors: '김경중 · 유태경', venue: '디지털콘텐츠학회논문지 27(5), 1371–1382', summary: 'SDF 기반 내부 보강, 기준 프레임 바인딩과 절단면 기반 가지치기를 연결한 파괴 파이프라인.', href: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003338188', external: true },
  { kind: 'Journal article', date: '2026.01', title: '3차원 가우시안 스플레팅의 동적 변형 및 시각화를 위한 PBD 통합 파이프라인 연구', authors: '김경중 · 유태경', venue: '디지털콘텐츠학회논문지 27(1), 207–214', summary: '저해상도 프록시의 Vellum PBD 시뮬레이션을 원본 해상도의 Gaussian에 전달하는 별도 연구.', href: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003299455', external: true },
  { kind: 'Journal article', date: '2020.05', title: '기사진표리진찬의궤 영상 미디어 개발 및 사용성 평가에 관한 연구', authors: '박지수 · 김경중 · 이보아', venue: '디지털콘텐츠학회논문지 21(5), 833–843', summary: '문화유산 디지털 미디어의 제작 과정과 사용자 경험을 문헌 연구 및 설문으로 분석한 공동연구.', href: 'https://cau.scholarworks.kr/item/fc155cbc-6ce8-4609-a681-103c386b8385', external: true },
] as const;

export const additionalWork = [
  { id: 'language-agent', label: 'AI SYSTEMS', title: '자연어 지시로 이동하는 Unreal Engine AI Agent', role: '과제 정의 · 데이터 및 평가 설계 · 구현 결과 검증', description: 'RGB 이미지와 자연어 지시를 받아 이동 행동을 결정하고, 실행 결과를 다시 관측하는 폐루프 제어 구조를 구성했습니다.', contributions: ['Expert 행동 궤적의 수집·검증부터 Behavior Cloning 학습, Python 추론 서버와 Unreal Engine의 WebSocket 연동까지 연결했습니다.', 'State MLP, RGB CNN, RGB+Language 정책을 비교하고, 기본 환경과 색상 방해물·미학습 환경을 구분해 고정 시드 평가를 설계했습니다.', '실험 결과를 바탕으로 데이터 증강과 다중 맵 학습의 개선 방향을 정했습니다. AI 코딩 에이전트의 구현 지원을 활용하고 결과를 자동 테스트로 확인했습니다.'], tags: ['Unreal Engine', 'Python', 'Behavior Cloning', 'WebSocket'] },
  { id: 'forgebench', label: 'AGENT EVALUATION', title: 'ForgeBench — 코딩 에이전트 검증 실험 플랫폼', role: '플랫폼 기획 · 검증 정책 설계 · 실패 분석', description: '에이전트의 완료 보고와 실제 요구사항 충족 여부를 비교하고, 검증 정책에 따른 오류 탐지와 복구 과정을 분석하는 실험 환경을 만들었습니다.', contributions: ['격리 작업 공간, 도구 실행, 계획 수립, 완료 조건 검사와 장애 복구 기능을 Python으로 구성했습니다.', '에이전트 작업 공간과 비공개 채점기를 분리하고, 산출물과 평가 결과를 해시로 연결해 실험을 재현할 수 있도록 했습니다.', '토큰·시간·성공 여부를 함께 기록하고, 완료 오판·보호 파일 변경 등 실패 유형을 분석했습니다. 오류를 찾아내는 과정과 실제로 수정하는 과정을 나눠 평가했습니다.'], tags: ['Python', 'Agent Evaluation', 'Regression Tests', 'Reproducibility'] },
  { id: 'film-capstone', label: '2023.09 — 2024.07', title: '3D 재구성을 활용한 단편영화 제작', role: 'Technical Director · 중앙대학교 졸업 프로젝트', description: '약 1분 분량의 단편영화 5편을 제작하는 프로젝트에서 NeRF와 Gaussian Splatting의 제작 적용 가능성을 검토했습니다.', contributions: ['실제 공간을 3D로 재구성해 영화 배경 제작에 적용했습니다.', '기술별 테스트와 R&D를 수행하고, 촬영·후반제작 조건에 맞는 활용 방식과 제작 워크플로우를 정리했습니다.'], tags: ['NeRF', '3DGS', 'Technical Direction', 'R&D'] },
  { id: 'virtual-production', label: '2023.05 — 2023.12', title: 'Virtual Production & Virtual Scouting', role: '실시간 촬영 시스템 및 사전 검토 환경 구축', description: 'Aximmetry, Unreal Engine, Vive Mars를 연동해 카메라 트래킹과 가상 배경이 연결되는 실시간 촬영 시스템을 구축했습니다.', contributions: ['촬영에 사용할 수 있도록 장비 간 연동과 VP 워크플로우를 설계·조정했습니다.', 'Unreal Engine과 Rokoko 모션캡처로 카메라 동선·장면 구성·공간 배치를 촬영 전에 검토하는 Virtual Scouting 환경을 구성했습니다.'], tags: ['Aximmetry', 'Unreal Engine', 'Vive Mars', 'Rokoko'] },
  { id: 'heritage-showcase', label: '2019.10 — 2020.01', title: '기사진표리진찬의궤 디지털 쇼케이스', role: 'Motion Graphic & Content Design', description: 'LG디스플레이·British Library·중앙대학교 협업 프로젝트에서 문화유산 자료를 디지털 전시 콘텐츠로 재구성하는 작업에 참여했습니다.', contributions: ['원자료와 전시 환경을 분석하고, 모션그래픽 및 영상 콘텐츠를 제작했습니다.', '투명 디스플레이의 특성을 고려해 콘텐츠의 시각 정보 구조를 설계했습니다. 관련 공동연구는 영상 미디어 개발과 사용자 경험 평가로 이어졌습니다.'], tags: ['Motion Graphics', 'Transparent Display', 'Cultural Heritage'] },
] as const;

export const experience = [
  { date: '2026.07.23 — 2026.07.31', title: '한국예술종합학교 아트콜라이더랩', role: '바이브코딩 워크숍 자문·보조강사', description: '비개발자 대상 Codex 실습, Git 버전관리·배포 안내 및 개발환경·코드 오류 해결 지원.' },
  { date: '2024.09 — 2026.08', title: '생성형 AI 및 클라우드 기반 콘텐츠 제작 R&D 인재 양성', role: '학생연구원 · 문화체육관광부·한국콘텐츠진흥원 과제', description: '생성형 AI와 3D 콘텐츠 기술을 실제 제작 파이프라인에 적용하는 연구 참여.' },
  { date: '2024.10 — 2025.02', title: '국립현대미술관 《순간이동》', role: 'Technical Artist · 유태경 〈시네마틱 스크리닝〉', description: 'Houdini 종이·천 시뮬레이션, Unreal Engine 연동과 실시간 구동을 위한 에셋 최적화.' },
  { date: '석사과정 중', title: 'Virtual Interaction LAB', role: '연구실 랩장', description: '연구과제 일정과 진행 상황 공유, 신규 구성원 온보딩, 장비·연구환경 관리 및 협업 지원.' },
] as const;

export const education = [
  { date: '2024.09 — 2026.08', title: '중앙대학교 첨단영상대학원', role: '영상학 석사 · 엔터테인먼트 테크놀로지', description: 'Virtual Interaction LAB · 지도교수 유태경', detail: '학위논문: 재질 특성을 반영한 가우시안 스플래팅 기반 파괴 시뮬레이션 통합 파이프라인' },
  { date: '2019.03 — 2024.08', title: '중앙대학교 예술공학부', role: '공학사 · 예술공학', description: '3D 재구성과 실시간 제작 기술을 적용한 졸업 프로젝트 Technical Director.', detail: '' },
] as const;
