// 各セクションごとに背景のグラデーションと文字色を変更する
document.addEventListener('DOMContentLoaded', () => {
  // 各セクションの要素を取得
  const sections = {
    about: document.getElementById('about'),
    flow: document.getElementById('flow'),
    price: document.getElementById('price'),
    links: document.getElementById('links')
  };
  
  // 背景を変更するための要素
  const bgGradient = document.querySelector('.bg-gradient');
  
  // 各セクションに対応するグラデーションと文字色
  const styles = {
    about: {
      gradient: 'linear-gradient(135deg, rgba(254, 245, 247, 0.9) 0%, rgba(249, 250, 251, 0.9) 100%)',
      color: '#e91e63', // ピンク
      colorRGB: '233, 30, 99',
      accentColor: '#ad1457' // 濃いピンク
    },
    flow: {
      gradient: 'linear-gradient(135deg, rgba(232, 245, 254, 0.9) 0%, rgba(249, 250, 251, 0.9) 100%)',
      color: '#2196f3', // 水色
      colorRGB: '33, 150, 243',
      accentColor: '#0d47a1' // 濃い水色
    },
    price: {
      gradient: 'linear-gradient(135deg, rgba(240, 249, 236, 0.9) 0%, rgba(249, 250, 251, 0.9) 100%)',
      color: '#4caf50', // 緑
      colorRGB: '76, 175, 80',
      accentColor: '#1b5e20' // 濃い緑
    },
    links: {
      gradient: 'linear-gradient(135deg, rgba(255, 244, 227, 0.9) 0%, rgba(249, 250, 251, 0.9) 100%)',
      color: '#ff9800', // オレンジ
      colorRGB: '255, 152, 0',
      accentColor: '#e65100' // 濃いオレンジ
    }
  };
  
  // 現在表示中のセクションID
  let currentSection = '';
    // スクロール位置を監視
  function checkScrollPosition() {    // モバイルデバイスかどうかを判定
    const isMobile = window.innerWidth <= 600;
    
    // モバイルの場合は画面上部よりに判定ポイントを設定
    const scrollOffset = isMobile ? window.innerHeight / 4 : window.innerHeight / 2;
    const scrollPosition = window.scrollY + scrollOffset;
    
    // 各セクションの位置をチェック
    for (const [sectionId, sectionElement] of Object.entries(sections)) {
      if (!sectionElement) continue;
      
      const rect = sectionElement.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      // スクロール位置がセクション内にある場合
      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        if (currentSection !== sectionId) {
          currentSection = sectionId;
          
          // 背景のグラデーションをスムーズに変更
          bgGradient.style.background = styles[sectionId].gradient;
            // 文字色を変更
          document.documentElement.style.setProperty('--theme-color', styles[sectionId].color);
          document.documentElement.style.setProperty('--theme-color-rgb', styles[sectionId].colorRGB);
          document.documentElement.style.setProperty('--theme-accent-color', styles[sectionId].accentColor);
          
          // 各セクションの色も変数としてセットする
          document.documentElement.style.setProperty(`--${sectionId}-color`, styles[sectionId].color);
          document.documentElement.style.setProperty(`--${sectionId}-color-rgb`, styles[sectionId].colorRGB);
          
          // 現在のセクションにアクティブクラスを追加
          Object.values(sections).forEach(section => {
            if (section) {
              section.classList.remove('active-section');
              section.style.transition = 'all 0.5s ease';
            }
          });
          sectionElement.classList.add('active-section');
          
          // フッターの色も変更
          const footer = document.querySelector('.footer');
          if (footer) {
            footer.style.borderColor = `rgba(${styles[sectionId].colorRGB}, 0.3)`;
          }
            // セクションタイトルの色を強調
          const sectionTitle = sectionElement.querySelector('h2');
          if (sectionTitle) {
            sectionTitle.style.color = styles[sectionId].color;
          }
          
          // Flowセクションの要素の色を変更
          if (sectionId === 'flow') {
            const flowNumbers = document.querySelectorAll('.flow-number');
            flowNumbers.forEach(number => {
              number.style.backgroundColor = styles[sectionId].color;
              number.style.boxShadow = `0 4px 12px rgba(${styles[sectionId].colorRGB}, 0.3)`;
            });
            
            const flowSteps = document.querySelectorAll('.flow-step h3');
            flowSteps.forEach(step => {
              step.style.color = styles[sectionId].color;
            });
          }
          
          // Priceセクションの要素の色を変更
          if (sectionId === 'price') {
            const priceHeaders = document.querySelectorAll('.price-header');
            priceHeaders.forEach(header => {
              header.style.backgroundColor = `rgba(${styles[sectionId].colorRGB}, 0.15)`;
              header.style.color = styles[sectionId].color;
            });
            
            const priceItems = document.querySelectorAll('.price-item span:first-child, .option-item span:first-child');
            priceItems.forEach(item => {
              item.style.color = styles[sectionId].color;
            });
            
            const optionHeader = document.querySelector('.option-card h3');
            if (optionHeader) {
              optionHeader.style.color = styles[sectionId].color;
            }
          }
        }
        break;
      }
    }
  }
  
  // スクロールイベントにリスナーを追加
  window.addEventListener('scroll', checkScrollPosition);
  
  // 初期表示時にもチェック
  checkScrollPosition();
});
