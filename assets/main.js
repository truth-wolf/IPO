// Tailwind 配置
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        tertiary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        emotion: {
          despair: '#7f1d1d',
          anxiety: '#854d0e',
          pressure: '#1e3a8a',
          helpless: '#4c1d95',
          silence: '#1e40af',
          shame: '#b91c1c',
          stress: '#7e22ce',
          fear: '#c2410c',
          hopeless: '#1e40af',
          outraged: '#9f1239',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.8)',
          blue: 'rgba(14, 165, 233, 0.15)',
          red: 'rgba(239, 68, 68, 0.15)',
          purple: 'rgba(126, 34, 206, 0.15)',
          dark: 'rgba(15, 23, 42, 0.8)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
        title: ['Noto Sans TC', 'Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'pulse-custom': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        'float-slow': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-15px)',
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'rotate-slow': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'ping-slow': {
          '75%, 100%': {
            transform: 'scale(1.2)',
            opacity: '0',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'pulse-custom': 'pulse-custom 2s infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'rotate-slow': 'rotate-slow 12s linear infinite',
        'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        shimmer: 'shimmer 3s infinite linear',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        shimmer:
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-strong': '0 8px 32px rgba(0, 0, 0, 0.12)',
        neon: '0 0 5px rgba(14, 165, 233, 0.5), 0 0 20px rgba(14, 165, 233, 0.3)',
        'neon-red':
          '0 0 5px rgba(239, 68, 68, 0.5), 0 0 20px rgba(239, 68, 68, 0.3)',
        brutal: '5px 5px 0px #000000',
        'brutal-sm': '3px 3px 0px #000000',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
};

// DOM 載入後執行
document.addEventListener('DOMContentLoaded', function () {
  // 導航欄捲動效果
  const nav = document.querySelector('nav');
  const scrollIndicator = document.querySelector('.scroll-indicator');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('bg-white/95');
      nav.classList.add('shadow-md');
    } else {
      nav.classList.remove('bg-white/95');
      nav.classList.remove('shadow-md');
    }

    // 更新捲動進度條
    const scrollPercent =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;
    scrollIndicator.style.width = `${scrollPercent}%`;
  });

  // 手機選單控制
  const menuButton = document.getElementById('menu-button');
  const closeMenuButton = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuItems = document.querySelectorAll('.mobile-nav-link');

  if (menuButton && closeMenuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    closeMenuButton.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });

    mobileMenuItems.forEach((item) => {
      item.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  }

  // 分享按鈕功能
  const shareBtn = document.querySelector('.share-btn');
  const shareModal = document.getElementById('share-modal');
  const closeShareBtn = document.getElementById('share-close');
  const copyBtn = document.getElementById('copy-link');
  const copyToast = document.getElementById('copy-toast');

  if (shareBtn && shareModal && closeShareBtn) {
    shareBtn.addEventListener('click', function () {
      shareModal.classList.remove('hidden');
      shareModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });

    closeShareBtn.addEventListener('click', function () {
      shareModal.classList.add('hidden');
      shareModal.classList.remove('flex');
      document.body.style.overflow = '';
    });

    if (copyBtn && copyToast) {
      copyBtn.addEventListener('click', function () {
        const linkInput = this.previousElementSibling;
        linkInput.select();
        document.execCommand('copy');

        copyToast.classList.remove('invisible', 'opacity-0');
        copyToast.classList.add('opacity-100');

        setTimeout(function () {
          copyToast.classList.add('invisible', 'opacity-0');
          copyToast.classList.remove('opacity-100');
        }, 2000);
      });
    }
  }

  // 計數器動畫
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const duration = 2000; // 動畫持續時間（毫秒）
    const steps = 60; // 總步數
    const stepTime = duration / steps;

    let current = 0;
    const increment = target / steps;
    const isFloat = String(target).includes('.');
    const decimalPlaces = isFloat ? String(target).split('.')[1].length : 0;

    const timer = setInterval(function () {
      current += increment;

      if (current >= target) {
        clearInterval(timer);
        counter.textContent = target;
      } else {
        counter.textContent = isFloat
          ? current.toFixed(decimalPlaces)
          : Math.floor(current);
      }
    }, stepTime);
  });

  // 進度條動畫
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach((bar) => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });

  // 雷達圖
  const radarChartCanvas = document.getElementById('radar-chart');

  if (radarChartCanvas) {
    new Chart(radarChartCanvas, {
      type: 'radar',
      data: {
        labels: [
          '被欺壓感',
          '壓迫性敘述',
          '恐懼焦慮',
          '情緒爆點',
          '語氣強度',
          '無奈感',
          '羞辱感',
        ],
        datasets: [
          {
            label: '情緒指標平均分數',
            data: [9.5, 9.7, 9.4, 9.6, 9.3, 8.9, 8.8],
            backgroundColor: 'rgba(14, 165, 233, 0.2)',
            borderColor: 'rgba(14, 165, 233, 0.8)',
            pointBackgroundColor: 'rgba(14, 165, 233, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(14, 165, 233, 1)',
          },
        ],
      },
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
        scales: {
          r: {
            angleLines: {
              color: 'rgba(200, 200, 200, 0.3)',
            },
            grid: {
              color: 'rgba(200, 200, 200, 0.3)',
            },
            pointLabels: {
              font: {
                family: '\'Noto Sans TC\', sans-serif',
                size: 12,
              },
            },
            ticks: {
              backdropColor: 'transparent',
              color: 'rgba(100, 100, 100, 0.8)',
              z: 1,
            },
            suggestedMin: 0,
            suggestedMax: 10,
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                family: '\'Noto Sans TC\', sans-serif',
              },
            },
          },
        },
      },
    });
  }

  // 情緒雷達圖
  const emotionRadarChart = document.getElementById('emotion-radar-chart');

  if (emotionRadarChart) {
    const emotionRadarData = {
      labels: [
        '被欺壓感',
        '壓迫性敘述',
        '恐懼焦慮',
        '情緒爆點',
        '語氣強度',
        '無奈感',
        '羞辱感',
      ],
      datasets: [
        {
          label: '所有員工',
          data: [9.5, 9.7, 9.4, 9.6, 9.3, 8.9, 8.8],
          backgroundColor: 'rgba(139, 92, 246, 0.2)',
          borderColor: 'rgba(139, 92, 246, 0.8)',
          pointBackgroundColor: 'rgba(139, 92, 246, 1)',
          pointBorderColor: '#fff',
        },
        {
          label: '營業員',
          data: [9.8, 9.9, 9.6, 9.8, 9.5, 9.2, 9.1],
          backgroundColor: 'rgba(239, 68, 68, 0.2)',
          borderColor: 'rgba(239, 68, 68, 0.8)',
          pointBackgroundColor: 'rgba(239, 68, 68, 1)',
          pointBorderColor: '#fff',
          hidden: true,
        },
        {
          label: '理財專員',
          data: [9.6, 9.5, 9.2, 9.4, 9.1, 8.7, 8.6],
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgba(59, 130, 246, 0.8)',
          pointBackgroundColor: 'rgba(59, 130, 246, 1)',
          pointBorderColor: '#fff',
          hidden: true,
        },
        {
          label: '分析師',
          data: [9.3, 9.1, 8.9, 9.0, 8.5, 8.4, 8.3],
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          borderColor: 'rgba(16, 185, 129, 0.8)',
          pointBackgroundColor: 'rgba(16, 185, 129, 1)',
          pointBorderColor: '#fff',
          hidden: true,
        },
        {
          label: '主管層級',
          data: [7.5, 7.2, 6.8, 6.5, 6.3, 6.0, 5.8],
          backgroundColor: 'rgba(245, 158, 11, 0.2)',
          borderColor: 'rgba(245, 158, 11, 0.8)',
          pointBackgroundColor: 'rgba(245, 158, 11, 1)',
          pointBorderColor: '#fff',
          hidden: true,
        },
      ],
    };

    const emotionRadarOptions = {
      elements: {
        line: {
          borderWidth: 3,
        },
      },
      scales: {
        r: {
          angleLines: {
            color: 'rgba(200, 200, 200, 0.3)',
          },
          grid: {
            color: 'rgba(200, 200, 200, 0.3)',
          },
          pointLabels: {
            font: {
              family: '\'Noto Sans TC\', sans-serif',
              size: 12,
            },
          },
          ticks: {
            backdropColor: 'transparent',
            color: 'rgba(100, 100, 100, 0.8)',
            z: 1,
          },
          suggestedMin: 0,
          suggestedMax: 10,
        },
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              family: '\'Noto Sans TC\', sans-serif',
            },
            usePointStyle: true,
            pointStyle: 'circle',
          },
        },
      },
    };

    const emotionRadarChartInstance = new Chart(emotionRadarChart, {
      type: 'radar',
      data: emotionRadarData,
      options: emotionRadarOptions,
    });

    // 分群選擇按鈕
    const groupSelectBtns = document.querySelectorAll('.group-select-btn');

    groupSelectBtns.forEach((btn, index) => {
      btn.addEventListener('click', function () {
        // 移除所有按鈕的活躍狀態
        groupSelectBtns.forEach((b) => {
          b.classList.remove('active', 'bg-tertiary-100', 'text-tertiary-800');
          b.classList.add('bg-gray-100', 'text-gray-700');
        });

        // 設置當前按鈕的活躍狀態
        this.classList.add('active', 'bg-tertiary-100', 'text-tertiary-800');
        this.classList.remove('bg-gray-100', 'text-gray-700');

        // 隱藏所有數據集
        emotionRadarData.datasets.forEach((dataset) => {
          dataset.hidden = true;
        });

        // 顯示對應的數據集
        emotionRadarData.datasets[index].hidden = false;

        // 更新圖表
        emotionRadarChartInstance.update();
      });
    });
  }

  // 類別圓餅圖
  const categoriesChart = document.getElementById('categories-chart');

  if (categoriesChart) {
    new Chart(categoriesChart, {
      type: 'doughnut',
      data: {
        labels: ['責任額壓力', '職場霸凌', '自掏腰包', '客戶權益'],
        datasets: [
          {
            data: [38, 26, 22, 14],
            backgroundColor: [
              'rgba(239, 68, 68, 0.8)',
              'rgba(59, 130, 246, 0.8)',
              'rgba(245, 158, 11, 0.8)',
              'rgba(16, 185, 129, 0.8)',
            ],
            borderColor: [
              'rgba(239, 68, 68, 1)',
              'rgba(59, 130, 246, 1)',
              'rgba(245, 158, 11, 1)',
              'rgba(16, 185, 129, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                family: '\'Noto Sans TC\', sans-serif',
              },
              padding: 20,
            },
          },
        },
        cutout: '65%',
      },
    });
  }

  // 情緒標籤篩選功能
  const emotionFilterBtns = document.querySelectorAll('.emotion-filter-btn');
  const quoteCards = document.querySelectorAll('.quote-card');

  emotionFilterBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      // 移除所有按鈕的活躍狀態
      emotionFilterBtns.forEach((b) => {
        b.classList.remove('active', 'bg-primary-50', 'text-primary-700');
        b.classList.add('bg-white', 'text-neutral-700');
      });

      // 設置當前按鈕的活躍狀態
      this.classList.add('active', 'bg-primary-50', 'text-primary-700');
      this.classList.remove('bg-white', 'text-neutral-700');

      const filterText = this.textContent.trim();

      quoteCards.forEach((card) => {
        if (filterText === '全部') {
          card.style.display = 'block';
        } else {
          const categories = card.getAttribute('data-categories').split(',');
          if (categories.includes(filterText)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // GSAP 滾動觸發動畫
  if (typeof ScrollTrigger !== 'undefined') {
    // 隱藏的元素初始化
    gsap.utils.toArray('.hidden-initially').forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(elem, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          });
        },
      });
    });

    // 數據卡片動畫
    gsap.utils.toArray('.modern-card').forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.from(card, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power2.out',
          });
        },
      });
    });

    // 引言卡片動畫
    gsap.utils.toArray('.quote-card').forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: i * 0.15,
            ease: 'power2.out',
          });
        },
      });
    });

    // 報導大綱卡片動畫
    gsap.utils.toArray('[class*="border-l-4"]').forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.from(card, {
            x: -30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power2.out',
          });
        },
      });
    });
  }

  // 返回頂部按鈕
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove(
          'opacity-0',
          'invisible',
          'translate-y-10'
        );
      } else {
        backToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-10');
      }
    });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // 秘密內容觸發器
  const secretTrigger = document.getElementById('secret-trigger');
  const secretContent = document.getElementById('secret-content');
  const secretClose = document.getElementById('secret-close');
  const secretUnderstand = document.getElementById('secret-understand');

  if (secretTrigger && secretContent) {
    secretTrigger.addEventListener('dblclick', function () {
      secretContent.classList.remove('hidden');
      secretContent.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });

    if (secretClose) {
      secretClose.addEventListener('click', function () {
        secretContent.classList.add('hidden');
        secretContent.classList.remove('flex');
        document.body.style.overflow = '';
      });
    }

    if (secretUnderstand) {
      secretUnderstand.addEventListener('click', function () {
        secretContent.classList.add('hidden');
        secretContent.classList.remove('flex');
        document.body.style.overflow = '';
      });
    }
  }

  // 彩蛋對話框功能
  const easterEggDialog = document.getElementById('easter-egg-dialog');
  const easterEggClose = document.getElementById('easter-egg-close');
  const easterEggNext = document.getElementById('easter-egg-next');
  const easterEggPrev = document.getElementById('easter-egg-prev');
  const easterEggUnderstand = document.getElementById('easter-egg-understand');
  const easterEggLoading = document.getElementById('easter-egg-loading');
  const easterEggMessage = document.getElementById('easter-egg-message');

  // 彩蛋資料庫（真實心聲）
  const easterEggData = [];

  let currentEasterEggIndex = 0;

  // 更新彩蛋內容
  function updateEasterEggContent(index) {
    if (easterEggLoading && easterEggMessage) {
      easterEggLoading.style.display = 'flex';
      easterEggMessage.style.display = 'none';

      setTimeout(() => {
        const data = easterEggData[index];

        document.getElementById('quote-text').textContent = data.quote;
        document.getElementById('inner-thought-text').textContent =
          data.innerThought;
        document.getElementById('pressure-score').textContent =
          data.pressureScore;
        document.getElementById('anxiety-score').textContent =
          data.anxietyScore;
        document.getElementById('intensity-score').textContent =
          data.intensityScore;
        document.getElementById('nlp-score').textContent = data.nlpScore;

        easterEggLoading.style.display = 'none';
        easterEggMessage.style.display = 'block';
      }, 800);
    }
  }

  const moodTrigger = document.getElementById('mood-trigger');

  if (moodTrigger) {
    // 在頁面載入一段時間後顯示心情按鈕
    setTimeout(() => {
      moodTrigger.classList.remove('opacity-0', 'scale-0');
    }, 30000);

    moodTrigger.addEventListener('click', function () {
      if (easterEggDialog) {
        easterEggDialog.classList.remove('hidden');
        easterEggDialog.classList.add('flex');
        document.body.style.overflow = 'hidden';

        updateEasterEggContent(currentEasterEggIndex);
      }
    });
  }

  if (easterEggClose) {
    easterEggClose.addEventListener('click', function () {
      easterEggDialog.classList.add('hidden');
      easterEggDialog.classList.remove('flex');
      document.body.style.overflow = '';
    });
  }

  if (easterEggNext) {
    easterEggNext.addEventListener('click', function () {
      currentEasterEggIndex =
        (currentEasterEggIndex + 1) % easterEggData.length;
      updateEasterEggContent(currentEasterEggIndex);
    });
  }

  if (easterEggPrev) {
    easterEggPrev.addEventListener('click', function () {
      currentEasterEggIndex =
        (currentEasterEggIndex - 1 + easterEggData.length) %
        easterEggData.length;
      updateEasterEggContent(currentEasterEggIndex);
    });
  }

  if (easterEggUnderstand) {
    easterEggUnderstand.addEventListener('click', function () {
      easterEggDialog.classList.add('hidden');
      easterEggDialog.classList.remove('flex');
      document.body.style.overflow = '';
    });
  }
});

// 載入IPO數據
fetch('assets/ipo_data.json')
  .then((response) => response.json())
  .then((data) => {
    // 更新彩蛋數據
    window.easterEggData = data.quotes.slice(0, 5);

    // 更新雷達圖數據
    const emotionLabels = Object.keys(data.emotionAverages);
    const emotionValues = Object.values(data.emotionAverages);

    // 更新主雷達圖
    const radarChart = Chart.getChart('radar-chart');
    if (radarChart) {
      radarChart.data.labels = emotionLabels;
      radarChart.data.datasets[0].data = emotionValues;
      radarChart.update();
    }

    // 更新情緒雷達圖
    const emotionRadarChart = Chart.getChart('emotion-radar-chart');
    if (emotionRadarChart) {
      emotionRadarChart.data.labels = emotionLabels;

      // 更新各職位數據
      Object.keys(data.positionData).forEach((position, index) => {
        if (emotionRadarChart.data.datasets[index]) {
          emotionRadarChart.data.datasets[index].data =
            data.positionData[position];
        }
      });

      emotionRadarChart.update();
    }

    // 顯示CSV數據表格
    const csvDataContainer = document.getElementById('csv-data');
    if (csvDataContainer) {
      displayCSVTable(data.quotes, 'csv-data', 30);
    }

    console.log('IPO數據載入完成');
  })
  .catch((error) => console.error('載入IPO數據失敗:', error));

// 顯示CSV數據表格函數
function displayCSVTable(data, containerId, limit = 10) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  // 生成表格頭
  const headerKeys = [
    'quote',
    'innerThought',
    'nlpScore',
    'pressureScore',
    'anxietyScore',
    'intensityScore',
  ];

  const headerLabels = {
    quote: '潤飾後話術',
    innerThought: '潤飾後內心話語',
    nlpScore: 'NLP分數',
    pressureScore: '被欺壓感',
    anxietyScore: '恐懼焦慮',
    intensityScore: '語氣強度',
  };

  // 創建表格
  const tableContainer = document.createElement('div');
  tableContainer.className = 'csv-container';

  const table = document.createElement('table');
  table.className = 'csv-table';

  // 建立表頭
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  headerKeys.forEach((key) => {
    const th = document.createElement('th');
    th.textContent = headerLabels[key];
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // 建立表身
  const tbody = document.createElement('tbody');
  const dataToShow = data.slice(0, limit);

  dataToShow.forEach((item) => {
    const row = document.createElement('tr');

    headerKeys.forEach((key) => {
      const td = document.createElement('td');

      // 對長文本進行截斷
      if (key === 'quote' || key === 'innerThought') {
        if (item[key] && item[key].length > 100) {
          td.textContent = item[key].substring(0, 100) + '...';
          td.title = item[key]; // 滑鼠懸停時顯示完整文本
        } else {
          td.textContent = item[key] || '-';
        }
      } else {
        td.textContent = item[key] || '-';
      }

      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
  container.appendChild(tableContainer);
}
