# React 리뷰 애플리케이션

이 프로젝트는 React를 사용하여 개발된 리뷰 애플리케이션입니다. 리뷰 목록을 표시하고, 새 리뷰를 추가하며, 리뷰를 정렬하고, 더 많은 리뷰를 불러올 수 있습니다.

## 주요 기능

- **리뷰 목록 표시**: `ReviewList` 컴포넌트를 사용하여 리뷰 목록을 표시합니다.
- **리뷰 추가**: `ReviewForm` 컴포넌트를 사용하여 새 리뷰를 추가할 수 있습니다.
- **리뷰 정렬**: "최신순" 및 "베스트순" 버튼을 클릭하여 리뷰 목록을 정렬할 수 있습니다.
- **더 보기 기능**: "더 보기" 버튼을 클릭하여 추가 리뷰를 불러올 수 있습니다.
- **비동기 데이터 처리**: `useAsync` 커스텀 훅을 사용하여 비동기 API 호출을 처리합니다.
- **로케일 관리**: `LocaleProvider` 컴포넌트를 사용하여 애플리케이션의 로케일을 관리합니다.

## 기술 스택

- React
- JavaScript
- 커스텀 Hooks (useAsync)
- Context API (LocaleContext)

## 설치 및 실행 방법

1.  **저장소 클론:**

    ```bash
    git clone [저장소 URL]
    cd [저장소 이름]
    ```

2.  **의존성 설치:**

    ```bash
    npm install
    ```

3.  **애플리케이션 실행:**

    ```bash
    npm start
    ```

4.  **브라우저에서 확인:**

    브라우저에서 `http://localhost:3000`에 접속하여 애플리케이션을 확인할 수 있습니다.

## 주요 코드 설명

- **상태 관리:**
  - `order`: 리뷰 정렬 기준 (createdAt 또는 rating)
  - `items`: 리뷰 목록
  - `offset`: 불러올 리뷰의 시작 위치
  - `hasNext`: 더 불러올 리뷰가 있는지 여부
  - `loading`: API 호출 중 로딩 상태
- **useEffect 훅:**
  - `order` 상태가 변경될 때 리뷰 목록을 다시 불러옵니다.
  - `loading` 상태가 변경될 때 콘솔에 로딩 상태를 출력합니다.
- **이벤트 핸들러:**
  - `handleNewestClick`, `handleBestClick`: 정렬 기준을 변경합니다.
  - `handleDelete`: 리뷰를 삭제합니다.
  - `handleLoad`: API를 통해 리뷰 데이터를 불러옵니다.
  - `handleLoadMore`: 더 많은 리뷰를 불러옵니다.
  - `handleSubmitSuccess`: 새 리뷰 추가 성공 시 실행됩니다.
- **정렬:**
  - `sortedItems`: `order` 상태에 따라 정렬된 리뷰 목록입니다.
- **더 보기 기능:**
  - `hasNext` 상태와 `offset` 상태를 사용하여 더 보기 기능을 구현합니다.
- **비동기 처리:**
  - `useAsync` 훅을 사용하여 `getReviews` API 호출을 처리하고 로딩 상태를 관리합니다.
- **로케일:**
  - `LocaleProvider`와 `LocaleSelect`를 사용하여 로케일을 관리합니다.

## 개선 사항 (향후 추가 예정)

- 에러 핸들링: API 호출 실패 시 에러 메시지 표시
- 로딩 표시: 로딩 중 상태를 시각적으로 표시
- 페이지네이션: 더 많은 리뷰를 효과적으로 관리하기 위해 페이지네이션 구현
- 성능 최적화: 필요에 따라 메모이제이션 또는 코드 분할 적용
- 테스트 코드 추가: 컴포넌트 및 훅에 대한 테스트 코드 작성
- 스타일링: CSS 또는 스타일링 라이브러리를 사용하여 UI 개선

## 디렉토리 구조

react-review-app/
├── public/
├── src/
│ ├── components/
│ │ ├── ReviewList.js
│ │ ├── ReviewForm.js
│ │ ├── LocaleSelect.js
│ ├── hooks/
│ │ ├── useAsync.js
│ ├── contexts/
│ │ ├── LocaleContext.js
│ ├── api.js
│ ├── App.js
│ ├── index.js
├── package.json
├── README.md

## 기여 방법

1.  저장소를 포크합니다.
2.  새로운 브랜치를 생성합니다. (`git checkout -b feature/new-feature`)
3.  변경 사항을 커밋합니다. (`git commit -am 'Add new feature'`)
4.  브랜치를 푸시합니다. (`git push origin feature/new-feature`)
5.  풀 리퀘스트를 생성합니다.

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다.
