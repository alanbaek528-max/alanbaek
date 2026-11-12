(function () {
  "use strict";

  var STAGES = [
    {
      id: "incoming",
      name: "부품 입고 검사",
      summary: "부싱·클램프·리드 등 구성품 치수·외관 검사.",
      tone: "done",
      meta: "완료 5건"
    },
    {
      id: "assembly",
      name: "본체 조립",
      summary: "철심·권선·리드·부싱 조립과 내부 점검.",
      tone: "done",
      meta: "완료"
    },
    {
      id: "wiring",
      name: "시험 결선",
      summary: "진행 중인 시험의 결선 상태, 시험 설명, 위험 요소를 현장과 공유합니다.",
      tone: "active",
      meta: "진행 3건"
    },
    {
      id: "hv-test",
      name: "고전압 시험",
      summary: "내전압·부분방전 등 고전압 시험 대기.",
      tone: "idle",
      meta: "대기"
    },
    {
      id: "ship",
      name: "출하 점검",
      summary: "최종 점검·포장·출하 문서 확인.",
      tone: "idle",
      meta: "대기"
    }
  ];

  var WIRING_JOBS = [
    {
      id: "WR-765-R",
      status: "active",
      riskLevel: "high",
      bay: "BAY-03 / 결선대 A",
      name: "765kV 권선 저항 시험 결선",
      unit: "본체 TR-765-08 · Lot 26T-7652",
      type: "권선 저항 (DC)",
      owner: "김민재 · 시험 2조",
      started: "09:20",
      eta: "11:10",
      description:
        "HV·LV·TV 권선에 DC 전류를 인가해 권선 저항을 측정하기 위한 결선입니다. " +
        "탭 위치 확인 후 시험 리드를 단자별로 연결하고, 측정 전 접지·방전이 끝났는지 재확인합니다.",
      steps: [
        "시험 대상 권선 단자를 무전압·방전 상태로 확인",
        "상별 시험 리드 연결 후 극성·단자 라벨 대조",
        "미사용 권선은 단락·접지 후 측정 시작",
        "측정 종료 즉시 권선 방전·전압 재확인"
      ],
      risks: [
        { tag: "잔류전하", text: "직류 인가 후 권선·부싱에 전하가 남아 감전 위험이 있습니다." },
        { tag: "잔류자화", text: "코어에 남는 잔류 자화가 후속 여자전류·비율 시험에 영향을 줄 수 있습니다." },
        { tag: "유도전압", text: "인접 활선 설비로부터 유도 전압이 단자에 나타날 수 있습니다." },
        { tag: "오결선", text: "상·권선 라벨 혼동 시 잘못된 저항값과 재시험이 발생합니다." }
      ],
      controls: [
        "연결 변경 전후 방전·전압 확인을 측정값으로 기록",
        "임시 접지 설치·제거 순서를 체크리스트로 통제",
        "시험 구역 출입 통제 및 시작/종료 권한 합의",
        "숙련 결선 담당자와 감시자 2인 배치"
      ],
      highlightRisk: "잔류전하 · 오결선"
    },
    {
      id: "IR-345-B",
      status: "active",
      riskLevel: "high",
      bay: "BAY-01 / 결선대 B",
      name: "345kV 절연저항 시험 결선",
      unit: "본체 TR-345-21 · Lot 26T-3451",
      type: "절연저항 (메거)",
      owner: "이서윤 · 시험 1조",
      started: "10:05",
      eta: "10:50",
      description:
        "권선-대지, 권선-권선 간 절연저항을 측정하기 위한 결선입니다. " +
        "고전압 DC를 인가하므로 시험 리드 절연 상태와 주변 접근 통제가 핵심입니다.",
      steps: [
        "서지 어레스터·VT 등 외부 영향 설비 분리 확인",
        "측정 권선과 접지·타 권선 조합별 리드 구성",
        "인가 전 구역 비움·경고 표시 확인",
        "종료 후 자동 방전 기능과 별도로 전압계 재확인"
      ],
      risks: [
        { tag: "고전압", text: "메거 인가 전압에 의한 감전·아크 위험이 있습니다." },
        { tag: "용량전하", text: "대형 권선은 방전 후에도 전하가 재나타날 수 있습니다." },
        { tag: "외부영향", text: "서지 어레스터 미분리 시 측정값이 왜곡됩니다." },
        { tag: "접근", text: "단자·케이블 근처 인원 접근 시 인가 중 사고가 날 수 있습니다." }
      ],
      controls: [
        "인가 중 단자 접근 금지, 경계·경고판 설치",
        "방전 완료를 시간 추정이 아닌 전압 측정으로 확인",
        "연결 변경마다 방전 → 확인 → 결선 → 확인 순서 준수",
        "시험기·리드 절연 상태를 작업 전 점검"
      ],
      highlightRisk: "고전압 · 용량전하"
    },
    {
      id: "PD-765-C",
      status: "hold",
      riskLevel: "mid",
      bay: "BAY-05 / 차폐실",
      name: "765kV 부분방전 시험 결선",
      unit: "본체 TR-765-08 · Lot 26T-7652",
      type: "부분방전 (PD)",
      owner: "박도현 · 시험 3조",
      started: "08:40",
      eta: "보류",
      description:
        "부분방전 측정을 위한 결합 콘덴서·측정 임피던스·접지 결선입니다. " +
        "차폐실 접지 노이즈 확인이 끝나지 않아 현재 보류 상태입니다.",
      steps: [
        "차폐실 접지·노이즈 플로어 확인",
        "결합 콘덴서와 측정 회로 결선",
        "교정 펄스 주입으로 감도 확인",
        "시험 전압 상승 전 최종 안전 브리핑"
      ],
      risks: [
        { tag: "HV노출", text: "시험 전압 상승 구간에서 충전부 접근 위험이 있습니다." },
        { tag: "노이즈", text: "접지·차폐 불량이면 방전 신호를 오판할 수 있습니다." },
        { tag: "접지누락", text: "임시 접지 제거 누락 시 후속 가압 사고가 납니다." }
      ],
      controls: [
        "노이즈 플로어 합격 전 가압 금지",
        "가압 권한자와 결선 담당자 역할 분리",
        "임시 접지 태그를 제거 체크리스트에 연결",
        "보류 사유를 공정 공유 화면에 실시간 표시"
      ],
      highlightRisk: "HV노출 · 접지누락"
    },
    {
      id: "TR-345-D",
      status: "done",
      riskLevel: "mid",
      bay: "BAY-02 / 결선대 C",
      name: "345kV 변압비·극성 시험 결선",
      unit: "본체 TR-345-19 · Lot 26T-3458",
      type: "변압비 / 극성",
      owner: "최하늘 · 시험 1조",
      started: "07:50",
      eta: "09:05 완료",
      description:
        "권선비와 극성을 확인하기 위한 저전압 인가 결선입니다. " +
        "탭 전 범위 측정이 끝났고, 결선 해체·정리까지 완료되었습니다.",
      steps: [
        "HV·LV 리드 연결 및 탭 위치 기록",
        "전 탭 변압비·극성 측정",
        "결과 이상 여부 확인 후 리드 해체",
        "단자 보호·표지 복구"
      ],
      risks: [
        { tag: "탭오인", text: "탭 위치 기록 오류 시 불량 판정이 날 수 있습니다." },
        { tag: "리드혼동", text: "상 표기 혼동으로 극성 판정이 뒤집힐 수 있습니다." }
      ],
      controls: [
        "탭 위치를 두 명이 교차 확인",
        "상 라벨 사진을 결과 시트에 첨부",
        "해체 후 단자 캡·경고 표지 복구"
      ],
      highlightRisk: "탭오인 · 리드혼동"
    },
    {
      id: "EX-765-E",
      status: "active",
      riskLevel: "mid",
      bay: "BAY-03 / 결선대 A",
      name: "765kV 여자전류 시험 결선",
      unit: "본체 TR-765-08 · Lot 26T-7652",
      type: "여자전류",
      owner: "김민재 · 시험 2조",
      started: "10:40",
      eta: "12:00",
      description:
        "권선 저항 시험 직후 이어지는 여자전류 측정 결선입니다. " +
        "잔류 자화 영향이 있는지 확인하고, 필요 시 탈자 후 측정을 진행합니다.",
      steps: [
        "권선 저항 시험 방전·잔류 자화 여부 확인",
        "여자전류 측정용 리드 재구성",
        "이상 시 탈자 후 재측정",
        "결과 공유 후 다음 고전압 시험 준비"
      ],
      risks: [
        { tag: "잔류자화", text: "앞선 DC 시험의 잔류 자화가 여자전류를 왜곡할 수 있습니다." },
        { tag: "재결선", text: "같은 베이에서 연속 결선 변경 시 리드 혼선 위험이 큽니다." }
      ],
      controls: [
        "권선 저항 → 여자전류 전환 체크리스트 사용",
        "잔류 자화 의심 시 탈자 후 측정",
        "베이 내 동시 결선 작업은 한 팀만 진행"
      ],
      highlightRisk: "잔류자화 · 재결선"
    }
  ];

  var STAGE_CONTENT = {
    incoming: {
      title: "부품 입고 검사",
      summary: "치수 검사 스테이션에서 확정된 부품 검사 결과입니다.",
      jobs: [
        {
          id: "IN-1",
          status: "done",
          riskLevel: "mid",
          bay: "TR-01",
          name: "345kV 철심 클램프 치수 검사",
          unit: "CCL-345 · Lot 26T-3451",
          type: "3D 치수 스캔",
          owner: "박서연",
          started: "08:10",
          eta: "08:25 완료",
          description: "클램프 길이·홀 피치·장착면 평탄도를 스캔 검사했습니다.",
          steps: ["형상 스캔", "공차 비교", "판정 확정"],
          risks: [{ tag: "취급", text: "중량물 취급 시 협착·낙하 위험이 있습니다." }],
          controls: ["크레인 작업 시 신호수 배치"],
          highlightRisk: "중량물 취급"
        }
      ]
    },
    assembly: {
      title: "본체 조립",
      summary: "조립 공정은 완료되었고, 시험 결선으로 이관되었습니다.",
      jobs: [
        {
          id: "AS-1",
          status: "done",
          riskLevel: "mid",
          bay: "조립동 2",
          name: "765kV 내부 리드·부싱 조립",
          unit: "TR-765-08",
          type: "조립",
          owner: "조립 3조",
          started: "어제 14:00",
          eta: "오늘 07:40 완료",
          description: "내부 리드 접속과 부싱 취부가 끝났습니다.",
          steps: ["리드 접속", "토크 확인", "내부 점검"],
          risks: [{ tag: "협착", text: "크레인·리프트 작업 중 협착 위험이 있습니다." }],
          controls: ["작업반경 출입 통제"],
          highlightRisk: "협착"
        }
      ]
    },
    wiring: {
      title: "시험 결선",
      summary: "현재 진행 중인 시험의 목적, 결선 요령, 위험 요소와 통제 조치를 공유합니다.",
      jobs: WIRING_JOBS
    },
    "hv-test": {
      title: "고전압 시험",
      summary: "시험 결선이 끝나면 내전압·부분방전 가압 순서로 진행합니다.",
      jobs: [
        {
          id: "HV-1",
          status: "hold",
          riskLevel: "high",
          bay: "BAY-05",
          name: "765kV 유도내전압 대기",
          unit: "TR-765-08",
          type: "유도내전압",
          owner: "시험 3조",
          started: "-",
          eta: "결선 완료 후",
          description: "부분방전 결선 보류가 해제되면 유도내전압 시험을 시작합니다.",
          steps: ["결선 완료 확인", "가압 전 브리핑", "단계 승압"],
          risks: [{ tag: "가압", text: "고전압 인가 중 출입 통제가 필수입니다." }],
          controls: ["가압 허가권자 단독 승인"],
          highlightRisk: "가압 구역 통제"
        }
      ]
    },
    ship: {
      title: "출하 점검",
      summary: "시험 완료 후 최종 점검·문서·포장 단계입니다.",
      jobs: [
        {
          id: "SH-1",
          status: "hold",
          riskLevel: "mid",
          bay: "출하장",
          name: "출하 전 최종 점검",
          unit: "대기 큐",
          type: "출하",
          owner: "품질보증",
          started: "-",
          eta: "시험 종료 후",
          description: "시험 성적서와 외관·부속품 점검을 출하 전에 수행합니다.",
          steps: ["성적서 확인", "외관 점검", "포장"],
          risks: [{ tag: "누락", text: "임시 접지·표지 미제거 누락을 점검합니다." }],
          controls: ["출하 체크리스트 전자 서명"],
          highlightRisk: "임시 접지 누락"
        }
      ]
    }
  };

  var state = {
    stageId: "wiring",
    filter: "all",
    selectedJobId: null
  };

  var el = {};

  function $(id) {
    return document.getElementById(id);
  }

  function statusLabel(status) {
    if (status === "active") return "진행 중";
    if (status === "hold") return "보류";
    if (status === "done") return "완료";
    return status;
  }

  function statusChipClass(status) {
    if (status === "active") return "chip chip-active";
    if (status === "hold") return "chip chip-hold";
    if (status === "done") return "chip chip-done";
    return "chip";
  }

  function riskChipClass(level) {
    return level === "high" ? "chip chip-risk-high" : "chip chip-risk-mid";
  }

  function riskLabel(level) {
    return level === "high" ? "고위험" : "주의";
  }

  function currentJobs() {
    var pack = STAGE_CONTENT[state.stageId];
    var jobs = pack ? pack.jobs.slice() : [];
    if (state.filter !== "all") {
      jobs = jobs.filter(function (job) {
        return job.status === state.filter;
      });
    }
    return jobs;
  }

  function findJob(id) {
    var pack = STAGE_CONTENT[state.stageId];
    if (!pack) return null;
    for (var i = 0; i < pack.jobs.length; i += 1) {
      if (pack.jobs[i].id === id) return pack.jobs[i];
    }
    return null;
  }

  function renderStages() {
    var active = WIRING_JOBS.filter(function (j) {
      return j.status === "active";
    }).length;
    el.activeCount.textContent = "시험 결선 진행 " + active;

    el.stageList.innerHTML = "";
    STAGES.forEach(function (stage) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "stage-btn" + (stage.id === state.stageId ? " is-active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", stage.id === state.stageId ? "true" : "false");
      btn.dataset.tone = stage.tone;
      btn.dataset.stageId = stage.id;
      btn.innerHTML =
        '<span class="stage-dot" aria-hidden="true"></span>' +
        "<div>" +
        '<p class="stage-name"></p>' +
        '<p class="stage-meta"></p>' +
        "</div>";
      btn.querySelector(".stage-name").textContent = stage.name;
      btn.querySelector(".stage-meta").textContent = stage.meta;
      btn.addEventListener("click", function () {
        state.stageId = stage.id;
        state.filter = "all";
        state.selectedJobId = null;
        syncFilters();
        renderAll();
      });
      el.stageList.appendChild(btn);
    });
  }

  function syncFilters() {
    var buttons = el.board.querySelectorAll(".filter");
    buttons.forEach(function (btn) {
      btn.classList.toggle("is-on", btn.getAttribute("data-filter") === state.filter);
    });
  }

  function renderBoard() {
    var pack = STAGE_CONTENT[state.stageId] || STAGE_CONTENT.wiring;
    var stage = null;
    for (var si = 0; si < STAGES.length; si += 1) {
      if (STAGES[si].id === state.stageId) {
        stage = STAGES[si];
        break;
      }
    }
    el.boardEyebrow.textContent = stage ? stage.name : "공정";
    el.boardTitle.textContent = pack.title;
    el.boardSummary.textContent = pack.summary;

    var jobs = currentJobs();
    el.jobList.innerHTML = "";

    if (!jobs.length) {
      var empty = document.createElement("p");
      empty.className = "detail-empty";
      empty.textContent = "이 필터에 해당하는 작업이 없습니다.";
      el.jobList.appendChild(empty);
      return;
    }

    if (!state.selectedJobId || !findJob(state.selectedJobId)) {
      state.selectedJobId = jobs[0].id;
    }

    jobs.forEach(function (job) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "job" + (job.id === state.selectedJobId ? " is-selected" : "");
      btn.setAttribute("role", "option");
      btn.setAttribute("aria-selected", job.id === state.selectedJobId ? "true" : "false");

      var riskText =
        state.stageId === "wiring"
          ? "위험 요소: " + job.highlightRisk
          : "주의: " + job.highlightRisk;

      var statusChip = document.createElement("span");
      statusChip.className = statusChipClass(job.status);
      statusChip.textContent = statusLabel(job.status);

      var riskChip = document.createElement("span");
      riskChip.className = riskChipClass(job.riskLevel);
      riskChip.textContent = riskLabel(job.riskLevel);

      var title = document.createElement("p");
      title.className = "job-title";
      title.textContent = job.name;

      var top = document.createElement("div");
      top.className = "job-top";
      top.appendChild(title);
      top.appendChild(statusChip);
      top.appendChild(riskChip);

      var unit = document.createElement("p");
      unit.className = "job-unit";
      unit.textContent = job.unit + " · " + job.bay;

      var riskLine = document.createElement("p");
      riskLine.className = "job-risk-line";
      riskLine.textContent = riskText;

      var left = document.createElement("div");
      left.appendChild(top);
      left.appendChild(unit);
      left.appendChild(riskLine);

      var started = document.createElement("span");
      started.className = "job-time num";
      started.textContent = job.started + " 시작";

      var eta = document.createElement("span");
      eta.className = "job-time";
      eta.textContent = "예상 " + job.eta;

      var side = document.createElement("div");
      side.className = "job-side";
      side.appendChild(started);
      side.appendChild(eta);

      btn.appendChild(left);
      btn.appendChild(side);

      btn.addEventListener("click", function () {
        state.selectedJobId = job.id;
        renderBoard();
        renderDetail();
      });

      el.jobList.appendChild(btn);
    });
  }

  function renderDetail() {
    var job = findJob(state.selectedJobId);
    if (!job) {
      el.detailEmpty.hidden = false;
      el.detailBody.hidden = true;
      el.detailStatus.textContent = "선택";
      el.detailStatus.className = "chip";
      return;
    }

    el.detailEmpty.hidden = true;
    el.detailBody.hidden = false;
    el.detailStatus.textContent = statusLabel(job.status);
    el.detailStatus.className = statusChipClass(job.status);

    el.detailBay.textContent = job.bay;
    el.detailName.textContent = job.name;
    el.detailUnit.textContent = job.unit;
    el.detailType.textContent = job.type;
    el.detailOwner.textContent = job.owner;
    el.detailStarted.textContent = job.started;
    el.detailEta.textContent = job.eta;
    el.detailDesc.textContent = job.description;

    el.riskLevel.textContent = riskLabel(job.riskLevel);
    el.riskLevel.className = "risk-badge" + (job.riskLevel === "high" ? " high" : "");

    el.detailSteps.innerHTML = "";
    job.steps.forEach(function (step) {
      var li = document.createElement("li");
      li.textContent = step;
      el.detailSteps.appendChild(li);
    });

    el.detailRisks.innerHTML = "";
    job.risks.forEach(function (risk) {
      var li = document.createElement("li");
      li.innerHTML = '<span class="risk-tag"></span><span></span>';
      li.querySelector(".risk-tag").textContent = risk.tag;
      li.querySelector("span:last-child").textContent = risk.text;
      el.detailRisks.appendChild(li);
    });

    el.detailControls.innerHTML = "";
    job.controls.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      el.detailControls.appendChild(li);
    });

    if (state.stageId === "wiring" && job.status === "active") {
      el.statusLine.textContent =
        "진행 중: " + job.name + " — 위험 요소(" + job.highlightRisk + ")를 현장과 공유 중";
    } else {
      el.statusLine.textContent = "시뮬레이션 데이터입니다. 현장 MES와 연결되어 있지 않습니다.";
    }
  }

  function renderAll() {
    renderStages();
    renderBoard();
    renderDetail();
  }

  function tickClock() {
    var now = new Date();
    var hh = String(now.getHours()).padStart(2, "0");
    var mm = String(now.getMinutes()).padStart(2, "0");
    var ss = String(now.getSeconds()).padStart(2, "0");
    el.clock.textContent = hh + ":" + mm + ":" + ss;
  }

  function bind() {
    el.board.querySelectorAll(".filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.filter = btn.getAttribute("data-filter");
        syncFilters();
        renderBoard();
        renderDetail();
      });
    });
  }

  function init() {
    el.clock = $("clock");
    el.activeCount = $("active-count");
    el.stageList = $("stage-list");
    el.board = document.querySelector(".board");
    el.boardEyebrow = $("board-eyebrow");
    el.boardTitle = $("board-title");
    el.boardSummary = $("board-summary");
    el.jobList = $("job-list");
    el.detailEmpty = $("detail-empty");
    el.detailBody = $("detail-body");
    el.detailStatus = $("detail-status");
    el.detailBay = $("detail-bay");
    el.detailName = $("detail-name");
    el.detailUnit = $("detail-unit");
    el.detailType = $("detail-type");
    el.detailOwner = $("detail-owner");
    el.detailStarted = $("detail-started");
    el.detailEta = $("detail-eta");
    el.detailDesc = $("detail-desc");
    el.detailSteps = $("detail-steps");
    el.detailRisks = $("detail-risks");
    el.detailControls = $("detail-controls");
    el.riskLevel = $("risk-level");
    el.statusLine = $("status-line");

    // Prefer first active wiring job.
    var firstActive = null;
    for (var fi = 0; fi < WIRING_JOBS.length; fi += 1) {
      if (WIRING_JOBS[fi].status === "active") {
        firstActive = WIRING_JOBS[fi];
        break;
      }
    }
    state.selectedJobId = firstActive ? firstActive.id : WIRING_JOBS[0].id;

    bind();
    renderAll();
    tickClock();
    setInterval(tickClock, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
