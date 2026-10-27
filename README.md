# 김경중 · Research Portfolio

Astro 기반 정적 연구 포트폴리오입니다. 메인 페이지, 3개 프로젝트 상세 페이지, 404 페이지를 포함합니다. 서버나 데이터베이스 없이 GitHub Pages에서 작동합니다.

현재 버전은 참고 사이트와 같은 **좌측 프로필 + 우측 본문** 구조입니다. 본문 순서는 소개 → Selected Work → Writing & Research → Teaching → Experience & Education → Latest News입니다. 상세 페이지에도 프로필 사이드바가 유지되고, 모바일에서는 본문을 한 열로 표시합니다.

배포 대상: [zzzrichard0101.github.io](https://zzzrichard0101.github.io/)

## 빠르게 확인하기

Node.js 24 LTS를 설치한 뒤, 이 폴더에서 실행합니다.

```sh
npm ci
npm run dev
```

터미널에 표시되는 로컬 주소(기본 `http://127.0.0.1:4321/`)를 브라우저에서 엽니다. 실행 중 내용을 저장하면 화면이 갱신됩니다.

```sh
npm run build
npm run preview
```

`build`는 `dist/`에 배포 파일을 만듭니다. `preview`는 빌드 결과를 로컬 서버로 확인합니다. HTML 파일을 더블클릭하는 대신 로컬 서버로 확인하세요.

## 설치 없이 미리보기

별도 제공된 `offline-preview` 폴더의 `index.html`을 Chrome, Edge 또는 Safari로 여세요. 압축 파일로 받았다면 폴더 전체를 먼저 풀어야 합니다. 메인과 세 상세 페이지를 함께 볼 수 있습니다. 이 폴더는 검토용이며, 편집과 실제 배포에는 Astro 소스를 사용하세요.

## GitHub Pages에 배포하기

1. GitHub에서 공개 저장소를 만듭니다. 예를 들어 이름을 `portfolio`로 정합니다. 이미 저장소가 있다면 해당 저장소를 사용해도 됩니다.
2. **이 폴더의 내용 전체를 저장소 루트에 올립니다.** `package.json`, `src/`, `public/`, `astro.config.mjs`, `package-lock.json`, `.github/`가 루트에 있어야 합니다. `node_modules/`는 올리지 않습니다.
3. 저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
4. `main` 브랜치에 업로드하면 포함된 `.github/workflows/deploy.yml`이 빌드와 배포를 수행합니다. **Actions** 탭에서 완료 여부와 배포 주소를 확인합니다. 설정 이후 자동 실행이 시작되지 않으면 해당 워크플로의 **Run workflow**를 실행하세요.
5. 다음 수정부터는 `main`에 변경 내용을 올리면 다시 배포됩니다.

저장소 이름이 `portfolio`이면 보통 `https://YOUR_USERNAME.github.io/portfolio/`, `YOUR_USERNAME.github.io`이면 `https://YOUR_USERNAME.github.io/`에서 열립니다. 설정 파일은 GitHub Actions의 저장소 정보를 읽어 `site`와 `base`를 자동으로 결정합니다. 내부 페이지와 이미지 링크에도 같은 경로를 적용했습니다.

### 터미널로 처음 올리는 예시

GitHub에서 빈 저장소를 먼저 만든 후 아래 주소의 `YOUR_USERNAME`과 `portfolio`를 실제 값으로 바꾸세요.

```sh
git init
git add .
git commit -m "Add research portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

웹에서 업로드한다면 숨김 폴더인 `.github/`가 빠지지 않도록 주의하세요. macOS Finder에서는 `Command + Shift + .`으로 숨김 파일을 표시할 수 있습니다.

## 자주 편집하는 곳

| 바꿀 내용 | 파일 |
| --- | --- |
| 이름, 소개, 연락처, 프로젝트·논문·보조 작업·경력·학력 목록 | `src/data/portfolio.ts` |
| 첫 화면 문구, 연구 목록, 강의·경력·학력·소식, 작업 순서 | `src/pages/index.astro` |
| 3DGS 파괴 연구 내용 | `src/pages/projects/3dgs-fracture.astro` |
| PBD 연구 내용 | `src/pages/projects/pbd-deformation.astro` |
| 국립현대미술관 VR 프로젝트 내용 | `src/pages/projects/mmca-vr.astro` |
| 공통 헤더, 푸터, 이미지 확대 및 필터 동작 | `src/layouts/Layout.astro` |
| 상세 페이지 공통 구성 | `src/layouts/CaseLayout.astro` |
| 좌측 프로필과 2열 배치, 주요 디자인 및 반응형 | `src/styles/structure.css` |
| 공통 이미지·모달·연구 상세 기본 스타일 | `src/styles/global.css` |
| 보강된 논문·교육·경력·보조 작업 영역 스타일 | `src/styles/content.css` |
| 프로필 모노그램·연구 분야·소속·링크 | `src/components/ProfileSidebar.astro` |
| 이미지와 출처 대응표 | `public/images/`, `public/images/provenance.json` |

`portfolio.ts`의 `email`과 `github`는 비워 두었습니다. 실제 공개 주소를 입력하면 연락 링크가 자동으로 표시됩니다. 영문 이름은 공식 논문 등록 정보의 `Kyung-Joong Kim` 표기를 사용합니다. 학력은 추가로 제공된 경력 정리 자료에서 확인한 학사(2019.03–2024.08), 석사(2024.09–2026.08) 기간을 반영했습니다.

### 색상 편집

`structure.css`의 `:root`에 있는 변수를 바꾸면 공통 색상이 바뀝니다.

- `--bg`: 바탕색
- `--panel`: 프로젝트 영역의 바탕색
- `--text`: 주요 글자색
- `--muted`: 보조 글자색
- `--accent`: 청록 포인트
- `--yellow`: 차트 및 키보드 포커스 포인트

### 이미지 교체

`public/images/`의 WebP 파일을 교체하거나 `portfolio.ts` / 상세 페이지의 파일명을 수정합니다. `Figure` 컴포넌트는 원본 비율을 유지하고 클릭 시 확대합니다. 슬라이드 전체를 잘라 붙이는 방식은 사용하지 않았습니다. 새 이미지에도 내용을 설명하는 `alt`와 캡션을 넣으세요.

영상 원본이 생기면 `public/videos/`에 넣고 `<video controls playsinline preload="metadata">`로 연결할 수 있습니다. 현재 제공된 Keynote에서 동영상 파일은 발견되지 않아 정지 연구 이미지를 사용했습니다.

## 제공된 빌드 파일

별도 제공한 `research-portfolio-build.zip`은 **루트 경로 `/`용** 정적 빌드입니다. 정적 호스팅의 루트나 `YOUR_USERNAME.github.io` 전용 저장소에서 사용할 수 있습니다. `dist`의 내용물이 서버 루트에 오도록 올립니다.

일반 프로젝트 저장소 `/portfolio/`용 빌드가 필요하면 위의 소스 + GitHub Actions 방식을 사용하세요. 또는 아래처럼 저장소 이름을 지정해 다시 빌드할 수 있습니다.

```sh
BASE_PATH=/portfolio SITE_URL=https://YOUR_USERNAME.github.io npm run build
```

이후 `dist/` 안의 파일을 해당 프로젝트 경로로 배포합니다. 다른 저장소 이름이면 `/portfolio`를 바꾸세요. 사용자 페이지의 루트 빌드를 다시 만들려면 다음과 같이 실행합니다.

```sh
BASE_PATH=/ SITE_URL=https://YOUR_USERNAME.github.io npm run build
```

브랜치 방식으로 정적 파일을 직접 배포할 때는 Pages의 Source를 **Deploy from a branch**로 설정하고 파일을 올린 브랜치/폴더를 선택합니다. `.nojekyll` 파일도 함께 포함하세요. 소스의 자동 배포 방식과 직접 빌드 파일 배포 방식 중 하나를 사용하면 됩니다.

## 커스텀 도메인

필요할 때 다음을 적용합니다.

1. `public/CNAME`에 실제 도메인 한 줄을 작성합니다.
2. 워크플로의 빌드 단계에 `SITE_URL`을 설정합니다. 예: `https://my-domain.com`.
3. `BASE_PATH`는 `/`로 설정합니다.
4. GitHub Pages에서 도메인과 DNS를 설정합니다.

현재는 도메인이나 GitHub 계정 정보를 임의로 넣지 않았습니다.

## 구현 및 검증

- Astro 7.4.2, 정적 출력. React 등 별도 UI 프레임워크 없음.
- 메인 + 3개 상세 페이지 + 404.
- 메인: 대표 작업 3개, 보조 작업 5개, 학위논문 1편·학술지 논문 3편, 워크숍·경력·학력·소식.
- 학술지 논문 3편의 공식 정보 링크(KCI / 중앙대학교 ScholarWorks) 포함.
- 프로젝트 분류 필터, 상세 목차, 이미지 모달, 재질별 접기/펼치기.
- 키보드 접근, Escape로 확대 이미지 닫기, 본문 바로가기, 대체 텍스트.
- `prefers-reduced-motion` 설정 대응.
- 외부 폰트 서비스 호출 없이 Manrope를 번들에 포함. 한글은 시스템 글꼴 사용.
- 원본 Keynote의 14개 독립 이미지/도표를 비율 유지 축소·WebP 변환. 슬라이드 크롭 없음.
- 정량 핵심: 내부 Gaussian 18.6M → 1.4M, 약 92.5% 감소.
- GitHub Pages의 루트 및 프로젝트 하위 경로 빌드 검증.

`DESIGN_NOTES.md`에는 실제 레퍼런스 분석, `CONTENT_SOURCES.md`에는 내용과 이미지의 출처 및 편집 판단을 기록했습니다. GitHub Pages 배포에는 이 저장소의 소스와 GitHub Actions 워크플로를 사용합니다.

## 공식 문서

- [Astro GitHub Pages 배포 안내](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub Pages 사용자 워크플로](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## 권리

이 포트폴리오의 연구 이미지와 전시 이미지의 권리는 각 원저작자/권리자에게 있습니다. 참고 사이트의 코드, 이미지, 로고는 복사하지 않았습니다. 포함된 Manrope 폰트의 라이선스는 `FONT-LICENSE.txt`를 참고하세요.
