/**
 * RunwaySection: Try the Look — Automotive Bespoke Custom Element
 * Built strictly according to the Shopify Horizon Runway exact specifications.
 */
(() => {
  'use strict';

  const CATALOG = {
    looks: [
      {
        id: 0,
        name: 'Modena Carbon Track Spec',
        eyebrow: 'LOOK 01 / TRACK BESPOKE',
        car: 'Ferrari SF90 Stradale',
        image: 'assets/car-ferrari.jpg',
        pins: [
          { num: 1, name: 'Carbon Aero Splitter & Nose Cone', left: 24, top: 76 },
          { num: 2, name: 'Sculpted Carbon Bonnet & Ducts', left: 42, top: 56 },
          { num: 3, name: 'Carbon Mirror Housings & A-Pillars', left: 66, top: 40 }
        ],
        products: [
          { id: 'p1', name: 'Carbon Aero Splitter & Nose Cone', vendor: 'XPEL ULTIMATE PLUS™ 8.5 MIL', price: 1450, image: 'assets/part-front-splitter.jpg', options: ['Gloss Optical', 'Stealth Satin', 'Carbon Shield'] },
          { id: 'p2', name: 'Sculpted Carbon Bonnet & Ducts', vendor: 'HIGH-VELOCITY DEFENSE', price: 1850, image: 'assets/part-carbon-bonnet.jpg', options: ['8.5 Mil Optical', '10.5 Mil Ballistic', 'Ceramic Fused'] },
          { id: 'p3', name: 'Carbon Mirror Housings & A-Pillars', vendor: 'AERODYNAMIC ARMOR', price: 650, image: 'assets/part-mirror-cap.jpg', options: ['Gloss Clear', 'Satin Matte', 'Twill Exposed'] }
        ]
      },
      {
        id: 1,
        name: 'Heritage Concours',
        eyebrow: 'LOOK 02 / VINTAGE PRESERVATION',
        car: '1957 Mercedes-Benz 300 SL',
        image: 'assets/car-300sl-clean.png',
        pins: [
          { num: 1, name: 'Hand-Formed Front Bumper PPF', left: 30, top: 80 },
          { num: 2, name: 'Period Lacquer Hood Encapsulation', left: 46, top: 54 },
          { num: 3, name: 'Chrome Bezel & Mirror Shield', left: 68, top: 44 }
        ],
        products: [
          { id: 'p4', name: 'Hand-Formed Front Bumper PPF', vendor: 'NON-INVASIVE REVERSIBLE', price: 1650, image: 'assets/part-front-splitter.jpg', options: ['8.0 Mil Non-Yellowing', 'Concours Vault Spec'] },
          { id: 'p5', name: 'Period Lacquer Hood Encapsulation', vendor: 'ZERO FACTORY TRIM REMOVED', price: 1400, image: 'assets/part-carbon-bonnet.jpg', options: ['Hand-Tucked Margins', 'Laser Digitized'] },
          { id: 'p6', name: 'Chrome Bezel & Mirror Shield', vendor: 'OPTICAL MICRO-WRAP', price: 900, image: 'assets/part-mirror-cap.jpg', options: ['Ultra-Clear', 'Infrared Cured'] }
        ]
      },
      {
        id: 2,
        name: 'Tactical Stealth Armour',
        eyebrow: 'LOOK 03 / EXTREME IMPACT',
        car: 'Mercedes-AMG G 63 V8',
        image: 'assets/car-gwagon-clean.png',
        pins: [
          { num: 1, name: 'Stealth Satin Front Fascia Armor', left: 28, top: 78 },
          { num: 2, name: 'Upright Bonnet & Fender Plates', left: 45, top: 52 },
          { num: 3, name: 'Flared Wheel Arches & Mirror Caps', left: 68, top: 38 }
        ],
        products: [
          { id: 'p7', name: 'Stealth Satin Front Fascia Armor', vendor: '10.5 MIL BALLISTIC SHIELD', price: 1550, image: 'assets/part-front-splitter.jpg', options: ['Stealth Satin Matte', 'Armor Gloss 10 Mil'] },
          { id: 'p8', name: 'Upright Bonnet & Fender Plates', vendor: 'ANTI-GRAVEL PROTECTION', price: 1750, image: 'assets/part-carbon-bonnet.jpg', options: ['Satin Matte Conversion', 'Double Layer'] },
          { id: 'p9', name: 'Flared Wheel Arches & Mirror Caps', vendor: 'OLEOPHOBIC MUD SHED', price: 650, image: 'assets/part-mirror-cap.jpg', options: ['Stealth Satin', 'Gloss Black TPU'] }
        ]
      },
      {
        id: 3,
        name: 'Executive Mirror Flagship',
        eyebrow: 'LOOK 04 / ULTRA-LUXURY',
        car: 'Mercedes-Maybach S-Class',
        image: 'assets/car-maybach-clean.png',
        pins: [
          { num: 1, name: 'Piano Black Bumper & Grille Shield', left: 22, top: 76 },
          { num: 2, name: 'Extended Hood & Crest Refinement', left: 44, top: 54 },
          { num: 3, name: 'Mirror Housings & Pillar Trims', left: 65, top: 38 }
        ],
        products: [
          { id: 'p10', name: 'Piano Black Bumper & Grille Shield', vendor: 'JEWEL-GRADE ROTARY STAGE 3', price: 1450, image: 'assets/part-front-splitter.jpg', options: ['99.8% Pure Index', 'Hydrophobic Ceramic'] },
          { id: 'p11', name: 'Extended Hood & Crest Refinement', vendor: '0.00% ORANGE PEEL', price: 1750, image: 'assets/part-carbon-bonnet.jpg', options: ['Dual-Stage Cured', 'Optical TPU'] },
          { id: 'p12', name: 'Mirror Housings & Pillar Trims', vendor: 'DUAL-STAGE INFRARED CERAMIC', price: 750, image: 'assets/part-mirror-cap.jpg', options: ['Ultra-Gloss', 'Self-Healing'] }
        ]
      },
      {
        id: 4,
        name: 'Silver Arrow Concours',
        eyebrow: 'LOOK 05 / RACING HERITAGE',
        car: 'Mercedes 300 SL Silver Arrow',
        image: 'assets/car-300sl-cutout.png',
        pins: [
          { num: 1, name: 'Aerodynamic Headlight & Bumper Shield', left: 30, top: 78 },
          { num: 2, name: 'Front Wings & Flank Louvre Protection', left: 48, top: 56 },
          { num: 3, name: 'Rear Decklid & Bumper Micro-Wrap', left: 70, top: 46 }
        ],
        products: [
          { id: 'p13', name: 'Aerodynamic Headlight & Bumper Shield', vendor: 'OPTICALLY CLEAR POLYURETHANE', price: 1350, image: 'assets/part-front-splitter.jpg', options: ['8.0 Mil Concours', 'Period Finish'] },
          { id: 'p14', name: 'Front Wings & Flank Louvre Protection', vendor: 'NON-INVASIVE HAND-TEMPLATED', price: 1850, image: 'assets/part-carbon-bonnet.jpg', options: ['Flank Enclosure', 'Edge Tucked'] },
          { id: 'p15', name: 'Rear Decklid & Bumper Micro-Wrap', vendor: 'COLLECTOR VAULT SUITE', price: 750, image: 'assets/part-mirror-cap.jpg', options: ['Clear Gloss', 'UV Barrier'] }
        ]
      },
      {
        id: 5,
        name: 'Matte Obsidian Armor',
        eyebrow: 'LOOK 06 / NIGHT EXPEDITION',
        car: 'Mercedes-AMG G 63 Night Edition',
        image: 'assets/car-gwagon-cutout.png',
        pins: [
          { num: 1, name: 'Vertical Aero Intake & Bullbar Defense', left: 26, top: 76 },
          { num: 2, name: 'Satin Matte Hood & Leading Roof Edge', left: 46, top: 52 },
          { num: 3, name: 'Side Exhaust Sills & Flared Arches', left: 68, top: 38 }
        ],
        products: [
          { id: 'p16', name: 'Vertical Aero Intake & Bullbar Defense', vendor: 'HIGH-IMPACT 10.5 MIL TPU', price: 1450, image: 'assets/part-front-splitter.jpg', options: ['Stealth Satin', 'Ballistic Clear'] },
          { id: 'p17', name: 'Satin Matte Hood & Leading Roof Edge', vendor: 'ANTI-GRAVEL BALLISTIC ARMOR', price: 1850, image: 'assets/part-carbon-bonnet.jpg', options: ['Matte Conversion', '10 Mil Heavy Duty'] },
          { id: 'p18', name: 'Side Exhaust Sills & Flared Arches', vendor: 'EXTREME HEAT DEFENSE', price: 650, image: 'assets/part-mirror-cap.jpg', options: ['Thermal Shielded', 'Satin Black'] }
        ]
      }
    ]
  };

  class RunwaySection extends HTMLElement {
    constructor() {
      super();
      this.index = 0;
      this.target = 0;
      this.cur = -1.15; // Entrance offset
      this.vel = 0;
      this.still = false;
      this.playing = true;
      this.panelHover = false;
      this.zoomed = false;
      this.engaged = false;
      this.dragging = false;
      this.lastFrame = 0;
      this.timer = null;
      this.cursorTarget = { x: 0, y: 0 };
      this.cursorCur = { x: 0, y: 0 };
    }

    connectedCallback() {
      this.stage = this.querySelector('[data-rw-stage]');
      this.actors = this.querySelector('[data-rw-actors]');
      this.heroes = this.querySelector('[data-rw-heroes]');
      this.ticksContainer = this.querySelector('.rw__ticks');
      this.liveRegion = this.querySelector('[data-rw-live]');
      this.cursor = this.querySelector('[data-rw-cursor]');
      this.autoBtn = this.querySelector('[data-rw-auto]');
      this.prevBtn = this.querySelector('[data-rw-prev]');
      this.nextBtn = this.querySelector('[data-rw-next]');
      this.lb = this.querySelector('[data-rw-lb]');
      this.lbStage = this.querySelector('[data-rw-lb-stage]');
      this.lbKicker = this.querySelector('[data-rw-lb-kicker]');
      this.lbName = this.querySelector('[data-rw-lb-name]');
      this.lbClose = this.querySelector('[data-rw-zoom-close]');
      this.walkLine = this.querySelector('.rw__walk-line');

      this.buildActorsAndHeroes();
      this.buildTicks();
      this.buildPanels();
      this.measure();
      this.bindEvents();
      this.initBag();

      this.classList.add('rw--still');
      this.setIndex(0, true);
      this.startAutoplay();
      this.rafId = requestAnimationFrame(this.loop.bind(this));
    }

    disconnectedCallback() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
      if (this.timer) clearTimeout(this.timer);
    }

    buildActorsAndHeroes() {
      // 12 queue bodies (6 originals + 6 clones)
      let actorsHtml = '';
      let heroesHtml = '';
      for (let i = 0; i < 12; i++) {
        const look = CATALOG.looks[i % 6];
        const isClone = i >= 6;
        actorsHtml += `
          <div class="rw__model" data-rw-model data-index="${i}" aria-hidden="true" ${isClone ? 'data-rw-clone' : ''}>
            <span class="rw__shadow"></span>
            <div class="rw__figure" style="--rw-ar:1.65">
              <div class="rw__art">
                <img src="${look.image}" loading="${isClone ? 'lazy' : 'eager'}" decoding="async" alt="${look.name}" class="is-decoded">
                <button class="rw__hit" data-rw-go="${i}" aria-label="Look ${i + 1}: ${look.name}" tabindex="-1"></button>
              </div>
            </div>
          </div>
        `;
      }
      this.actors.innerHTML = actorsHtml;

      for (let i = 0; i < 6; i++) {
        const look = CATALOG.looks[i];
        let pinsHtml = '';
        look.pins.forEach(p => {
          pinsHtml += `
            <button class="rw__pin" data-rw-pin="${p.num}" data-tip="${p.name}" style="left:${p.left}%; top:${p.top}%; --pi:${p.num}" aria-label="${p.num}: ${p.name}">
              <span class="rw__pin-dot">${p.num}</span>
            </button>
          `;
        });
        heroesHtml += `
          <div class="rw__hero ${i === 0 ? 'is-on' : ''}" data-rw-hero data-index="${i}">
            <span class="rw__shadow"></span>
            <div class="rw__figure" style="--rw-ar:1.65">
              <div class="rw__art">
                <img src="${look.image}" decoding="async" alt="${look.name}" class="is-decoded">
                <button class="rw__zoom" data-rw-zoom aria-label="View build: ${look.name}"></button>
                <div class="rw__pins">${pinsHtml}</div>
              </div>
            </div>
          </div>
        `;
      }
      this.heroes.innerHTML = heroesHtml;

      this.bodies = [...this.actors.querySelectorAll('.rw__model')];
      this.heroEls = [...this.heroes.querySelectorAll('.rw__hero')];
    }

    buildTicks() {
      let ticksHtml = '';
      CATALOG.looks.forEach((look, i) => {
        ticksHtml += `
          <button class="rw__tick ${i === 0 ? 'is-run' : ''}" data-rw-tick="${i}" aria-current="${i === 0 ? 'true' : 'false'}" aria-label="Look ${i + 1}: ${look.name}">
            <span class="rw__tick-bar"></span>
            <span class="rw__tick-label">0${i + 1}<span class="rw__tick-name">&nbsp;&nbsp;${look.name}</span></span>
          </button>
        `;
      });
      this.ticksContainer.innerHTML = ticksHtml;
      this.tickBtns = [...this.ticksContainer.querySelectorAll('.rw__tick')];
    }

    buildPanels() {
      const panelInner = this.querySelector('.rw__panel-inner');
      let panelsHtml = '';
      CATALOG.looks.forEach((look, idx) => {
        let itemsHtml = '';
        look.products.forEach((prod, pIdx) => {
          let pillsHtml = prod.options.map((opt, oIdx) => `
            <label class="rw__pill">
              <input type="radio" name="opt-${look.id}-${prod.id}" value="${opt}" ${oIdx === 0 ? 'checked' : ''} data-rw-option="0">
              <span class="rw__pill-label">${opt}</span>
            </label>
          `).join('');

          itemsHtml += `
            <li class="rw__item" data-rw-card="${pIdx + 1}" style="--i:${pIdx + 1}" data-title="${prod.name}">
              <a class="rw__media" href="#inquiry" tabindex="-1" aria-hidden="true">
                <img loading="lazy" decoding="async" src="${prod.image}" alt="${prod.name}">
                <span class="rw__num">${pIdx + 1}</span>
              </a>
              <div class="rw__info">
                <span class="rw__type">${prod.vendor}</span>
                <a class="rw__name" href="#inquiry">${prod.name}</a>
                <span class="rw__price"><span>$${prod.price.toFixed(2)}</span></span>
              </div>
              <button class="rw__add" data-rw-add aria-expanded="false" aria-label="Add to specification: ${prod.name}">
                <svg class="rw__svg-plus" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 4v16M4 12h16"/></svg>
                <svg class="rw__svg-check" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.5 12.5l5 5L19.5 7"/></svg>
                <svg class="rw__svg-spin" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3a9 9 0 1 1-9 9"/></svg>
              </button>
              <div class="rw__picker" data-rw-picker hidden>
                <fieldset class="rw__opt">
                  <legend class="rw__opt-name">Specification / Finish</legend>
                  <div class="rw__pills">${pillsHtml}</div>
                </fieldset>
                <button class="rw__confirm" data-rw-confirm data-prod-id="${prod.id}" data-prod-name="${prod.name}" data-prod-price="${prod.price}" data-prod-image="${prod.image}">
                  Add to Specification
                </button>
              </div>
            </li>
          `;
        });

        const subtotal = look.products.reduce((acc, p) => acc + p.price, 0);
        const bundlePrice = subtotal * 0.9;

        panelsHtml += `
          <div class="rw__look-panel ${idx === 0 ? 'is-in' : ''}" data-rw-panel="${idx}" ${idx === 0 ? '' : 'hidden'}>
            <div class="rw__mhead">
              <span class="rw__mhead-title">${look.name}</span>
              <span class="rw__label">3 components</span>
            </div>
            <ul class="rw__items" role="list">
              ${itemsHtml}
            </ul>
            <div class="rw__bundle has-rule">
              <p class="rw__msg" data-rw-msg role="status" aria-live="polite" hidden></p>
              <div class="rw__bundle-row">
                <div class="rw__bundle-copy">
                  <span class="rw__bundle-title">Complete the build</span>
                  <span class="rw__bundle-note">Bundle all 3 components and save 10%</span>
                </div>
                <div class="rw__bundle-price">
                  <s>$${subtotal.toFixed(2)}</s>
                  <strong>$${bundlePrice.toFixed(2)}</strong>
                </div>
              </div>
              <button class="rw__cta" data-rw-all>
                <span class="rw__cta-add">Add full build to specification</span>
                <span class="rw__cta-m">Add full build — $${bundlePrice.toFixed(2)}</span>
                <span class="rw__cta-done">Full build in your specification</span>
                <svg width="22" height="12" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1 7h24M19 1l6 6-6 6"/></svg>
              </button>
            </div>
          </div>
        `;
      });

      const existingHead = panelInner.querySelector('.rw__panel-head');
      panelInner.innerHTML = '';
      panelInner.appendChild(existingHead);
      panelInner.insertAdjacentHTML('beforeend', panelsHtml);
      this.lookPanels = [...panelInner.querySelectorAll('.rw__look-panel')];
    }

    measure() {
      const isMobile = window.innerWidth <= 749;
      const header = document.querySelector('.site-header');
      const headerH = header ? header.offsetHeight : 88;
      const frameH = isMobile ? window.innerHeight * 1.09 : Math.max(380, window.innerHeight - headerH);
      this.style.setProperty('--rw-frame-h', `${frameH}px`);

      const stageW = this.stage.clientWidth;
      const stageH = this.stage.clientHeight;
      const modelH = isMobile ? Math.max(200, Math.round(stageH - 24 - 18)) : Math.max(200, Math.round((stageH - 34 - 18) / 1.08));
      this.style.setProperty('--rw-model-h', `${modelH}px`);
      this.style.setProperty('--rw-fs', isMobile ? '1' : '1.08');
      this.style.setProperty('--rw-hx', isMobile ? '30%' : '50%');
      this.style.setProperty('--rw-hy', isMobile ? '22px' : '34px');
      this.W = stageW;
      this.H = stageH;
    }

    bindEvents() {
      window.addEventListener('resize', () => { this.measure(); });

      // Controls
      this.prevBtn?.addEventListener('click', () => { this.engage(); this.prev(); });
      this.nextBtn?.addEventListener('click', () => { this.engage(); this.next(); });
      this.autoBtn?.addEventListener('click', () => {
        this.engaged = false;
        this.togglePlay(!this.playing);
      });

      this.tickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.engage();
          const i = Number(btn.dataset.rwTick);
          this.go(i);
        });
      });

      // Pointer drag on stage
      let startX = 0, startY = 0, startT = 0, isDragging = false;
      const onPointerDown = (e) => {
        startX = e.clientX;
        startY = e.clientY;
        startT = this.target;
        isDragging = false;
        this.stage.setPointerCapture(e.pointerId);
      };
      const onPointerMove = (e) => {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (!isDragging && Math.abs(dx) > 8 && Math.abs(dx) > 1.2 * Math.abs(dy)) {
          isDragging = true;
          this.dragging = true;
          this.classList.add('is-dragging');
          this.engage();
        }
        if (isDragging) {
          const unit = Math.max(120, this.W * 0.3);
          this.target = startT - dx / unit;
          this.still = false;
          this.classList.remove('rw--still');
        }

        // Custom cursor
        const rect = this.stage.getBoundingClientRect();
        this.cursorTarget.x = e.clientX - rect.left;
        this.cursorTarget.y = e.clientY - rect.top;
        if (this.cursor && !this.cursor.classList.contains('is-on')) {
          this.cursor.classList.add('is-on');
          this.classList.add('rw--cursor');
        }
        const hitZoom = e.target.closest('.rw__zoom');
        const hitLink = e.target.closest('.rw__pin, .rw__hit, button');
        if (this.cursor) {
          this.cursor.classList.toggle('is-view', !!hitZoom && !isDragging);
          this.cursor.classList.toggle('is-link', !!hitLink && !isDragging);
        }
      };
      const onPointerUp = (e) => {
        if (isDragging) {
          const dx = e.clientX - startX;
          const from = Math.round(startT);
          const step = Math.abs(dx) > 30 ? (dx > 0 ? -1 : 1) : 0;
          this.moveTo(from + step);
        }
        isDragging = false;
        this.dragging = false;
        this.classList.remove('is-dragging');
        try { this.stage.releasePointerCapture(e.pointerId); } catch(err) {}
      };
      this.stage.addEventListener('pointerdown', onPointerDown);
      this.stage.addEventListener('pointermove', onPointerMove);
      this.stage.addEventListener('pointerup', onPointerUp);
      this.stage.addEventListener('pointercancel', onPointerUp);
      this.stage.addEventListener('pointerleave', () => {
        if (this.cursor) this.cursor.classList.remove('is-on', 'is-view', 'is-link');
      });

      // Keyboard
      this.stage.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); this.engage(); this.next(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); this.engage(); this.prev(); }
      });

      // Panel Hover
      const panel = this.querySelector('.rw__panel');
      panel?.addEventListener('pointerenter', () => { this.panelHover = true; });
      panel?.addEventListener('pointerleave', () => { this.panelHover = false; });

      // Click Router on Section
      this.addEventListener('click', (e) => {
        // Zoom popup open
        if (e.target.closest('.rw__zoom')) {
          this.engage();
          this.openZoom();
          return;
        }
        // Zoom popup close
        if (e.target.closest('[data-rw-zoom-close]') || (this.zoomed && e.target === this.lbStage)) {
          this.closeZoom();
          return;
        }
        // Pin click
        const pin = e.target.closest('.rw__pin');
        if (pin) {
          this.engage();
          const n = Number(pin.dataset.rwPin);
          this.hot(n, true);
          return;
        }
        // Queue body click
        const hit = e.target.closest('.rw__hit');
        if (hit) {
          this.engage();
          const i = Number(hit.dataset.rwGo);
          const k = ((i - this.index) % 6 + 9) % 6 - 3;
          if (k === 0) this.openZoom();
          else this.moveTo(Math.round(this.target) + k);
          return;
        }
        // Add button toggle picker
        const addBtn = e.target.closest('.rw__add');
        if (addBtn) {
          this.engage();
          const row = addBtn.closest('.rw__item');
          const picker = row.querySelector('.rw__picker');
          const isOpen = !picker.hidden;
          picker.hidden = isOpen;
          row.classList.toggle('is-picking', !isOpen);
          addBtn.setAttribute('aria-expanded', String(!isOpen));
          return;
        }
        // Confirm single piece
        const confirmBtn = e.target.closest('.rw__confirm');
        if (confirmBtn) {
          this.engage();
          const row = confirmBtn.closest('.rw__item');
          const prodId = confirmBtn.dataset.prodId;
          const prodName = confirmBtn.dataset.prodName;
          const prodPrice = Number(confirmBtn.dataset.prodPrice);
          const prodImage = confirmBtn.dataset.prodImage;
          const selectedOpt = row.querySelector('input:checked')?.value || 'Standard';

          row.classList.add('is-loading');
          setTimeout(() => {
            row.classList.remove('is-loading');
            row.classList.add('is-added');
            row.querySelector('.rw__picker').hidden = true;
            row.classList.remove('is-picking');
            this.addToBag({ id: prodId, name: prodName, price: prodPrice, image: prodImage, size: selectedOpt });
          }, 450);
          return;
        }
        // Add full build
        const ctaAll = e.target.closest('[data-rw-all]');
        if (ctaAll) {
          this.engage();
          this.addFullBuild();
          return;
        }
      });

      // Hot linking hover on product rows
      this.addEventListener('pointerover', (e) => {
        const item = e.target.closest('.rw__item');
        if (item) {
          const n = Number(item.dataset.rwCard);
          this.hot(n, false);
        }
      });
      this.addEventListener('pointerout', (e) => {
        if (e.target.closest('.rw__item') && !e.relatedTarget?.closest('.rw__item')) {
          this.clearHot();
        }
      });
    }

    hot(n, scroll = false) {
      this.clearHot();
      this.querySelectorAll(`[data-rw-pin="${n}"]`).forEach(p => p.classList.add('is-hot'));
      const activePanel = this.lookPanels[this.index];
      const card = activePanel?.querySelector(`[data-rw-card="${n}"]`);
      if (card) {
        card.classList.add('is-hot');
        if (scroll) {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    }

    clearHot() {
      this.querySelectorAll('.is-hot').forEach(el => el.classList.remove('is-hot'));
    }

    engage() {
      if (!this.engaged) {
        this.engaged = true;
        this.togglePlay(false);
      }
    }

    startAutoplay() {
      if (!this.playing || this.engaged) return;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (this.playing && !this.dragging && !this.panelHover && !this.zoomed && !this.engaged) {
          this.next();
        } else {
          this.startAutoplay();
        }
      }, 5000);
    }

    togglePlay(play) {
      this.playing = play;
      if (this.autoBtn) {
        this.autoBtn.classList.toggle('is-playing', play);
        this.autoBtn.setAttribute('aria-pressed', String(play));
      }
      if (play) this.startAutoplay();
      else if (this.timer) clearTimeout(this.timer);
    }

    next() { this.moveTo(Math.round(this.target) + 1); }
    prev() { this.moveTo(Math.round(this.target) - 1); }

    go(idx) {
      const curLook = ((this.index % 6) + 6) % 6;
      let d = (idx - curLook) % 6;
      if (d > 3) d -= 6;
      if (d < -3) d += 6;
      this.moveTo(Math.round(this.target) + d);
    }

    moveTo(t) {
      this.target = t;
      this.still = false;
      this.classList.remove('rw--still');
      const newLook = ((Math.round(t) % 6) + 6) % 6;
      this.setIndex(newLook);
    }

    setIndex(idx, silent = false) {
      this.index = idx;
      if (this.liveRegion) this.liveRegion.textContent = `Build ${idx + 1}: ${CATALOG.looks[idx].name}`;

      // Progress
      this.style.setProperty('--rw-progress', String(((idx + 1) / 6).toFixed(3)));

      // Ticks
      this.tickBtns.forEach((btn, i) => {
        btn.setAttribute('aria-current', i === idx ? 'true' : 'false');
        btn.classList.toggle('is-past', i < idx);
        btn.classList.toggle('is-run', i === idx && this.playing);
      });

      // Heroes
      this.heroEls.forEach((h, i) => {
        h.classList.toggle('is-on', i === idx);
      });

      // Panels
      this.lookPanels.forEach((p, i) => {
        const isCur = i === idx;
        p.hidden = !isCur;
        if (isCur) {
          p.classList.remove('is-in');
          p.offsetHeight; // reflow
          p.classList.add('is-in');
        }
      });

      if (!silent) this.startAutoplay();
    }

    loop(now) {
      const dt = Math.min(0.034, (now - this.lastFrame) / 1000 || 0.016);
      this.lastFrame = now;

      // Spring physics (K = 95, C = 19.49)
      const K = 95, C = 19.49;
      const subSteps = 3;
      const h = dt / subSteps;
      for (let s = 0; s < subSteps; s++) {
        const acc = -K * (this.cur - this.target) - C * this.vel;
        this.vel += acc * h;
        this.cur += this.vel * h;
      }

      if (Math.abs(this.cur - this.target) <= 0.0005 && Math.abs(this.vel) <= 0.0005) {
        this.cur = this.target;
        this.vel = 0;
        if (!this.still) {
          this.still = true;
          this.classList.add('rw--still');
        }
      }

      this.renderBodies();
      this.renderCursor();

      this.rafId = requestAnimationFrame(this.loop.bind(this));
    }

    renderBodies() {
      const W = this.W || this.stage.clientWidth;
      const H = this.H || this.stage.clientHeight;
      const isMobile = window.innerWidth <= 749;

      const cx = 0.5 * W;
      const R = (isMobile ? 0.72 : 0.62) * W;
      const P = (isMobile ? 1.9 : 1.65) * W;
      const floor = H - (isMobile ? 24 : 34);
      const horizon = 0.36 * H;
      const step = (2 * Math.PI) / 12; // 30 degrees
      const fs = isMobile ? 1 : 1.08;

      this.bodies.forEach((body, a) => {
        const phi = (((a - this.cur) * step) % (2 * Math.PI) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
        const z = R * (1 - Math.cos(phi));
        const persp = P / (P + z);
        const sl = Math.abs(phi) / step;
        const scale = persp * (1 + (fs - 1) * Math.max(0, Math.min(1, 1 - sl)));
        const x = cx + R * Math.sin(phi) * persp;
        const feet = horizon + (floor - horizon) * persp;
        const bottom = H - feet;
        const blur = sl <= 1 ? 1.8 * sl : Math.min(1.8 + (sl - 1) * 2, 6.5);
        let opacity = Math.max(0, Math.min(1, (Math.cos(phi) + 0.55) / 0.3));

        if (this.still && sl < 0.02) {
          opacity = 0; // Front body hidden while hero is visible
        }

        const zIndex = Math.round(scale * 1000);
        body.style.transform = `translate3d(${x.toFixed(1)}px, ${(-bottom).toFixed(1)}px, 0) translateX(-50%) scale(${scale.toFixed(4)})`;
        body.style.opacity = opacity.toFixed(3);
        body.style.zIndex = zIndex;
        body.style.filter = blur > 0.05 ? `blur(${blur.toFixed(1)}px)` : 'none';
        body.style.visibility = opacity < 0.01 ? 'hidden' : 'visible';
      });
    }

    renderCursor() {
      if (!this.cursor) return;
      this.cursorCur.x += (this.cursorTarget.x - this.cursorCur.x) * 0.18;
      this.cursorCur.y += (this.cursorTarget.y - this.cursorCur.y) * 0.18;
      this.cursor.style.transform = `translate3d(${this.cursorCur.x.toFixed(1)}px, ${this.cursorCur.y.toFixed(1)}px, 0)`;
    }

    openZoom() {
      this.zoomed = true;
      const look = CATALOG.looks[this.index];
      this.lbKicker.textContent = `BUILD 0${this.index + 1}`;
      this.lbName.textContent = look.name;

      let pinsHtml = '';
      look.pins.forEach(p => {
        pinsHtml += `
          <button class="rw__pin" data-rw-pin="${p.num}" data-tip="${p.name}" style="left:${p.left}%; top:${p.top}%; --pi:${p.num}" aria-label="${p.num}: ${p.name}">
            <span class="rw__pin-dot">${p.num}</span>
          </button>
        `;
      });

      this.lbStage.innerHTML = `
        <div class="rw__lb-model" style="--rw-ar:1.65; width:min(90vw, 880px); position:relative">
          <span class="rw__shadow"></span>
          <img src="${look.image}" style="width:100%; height:auto; display:block" alt="${look.name}">
          <div class="rw__pins" style="display:block !important">${pinsHtml}</div>
        </div>
      `;
      this.classList.add('rw--zoom');
      this.lb.setAttribute('aria-hidden', 'false');
    }

    closeZoom() {
      this.zoomed = false;
      this.classList.remove('rw--zoom');
      this.lb.setAttribute('aria-hidden', 'true');
    }

    addFullBuild() {
      const activePanel = this.lookPanels[this.index];
      const items = activePanel.querySelectorAll('.rw__item');
      items.forEach(row => {
        row.classList.add('is-added');
        row.querySelector('.rw__picker').hidden = true;
      });
      activePanel.classList.add('is-complete');

      const look = CATALOG.looks[this.index];
      look.products.forEach(p => {
        this.addToBag({ id: p.id, name: p.name, price: p.price, image: p.image, size: 'Atelier Spec' });
      });
      this.showToast('Full build saved to your specification shortlist');
    }

    initBag() {
      this.cartCount = document.querySelectorAll('[data-cart-count]');
      this.bagDialog = document.getElementById('bag-dialog');
      this.bagItems = document.getElementById('bag-items');
      this.bagTotal = document.getElementById('bag-total');
      this.exportBtn = document.getElementById('export-bag');
      this.toast = document.getElementById('bag-status');

      document.getElementById('open-bag')?.addEventListener('click', () => {
        this.renderBagDialog();
        this.bagDialog?.showModal();
      });
      document.getElementById('close-bag')?.addEventListener('click', () => {
        this.bagDialog?.close();
      });
      this.bagDialog?.addEventListener('click', (e) => {
        if (e.target === this.bagDialog) this.bagDialog.close();
      });

      this.exportBtn?.addEventListener('click', () => { this.exportShortlist(); });
      this.updateCartCount();
    }

    getBag() {
      try {
        return JSON.parse(localStorage.getItem('runway-styling-bag-v3') || '[]');
      } catch(e) { return []; }
    }

    saveBag(bag) {
      try {
        localStorage.setItem('runway-styling-bag-v3', JSON.stringify(bag));
      } catch(e) {}
      this.updateCartCount();
    }

    addToBag(item) {
      const bag = this.getBag();
      const existing = bag.find(b => b.id === item.id);
      if (existing) {
        existing.quantity = Math.min(20, (existing.quantity || 1) + 1);
      } else {
        bag.push({ ...item, quantity: 1 });
      }
      this.saveBag(bag);
      this.showToast('Component saved to specification bag');
    }

    removeFromBag(id) {
      let bag = this.getBag().filter(b => b.id !== id);
      this.saveBag(bag);
      this.renderBagDialog();
    }

    updateCartCount() {
      const bag = this.getBag();
      const totalQty = bag.reduce((sum, item) => sum + (item.quantity || 1), 0);
      this.cartCount.forEach(el => { el.textContent = String(totalQty); });
    }

    renderBagDialog() {
      const bag = this.getBag();
      if (!this.bagItems) return;
      if (bag.length === 0) {
        this.bagItems.innerHTML = '<p class="bag-note">Your specification bag is empty. Choose a component to save it.</p>';
        if (this.bagTotal) this.bagTotal.textContent = '';
        if (this.exportBtn) this.exportBtn.disabled = true;
        return;
      }

      let subtotal = 0;
      this.bagItems.innerHTML = bag.map(item => {
        const itemTotal = (item.price || 0) * (item.quantity || 1);
        subtotal += itemTotal;
        return `
          <div class="bag-row">
            <img src="${item.image}" alt="${item.name}">
            <div>
              <h3>${item.name}</h3>
              <p>Spec: ${item.size || 'Standard'} · Qty: ${item.quantity || 1} · $${itemTotal.toFixed(2)}</p>
              <a href="#inquiry" style="font-size:12px; text-decoration:underline; color:#666">View build details ↗</a>
            </div>
            <button class="bag-remove" data-remove="${item.id}" aria-label="Remove ${item.name}">×</button>
          </div>
        `;
      }).join('');

      this.bagItems.querySelectorAll('[data-remove]').forEach(btn => {
        btn.addEventListener('click', () => { this.removeFromBag(btn.dataset.remove); });
      });

      if (this.bagTotal) this.bagTotal.textContent = `Reference subtotal: $${subtotal.toFixed(2)}`;
      if (this.exportBtn) this.exportBtn.disabled = false;
    }

    exportShortlist() {
      const bag = this.getBag();
      let text = "THE REVEAL — AUTOMOTIVE BESPOKE SPECIFICATION SHORTLIST\n\n";
      text += "Reference prices; atelier commission request.\n\n";
      let total = 0;
      bag.forEach(item => {
        const lineTotal = item.price * (item.quantity || 1);
        total += lineTotal;
        text += `${item.name} · Spec: ${item.size} · Qty: ${item.quantity} · $${lineTotal.toFixed(2)}\n`;
      });
      text += `\nEstimated Specification Subtotal: $${total.toFixed(2)}\n`;

      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'atelier-specification-shortlist.txt';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 1000);
    }

    showToast(msg) {
      if (!this.toast) return;
      this.toast.textContent = msg;
      this.toast.classList.add('is-on');
      if (this.toastTimer) clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toast.classList.remove('is-on');
      }, 2500);
    }
  }

  customElements.define('runway-section', RunwaySection);
})();
