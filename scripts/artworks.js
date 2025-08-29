/* ==========================================
   작품 메타데이터
   - id(slug), title(국문), desc, thumb, media(이미지/영상)
   - 필요 시 자유롭게 항목 추가하세요.
   - 작품명은 전시 구성안 기준. (초상/The Product/페르소나/완/타자성/씨앗/Unchosen Yet Mine/파/연/인간이라는 실존자)
   ========================================== */

window.ARTWORKS = [
  {
    id: "2-B",
    part: 1,
    title: "초상",
    // ↓ 작품 소개문을 전시 의도에 맞게 교체하세요.
    materials: "디지털 프린트 콜라주 ㅣ 420*592mm",
    year: "2025",
    artist: "신지은",
    desc: "AI가 그려낸 ‘대구 여성’의 초상을 경상도 여성인 참여 작가 3인의 일상적 순간들로 채웠다.",
    details : " ",
    // ↓ 섬네일 이미지 파일 교체: /assets/img/portrait.jpg 로 넣어두면 됩니다.
    thumb: "assets/img/2-B.jpeg",
    // ↓ 상세페이지 상단 키비주얼(없으면 thumb가 사용됩니다)
    hero: "assets/img/2-B.jpeg",
    // ↓ 유튜브 영상이 있으면 ID만 넣으세요. (예: https://youtu.be/AbCdEf -> "AbCdEf")
    youtubeId: "", // 예: "AbCdEf"
    images: ["assets/img/2-B-1.png","assets/img/2-B-2.jpg","assets/img/2-B-3.png","assets/img/2-B-4.jpg"]
  },
  {
    id: "2-C",
    part: 1,
    title: "The Product",
    materials: "혼합매체 ㅣ 가변크기",
    year: "2025",
    artist: "박수진",
    desc: "‘여성은 어떻게 사회적으로 설정되고, 완성된 존재로 소비되어 왔는가’<br><br>다양한 외형과 기능을 부여받은 다섯 명의 여성이 ‘제품 샘플’이라는 이름 아래 분류되고 수치화되어 관람객 앞에 진열된다. 관람객은 다섯 샘플 중 가장 판매에 적합하다고 여기는 샘플에 투표를 할 수 있다. 이 행위를 통해 관람객은 스스로 상품화의 메커니즘에 참여하게 되며, 그 과정에서 무의식적으로 작동하는 판단의 근거와 마주하게 된다. 여성의 이미지를 소비하는 이 경험은 낯설지 않다. 우리는 상품화의 구조에 이미 참여하고 있기 때문이다.<br><br>다섯 샘플 중 ‘No1. 폐기물’은 퍼포먼스 비디오 작업으로, 프레임 속 존재가 스스로 ‘상품’의 경계에서 이탈하는 과정을 담는다. 영상 속 제품은 포장지를 찢고, 카메라를 엎고, 반복되는 동작을 통해 점차 틀을 파괴해 간다.",
    thumb: "assets/img/2-C-9.jpg",
    hero: "assets/img/2-C-9.jpg",
    youtubeId: "",
    images: ["assets/img/2-C-1.JPG","assets/img/2-C-2.JPG","assets/img/2-C-3.JPG","assets/img/2-C-4.JPG","assets/img/2-C-5.JPG","assets/img/2-C-6.JPG","assets/img/2-C-7.JPG","assets/img/2-C-8.jpeg","assets/img/2-C.jpeg","assets/img/gallery-7.jpeg"]
  },
  {
    id: "2-D",
    part: 1,
    title: "페르소나",
    materials: "3채널 비디오, 컬러, 사운드",
    year: "2025",
    artist: "박수진(안무), 신지은(영상), 유소정(사운드)",
    desc: "우악스럽거나 또는 우아스러운 경상도 여성의 이중적 이미지와 실존적 여성의 대립",
    thumb: "assets/img/2-D.jpeg",
    hero: "assets/img/2-D.jpeg",
    youtubeId: "Oyow_PxgD6U", // 3채널 중 트레일러 영상이 있으면 ID를 넣으세요.
    images: []
  },
  {
    id: "2-E",
    part: 1,
    title: "완",
    materials: "공간 설치",
    year: "2025",
    artist: "신지은(디자인), 유소정(사운드)",
    desc: "‘완’은 사회적 여성성의 ‘완성’을 상징하는 공간이다.<br>예쁘지만 과하게 통일된 색감, 경쾌하지만 지루하게 반복되는 음악, 달콤하지만 단순한 향, 일직선의 동선은 정적이고 폐쇄적인 ‘완성’의 이미지를 드러낸다.<br>관람자는 끝에서 사회적 결과로서의 자신과 마주하고 “what’s your favorite color?”라는 질문을 받는다.",
    thumb: "assets/img/2-e.jpg",
    hero: "assets/img/2-e.jpg",
    video: "",
    images: ["assets/img/2-e1-1.jpg","assets/img/2-e1-2.jpg","assets/img/2-e1-2.jpg","assets/img/2-e1-3.jpg","assets/img/2-e1-4.jpg","assets/img/2-e1-5.jpg","assets/img/2-e1-6.jpg","assets/img/2-e1-7.jpg","assets/img/2-e1-8.jpg"]
  },
  {
    id: "3-b",
    part: 2,
    title: "타자성, 사유",
    materials: "디지털인쇄 ㅣ 420*2800mm",
    year: "2025",
    artist: "유소정(문안), 신지은(시각 편집)",
    desc: "[타자성]<br>'내가 나를 보기 전에 세상이 나를 봤다.'<br>타자의 시선은 뿌리처럼 내 안에 스며든다. 나무는 타자의 구조와 연대, 손은 그 접촉의 기억이다. 이 작품은 여성이라는 존재가 항상 ‘먼저 보이는 것’으로서 타자화 되어왔음과 연대를 직조한다. 무게 없이 흔들리지만, 결코 가볍지 않은 이 실존의 커튼을 통해 관람자는 질문받는다.<br>'당신은 누구의 시선으로 나를 보았는가?'<br><br>[사유]<br>‘나는 질문하기 시작했다. 왜 나의 말은 사라졌는가?’<br>은장도는 몸을 지키는 언어였고, 연필은 이제 지워졌던 말들을 다시 쓰기 위한 무기다. 이 작품은 침묵 속에 갇혔던 여성의 언어를 복원하는 여정이자, 사유의 날카로운 시작이다. 흩어진 기억 위에 의심을 세우고, 가려진 진실 위에 글을 다시 써내려가는 여성들의 내면적 혁명을 담아낸다.",
    thumb: "assets/img/3-b.jpg",
    hero: "assets/img/3-b.jpg",
    youtubeId: "",
    images: ["assets/img/3-b-0.png","assets/img/3-b-0-1.png","assets/img/3-b-0-2.png","assets/img/3-b-1.jpg","assets/img/3-b-2.jpg","assets/img/3-b-3.jpg","assets/img/3-b-4.jpg","assets/img/3-b-5.jpg","assets/img/3-b-6.jpg","assets/img/3-b-7.jpg","assets/img/3-b-8.jpg","assets/img/3-b-9.jpg","assets/img/3-b-10.jpg","assets/img/3-b-11.jpg","assets/img/3-b-12.jpg","assets/img/3-b-13.jpg","assets/img/3-b-14.jpg","assets/img/3-b-15.jpg","assets/img/3-b-16.jpg","assets/img/3-b-17.jpg","assets/img/3-b-18.jpg","assets/img/3-b-19.jpg","assets/img/3-b-20.jpg","assets/img/3-b-21.jpg","assets/img/3-b-22.jpg","assets/img/3-b-23.jpg","assets/img/3-b-24.jpg","assets/img/3-b-25.jpg"]
  },
    {
    id: "3-c1",
    part: 2,
    title: "053-1210-0000",
    materials: "혼합매체 ㅣ 375*223*200mm",
    year: "2025",
    artist: "유소정",
    desc: "대구 여성 인구는 약 121만명, 이는 대구 전체 인구의 절반을 넘는다. 이 수치는 통계이자 풍경이며, 지도이자 초상이다. 작품은 대구의 지형 아래 여성 위인들의 주요 지점을 낚시줄로 표시하여, 끊어지지 않는 연대와 긴장, 그 실존의 무게를 시각화한다.<br><br>‘우악’과 ‘우아’ 사이, 대구 여성들의 복잡하고도 단단한 존재성을 한 장의 지도로 엮어낸다.",
    thumb: "assets/img/3-c-1.jpg",
    hero: "assets/img/3-c-1.jpg",
    youtubeId: "",
    images: []
  },
  {
    id: "3-c2",
    part: 2,
    title: "씨앗",
    materials: "혼합매체 ㅣ 315*180*200mm",
    year: "2025",
    artist: "유소정",
    desc: "Becoming, by choice, by rebellion, by dreaming<br><br>거울을 바라보는 여성. 그러나 거울 너머, 그녀의 뒷모습엔 씨앗에서 피어난 꽃이 존재한다.<br><br>이는 단순한 반영이 아니라 생성의 은유이며, “나는 주어진 것이 아니라 스스로 만들어진다”는 선언의 시각화다. 비커밍(Becoming)은 선택이자 반항이고, 꿈꾸는 행위이기도 하다.<br><br>이 작품은 여성의 자기 응시를 씨앗과 연결하여, 그녀가 세계의 산물만이 아닌, 세계를 다시 만드는 주체임을 말한다.",
    thumb: "assets/img/3-c-2.jpg",
    hero: "assets/img/3-c-2.jpg",
    youtubeId: "",
    images: ["assets/img/3-c-2-1.jpg"]
  },
  {
    id: "3-c3",
    part: 2,
    title: "Unchosen Yet Mine",
    materials: "혼합매체 ㅣ 235*85*50mm",
    year: "2025",
    artist: "유소정(사운드 컴포지션, 페이퍼아트), 신지은(회로 설계)",
    desc: "‘존재의 방향, 머무름은 침묵이었고 시작은 말하기였다.’<br><br>‘Stay’는 침묵 속에 머무는 존재의 고요함을, ‘Start’는 말하기의 시작과 그 떨림을 의미한다.<br><br>선택의 순간마다 우리 안에 잠든 여성들의 목소리를 불러낸다. 누구도 선택하지 않았지만 끝내 나의 것이 된 삶들.<br><br>위에 놓인 두 개의 스위치는 타인의 시선과 자기 결단 사이에서, 우리가 누르고 있는 실존의 물음을 환기시킨다. ",
    thumb: "assets/img/3-c-3.jpg",
    hero: "assets/img/3-c-3.jpg",
    youtubeId: "",
    images: []
  },
  {
    id: "3-d",
    part: 2,
    title: "파",
    materials: "혼합매체(인터랙티브 미디어) ㅣ 가변크기",
    year: "2025",
    artist: "신지은",
    desc: "경상도 여성들이 경험한 혐오적 발화를 실시간으로 수집하고 파기하는 과정의 시각화",
    thumb: "assets/img/3-d.jpeg",
    hero: "assets/img/3-d.jpeg",
    video: "video/파.MOV",
    images: []
  },
  {
    id: "3-e",
    part: 2,
    title: "연",
    materials: "공간 설치, 단채널 비디오, 컬러, 사운드",
    year: "2025",
    artist: "신지은(디자인), 유소정(사운드), 박수진(안무)",
    desc: "‘연’은 2부 전시의 주제를 집약하는 작품으로, 관람자의 참여를 통해 추상적인 ‘연대’를 가시화한다. 마네킹에 감긴 붉은 매듭실을 풀어 천장에 연결된 와이어에 거는 행위는 ‘완성’의 굴레에서 벗어나려는 내면적 결심을 상징적으로 드러낸다. 누적된 행위는 결국 마네킹의 실을 사라지게 하고, 공간에 걸린 매듭실들은 새로운 연대를 시각화한다.",
    thumb: "assets/img/3-f-2.jpeg",
    hero: "assets/img/3-f-2.jpeg",
    youtubeId: "3HteL8ZsNF4",
    images: ["assets/img/3-f-1.jpeg","assets/img/3-e.jpeg"]
  },
  {
    id: "3-g",
    part: 2,
    title: "인간이라는 실존자",
    materials: "단채널 비디오, 컬러, 사운드",
    year: "2025",
    artist: "박수진(안무), 유소정(사운드), 신지은(영상 촬영)",
    desc: "실존주의 철학을 바탕으로, 정형성을 깨고 미완 속에서 변하는 실존자로서 나아가는 과정을 표현했다. 작품이 그리는 ‘실존자’는 주어진 구조를 넘어 새로운 자리를 스스로 만들어내는, 단단하고도 자유로운 쌍도녀의 모습이다.<br><br>[음악]<br>‘실존자’는 장르와 장르 사이 경계를 해체하는 음악이다. 재즈힙합과 로파이가 부유하는 틈새에 대금의 사운드를 녹여 한국 여성의 또렷한 자취를 표현했다.<br>‘탐험-깨달음-탈피’라는 3단 구성으로 이어지며 곡 중간 중간에 FX를 통해 틀을 깨고 나아가려는 움직임을 직접적으로 드러냈다.<br><br>[무용]<br>'당신은 지금, 어떤 움직임으로 존재하고 있나요?'<br>왁킹(Waacking), 힙합(Hip-hop), 재즈(Jazz)의 자유롭고 유연한 흐름이 교차하며, 장르의 경계를 넘어서는 ‘탈(脫)장르적 춤의 언어’를 구사하고자 했다. 이는 움직임 속에서 자유를 발견하고, 스스로의 실존을 찾아가는 몸의 실험이다.",
    thumb: "assets/img/3-g.jpeg",
    hero: "assets/img/3-g.jpeg",
    video: "video/3-f2.mp4",
    images: []
  }
];
