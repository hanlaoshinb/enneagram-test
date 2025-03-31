// エニアグラムタイプの詳細情報
const typeDetails = {
    "type1": {
        name: "完璧主義者",
        description: "正しさ、秩序、完璧さを追求し、強い内部批判基準を持っています。",
        famousPeople: "マハトマ・ガンジー、マザー・テレサ、アインシュタイン",
        temperament: "原則的で誠実、組織的で責任感が強い",
        loveTrait: "忠実で道徳的、相手に高い基準を求めることがある",
        suitableJobs: "教師、編集者、会計士、品質管理者",
        catchphrase: "もっと良くできるはず"
    },
    "type2": {
        name: "助言者",
        description: "人助けを好み、関係を重視し、必要とされ、感謝されることを望みます。",
        famousPeople: "マザー・テレサ、ダライ・ラマ、オプラ・ウィンフリー",
        temperament: "思いやりがあり、温かく、人に尽くす",
        loveTrait: "献身的で愛情深い、時に相手に依存しすぎることも",
        suitableJobs: "カウンセラー、看護師、教師、ソーシャルワーカー",
        catchphrase: "あなたのためなら何でもします"
    },
    "type3": {
        name: "達成者",
        description: "成功と効率を追求し、適応力があり、イメージと達成に関心があります。",
        famousPeople: "トム・クルーズ、マドンナ、タイガー・ウッズ",
        temperament: "野心的で効率的、成功志向で自信に満ちている",
        loveTrait: "魅力的でカリスマ性がある、時に感情よりも達成を優先する",
        suitableJobs: "起業家、マーケター、経営者、セールスマン",
        catchphrase: "結果が全て"
    },
    "type4": {
        name: "個性派",
        description: "真実性とユニークさを重視し、感情豊かで、しばしば他と違うと感じます。",
        famousPeople: "ヴィンセント・ヴァン・ゴッホ、シルヴィア・プラス、ビョーク",
        temperament: "感受性が強く創造的、情熱的で独自性がある",
        loveTrait: "深い感情的なつながりを求め、理想の恋愛を追求する",
        suitableJobs: "アーティスト、ライター、デザイナー、音楽家",
        catchphrase: "誰も私を本当に理解していない"
    },
    "type5": {
        name: "思想家",
        description: "知識と理解を追求し、独立性を持ち、参加するよりも観察することを好みます。",
        famousPeople: "アルベルト・アインシュタイン、スティーブン・ホーキング、ビル・ゲイツ",
        temperament: "分析的で知的、独立心が強く、プライバシーを重視する",
        loveTrait: "感情的な距離を保ちつつも深い知的つながりを求める",
        suitableJobs: "研究者、エンジニア、プログラマー、哲学者",
        catchphrase: "知ることが力だ"
    },
    "type6": {
        name: "忠実者",
        description: "安全と準備を重視し、忠実で、危険に対して警戒心があります。",
        famousPeople: "トム・ハンクス、ジョージ・W・ブッシュ、ジェニファー・アニストン",
        temperament: "忠実で責任感があり、信頼性が高く慎重",
        loveTrait: "献身的でパートナーに忠実、時に不安や疑念を抱くことも",
        suitableJobs: "安全管理者、リスクアナリスト、弁護士、セキュリティ専門家",
        catchphrase: "最悪の事態に備えておく"
    },
    "type7": {
        name: "活動家",
        description: "楽しさと新しい経験を追求し、楽観的で、制限や否定的感情を嫌います。",
        famousPeople: "ロビン・ウィリアムズ、リチャード・ブランソン、スティーブン・スピルバーグ",
        temperament: "活発で冒険的、楽観的で多才",
        loveTrait: "楽しく刺激的なパートナー、時に深い関係を避けることも",
        suitableJobs: "起業家、旅行ガイド、イベントプランナー、マーケター",
        catchphrase: "人生は楽しむためにある"
    },
    "type8": {
        name: "挑戦者",
        description: "コントロールと力を求め、直接的で、自分と大切な人を守ります。",
        famousPeople: "ドナルド・トランプ、マーティン・ルーサー・キング、アーノルド・シュワルツェネッガー",
        temperament: "強く自信に満ち、決断力があり率直",
        loveTrait: "情熱的で保護的、時に支配的になることも",
        suitableJobs: "経営者、軍人、起業家、弁護士",
        catchphrase: "自分の人生は自分でコントロールする"
    },
    "type9": {
        name: "平和主義者",
        description: "内外の平和を追求し、穏やかで、環境に溶け込み、対立を調停する傾向があります。",
        famousPeople: "ダライ・ラマ、ミスター・ロジャース、ケアリー・グラント",
        temperament: "穏やかで受容的、調和を好み対立を避ける",
        loveTrait: "安定した穏やかなパートナー、時に自分の意見を抑えることも",
        suitableJobs: "カウンセラー、調停者、作家、マッサージセラピスト",
        catchphrase: "平和が一番大切"
    }
};

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
    // URLからタイプパラメータを取得
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    
    // デフォルトタイプ（パラメータがない場合）
    const defaultType = 'type1';
    const currentType = typeParam && typeDetails[typeParam] ? typeParam : defaultType;
    
    // 結果を表示
    displayTypeDetails(currentType);
    
    // タイプリンクにイベントリスナーを追加
    const typeLinks = document.querySelectorAll('.type-link');
    typeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.getAttribute('data-type');
            displayTypeDetails(type);
            
            // URLを更新（ブラウザ履歴には追加しない）
            window.history.replaceState({}, '', `?type=${type}`);
            
            // ページトップにスクロール
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // シェアボタンイベント
    const shareBtn = document.getElementById('share-results');
    shareBtn.addEventListener('click', function() {
        const typeInfo = typeDetails[currentType];
        const shareText = `私のエニアグラムタイプは「タイプ${currentType.replace('type', '')} - ${typeInfo.name}」でした！あなたも無料でテストしてみませんか？`;
        const shareUrl = window.location.origin + '/test.html';
        
        // シェア機能（実際の実装ではWeb Share APIを使用するなど）
        if (navigator.share) {
            navigator.share({
                title: 'エニアグラム性格テスト結果',
                text: shareText,
                url: shareUrl,
            })
            .catch((error) => console.log('Error sharing', error));
        } else {
            // コピーアクション
            const tempInput = document.createElement('textarea');
            tempInput.value = `${shareText} ${shareUrl}`;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('テキストがコピーされました。SNSでシェアできます。');
        }
    });
    
    // モバイルメニュートグル
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // モバイルメニューリンククリック時に閉じる
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});

// タイプ詳細を表示する関数
function displayTypeDetails(type) {
    const typeInfo = typeDetails[type];
    
    // タイトルを更新
    document.getElementById('type-title').textContent = `エニアグラムタイプ${type.replace('type', '')} - ${typeInfo.name}`;
    
    // プライマリータイプ情報を更新
    document.getElementById('primary-type-name').textContent = `タイプ${type.replace('type', '')} - ${typeInfo.name}`;
    document.getElementById('primary-type-description').textContent = typeInfo.description;
    document.getElementById('famous-people').textContent = typeInfo.famousPeople;
    document.getElementById('temperament').textContent = typeInfo.temperament;
    document.getElementById('love-trait').textContent = typeInfo.loveTrait;
    document.getElementById('suitable-jobs').textContent = typeInfo.suitableJobs;
    document.getElementById('catchphrase').textContent = `"${typeInfo.catchphrase}"`;
    
    // サブタイプを決定（ランダムな別のタイプ）
    let secondaryType = type;
    while (secondaryType === type) {
        const typeKeys = Object.keys(typeDetails);
        const randomIndex = Math.floor(Math.random() * typeKeys.length);
        secondaryType = typeKeys[randomIndex];
    }
    
    // サブタイプ情報を更新
    const secondaryTypeInfo = typeDetails[secondaryType];
    document.getElementById('secondary-type-name').textContent = `サブタイプ: タイプ${secondaryType.replace('type', '')} - ${secondaryTypeInfo.name}`;
    document.getElementById('secondary-type-description').textContent = secondaryTypeInfo.description;
    
    // タイプチャートを生成
    generateTypeChart(type);
}

// タイプチャートを生成する関数
function generateTypeChart(primaryType) {
    const chartContainer = document.getElementById('type-chart');
    chartContainer.innerHTML = '';
    
    // 各タイプのランダムなスコアを生成
    const scores = {};
    Object.keys(typeDetails).forEach(type => {
        if (type === primaryType) {
            scores[type] = Math.floor(Math.random() * 11) + 80; // 80-90%
        } else {
            scores[type] = Math.floor(Math.random() * 61) + 10; // 10-70%
        }
    });
    
    // スコアをHTML要素として表示
    Object.entries(typeDetails).forEach(([type, info]) => {
        const score = scores[type];
        const typeNumber = type.replace('type', '');
        
        const typeBar = document.createElement('div');
        typeBar.className = 'bg-white p-3 rounded-lg shadow-sm';
        typeBar.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="font-medium">タイプ${typeNumber} - ${info.name}</span>
                <span class="text-sm">${score}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-primary h-2 rounded-full" style="width: ${score}%"></div>
            </div>
        `;
        
        chartContainer.appendChild(typeBar);
    });
} 