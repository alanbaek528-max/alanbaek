(function () {
  "use strict";

  var JOBS = [
    {
      id: "BRK-2401",
      name: "엔진 마운트 브라켓",
      material: "AL6061-T6",
      process: "밀링",
      lot: "26A-1042",
      rev: "C",
      metal: 0xd5dde6,
      model: "bracket",
      features: [
        { name: "전체 길이", nominal: 120, tol: 0.1, tolType: "bilateral", measured: 120.042, vary: 0.012, seed: 0.3 },
        { name: "전체 폭", nominal: 45, tol: 0.08, tolType: "bilateral", measured: 44.971, vary: 0.01, seed: 1.1 },
        { name: "두께", nominal: 6, tol: 0.08, tolType: "bilateral", measured: 6.018, vary: 0.01, seed: 2.2 },
        { name: "구멍 직경", nominal: 8, tol: 0.05, tolType: "bilateral", measured: 8.021, vary: 0.008, seed: 2.8 },
        { name: "구멍 피치", nominal: 80, tol: 0.1, tolType: "bilateral", measured: 80.055, vary: 0.012, seed: 3.6 },
        { name: "평탄도", nominal: 0, tol: 0.05, tolType: "max", measured: 0.028, vary: 0.008, seed: 4.2 }
      ]
    },
    {
      id: "HSG-1187",
      name: "기어박스 하우징",
      material: "AC4C",
      process: "보어 가공",
      lot: "26A-1187",
      rev: "B",
      metal: 0xc8c2b8,
      model: "housing",
      features: [
        { name: "외곽 폭", nominal: 180, tol: 0.15, tolType: "bilateral", measured: 180.062, vary: 0.012, seed: 0.5 },
        { name: "외곽 높이", nominal: 120, tol: 0.15, tolType: "bilateral", measured: 119.941, vary: 0.012, seed: 1.4 },
        { name: "보어 직경", nominal: 62, tol: 0.04, tolType: "bilateral", measured: 62.078, vary: 0.008, seed: 2.1 },
        { name: "보어 깊이", nominal: 48, tol: 0.1, tolType: "bilateral", measured: 47.966, vary: 0.01, seed: 3.3 },
        { name: "장착면 평탄도", nominal: 0, tol: 0.04, tolType: "max", measured: 0.033, vary: 0.004, seed: 4.0 },
        { name: "볼트 피치", nominal: 140, tol: 0.12, tolType: "bilateral", measured: 140.044, vary: 0.012, seed: 5.2 }
      ]
    },
    {
      id: "FLG-5520",
      name: "배관 플랜지",
      material: "SUS304",
      process: "선삭",
      lot: "26B-5520",
      rev: "A",
      metal: 0xbfc8d1,
      model: "flange",
      features: [
        { name: "외경", nominal: 150, tol: 0.12, tolType: "bilateral", measured: 149.968, vary: 0.012, seed: 0.2 },
        { name: "내경", nominal: 80, tol: 0.08, tolType: "bilateral", measured: 80.021, vary: 0.01, seed: 1.3 },
        { name: "두께", nominal: 18, tol: 0.1, tolType: "bilateral", measured: 18.037, vary: 0.01, seed: 2.5 },
        { name: "피치원 직경", nominal: 120, tol: 0.1, tolType: "bilateral", measured: 120.018, vary: 0.012, seed: 3.2 },
        { name: "볼트홀 직경", nominal: 12, tol: 0.05, tolType: "bilateral", measured: 11.988, vary: 0.008, seed: 4.1 },
        { name: "실링면 평탄도", nominal: 0, tol: 0.03, tolType: "max", measured: 0.019, vary: 0.004, seed: 5.1 }
      ]
    },
    {
      id: "CVR-0933",
      name: "모터 엔드커버",
      material: "ADC12",
      process: "가공",
      lot: "26B-0933",
      rev: "D",
      metal: 0xb7bcc4,
      model: "cover",
      features: [
        { name: "외경", nominal: 96, tol: 0.08, tolType: "bilateral", measured: 96.071, vary: 0.015, seed: 4.4 },
        { name: "높이", nominal: 28, tol: 0.1, tolType: "bilateral", measured: 27.984, vary: 0.01, seed: 1.7 },
        { name: "파일럿 직경", nominal: 72, tol: 0.04, tolType: "bilateral", measured: 71.982, vary: 0.006, seed: 2.4 },
        { name: "파일럿 깊이", nominal: 4, tol: 0.05, tolType: "bilateral", measured: 4.012, vary: 0.008, seed: 3.4 },
        { name: "볼트 피치원", nominal: 84, tol: 0.08, tolType: "bilateral", measured: 84.019, vary: 0.01, seed: 0.8 },
        { name: "단차 평탄도", nominal: 0, tol: 0.04, tolType: "max", measured: 0.027, vary: 0.005, seed: 5.6 }
      ]
    },
    {
      id: "SFT-7714",
      name: "구동축",
      material: "SCM440",
      process: "연삭",
      lot: "26C-7714",
      rev: "C",
      metal: 0x9aa3ad,
      model: "shaft",
      features: [
        { name: "전장", nominal: 320, tol: 0.2, tolType: "bilateral", measured: 320.084, vary: 0.015, seed: 0.6 },
        { name: "저널 A 직경", nominal: 40, tol: 0.021, tolType: "bilateral", measured: 40.006, vary: 0.006, seed: 1.5 },
        { name: "저널 B 직경", nominal: 35, tol: 0.021, tolType: "bilateral", measured: 34.968, vary: 0.006, seed: 2.7 },
        { name: "단차 위치", nominal: 86, tol: 0.05, tolType: "bilateral", measured: 86.061, vary: 0.006, seed: 3.8 },
        { name: "키홈 폭", nominal: 8, tol: 0.03, tolType: "bilateral", measured: 8.011, vary: 0.006, seed: 4.6 },
        { name: "진원도", nominal: 0, tol: 0.015, tolType: "max", measured: 0.011, vary: 0.002, seed: 5.4 }
      ]
    }
  ];

  var TABLE_TOP = -0.86;
  var state = {
    jobId: null,
    sessions: {},
    scanToken: 0,
    scanningJob: null,
    toastTimer: 0,
    models: {}
  };

  var el = {};

  function round3(n) {
    return Math.round(n * 1000) / 1000;
  }

  function evaluateFeature(feature, scanIndex) {
    var wobble = 0;
    if (scanIndex > 1) wobble = Math.sin(feature.seed + scanIndex * 7.77) * feature.vary;
    var measured = round3(feature.measured + wobble);
    if (feature.tolType === "max") measured = round3(Math.max(0, measured));
    var dev = round3(measured - feature.nominal);
    var pass = feature.tolType === "max"
      ? measured <= feature.tol + 1e-9
      : Math.abs(measured - feature.nominal) <= feature.tol + 1e-9;
    var limitRatio = feature.tolType === "max"
      ? measured / feature.tol
      : Math.abs(dev) / feature.tol;
    return {
      name: feature.name,
      nominal: feature.nominal,
      tol: feature.tol,
      tolType: feature.tolType,
      measured: measured,
      dev: dev,
      pass: pass,
      limitRatio: limitRatio
    };
  }

  function evaluateJob(job, scanIndex) {
    var rows = job.features.map(function (feature) {
      return evaluateFeature(feature, scanIndex);
    });
    return {
      rows: rows,
      overallPass: rows.every(function (row) { return row.pass; })
    };
  }

  function formatNum(n) {
    return n.toFixed(3);
  }

  function formatDev(n) {
    var text = n.toFixed(3);
    return n > 0 ? "+" + text : text;
  }

  function formatTol(row) {
    var text = row.tol.toFixed(3);
    return row.tolType === "max" ? "≤ " + text : "± " + text;
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function formatClock(date) {
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) +
      " " + pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds());
  }

  function formatTime(date) {
    return pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds());
  }

  function jobById(id) {
    for (var i = 0; i < JOBS.length; i++) if (JOBS[i].id === id) return JOBS[i];
    return JOBS[0];
  }

  function currentJob() {
    return jobById(state.jobId);
  }

  function session(id) {
    if (!state.sessions[id]) {
      state.sessions[id] = {
        phase: "idle",
        scanIndex: 0,
        rows: null,
        overallPass: null,
        confirmedAt: null,
        revealed: false,
        snapshot: null
      };
    }
    return state.sessions[id];
  }

  function scanPhaseLabel(p) {
    if (p < 0.34) return "표면 데이터 수집";
    if (p < 0.68) return "기준 모델 정합";
    if (p < 0.9) return "편차 계산";
    return "공차 비교";
  }

  function showToast(text) {
    el.toast.textContent = text;
    el.toast.classList.add("is-on");
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(function () {
      el.toast.classList.remove("is-on");
    }, 2600);
  }

  function showWebglError(message) {
    el.webglError.hidden = false;
    el.webglError.textContent = message;
  }

  function colormap(devMm) {
    var stops = [
      [-1, [0.18, 0.38, 1]],
      [-0.42, [0.12, 0.78, 0.78]],
      [0, [0.13, 0.77, 0.42]],
      [0.42, [0.94, 0.76, 0.22]],
      [1, [0.94, 0.16, 0.18]]
    ];
    var t = Math.max(-1, Math.min(1, devMm / 0.15));
    var i = 0;
    while (i < stops.length - 2 && t > stops[i + 1][0]) i += 1;
    var a = stops[i];
    var b = stops[i + 1];
    var u = (t - a[0]) / (b[0] - a[0]);
    return [
      a[1][0] + (b[1][0] - a[1][0]) * u,
      a[1][1] + (b[1][1] - a[1][1]) * u,
      a[1][2] + (b[1][2] - a[1][2]) * u
    ];
  }

  function paintDeviation(geometry, devFn) {
    var pos = geometry.attributes.position;
    var colors = new Float32Array(pos.count * 3);
    for (var i = 0; i < pos.count; i++) {
      var rgb = colormap(devFn(pos.getX(i), pos.getY(i), pos.getZ(i)));
      colors[i * 3] = rgb[0];
      colors[i * 3 + 1] = rgb[1];
      colors[i * 3 + 2] = rgb[2];
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  }

  function addPartMesh(group, geometry, metalColor, devFn) {
    paintDeviation(geometry, devFn);
    var metalMat = new THREE.MeshStandardMaterial({
      color: metalColor,
      metalness: 0.58,
      roughness: 0.36
    });
    var colorMat = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
    var mesh = new THREE.Mesh(geometry, metalMat);
    mesh.userData.metalMat = metalMat;
    mesh.userData.colorMat = colorMat;
    var edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry, 28),
      new THREE.LineBasicMaterial({ color: 0x101820, transparent: true, opacity: 0.42 })
    );
    mesh.add(edges);
    group.add(mesh);
    return mesh;
  }

  function extrude(shape, depth) {
    var geometry = new THREE.ExtrudeGeometry(shape, {
      depth: depth,
      bevelEnabled: false,
      curveSegments: 40,
      steps: 1
    });
    geometry.center();
    geometry.computeVertexNormals();
    return geometry;
  }

  function addHole(shape, x, y, radius) {
    var path = new THREE.Path();
    path.absarc(x, y, radius, 0, Math.PI * 2, true);
    shape.holes.push(path);
  }

  function circleShape(radius) {
    var shape = new THREE.Shape();
    shape.absarc(0, 0, radius, 0, Math.PI * 2, false);
    return shape;
  }

  function roundedRect(width, height, radius) {
    var shape = new THREE.Shape();
    var x = -width / 2;
    var y = -height / 2;
    shape.moveTo(x + radius, y);
    shape.lineTo(x + width - radius, y);
    shape.absarc(x + width - radius, y + radius, radius, -Math.PI / 2, 0, false);
    shape.lineTo(x + width, y + height - radius);
    shape.absarc(x + width - radius, y + height - radius, radius, 0, Math.PI / 2, false);
    shape.lineTo(x + radius, y + height);
    shape.absarc(x + radius, y + height - radius, radius, Math.PI / 2, Math.PI, false);
    shape.lineTo(x, y + radius);
    shape.absarc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5, false);
    return shape;
  }

  function mildDev(x, y, z) {
    return Math.sin(x * 4.2 + y * 2.4) * 0.016 + Math.cos(z * 6.1) * 0.008;
  }

  function buildBracket(group, metal) {
    var base = new THREE.Shape();
    base.moveTo(-1.15, -0.46);
    base.lineTo(1.15, -0.46);
    base.lineTo(1.15, 0.46);
    base.lineTo(-1.15, 0.46);
    base.closePath();
    addHole(base, -0.62, 0, 0.12);
    addHole(base, 0.62, 0, 0.12);
    var baseMesh = addPartMesh(group, extrude(base, 0.14), metal, mildDev);
    baseMesh.rotation.x = Math.PI / 2;

    var upright = new THREE.Shape();
    upright.moveTo(-1.15, -0.08);
    upright.lineTo(1.15, -0.08);
    upright.lineTo(1.15, 0.82);
    upright.lineTo(-1.15, 0.82);
    upright.closePath();
    addHole(upright, -0.62, 0.36, 0.1);
    addHole(upright, 0.62, 0.36, 0.1);
    var uprightMesh = addPartMesh(group, extrude(upright, 0.14), metal, mildDev);
    uprightMesh.position.set(0, 0.52, -0.4);
  }

  function buildHousing(group, metal) {
    var shape = roundedRect(2.15, 1.5, 0.14);
    addHole(shape, 0, 0, 0.4);
    [[0.74, 0.48], [0.74, -0.48], [-0.74, 0.48], [-0.74, -0.48]].forEach(function (point) {
      addHole(shape, point[0], point[1], 0.07);
    });
    addPartMesh(group, extrude(shape, 0.78), metal, function (x, y) {
      var radius = Math.hypot(x, y);
      if (radius > 0.3 && radius < 0.52) return 0.14;
      return Math.sin(x * 5.5) * Math.cos(y * 4.4) * 0.012;
    });
  }

  function layFlat(mesh) {
    mesh.rotation.x = Math.PI / 2;
  }

  function buildFlange(group, metal) {
    var shape = circleShape(1.05);
    addHole(shape, 0, 0, 0.46);
    for (var i = 0; i < 8; i++) {
      var angle = (i / 8) * Math.PI * 2;
      addHole(shape, Math.cos(angle) * 0.76, Math.sin(angle) * 0.76, 0.07);
    }
    layFlat(addPartMesh(group, extrude(shape, 0.16), metal, function (x, y, z) {
      return Math.sin(Math.hypot(x, y) * 8 + z) * 0.012;
    }));
    var seal = addPartMesh(group, extrude(circleShape(0.62), 0.05), metal, function (x, y) {
      return Math.cos(Math.hypot(x, y) * 9) * 0.01;
    });
    layFlat(seal);
    seal.position.y = 0.11;
  }

  function buildCover(group, metal) {
    var shape = circleShape(0.98);
    for (var i = 0; i < 6; i++) {
      var angle = (i / 6) * Math.PI * 2 + 0.25;
      addHole(shape, Math.cos(angle) * 0.7, Math.sin(angle) * 0.7, 0.065);
    }
    layFlat(addPartMesh(group, extrude(shape, 0.14), metal, function (x, y) {
      return Math.hypot(x, y) > 0.75 ? 0.075 : Math.sin(x * 6.5) * 0.01;
    }));
    var bossShape = circleShape(0.4);
    addHole(bossShape, 0, 0, 0.16);
    var boss = addPartMesh(group, extrude(bossShape, 0.22), metal, function () { return 0.012; });
    layFlat(boss);
    boss.position.y = 0.18;
  }

  function buildShaft(group, metal) {
    var points = [
      new THREE.Vector2(0.02, -1.2),
      new THREE.Vector2(0.16, -1.2),
      new THREE.Vector2(0.16, -0.62),
      new THREE.Vector2(0.32, -0.62),
      new THREE.Vector2(0.32, -0.05),
      new THREE.Vector2(0.24, -0.05),
      new THREE.Vector2(0.24, 0.55),
      new THREE.Vector2(0.18, 0.55),
      new THREE.Vector2(0.18, 1.2),
      new THREE.Vector2(0.02, 1.2)
    ];
    var geometry = new THREE.LatheGeometry(points, 56);
    geometry.computeVertexNormals();
    addPartMesh(group, geometry, metal, function (x, y) {
      if (y <= -0.52 && y >= -1.22) return -0.12;
      if (Math.abs(y + 0.62) < 0.09) return 0.13;
      return Math.sin(y * 7 + x) * 0.01;
    });
    var key = addPartMesh(group, new THREE.BoxGeometry(0.07, 0.32, 0.05), metal, function () { return 0.01; });
    key.position.set(0.24, 0.24, 0);
    group.rotation.z = Math.PI / 2;
  }

  function buildModel(job) {
    var group = new THREE.Group();
    group.name = job.id;
    if (job.model === "bracket") buildBracket(group, job.metal);
    else if (job.model === "housing") buildHousing(group, job.metal);
    else if (job.model === "flange") buildFlange(group, job.metal);
    else if (job.model === "cover") buildCover(group, job.metal);
    else buildShaft(group, job.metal);
    seat(group);
    return group;
  }

  function seat(group) {
    group.updateMatrixWorld(true);
    var box = new THREE.Box3().setFromObject(group);
    var centerX = (box.min.x + box.max.x) / 2;
    var centerZ = (box.min.z + box.max.z) / 2;
    group.position.x -= centerX;
    group.position.z -= centerZ;
    group.position.y += TABLE_TOP + 0.012 - box.min.y;
  }

  var viewport = {
    ready: false,
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    current: null,
    laser: null,
    glow: null,
    points: null,
    scanCount: 0,
    init: function (stage) {
      var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      stage.appendChild(renderer.domElement);
      renderer.domElement.addEventListener("contextmenu", function (event) { event.preventDefault(); });

      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(32, 1, 0.05, 100);
      camera.position.set(2.4, 1.6, 2.8);

      var controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.enablePan = false;
      controls.minDistance = 1.1;
      controls.maxDistance = 9;
      controls.maxPolarAngle = Math.PI * 0.49;
      controls.target.set(0, -0.2, 0);

      scene.add(new THREE.AmbientLight(0xffffff, 0.22));
      scene.add(new THREE.HemisphereLight(0xe7f1ff, 0x2a241c, 0.72));
      var key = new THREE.DirectionalLight(0xfff6ea, 1.2);
      key.position.set(4.2, 6.4, 3.2);
      scene.add(key);
      var fill = new THREE.DirectionalLight(0xc9dcff, 0.55);
      fill.position.set(-4.5, 2.6, 4);
      scene.add(fill);
      var rim = new THREE.DirectionalLight(0xffffff, 0.35);
      rim.position.set(-1, 2.2, -5);
      scene.add(rim);

      this.addStage(scene);

      var laserMat = new THREE.MeshBasicMaterial({
        color: 0x6ef6ff,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      var laser = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 0.035), laserMat);
      laser.rotation.x = Math.PI / 2;
      laser.visible = false;
      scene.add(laser);
      var glow = new THREE.Mesh(
        new THREE.PlaneGeometry(4.8, 0.28),
        new THREE.MeshBasicMaterial({
          color: 0x39dcff,
          transparent: true,
          opacity: 0.18,
          side: THREE.DoubleSide,
          depthWrite: false
        })
      );
      glow.rotation.x = Math.PI / 2;
      glow.visible = false;
      scene.add(glow);

      var scanGeom = new THREE.BufferGeometry();
      scanGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(1500 * 3), 3));
      scanGeom.setDrawRange(0, 0);
      var points = new THREE.Points(
        scanGeom,
        new THREE.PointsMaterial({
          color: 0xb8fbff,
          size: 0.028,
          transparent: true,
          opacity: 0.9,
          depthWrite: false,
          sizeAttenuation: true
        })
      );
      points.visible = false;
      points.frustumCulled = false;
      scene.add(points);

      this.scene = scene;
      this.camera = camera;
      this.renderer = renderer;
      this.controls = controls;
      this.laser = laser;
      this.glow = glow;
      this.points = points;
      this.stage = stage;
      this.ready = true;

      var self = this;
      function resize() {
        var width = stage.clientWidth;
        var height = stage.clientHeight;
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      }
      if (window.ResizeObserver) new ResizeObserver(resize).observe(stage);
      window.addEventListener("resize", resize);
      requestAnimationFrame(resize);

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
      animate();
    },
    addStage: function (scene) {
      var discMat = new THREE.MeshStandardMaterial({ color: 0x1a2330, metalness: 0.82, roughness: 0.3 });
      var disc = new THREE.Mesh(new THREE.CylinderGeometry(2.15, 2.25, 0.08, 72), discMat);
      disc.position.y = TABLE_TOP - 0.04;
      var pedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(1.15, 1.35, 0.2, 48),
        new THREE.MeshStandardMaterial({ color: 0x121820, metalness: 0.7, roughness: 0.46 })
      );
      pedestal.position.y = TABLE_TOP - 0.18;
      var ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.95, 0.012, 8, 90),
        new THREE.MeshBasicMaterial({ color: 0x3dbeff })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = TABLE_TOP + 0.008;
      scene.add(disc, pedestal, ring);

      var grid = new THREE.GridHelper(16, 32, 0x31445c, 0x1b2838);
      grid.position.y = TABLE_TOP - 0.3;
      var materials = Array.isArray(grid.material) ? grid.material : [grid.material];
      materials.forEach(function (material) {
        material.transparent = true;
        material.opacity = 0.45;
      });
      scene.add(grid);
    },
    addModel: function (model) {
      this.scene.add(model);
    },
    show: function (model) {
      if (!this.ready) return;
      var models = state.models;
      Object.keys(models).forEach(function (id) { models[id].visible = false; });
      model.visible = true;
      this.current = model;
      this.frame(model, true);
      this.endScan();
    },
    frame: function (model, storeHome) {
      var box = new THREE.Box3().setFromObject(model);
      var size = box.getSize(new THREE.Vector3());
      var center = box.getCenter(new THREE.Vector3());
      var maxDim = Math.max(size.x, size.y, size.z, 0.8);
      var dist = (maxDim * 0.72) / Math.tan((this.camera.fov * Math.PI) / 360);
      dist *= 1.28;
      var position = new THREE.Vector3(center.x + dist * 0.78, center.y + dist * 0.42, center.z + dist * 0.95);
      this.camera.position.copy(position);
      this.controls.target.copy(center);
      this.camera.near = Math.max(0.02, dist / 80);
      this.camera.far = dist * 24;
      this.camera.updateProjectionMatrix();
      this.controls.update();
      if (storeHome) model.userData.home = { position: position.clone(), target: center.clone() };
    },
    resetView: function () {
      if (!this.ready || !this.current || !this.current.userData.home) return;
      var home = this.current.userData.home;
      this.camera.position.copy(home.position);
      this.controls.target.copy(home.target);
      this.controls.update();
    },
    setMode: function (model, mode) {
      if (!this.ready || !model) return;
      model.traverse(function (obj) {
        if (obj.userData && obj.userData.colorMat) {
          obj.material = mode === "color" ? obj.userData.colorMat : obj.userData.metalMat;
        }
      });
    },
    preparePoints: function (model) {
      var values = [];
      var vector = new THREE.Vector3();
      model.updateWorldMatrix(true, true);
      model.traverse(function (obj) {
        if (!obj.isMesh || !obj.userData.colorMat) return;
        var pos = obj.geometry.attributes.position;
        var step = Math.max(1, Math.floor(pos.count / 260));
        for (var i = 0; i < pos.count; i += step) {
          vector.fromBufferAttribute(pos, i);
          obj.localToWorld(vector);
          values.push(vector.x, vector.y, vector.z);
        }
      });
      var attr = this.points.geometry.attributes.position;
      var count = Math.min(values.length / 3, attr.count);
      for (var p = 0; p < count; p++) {
        attr.setXYZ(p, values[p * 3], values[p * 3 + 1], values[p * 3 + 2]);
      }
      attr.needsUpdate = true;
      this.scanCount = count;
      this.points.geometry.setDrawRange(0, 0);
    },
    beginScan: function (model) {
      if (!this.ready) return;
      this.preparePoints(model);
      this.points.visible = true;
      this.laser.visible = true;
      this.glow.visible = true;
      this.setProgress(0);
    },
    setProgress: function (p) {
      if (!this.ready || !this.current) return;
      var box = new THREE.Box3().setFromObject(this.current);
      var y = box.max.y - (box.max.y - box.min.y) * p;
      this.laser.position.y = y;
      this.glow.position.y = y;
      this.points.geometry.setDrawRange(0, Math.floor(this.scanCount * p));
    },
    endScan: function () {
      if (!this.ready) return;
      this.laser.visible = false;
      this.glow.visible = false;
      this.points.visible = false;
      this.points.geometry.setDrawRange(0, 0);
    }
  };

  function statusOf(jobId) {
    var sess = session(jobId);
    if (state.scanningJob === jobId) return { text: "스캔 중", kind: "run" };
    if (sess.phase === "confirmed") {
      return { text: sess.overallPass ? "합격 확정" : "불합격 확정", kind: "lock" };
    }
    if (sess.phase === "done") return { text: sess.overallPass ? "합격" : "불합격", kind: sess.overallPass ? "pass" : "fail" };
    return { text: "대기", kind: "" };
  }

  function renderJobList() {
    el.jobList.textContent = "";
    JOBS.forEach(function (job) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "job";
      button.dataset.job = job.id;
      button.setAttribute("role", "option");
      var top = document.createElement("span");
      top.className = "job-top";
      var code = document.createElement("span");
      code.className = "job-id";
      code.textContent = job.id;
      var status = document.createElement("span");
      status.className = "job-status";
      var name = document.createElement("span");
      name.className = "job-name";
      name.textContent = job.name;
      var meta = document.createElement("span");
      meta.className = "job-meta";
      meta.textContent = job.material + " · " + job.lot;
      top.appendChild(code);
      top.appendChild(status);
      button.appendChild(top);
      button.appendChild(name);
      button.appendChild(meta);
      el.jobList.appendChild(button);
    });
    el.jobCount.textContent = JOBS.length + "건";
  }

  function updateJobStatuses() {
    var buttons = el.jobList.querySelectorAll(".job");
    buttons.forEach(function (button) {
      var info = statusOf(button.dataset.job);
      var badge = button.querySelector(".job-status");
      badge.textContent = info.text;
      badge.className = "job-status" + (info.kind ? " " + info.kind : "");
      var active = button.dataset.job === state.jobId;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-selected", "true");
      else button.removeAttribute("aria-selected");
    });
  }

  function renderTable(rows, flash) {
    el.measureBody.textContent = "";
    var job = currentJob();
    var sess = session(job.id);
    var features = rows || job.features.map(function (feature) {
      return {
        name: feature.name,
        nominal: feature.nominal,
        tol: feature.tol,
        tolType: feature.tolType,
        measured: null,
        dev: null,
        pass: null,
        limitRatio: null
      };
    });
    var scanning = sess.phase === "scanning" && state.scanningJob === job.id;
    features.forEach(function (row) {
      var tr = document.createElement("tr");
      if (row.pass === false) tr.className = "is-ng";
      appendCell(tr, row.name, false);
      appendCell(tr, formatNum(row.nominal), true);
      appendCell(tr, scanning ? "···" : row.measured == null ? "—" : formatNum(row.measured), true, flash && row.measured != null);
      appendCell(tr, formatTol(row), true);
      var devText = scanning ? "···" : row.dev == null ? "—" : formatDev(row.dev);
      var devClass = "dev-muted";
      if (!scanning && row.pass === true) devClass = row.limitRatio >= 0.8 ? "dev-warn" : "dev-ok";
      if (!scanning && row.pass === false) devClass = "dev-ng";
      appendCell(tr, devText, true, flash && row.dev != null, devClass);
      var judgment = document.createElement("td");
      var pill = document.createElement("span");
      if (scanning) {
        pill.className = "pill muted";
        pill.textContent = "측정 중";
      } else if (row.pass == null) {
        pill.className = "pill muted";
        pill.textContent = "—";
      } else if (row.pass) {
        pill.className = "pill pass";
        pill.textContent = "합격";
      } else {
        pill.className = "pill fail";
        pill.textContent = "불합격";
      }
      judgment.appendChild(pill);
      tr.appendChild(judgment);
      el.measureBody.appendChild(tr);
    });
  }

  function appendCell(row, text, numeric, flash, extraClass) {
    var cell = document.createElement("td");
    cell.textContent = text;
    if (numeric) cell.classList.add("num");
    if (extraClass) cell.classList.add(extraClass);
    if (flash) cell.classList.add("flash");
    row.appendChild(cell);
  }

  function failedNames(rows) {
    return rows.filter(function (row) { return !row.pass; }).map(function (row) { return row.name; });
  }

  function renderChrome(flash) {
    var job = currentJob();
    var sess = session(job.id);
    var scanning = state.scanningJob === job.id && sess.phase === "scanning";
    el.vpName.textContent = job.name;
    el.vpCode.textContent = job.id;
    el.partMeta.textContent = "도면 " + job.id + " · Rev " + job.rev + " · 재질 " + job.material +
      " · 공정 " + job.process + " · 로트 " + job.lot;

    var chip = statusOf(job.id);
    el.stateChip.textContent = chip.text;
    el.stateChip.className = "chip" + (chip.kind ? " " + chip.kind : "");

    var verdictClass = "verdict is-idle";
    var verdictText = "대기";
    var detail = "스캔 전 · 기준값만 표시";
    var cycle = "";
    var tableText = "대기";
    var tableClass = "table-verdict";
    var status = "대기 중. 스캔 시작을 누르면 측정값을 계산합니다.";

    if (scanning) {
      verdictClass = "verdict is-run";
      verdictText = "스캔 중";
      detail = scanPhaseLabel(sess.progress || 0);
      cycle = "측정값을 다시 계산하고 있습니다.";
      tableText = "스캔 중";
      tableClass = "table-verdict run";
      status = detail + " 중입니다.";
    } else if (sess.phase === "done" || sess.phase === "confirmed") {
      var pass = sess.overallPass;
      verdictClass = pass ? "verdict is-pass" : "verdict is-fail";
      verdictText = pass ? "합격" : "불합격";
      var failed = failedNames(sess.rows);
      detail = pass ? "전 항목 공차 이내" : failed.join(", ") + " 공차 초과";
      cycle = "검사 회차 " + sess.scanIndex + " · 항목 " + sess.rows.length +
        " · 불합격 " + failed.length;
      tableText = pass ? "합격" : "불합격";
      tableClass = pass ? "table-verdict pass" : "table-verdict fail";
      status = pass ? "검사 완료. 전 항목이 공차 이내입니다." : "검사 완료. 공차를 벗어난 항목이 있습니다.";
      if (sess.phase === "confirmed") {
        tableText = (pass ? "합격" : "불합격") + " · 확정";
        tableClass = "table-verdict lock";
        cycle += " · 확정 " + formatTime(sess.confirmedAt);
        status = "판정 확정 " + formatTime(sess.confirmedAt) + ". 재검사하면 확정이 해제됩니다.";
      }
    }

    el.verdict.className = verdictClass;
    el.verdictValue.textContent = verdictText;
    el.verdictDetail.textContent = detail;
    el.verdictCycle.textContent = cycle;
    el.tableVerdict.textContent = tableText;
    el.tableVerdict.className = tableClass;
    el.stamp.hidden = sess.phase !== "confirmed";
    el.statusLine.textContent = status;

    el.btnScan.disabled = sess.phase !== "idle" || scanning;
    el.btnScan.textContent = scanning ? "스캔 중…" : sess.phase === "idle" ? "스캔 시작" : "스캔 완료";
    el.btnRescan.disabled = scanning || (sess.phase !== "done" && sess.phase !== "confirmed");
    el.btnConfirm.disabled = sess.phase !== "done";
    el.btnConfirm.textContent = sess.phase === "confirmed" ? "확정됨" : "판정 확정";
    el.scanWidget.hidden = !scanning;

    updateJobStatuses();
    renderTable(sess.phase === "done" || sess.phase === "confirmed" ? sess.rows : null, flash);
    if (viewport.ready && state.models[job.id]) {
      var showColor = sess.revealed && (sess.phase === "done" || sess.phase === "confirmed" || scanning);
      viewport.setMode(state.models[job.id], showColor ? "color" : "metal");
    }
  }

  function renderProgress(p) {
    var sess = session(state.scanningJob);
    sess.progress = p;
    el.scanPhase.textContent = scanPhaseLabel(p);
    el.scanPct.textContent = Math.round(p * 100) + "%";
    el.scanBar.style.width = (p * 100).toFixed(1) + "%";
    el.verdictDetail.textContent = scanPhaseLabel(p);
    el.stateChip.textContent = "스캔 중 " + Math.round(p * 100) + "%";
    viewport.setProgress(p);
    if (p >= 0.58 && !sess.revealed) {
      sess.revealed = true;
      viewport.setMode(state.models[state.scanningJob], "color");
    }
  }

  function finishScan(token, jobId) {
    if (token !== state.scanToken) return;
    var job = jobById(jobId);
    var sess = session(jobId);
    var nextIndex = sess.scanIndex + 1;
    var result = evaluateJob(job, nextIndex);
    sess.scanIndex = nextIndex;
    sess.rows = result.rows;
    sess.overallPass = result.overallPass;
    sess.phase = "done";
    sess.confirmedAt = null;
    sess.revealed = true;
    sess.snapshot = null;
    sess.progress = 1;
    state.scanningJob = null;
    viewport.endScan();
    if (state.jobId === jobId) {
      renderChrome(true);
      showToast(result.overallPass ? "스캔이 완료되었습니다. 종합 판정은 합격입니다." : "스캔이 완료되었습니다. 공차를 벗어난 항목이 있습니다.");
    } else {
      updateJobStatuses();
    }
  }

  function abortScan() {
    if (!state.scanningJob) return;
    var sess = session(state.scanningJob);
    state.scanToken += 1;
    viewport.endScan();
    if (sess.snapshot) {
      sess.phase = sess.snapshot.phase;
      sess.revealed = sess.snapshot.revealed;
      sess.confirmedAt = sess.snapshot.confirmedAt;
    } else {
      sess.phase = "idle";
      sess.revealed = false;
    }
    sess.snapshot = null;
    state.scanningJob = null;
    showToast("스캔을 취소했습니다.");
  }

  function startScan(fromRescan) {
    if (state.scanningJob) return;
    var job = currentJob();
    var sess = session(job.id);
    if (!fromRescan && sess.phase !== "idle") return;
    if (fromRescan && sess.phase !== "done" && sess.phase !== "confirmed") return;
    sess.snapshot = { phase: sess.phase, revealed: sess.revealed, confirmedAt: sess.confirmedAt };
    sess.phase = "scanning";
    sess.revealed = false;
    sess.progress = 0;
    state.scanningJob = job.id;
    var token = ++state.scanToken;
    renderChrome(false);
    viewport.beginScan(state.models[job.id]);
    var started = performance.now();
    var duration = 2600;
    function frame(now) {
      if (token !== state.scanToken) return;
      var p = Math.min(1, (now - started) / duration);
      renderProgress(p);
      if (p < 1) requestAnimationFrame(frame);
      else finishScan(token, job.id);
    }
    requestAnimationFrame(frame);
  }

  function confirmJudgment() {
    var sess = session(state.jobId);
    if (sess.phase !== "done") return;
    sess.phase = "confirmed";
    sess.confirmedAt = new Date();
    renderChrome(false);
    showToast(sess.overallPass ? "합격 판정을 확정했습니다." : "불합격 판정을 확정했습니다.");
  }

  function selectJob(id) {
    if (state.scanningJob && state.scanningJob !== id) abortScan();
    if (state.jobId === id) return;
    state.jobId = id;
    renderChrome(false);
    if (state.models[id]) viewport.show(state.models[id]);
    var sess = session(id);
    if (viewport.ready && state.models[id]) {
      viewport.setMode(state.models[id], sess.revealed ? "color" : "metal");
    }
  }

  function bind() {
    el.jobList.addEventListener("click", function (event) {
      var button = event.target.closest("[data-job]");
      if (!button) return;
      selectJob(button.dataset.job);
    });
    el.btnScan.addEventListener("click", function () { startScan(false); });
    el.btnRescan.addEventListener("click", function () {
      var sess = session(state.jobId);
      if (sess.phase === "confirmed") showToast("확정을 해제하고 재검사합니다.");
      else showToast("재검사를 시작합니다.");
      startScan(true);
    });
    el.btnConfirm.addEventListener("click", confirmJudgment);
    el.btnReset.addEventListener("click", function () { viewport.resetView(); });
  }

  function cacheElements() {
    el.jobList = document.getElementById("job-list");
    el.jobCount = document.getElementById("job-count");
    el.vpName = document.getElementById("vp-name");
    el.vpCode = document.getElementById("vp-code");
    el.stateChip = document.getElementById("state-chip");
    el.verdict = document.getElementById("verdict");
    el.verdictValue = document.getElementById("verdict-value");
    el.verdictDetail = document.getElementById("verdict-detail");
    el.verdictCycle = document.getElementById("verdict-cycle");
    el.stamp = document.getElementById("stamp");
    el.tableVerdict = document.getElementById("table-verdict");
    el.partMeta = document.getElementById("part-meta");
    el.measureBody = document.getElementById("measure-body");
    el.statusLine = document.getElementById("status-line");
    el.btnScan = document.getElementById("btn-scan");
    el.btnRescan = document.getElementById("btn-rescan");
    el.btnConfirm = document.getElementById("btn-confirm");
    el.btnReset = document.getElementById("btn-reset");
    el.scanWidget = document.getElementById("scan-widget");
    el.scanPhase = document.getElementById("scan-phase");
    el.scanPct = document.getElementById("scan-pct");
    el.scanBar = document.getElementById("scan-bar");
    el.webglError = document.getElementById("webgl-error");
    el.toast = document.getElementById("toast");
    el.clock = document.getElementById("clock");
  }

  function init() {
    cacheElements();
    renderJobList();
    function tick() { el.clock.textContent = formatClock(new Date()); }
    tick();
    setInterval(tick, 1000);
    bind();

    if (!window.THREE || !THREE.WebGLRenderer || !THREE.OrbitControls) {
      showWebglError("3D 라이브러리를 불러오지 못했습니다. 네트워크 연결을 확인한 뒤 새로고침해 주세요.");
      selectJob(JOBS[0].id);
      return;
    }
    try {
      viewport.init(document.getElementById("stage"));
      JOBS.forEach(function (job) {
        var model = buildModel(job);
        model.visible = false;
        viewport.addModel(model);
        state.models[job.id] = model;
      });
    } catch (error) {
      showWebglError("이 브라우저에서 3D 뷰를 만들 수 없습니다.");
    }
    selectJob(JOBS[0].id);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
