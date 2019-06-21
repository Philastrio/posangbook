# PosangBook Backend

Building Analog PosangBook into Digital Webpage with Graphql-Yoga + Prisma + React and ReactNative

## Backend

- [x] Setup
- [x] Create Graphql Server
- [x] Makig Schema
- [x] Create account
- [x] allPost, allUser
- [x] requestSecret
- [x] passport, passport-jwt, email authentication
- [x] middleware / isAuthenticated
- [x] searchUser / searchPost

## Frontend

- [ ] Basic Setting
- [ ] Excel File Upload
- [ ] Allow by Supervisor
- [ ] Allow by Supervisor of Supervisor
- [ ] Search by Name (Supervisor / Regular Expression(Korean))
- [ ] Search by Name (Normal / Regular Expression(Korean))

## Process

- [ ] 상훈시스템 접속
- [ ] 사용자 등록 및 권한신청(부서명까지 입력)
- [ ] 상훈시스템 접속추천대상자 입력(이름,생년월일,주소, 포상유형(효,군정,환경 등),공적)
- [ ] 상훈시스템 접속포상담당자 승인 => 포상번호 부여
- [ ] 상훈시스템 접속포상담당자 반려 => 포상번호 미 부여

## Search(상훈담당자)

- [ ] 이름, 훈격, 소속, 사유, 수여일자(period로 설정), 훈격으로 검사

## Search(일반 담당자)

- [ ] 수여 가능 여부만 Boolean

## Idea

- [ ] 포상번호: 프론트에서 바로 직전 포상번호 value를 가져와서 +1을 해주고 백엔드로 보내준다.
